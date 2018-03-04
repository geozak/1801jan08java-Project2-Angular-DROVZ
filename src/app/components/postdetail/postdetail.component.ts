import { defaultProfilePicture } from './../../globals';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {

  @Input() post: Post;

  profilePicture: string;

  constructor() { }

  ngOnInit() {
    this.profilePicture = this.post.creator.profilePictureUrl || defaultProfilePicture;
  }

}
