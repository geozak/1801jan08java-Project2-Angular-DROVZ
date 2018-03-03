import { Trainer } from './../../models/trainer';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../services/upload-file.service'
import { ProfileService } from '../../services/profile.service';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentTrainer: Trainer;
  isEdit: Boolean = false;
  isHovered: Boolean = false;

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  validEmail = true;

  constructor(private profileService: ProfileService, private uploadService: UploadFileService, private trainerService: TrainerService) {
    this.currentTrainer = JSON.parse(localStorage.getItem('currentTrainer'));
  }

  ngOnInit() {
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  validateEmail(email): void {
    const regex = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;
    this.validEmail = regex.test(email);
  }

  editUser(firstName, lastName, url, email) {
    if (firstName.trim() !== '') {
      this.currentTrainer.firstName = firstName;

      // persist to db
      const response = this.profileService.updateFirstName(this.currentTrainer.id, firstName);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }

    if (lastName.trim() !== '') {
      this.currentTrainer.lastName = lastName;

      // persist to db
      const response = this.profileService.updateLastName(this.currentTrainer.id, lastName);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }

    if (url.trim() !== '') {
      this.currentTrainer.url = url;

      // persist to db
      const response = this.profileService.updateProfileURL(this.currentTrainer.id, url);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }

    if (email.trim() !== '') {
      this.currentTrainer.email = email;

      // persist to db
      const response = this.profileService.updateEmail(this.currentTrainer.id, email);

      // subscribe
      response.subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  selectFile(event) {
    var fileName = (<HTMLInputElement>(document.getElementById("fileName"))).value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    console.log('got here first')
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif"){
      this.selectedFiles = event.target.files;
      console.log('got here first')
      this.upload();
    }else{
        alert("Only jpg/jpeg and png files are allowed!");
    }
}
upload() {
  this.progress.percentage = 0;
  console.log("got here");
  this.currentFileUpload = this.selectedFiles.item(0)
  this.trainerService.updateTrainerPhoto(this.currentFileUpload).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      console.log(<string>event.body);
      this.currentTrainer.profilePictureUrl = <string>event.body;
      localStorage.setItem('currentTrainer', JSON.stringify(this.currentTrainer));
      console.log('File is completely uploaded!');
    }
  }
  , err => alert(err)
)

  this.selectedFiles = undefined
}

}
