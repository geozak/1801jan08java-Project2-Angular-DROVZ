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

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts = this.postService.getPosts();
  }

  createPost(post: string): void {
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
  }

  likePost(post: Post): void {
    const liker_id = JSON.parse(localStorage.getItem('currentTrainer')).id;

    if (post.likers_id.includes(liker_id)) {
      const index = post.likers_id.indexOf(liker_id);
      post.likers_id.splice(index, 1);
    } else {
      post.likers_id.push(liker_id);
    }
  }
}
