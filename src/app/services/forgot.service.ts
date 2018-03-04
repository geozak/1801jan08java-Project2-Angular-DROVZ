import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { domain } from '../globals';

@Injectable()
export class ForgotService {

  constructor(private httpClient: HttpClient) { }

  sendToken(email: string): Observable<string> {
    const formdata: FormData = new FormData;
    formdata.append('email', email);

    return this.httpClient.post<any>(domain + '/reset', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) })
      .map(message => {
        return message.message;
      });
  }

  updatePassword(email: string, token: string, newPassword: string, confirmPassword: string): Observable<string> {
    const formdata: FormData = new FormData;
    formdata.append('email', email);
    formdata.append('newPassword', newPassword);
    formdata.append('confirmPassword', confirmPassword);
    formdata.append('token', token);

    return this.httpClient.post<any>(domain + '/enter-password', formdata,
      { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }) })
      .map(message => {
        return message.message;
      });
  }
}
