import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loading = false;
  message: string | null = null;
  validEmail = true;

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  registerUser(firstName, lastName, email, password) {
    this.loading = true;
    this.message = null;

    const response = this.auth.register(firstName, lastName, email, password);

    response.subscribe(
      data => {
        console.log(data);
        switch (data) {
          case 'success':
            this.router.navigate(['/login']);
            return;
          case 'inputs':
            this.message = 'Invalid inputs.';
            break;
          case 'email':
            this.message = 'Email alreaduy in use.';
            break;
          case 'url':
          case 'other':
          default:
            this.message = 'Unable to create user.';
            break;
        }
        this.loading = false;
      },
      error => {
        console.log(error);
        this.message = 'Unknown error occured.';
        this.loading = false;
      }
    );
  }

  validateEmail(email): void {
    const regex = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;
    this.validEmail = regex.test(email);
  }

  uploadPhoto(): void {
    console.log('hit upload button');
    return;
  }

}
