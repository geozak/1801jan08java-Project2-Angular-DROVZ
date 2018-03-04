import { Component, OnInit } from '@angular/core';
import { ForgotService } from '../../services/forgot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  loading = false;
  message: string | null = null;

  constructor(
    private forgotService: ForgotService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    // this.email = localStorage.getItem('trainerEmail');
  }

  ngOnInit() {
  }

  changePassword(oldPassword, newPassword, confirmPassword) {
    this.loading = true;
    this.message = null;

    if (newPassword !== confirmPassword) {
      this.message = 'Passwords must match.';
    } else {
      const response = this.authService.changePassword(oldPassword, newPassword, confirmPassword);

      response.subscribe(
        data => {
          console.log(data);

          if (data === 'success') {
            this.router.navigate(['/home']);
          } else if (data === 'mismatch') {
            this.message = 'Passwords do not match';
          } else if (data === 'error') {
            this.message = 'Could not save password';
          } else if (data === 'invalid') {
            this.message = 'Incorrect old password.';
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
  }
}
