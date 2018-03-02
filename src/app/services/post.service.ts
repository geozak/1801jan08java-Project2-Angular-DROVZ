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
        post_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        trainer: null,
        post_timestamp: 'Tue Feb 20 2018 09:13:06 GMT-0500 (EST)',
        likers_id: []
      }, {
        post_id: 2,
        post_desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        trainer: null,
        post_timestamp: 'Wed Feb 21 2018 09:15:06 GMT-0500 (EST)',
        likers_id: []
      }, {
        post_id: 3,
        post_desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        trainer: null,
        post_timestamp: 'Thu Feb 22 2018 10:13:06 GMT-0500 (EST)',
        likers_id: []
      }, {
        post_id: 4,
        post_desc: 'Stuff happened today :(.',
        trainer: null,
        post_timestamp: 'Thu Feb 22 2018 10:13:06 GMT-0500 (EST)',
        likers_id: []
      }
    ];
  }

  newPost(post_desc: string, trainer_id: number): Observable<string> {
    return;
  }

  get(id: number): Observable<string> {
    return;
  }

  getAllbyTrainer(id: number): Observable<string> {
    return;
  }

  getAll(): Observable<string> {
    return;
  }

  getAllLikedByTrainer(id: number): Observable<string> {
    return;
  }

  addPhoto(id: number, filePath: string): Observable<string> {
    return;
  }

  like(postID: number, userID: number): Observable<string> {
    return;
  }

  unlike(postID: number, userID: number): Observable<string> {
    return;
  }
}
