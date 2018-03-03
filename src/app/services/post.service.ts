import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Post } from '../models/post';
import { domain } from '../globals';
import { HttpEvent } from '@angular/common/http/src/response';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Post[] {
    console.log('getting posts');

    // return this.http.get<any>(domain + '/getPosts', formdata,
    //   { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) })
    //   .map(data => {
    //     console.log('mapping:');
    //     console.log(data);
    //     return data;
    //   });
    return [];
  }

  uploadPost(file: File, message: string): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
    formdata.append('message', message);
 
    const req = new HttpRequest('POST', domain + '/addPost', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      withCredentials: true,
      reportProgress: true
    });
    console.log("got here")
    return this.http.request(req);
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

  getAllbyTrainer(id: number): Observable<Post> {
    let formdata: FormData = new FormData();
 
    formdata.append('id', `${id}`);
 
    const req = new HttpRequest('POST', domain + '/addPost', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      withCredentials: true
    });
    console.log("got here")
    return this.http.request(req);
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
