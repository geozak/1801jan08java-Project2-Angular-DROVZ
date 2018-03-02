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
  public currTrainer: Trainer;
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
  for (i = 0; i < this.trainers.length; i++ ) {
     if ( this.trainers[i].firstName === input || String(this.trainers[i].id) === input ||
     this.trainers[i].lastName === input || this.trainers[i].email === input ) {
         this.currTrainer = this.trainers[i];
     }
  }
 }

 deselectTrainer(): void {
  this.currTrainer = null;
 }

  getAllTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(
      Newtrainer => this.trainers = Newtrainer
    );



  }
}
