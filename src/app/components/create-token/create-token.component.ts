import { Component, OnInit } from '@angular/core';
import { ForgotService } from '../../services/forgot.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.css']
})
export class CreateTokenComponent implements OnInit {
  email: string;
  message: string | null = null;

  constructor(
    private forgotService: ForgotService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  sendToken(): void {
    this.forgotService.sendToken(this.email).subscribe(
      data => {
        switch (data) {
          case 'success':
          this.router.navigate(['enter-token']);
            break;
          case 'email':
            this.message = 'Email Not Found';
        }
      },
      error => {
        console.log('subscribed error');
        console.log(error);
        // this.alertService.error(error);
      });
  }

}
