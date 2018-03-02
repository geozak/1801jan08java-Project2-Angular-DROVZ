import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
@Injectable()
export class UploadFileService {
 
  constructor(private http: HttpClient) {}
 
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', 'http://localhost:8090/postPhoto.app', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
  updateTrainerPhoto(file: File, trainerId: number): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
    formdata.append('trainerId', `${trainerId}`);
 
    const req = new HttpRequest('POST', 'http://localhost:8090/postPhoto.app', formdata, {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*'}),
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
  getFiles(): Observable<Object> {
    return this.http.get('/getallfiles')
  }
}