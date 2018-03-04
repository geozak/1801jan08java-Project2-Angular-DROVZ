import { Component, OnInit } from '@angular/core';
import { ForgotService } from '../../services/forgot.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  email: string;
  newPassword: string;
  verifyPassword: string;
  message: string | null = null;

  constructor(
    private forgotService: ForgotService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.email = localStorage.getItem('trainerEmail');
  }

  ngOnInit() {
  }

}