import { Subject } from 'rxjs/Subject';
import { defaultProfilePicture } from './../../globals';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { PostService } from '../../services/post.service';
import { Photo } from '../../models/photo';
import { Message } from '../../models/message';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  @Input() post: Post;
  @Input() photoUpdator: Subject<string>;

  profilePicture: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.profilePicture = this.post.creator.profilePictureUrl || defaultProfilePicture;
  }

  selectFile(event) {
    const fileName = (<HTMLInputElement>(document.getElementById('fileName'))).value;
    const idxDot = fileName.lastIndexOf('.') + 1;
    const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === 'jpg' || extFile === 'jpeg' || extFile === 'png' || extFile === 'gif' ) {
      if (event.target.files.length > 0) {
        this.upload(event.target.files.item(0));
        console.log('here');
      }
      console.log('here');
    } else {
        alert('Only jpg/jpeg and png files are allowed!');
    }
}

  upload(file: File) {
    this.postService.addPhoto(this.post.id , file).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log(<string>event.body);
        // this.post.postPhotos.push(new Photo((<Message>event.body).text));
        this.photoUpdator.next((<Message>event.body).text);
        console.log('File is completely uploaded!');
      }
    }
    , err => {
      console.log(err);
    }
  );
  }

}
