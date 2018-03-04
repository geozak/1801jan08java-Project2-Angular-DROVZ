import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Post } from '../models/post';
import { domain } from '../globals';
import { HttpEvent } from '@angular/common/http/src/response';
import { AjaxService } from './ajax.service';

@Injectable()
export class PostService {

  constructor(private http: HttpClient,private ajax: AjaxService) { }

  public getPosts(): Observable<Post[]> {
    console.log('getting posts');


    return this.http
    .get<Post[]>(domain + `/getPosts`,
    {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      withCredentials: true
    }
  )
  .map((post: Post[]) => {
    console.log(post);
    return post;
    });

    /*return [{
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
    ];*/

  }

  uploadPost(file: File, message: string): Observable<HttpEvent<{}>> {
    // let formdata: FormData = new FormData();
 
    // formdata.append('file', file);
    // formdata.append('message', message);
 
    // const req = new HttpRequest('POST', domain + '/addPost', formdata, {
    //   headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
    //   withCredentials: true,
    //   reportProgress: true
    // });
    // console.log("got here")
    // return this.http.request(req);

    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
    formdata.append('message', message);
    
    return this.http.request(new HttpRequest('POST', domain + '/addPost', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      withCredentials: true,
      reportProgress: true,
      responseType: 'text'
    }));
  }

  like(postID: number, likerID: number): Observable<string> {
    console.log('liking');

    const formdata: FormData = new FormData();
    formdata.append('postID', postID.toString());
    formdata.append('likerID', likerID.toString());

    return this.http.post<any>(domain + '/like', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
        withCredentials: true
    })
      .map(message => {
        console.log('mapping:');
        console.log(message);
        return message.message;
      });
  }

  unlike(postID: number, likerID: number): Observable<string> {
    console.log('unliking');

    const formdata: FormData = new FormData();
    formdata.append('postID', postID.toString());
    formdata.append('likerID', likerID.toString());

    return this.http.post<any>(domain + '/unlike', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
        withCredentials: true
    })
      .map(message => {
        console.log('mapping:');
        console.log(message);
        return message.message;
      });
  }

  get(id: number): Observable<string> {
    return;
  }

  getAllbyTrainer(id: number): Observable<Post[]> {
    let formdata: FormData = new FormData();
 
    formdata.append('id', `${id}`);
 
    return this.ajax.postForObject<Post[]>('/getAllPosts', formdata)
    // const req = new HttpRequest('POST', domain + '/addPost', formdata, {
    //   headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
    //   withCredentials: true
    // });
    // console.log("got here")
    
    // return this.http.request(req);
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
}
