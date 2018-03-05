import { Trainer } from './../../models/trainer';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-post',
  templateUrl: './like-post.component.html',
  styleUrls: ['./like-post.component.css']
})
export class LikePostComponent implements OnInit {
@Input() post: Post;

buttonText: string;

  constructor(private postService: PostService) {
    this.buttonText = 'Like';
   }

  ngOnInit() {
    const liker = JSON.parse(localStorage.getItem('currentTrainer'));
    this.post.likedBy.forEach(element => {
      if (element.id === liker.id) {
        this.buttonText = 'Unlike';
      }
    });
  }

  likePost(post: Post): void {
    const liker = JSON.parse(localStorage.getItem('currentTrainer'));
    let found = false;
    this.post.likedBy.forEach(element => {
      if (element.id === liker.id) {
        found = true;
      }
    });

    if (found) {
      // unlike
      post.likedBy.splice(post.likedBy.indexOf(liker), 1);

      // persist to db
      console.log('unlike post');
      const response = this.postService.unlike(post.id);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
          this.buttonText = 'Like';
        },
        error => {
          console.log(error);
        }
      );
    } else {
      // like
      post.likedBy.push(liker);

      // persist to db
      const response = this.postService.like(post.id);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
          this.buttonText = 'Unlike';
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
