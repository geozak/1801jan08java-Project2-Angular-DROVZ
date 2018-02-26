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

  constructor(private heroService: HeroService) { }

  search(input: string): void {
    console.log(input);
  }

  ngOnInit() {
  }

  getAllHeroes(input: string): void {
    this.heroService.getAllHeroes().subscribe(
      Newheroes => this.heroes = Newheroes
      // error => this.message.text = 'No Heroes to show.'
    );
     console.log(input);
     let i: number;
     for (i = 0; i < this.heroes.length; i++ ) {
        if ( this.heroes[i].name === input) {
            this.currHeroes = this.heroes[i];
            // console.log(this.currHeroes.name.length)
        }
     }
  }
}
