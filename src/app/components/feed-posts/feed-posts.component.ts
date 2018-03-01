import { Trainer } from './../../models/trainer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-posts',
  templateUrl: './feed-posts.component.html',
  styleUrls: ['./feed-posts.component.css']
})
export class FeedPostsComponent implements OnInit {

  trainers: Trainer[];

  constructor() { }

  ngOnInit() {
    // grab all the trainers to link them to their posts
  }

}
