import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../models/hero';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'access-control-allow-origin' : '*'
  })
};


@Injectable()
export class HeroService {

  constructor(private http: Http, private http2: HttpClient) { }
  public heroes2: Hero[] = [];
  public getAllHeroes(): Observable<Hero[]> {
    /*console.log(this.http2.get(`http://localhost:9005/SpringSampleMVC/getAllHeroes.app`).map((response: Response) => {
      return <Hero[]>response.json();
  }) );
   /* console.log(this.http.get(`http://localhost:9005/SpringSampleMVC/getAllHeroes.app`).map((response: Response) => {
      return <Hero[]>response.json();
  }) );*/
    // return this.http2.get<Hero []>(`http://localhost:9005/SpringSampleMVC/getAllHeroes.app`);
    /*console.log(this.http
      .get(`http://localhost:9005/SpringSampleMVC/getAllHeroes.app`).map((response: Response) => {
        return <Hero[]>response.json();
    }));
    console.log(this.http.get('http://pokeapi.co/api/v2/berry/1'));*/
    return this.http
        .get(`http://localhost:9005/SpringSampleMVC/getAllHeroes.app`)
        .map((response: Response) => {
            return <Hero[]>response.json();
        })
        .catch(this.handleError);


}

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}
}
