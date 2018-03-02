import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateFirstName(name: string): Observable<string> {
    return;
  }

  updateLastName(name: string): Observable<string> {
    return;
  }

  updateProfileURL(url: string): Observable<string> {
    return;
  }

  updateEmail(email: string): Observable<string> {
    return;
  }

  uploadProfilePhoto(filePath: string): Observable<string> {
    return;
  }

  getTrainer(): Observable<string> {
    return;
  }

  getTrainerByUrl(url: string): Observable<string> {
    return;
  }

  getAllTrainers(): Observable<string> {
    return;
  }
}
