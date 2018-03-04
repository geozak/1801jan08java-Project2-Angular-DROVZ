import { Trainer } from './../../models/trainer';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../services/upload-file.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentTrainer: Trainer;
  isEdit: Boolean = false;
  isHovered: Boolean = false;
  loading = false;
  message: string | null = null;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  validEmail = true;

  constructor(private profileService: ProfileService, private uploadService: UploadFileService, private authService: AuthService) {
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
    this.loading = true;
    this.message = null;
    this.currentTrainer.firstName = firstName.trim();
    this.currentTrainer.lastName = lastName.trim();
    this.currentTrainer.url = url.trim();
    this.currentTrainer.email = email.trim();

    const response = this.authService.editUser(firstName, lastName, url, email);

      response.subscribe(
        data => {
          console.log(data);
          switch (data) {
            case 'success':
              this.message = 'Success.';
              return;
            case 'inputs':
              this.message = 'Invalid inputs.';
              break;
            case 'email':
              this.message = 'Email alreaduy in use.';
              break;
            case 'url':
            case 'other':
            default:
              this.message = 'Unable to create user.';
              break;
          }
          this.loading = false;
        },
        error => {
          console.log(error);
          this.message = 'Unknown error occured.';
          this.loading = false;
        }
      );
    }

  selectFile(event) {
    var fileName = (<HTMLInputElement>(document.getElementById("fileName"))).value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif") {
      this.selectedFiles = event.target.files;
      this.upload();
    } else {
        alert('Only jpg/jpeg and png files are allowed!');
    }
}

upload() {
  this.progress.percentage = 0;

  this.currentFileUpload = this.selectedFiles.item(0)
  this.uploadService.updateTrainerPhoto(this.currentFileUpload, this.currentTrainer.id).subscribe(event => {
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

  this.selectedFiles = undefined;
}

}
