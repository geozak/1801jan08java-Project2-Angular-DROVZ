import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Post[] {
    return [{
        post_id: 1,
        post_desc: 'my first post',
        trainer_id: 1,
        post_timestamp: 'Tue Feb 20 2018 09:13:06 GMT-0500 (EST)',
        likers_id: []
      }, {
        post_id: 2,
        post_desc: 'my second post',
        trainer_id: 1,
        post_timestamp: 'Wed Feb 21 2018 09:15:06 GMT-0500 (EST)',
        likers_id: []
      }, {
        post_id: 3,
        post_desc: 'my third post',
        trainer_id: 1,
        post_timestamp: 'Thu Feb 22 2018 10:13:06 GMT-0500 (EST)',
        likers_id: []
      }
    ];
  }

  addPost(post: string): Observable<Post> {
    return;
  }
}
