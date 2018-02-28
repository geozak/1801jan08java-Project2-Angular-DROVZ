import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  @Input() hero: Hero;
  public heroes: Hero[] = [];
  public viewHeroe: Hero;
  constructor(private heroService: HeroService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.getAllHeroes();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Getting id ' + id);
    console.log('Getting length ' + this.heroes.length);
    let i: number;
    for (i = 0; i < this.heroes.length; i++ ) {
      console.log('Test' + i);
      if ( this.heroes[i].id === id ) {
        console.log('Test2' + i);
          this.viewHeroe = this.heroes[i];
      }
   }
  }

  getAllHeroes(): void {
    this.heroService.getAllHeroes().subscribe(
      Newheroes => this.heroes = Newheroes
    );
    this.getHero();
    console.log('View test');
    console.log(this.heroes);

  }

}
