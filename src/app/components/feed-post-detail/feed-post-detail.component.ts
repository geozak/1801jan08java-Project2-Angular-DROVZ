import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { defaultProfilePicture } from '../../globals';

@Component({
  selector: 'app-feed-post-detail',
  templateUrl: './feed-post-detail.component.html',
  styleUrls: ['./feed-post-detail.component.css']
})
export class FeedPostDetailComponent implements OnInit {
  @Input() post: Post;
  profilePicture: string;

  constructor() { }

  ngOnInit() {
    this.profilePicture = this.post.creator.profilePictureUrl || defaultProfilePicture;
  }

}
