import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    // private alertService: AlertService
  ) { }

  ngOnInit() {
    // reset login status
    this.auth.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(f: NgForm) {
    if (f.valid) {
      this.loading = true;

      this.auth.login(f.value.email, f.value.password)
        .subscribe(
          data => {
            console.log('subscribed data');
            console.log(data);
            console.log('returning to: ' + this.returnUrl);
            this.router.navigate([this.returnUrl]);
            this.loading = false;
          },
          error => {
            console.log('subscribed error');
            console.log(error);
            // this.alertService.error(error);
            this.loading = false;
          });
    }
  }
}
