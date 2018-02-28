import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Trainer } from '../models/trainer';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    console.log('logging in');

    const formdata: FormData = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    return this.http.post<Trainer | null>('http://localhost:8090/login', formdata,
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

  logout(): void {
    // remove trainer from local storage to log trainer out
    localStorage.removeItem('currentTrainer');
  }
}
