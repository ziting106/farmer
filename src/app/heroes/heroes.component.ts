import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes', //元件的 CSS 元素選擇器
  templateUrl: './heroes.component.html', //元件範本檔案的位置。
  styleUrls: ['./heroes.component.scss'], //元件私有 CSS 樣式表文件的位置
})
export class HeroesComponent implements OnInit {
  selectedHero: any;
  onSelect(_t8: Hero) {
    throw new Error('Method not implemented.');
  }
  //  簡單宣告
  heroes: Hero[] = [];
  // 聲明一個私有 heroService 屬性，同時標記為一個 HeroService 的注入點
  constructor(private heroService: HeroService) {}

  // 這行代表??
  // selectedHero?: Hero;

  // 建立一個方法，以從服務中獲取這些英雄資料。
  // HeroService.getHeroes() 的函式簽名是同步的，假設是 HeroService 總是能同步獲取英雄列表資料。因此在採用線上API的時候無法使用這個方法(改用方法二)。
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // 方法二
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  //ngOnInit() 是一個生命週期鉤子
  // 在 ngOnInit 生命週期鉤子中呼叫 getHeroes()，之後 Angular 會在構造出 HeroesComponent 的實例之後的某個合適的時機呼叫 ngOnInit()。
  ngOnInit(): void {
    this.getHeroes();
  }
  // 新增英雄按鈕觸發的方法
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
}
