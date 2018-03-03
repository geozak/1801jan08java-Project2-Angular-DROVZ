import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { domain } from '../globals';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AjaxService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  postForObject<T>(
    urlEndpoint: String,
    body: any,
    extraOptions?: {
      headers?: HttpHeaders;
      observe?: 'body';
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T | null> {

    return this.http.post<T | null>(
      domain + urlEndpoint,
      body,
      this.generateOptions(extraOptions))
      .pipe(
        catchError(this.handleError)
      );
  }

  getForObject<T>(
    urlEndpoint: string,
    extraOptions?: {
      headers?: HttpHeaders;
      observe?: string;
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: string;
      withCredentials?: boolean;
    }
  ): Observable<T | null> {

    return this.http.get<T | null>(
      domain + urlEndpoint,
      this.generateOptions(extraOptions)).pipe(
        catchError(this.handleError)
      );
  }

  postForStatus(
    urlEndpoint: string,
    body: any,
    extraOptions?: {
      headers?: HttpHeaders;
      observe?: string;
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: string;
      withCredentials?: boolean;
    }
  ): Observable<string> {

    return this.http.post<string>(
      domain + urlEndpoint,
      body,
      this.generateOptions(extraOptions))
      .pipe(
        catchError(this.handleError)
      )
      .map(message => {
        return message.message;
      });
  }

  private generateOptions(
    extraOptions?: {
      headers?: HttpHeaders;
      observe?: string;
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: string;
      withCredentials?: boolean;
    }) {

    const options = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' }),
      withCredentials: true
    };

    for (const key in extraOptions) {
      if (key !== 'headers') {
        options[key] = extraOptions[key];
      } else {
        const newHeaderNames = extraOptions[key].keys();
        for (const headerName in newHeaderNames) {
          if (true) {
            const headerValues = extraOptions[key].getAll(headerName);
            options[key] = options[key].append(headerName, headerValues);
          }
        }

      }
    }

    return options;
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
