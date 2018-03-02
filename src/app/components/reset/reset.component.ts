import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ForgotService } from '../../services/forgot.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})

export class ResetComponent implements OnInit {
  email: string;

  constructor(private forgotService: ForgotService) { }

  ngOnInit() {
  }

  forgotPassword(): void {
    // do stuff
  }

}
