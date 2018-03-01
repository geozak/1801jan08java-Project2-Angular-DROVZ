import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {
  currentTrainer: Trainer;
  returnUrl: string;

  constructor() {
   this.currentTrainer = JSON.parse(localStorage.getItem('currentTrainer'));
    /* this.currentTrainer = new Trainer();
    this.currentTrainer.id = 1;
    this.currentTrainer.firstName = 'firstname';
    this.currentTrainer.lastName = 'lastname';
    this.currentTrainer.email = 'user@gmail.com'; */
    /* this.currentTrainer.profilePictureUrl = 'http:'
    + '//www.pgconnects.com/helsinki/wp-content/uploads/sites/3/2015/07/generic-profile-grey-380x380.jpg'; */
    console.log(this.currentTrainer);
   }

  ngOnInit() {
  }

}
