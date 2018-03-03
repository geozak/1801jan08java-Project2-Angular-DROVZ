import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  loading = false;
  message: string | null = null;

  selectedFiles: FileList
  currentFileUpload: File

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts = this.postService.getPosts();
  }

  createPost(post: string): void {
    this.loading = true;

    post = post.trim();
    if (post || this.selectedFiles) {

      // persist to db
      this.upload(post);
    }
  }

  upload(message: string) {

    this.currentFileUpload = this.selectedFiles? this.selectedFiles.item(0):null;
    this.postService.uploadPost(this.currentFileUpload, message).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
       // this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log(<string>event.body);
        console.log('File is completely uploaded!');
        this.posts = this.postService.getAllbyTrainer(localStorage.getItem('currentTrainer').id);
        this.loading = false;
      }else{
        this.loading=false;
      }
    }

      , err => {
        console.log(err)
        this.loading = false;
      }
    )
  }

    likePost(post: Post): void {
      const liker = JSON.parse(localStorage.getItem('currentTrainer'));

      if(post.likedBy.includes(liker)) {
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
    selectFile(event) {
      var fileName = (<HTMLInputElement>(document.getElementById("fileName"))).value;
      var idxDot = fileName.lastIndexOf(".") + 1;
      var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif"){
        this.selectedFiles = event.target.files;
      }else{
          alert("Only jpg/jpeg and png files are allowed!");
      }
  }
  }

  
