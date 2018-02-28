import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileName: String;
  public heroes: Hero[] = [];
  public currHeroes: Hero;
  image = 'assets/images/Pokeball.jpg';

  constructor(private heroService: HeroService) { }


  ngOnInit() {
    this.getAllHeroes();
  }

 findUser(input: string): void {
  let i: number;
  for (i = 0; i < this.heroes.length; i++ ) {
     if ( this.heroes[i].name === input || String(this.heroes[i].id) === input ) {
         this.currHeroes = this.heroes[i];
         // console.log(this.currHeroes.name.length)
     }
  }
 }

 deselectHero(): void {
  this.currHeroes = null;
 }

  getAllHeroes(): void {
    this.heroService.getAllHeroes().subscribe(
      Newheroes => this.heroes = Newheroes
    );



  }
}
