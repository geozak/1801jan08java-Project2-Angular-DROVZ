import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  loading = false;
  message: string | null = null;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      allPosts => {
        this.posts = allPosts;
        console.log(this.posts);
      }
    );
  }

  createPost(post: string): void {
    this.loading = true;

    post = post.trim();
    if (!post) { return; }

    const postObj: Post = {
      post_id: this.posts.length + 1,
      post_desc: post,
      trainer: JSON.parse(localStorage.getItem('currentTrainer')),
      post_timestamp: new Date().toString(),
      likers_id: []
    };

    this.posts.push(postObj);

    // persist to db
    const response = this.postService.newPost(postObj.trainer.id, postObj.post_desc);

    // subscribe
    response.subscribe(
      data => {
        console.log(data);
        if (data === 'error') {
          this.message = 'There was an error saving the post.';
        }

        this.loading = false;
      },
      error => {
        console.log(error);
        this.message = 'Unknown error occured.';
        this.loading = false;
      });
  }

  likePost(post: Post): void {
    const liker_id = JSON.parse(localStorage.getItem('currentTrainer')).id;

    if (post.likers_id.includes(liker_id)) {
      // unlike
      const index = post.likers_id.indexOf(liker_id);
      post.likers_id.splice(index, 1);

      // persist to db
      const response = this.postService.unlike(post.post_id, liker_id);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      // like
      post.likers_id.push(liker_id);

      // persist to db
      const response = this.postService.like(post.post_id, liker_id);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
