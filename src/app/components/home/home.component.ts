import { Trainer } from './../../models/trainer';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../services/upload-file.service';


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

  constructor(private uploadService: UploadFileService) {
    this.currentTrainer = JSON.parse(localStorage.getItem('currentTrainer'));
    console.log(this.currentTrainer);
  }

  ngOnInit() {
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  editUser(firstName, lastName, username, email) {
    if (firstName.trim() !== '') {
      this.currentTrainer.firstName = firstName;
    }

    if (lastName.trim() !== '') {
      this.currentTrainer.lastName = lastName;
    }

    if (email.trim() !== '') {
      this.currentTrainer.email = email;
    }
  }

  selectFile(event) {
    var fileName = (<HTMLInputElement>(document.getElementById("fileName"))).value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif"){
      this.selectedFiles = event.target.files;
      this.upload();
    }else{
        alert("Only jpg/jpeg and png files are allowed!");
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

  this.selectedFiles = undefined
}

}
