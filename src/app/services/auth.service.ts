import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Trainer } from '../models/trainer';
import { domain } from '../globals';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Trainer | null > {
    console.log('logging in');

    const formdata: FormData = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    return this.http.post<Trainer | null>(domain + '/login', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})})
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

    return this.http.post<string>(domain + '/register', formdata, { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) });
  }

  logout(): void {
    // remove trainer from local storage to log trainer out
    localStorage.removeItem('currentTrainer');
  }
}
