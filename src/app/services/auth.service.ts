import { AjaxService } from './ajax.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Trainer } from '../models/trainer';
import { domain } from '../globals';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private ajax: AjaxService) { }

  login(email: string, password: string): Observable<Trainer | null> {
    console.log('logging in');

    const formdata: FormData = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    return this.ajax.postForObject<Trainer | null>('/login', formdata)
      .map(trainer => {
        console.log('mapping:');
        console.log(trainer);
        if (trainer) {
          console.log('saving trainer');
          localStorage.setItem('currentTrainer', JSON.stringify(trainer));
        }

        return trainer;
      });
  }

  // string will be one of { "success", "inputs", "url", "email", "other" }
  // all but "success" are failures
  register(firstName: string, lastName: string, email: string, password: string): Observable<string> {
    console.log('registering');

    const formdata: FormData = new FormData();
    formdata.append('firstName', firstName);
    formdata.append('lastName', lastName);
    formdata.append('email', email);
    formdata.append('password', password);
    // formdata.append('profilePhotoUrl', 'http://www.pgconnects.com'
    // + '/helsinki/wp-content/uploads/sites/3/2015/07/generic-profile-grey-380x380.jpg');

    return this.ajax.postForStatus('/register', formdata);
    // return this.http.post<any>(domain + '/register', formdata,
    //   {
    //     headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
    //   })
    //   .map(message => {
    //     console.log('mapping:');
    //     console.log(message);
    //     return message.message;
    //   });
  }

  logout(): void {
    // remove trainer from local storage to log trainer out
    localStorage.removeItem('currentTrainer');

    this.ajax.postForStatus('/logout', null);
  }
}
