import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Trainer } from './../../models/trainer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-posts',
  templateUrl: './feed-posts.component.html',
  styleUrls: ['./feed-posts.component.css']
})
export class FeedPostsComponent implements OnInit {

  trainers: Trainer[] = [];
  posts: Post[] = [];

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
    // this.postService.getAllbyTrainer(JSON.parse(localStorage.getItem('currentTrainer')).id).subscribe(r=>this.posts = r);

  }

  likePost(post: Post): void {
    const liker = JSON.parse(localStorage.getItem('currentTrainer'));

    if (post.likedBy.includes(liker)) {
      // unlike
      post.likedBy.splice(post.likedBy.indexOf(liker), 1);

      // persist to db
      const response = this.postService.unlike(post.id, liker.id);

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
      post.likedBy.push(liker);

      // persist to db
      const response = this.postService.like(post.id, liker.id);

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
