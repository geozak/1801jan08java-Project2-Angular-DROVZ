import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Trainer } from '../models/trainer';

@Injectable()
export class AuthService {

  // constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    console.log('logging in');

    let demo: Trainer | null;
    if (email === 'user@gmail.com' && password === '1234') {
      demo = {
        id: 1,
        email: email,
        username: 'myUsername',
        firstName: 'myFirst',
        lastName: 'myLast',
        profilePhoto: 'someurl'
      };
    } else {
      demo = null;
    }
    return of<any>(demo)
      .map(trainer => {
        console.log('mapping');
        console.log(trainer);
        // login successful if there's a jwt token in the response
        if (trainer) {// && trainer.token) {
          console.log('saving trainer');
          // store trainer details and jwt token in local storage to keep trainer logged in between page refreshes
          localStorage.setItem('currentTrainer', JSON.stringify(trainer));
        }

        return trainer;
      });

    // return this.http.post<any>('/api/authenticate', { email: email, password: password })
    //   .map(trainer => {
    //     // login successful if there's a jwt token in the response
    //     if (trainer) {// && trainer.token) {
    //       // store trainer details and jwt token in local storage to keep trainer logged in between page refreshes
    //       localStorage.setItem('currentTrainer', JSON.stringify(trainer));
    //     }

    //     return trainer;
    //   });
  }

  logout(): void {
    // remove trainer from local storage to log trainer out
    localStorage.removeItem('currentTrainer');
  }
}
