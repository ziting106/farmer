import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      // getHeroes() 函式會擷取第 2 到 第 5 位英雄，也就是說只返回四個最上層英雄（第二，第三，第四和第五）。
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
