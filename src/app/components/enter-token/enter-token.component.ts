import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ForgotService } from '../../services/forgot.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enter-token',
  templateUrl: './enter-token.component.html',
  styleUrls: ['./enter-token.component.css']
})
export class EnterTokenComponent implements OnInit {
  token: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
  message: string | null = null;

  constructor(
    private forgotService: ForgotService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  updatePassword(): void {
    this.forgotService.updatePassword(this.email, this.token, this.newPassword, this.confirmPassword).subscribe(
      data => {
        switch (data) {
          case 'success':
            this.router.navigate(['login']);
            break;
            case 'email':
            this.message = 'Email Not Found';
            break;
            case 'token':
            this.message = 'Token Not Found';
            break;
            case 'id':
            this.message = 'Email/Token Mismatch';
            break;
            case 'match':
            this.message = 'Passwords Must Match';
            break;
        }
      },
      error => {
        console.log('subscribed error');
        console.log(error);
        // this.alertService.error(error);
      });
  }

}
