import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Trainer } from '../models/trainer';
import { domain } from '../globals';
import { AjaxService } from './ajax.service';
import { HttpEventType } from '@angular/common/http/src/response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable()
export class TrainerService {

  constructor(private http: HttpClient, private http2: HttpClient, private ajax: AjaxService) { }
  public trainers: Trainer[] = [];
  public trainerUrl: String;

  public getAllTrainers(): Observable<Trainer[]> {
        return this.http
        .get(domain + `/getAllTrainers`,
        {
          withCredentials: true
        }
      )
        .map((response: Response) => {
            return response;
        })
        .catch(this.handleError);
}



getTrainer(url: string): Observable<Trainer> {


  console.log('Getting Trainer');

  const formdata: FormData = new FormData();
  formdata.append('url', url);

  return this.http2.post<Trainer>(domain + '/getTrainerByUrl', formdata,
    {
      withCredentials: true
    })
      .map(trainer => {
        return trainer;
      })
      .catch(this.handleError);
}

updateTrainerPhoto(file: File): Observable<HttpEvent<{}>> {
  
  // return this.ajax.postForStatus('/postPhoto', formdata,
  // {
  //   withCredentials: true
  // });

  let formdata: FormData = new FormData();
 
    formdata.append('file', file);
    return this.http.request(new HttpRequest('POST', domain + '/postPhoto', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      withCredentials: true,
      reportProgress: true,
      responseType: 'text'
    }));
}

private handleError(error: Response) {
  console.log('Error');
  console.log(error);
  return Observable.throw(error.statusText);
}
}
