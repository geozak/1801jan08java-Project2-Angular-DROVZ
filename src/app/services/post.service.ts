import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Post } from '../models/post';
import { domain } from '../globals';
import { HttpEvent } from '@angular/common/http/src/response';
import { AjaxService } from './ajax.service';

@Injectable()
export class PostService {

  constructor(private http: HttpClient, private ajax: AjaxService) { }

  public getPosts(): Observable<Post[]> {
    console.log('getting posts');

    return this.ajax.getForObject<Post[]>('/getPosts');
  //   return this.http
  //   .get<Post[]>(domain + `/getPosts`,
  //   {
  //     headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
  //     withCredentials: true
  //   }
  // )
  // .map((post: Post[]) => {
  //   console.log(post);
  //   return post;
  //   });

  }

  public getAllPosts(): Observable<Post[]> {
    console.log('getting posts');

    return this.ajax.getForObject<Post[]>('/getAllPosts');

  }

  public getPostsByUrl(url: string): Observable<Post[]> {
    console.log('getting posts');

    const formdata: FormData = new FormData();
    formdata.append('url', url);

    return this.ajax.postForObject<Post[]>('/getPostByUrl', formdata);
    // return this.http
    // .post<Post[]>(domain + `/getPostsByUrl`,  formdata,
    // {
    //   headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
    //   withCredentials: true
    // }
  // )
  // .map((post: Post[]) => {
  //   console.log(post);
  //   return post;
  //   });

  }

  // newPost(trainer_id: number, post_desc: string): Observable<string> {
  newPost(post_desc: string): Observable<string> {
    console.log('creating new post');

    const formdata: FormData = new FormData();
    // formdata.append('author', trainer_id.toString());
    formdata.append('post', post_desc);

    return this.ajax.postForStatus('/createPost', formdata);
    // return this.http.post<any>(domain + '/createPost', formdata,
    //   { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) })
    //   .map(message => {
    //     console.log('mapping:');
    //     console.log(message);
    //     return message.message;
    //   });
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

  like(postID: number): Observable<string> {
    console.log('liking');

    const formdata: FormData = new FormData();
    formdata.append('postID', postID.toString());

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

  unlike(postID: number): Observable<string> {
    console.log('unliking');

    const formdata: FormData = new FormData();
    formdata.append('postID', postID.toString());

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
 
    return this.ajax.postForObject<Post[]>('/getAllPostsByTrainerId', formdata);
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

  addPhoto(id: number, file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    
    formdata.append('file', file);
    formdata.append('id', `${id}`);
    return this.http.request(new HttpRequest('POST', domain + '/updatePost', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      withCredentials: true,
      reportProgress: true,
      responseType: 'text'
    }));
  }
}
