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

  getFiles(): Observable<Object> {
    return this.http.get('/getallfiles');
  }
}
