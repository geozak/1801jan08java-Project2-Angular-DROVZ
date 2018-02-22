import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileName: String;
  constructor() { }

  search(input: string): void {
    console.log(input);
  }

  ngOnInit() {
  }

}
