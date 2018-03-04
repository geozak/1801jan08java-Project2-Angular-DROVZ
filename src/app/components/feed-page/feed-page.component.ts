import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer';
import { defaultProfilePicture } from '../../globals';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {
  currentTrainer: Trainer;
  returnUrl: string;
  profilePicture: string;

  constructor() {
   this.currentTrainer = JSON.parse(localStorage.getItem('currentTrainer'));
    console.log(this.currentTrainer);
   }

  ngOnInit() {
    this.profilePicture = this.currentTrainer.profilePictureUrl || defaultProfilePicture;
  }

}
