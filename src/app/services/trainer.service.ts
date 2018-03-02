import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from '../models/trainer';
import { domain } from '../globals';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable()
export class TrainerService {

  constructor(private http: Http, private http2: HttpClient) { }
  public trainers: Trainer[] = [];
  public trainerUrl: String;

  public getAllTrainers(): Observable<Trainer[]> {
        return this.http
        .get(`http://localhost:8090/getAllTrainers.app`)
        .map((response: Response) => {
            return <Trainer[]>response.json();
        })
        .catch(this.handleError);
}



getTrainer(url: string): Observable<Trainer> {


  console.log('Getting Trainer');

  const formdata: FormData = new FormData();
  formdata.append('url', url);

  return this.http2.post<Trainer>(domain + '/getTrainerByUrl', formdata)
      .map(trainer => {
        console.log('mapping:');
        console.log(trainer);
        return trainer;
      });
}

private handleError(error: Response) {
  console.log('Error');
  return Observable.throw(error.statusText);
}
}
