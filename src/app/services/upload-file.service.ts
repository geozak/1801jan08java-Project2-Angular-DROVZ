import { AjaxService } from './ajax.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { domain } from '../globals';

@Injectable()
export class UploadFileService {

  constructor(
    private http: HttpClient,
    private ajax: AjaxService) {}

  pushFileToStorage(file: File): Observable<string> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    return this.ajax.postForStatus('/postPhoto.app', formdata,
    {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true
    });
 
    return this.http.request(req);
  }
  updateTrainerPhoto(file: File, trainerId: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', domain + '/postPhoto', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      withCredentials: true,
      reportProgress: true,
      responseType: 'text'
    });

    // const req = new HttpRequest('POST', domain + '/postPhoto.app', formdata, {
    //   headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
    //   reportProgress: true,
    //   responseType: 'text',
    //   withCredentials: true
    // });

    // return this.http.request(req);
  }

  getFiles(): Observable<Object> {
    return this.http.get('/getallfiles');
  }
}
