import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { domain } from '../globals';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateFirstName(trainerID: number, firstName: string): Observable<string> {
    console.log('updating first name');

    const formdata: FormData = new FormData();
    formdata.append('trainerID', trainerID.toString());
    formdata.append('firstName', firstName.toString());

    return this.http.post<any>(domain + '/updateFirstName', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
        withCredentials: true
      })
      .map(message => {
        console.log('mapping:');
        console.log(message);
        return message.message;
      });
  }

  updateLastName(trainerID: number, lastName: string): Observable<string> {
    console.log('updating last name');

    const formdata: FormData = new FormData();
    formdata.append('trainerID', trainerID.toString());
    formdata.append('lastName', lastName.toString());

    return this.http.post<any>(domain + '/updateLastName', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
        withCredentials: true
    })
      .map(message => {
        console.log('mapping:');
        console.log(message);
        return message.message;
      });
  }

  updateProfileURL(trainerID: number, url: string): Observable<string> {
    console.log('updating url');

    const formdata: FormData = new FormData();
    formdata.append('trainerID', trainerID.toString());
    formdata.append('url', url.toString());

    return this.http.post<any>(domain + '/updateUrl', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
        withCredentials: true
    })
      .map(message => {
        console.log('mapping:');
        console.log(message);
        return message.message;
      });
  }

  updateEmail(trainerID: number, email: string): Observable<string> {
    console.log('updating email');

    const formdata: FormData = new FormData();
    formdata.append('trainerID', trainerID.toString());
    formdata.append('email', email.toString());

    return this.http.post<any>(domain + '/updateEmail', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
        withCredentials: true
    })
      .map(message => {
        console.log('mapping:');
        console.log(message);
        return message.message;
      });
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
