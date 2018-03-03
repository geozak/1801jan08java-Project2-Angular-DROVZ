import { Component, OnInit, Input } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';
import { ActivatedRoute } from '@angular/router';
import { Trainer } from '../../models/trainer';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  @Input() trainer: Trainer;
  public trainers: Trainer[] = [];
  public viewTrainer: Trainer;
  image = 'assets/images/profile.jpg';
  constructor(private trainerService: TrainerService, private route: ActivatedRoute ) {
  
  }

  ngOnInit() {
    this.getTrainer();
  }

  getTrainer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Getting id ' + id);
    this.trainerService.getTrainer(id).subscribe(
      (NewViewTrainer) => {this.viewTrainer = NewViewTrainer;
      }
    );
  }

}
