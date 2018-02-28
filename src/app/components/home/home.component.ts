import { Trainer } from './../../models/trainer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentTrainer: Trainer;
  isEdit: Boolean = false;

  constructor() {
    this.currentTrainer = JSON.parse(localStorage.getItem('currentTrainer'));
  }

  ngOnInit() {
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  editUser(firstName, lastName, username, email) {
    if (firstName.trim() !== '') {
      this.currentTrainer.firstName = firstName;
    }
    if (lastName.trim() !== '') {
      this.currentTrainer.lastName = lastName;
    }
    if (username.trim() !== '') {
      this.currentTrainer.url = username;
    }
    if (email.trim() !== '') {
      this.currentTrainer.email = email;
    }
  }

}
