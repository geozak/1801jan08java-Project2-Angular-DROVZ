import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../models/hero';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from '../models/trainer';

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
    /*console.log('Test');
    console.log(this.http
        .get(`http://localhost:8090/findAll.app`));
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
    console.log(this.http.get('http://pokeapi.co/api/v2/berry/1'));
        return this.http
        .get(`http://localhost:8090/getTrainers.app`)
        .map((response: Response) => {
          console.log('Trying3');
          console.log(<Trainer[]>response.json());
            return <Trainer[]>response.json();
        })
        .catch(this.handleError);*/
    return this.http
        .get(`http://localhost:9005/SpringSampleMVC/getAllHeroes.app`)
        .map((response: Response) => {
          console.log('Trying3');
          console.log(<Hero[]>response.json());
            return <Hero[]>response.json();
        })
        .catch(this.handleError);


}



/*getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}*/

private handleError(error: Response) {
  console.log('Error');
  return Observable.throw(error.statusText);
}
}
