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
        this.message = 'Unknown error occured.';
        this.loading = false;
      }
    );
  }

}
