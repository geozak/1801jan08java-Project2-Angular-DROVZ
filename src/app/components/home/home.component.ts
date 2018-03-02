import { Trainer } from './../../models/trainer';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentTrainer: Trainer;
  isEdit: Boolean = false;
  validEmail = true;

  constructor(private profileService: ProfileService) {
    this.currentTrainer = JSON.parse(localStorage.getItem('currentTrainer'));
    console.log(this.currentTrainer);
  }

  ngOnInit() {
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  validateEmail(email): void {
    const regex = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;
    this.validEmail = regex.test(email);
  }

  editUser(firstName, lastName, url, email) {
    if (firstName.trim() !== '') {
      this.currentTrainer.firstName = firstName;

      // persist to db
      const response = this.profileService.updateFirstName(this.currentTrainer.id, firstName);

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

    if (lastName.trim() !== '') {
      this.currentTrainer.lastName = lastName;

      // persist to db
      const response = this.profileService.updateLastName(this.currentTrainer.id, lastName);

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

    if (url.trim() !== '') {
      this.currentTrainer.url = url;

      // persist to db
      const response = this.profileService.updateProfileURL(this.currentTrainer.id, url);

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

    if (email.trim() !== '') {
      this.currentTrainer.email = email;

      // persist to db
      const response = this.profileService.updateEmail(this.currentTrainer.id, email);

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

}
