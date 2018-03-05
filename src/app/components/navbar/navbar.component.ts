import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../models/trainer';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileName: String;
  public trainers: Trainer[] = [];
  matchingTrainers: Trainer[] = [];
  public mainTrainer: Trainer;
  image = 'assets/images/Pokeball.jpg';

  constructor(private trainerService: TrainerService) {
    this.mainTrainer = JSON.parse(localStorage.getItem('currentTrainer'));
   }


  ngOnInit() {
    this.getAllTrainers();
  }

 findUser(input: string): void {

  let i: number;
  this.matchingTrainers = [];
  for (i = 0; i < this.trainers.length + 1; i++ ) {
    console.log(this.trainers[i].email + ' ' + input);
     if ( this.trainers[i].firstName.toLowerCase() === input.toLowerCase() || String(this.trainers[i].id) === input ||
     this.trainers[i].lastName.toLowerCase() === input.toLowerCase()) {
       if ( input !== '') {
         this.matchingTrainers.push(this.trainers[i]);
       }
     }
  }
 }

 deselectTrainer(): void {
   this.matchingTrainers = [];
 }

  getAllTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(
      Newtrainer => this.trainers = Newtrainer
    );



  }
}
