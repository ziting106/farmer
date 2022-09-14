import { Injectable } from '@angular/core';
//資料型別檔
import { Hero } from '../hero';
// 資料檔
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// @Injectable() 裝飾器會接受該服務的元資料物件，就像 @Component() 對元件類別的作用一樣。
//Angular CLI 命令 ng generate service 會透過給 @Injectable() 裝飾器新增 providedIn: 'root' 元資料的形式，用根注入器將你的服務註冊成為提供者。
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // getHero()非同步函式簽名。它用 RxJS 的 of() 函式返回一個 Observable 形式的模擬英雄資料。
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) {}

  //擁有同步資料的方法: 建立方法，Hero[]表示在這個資料型別，回傳HEROES資料檔
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // 擁有非同步資料的方法
  // getHeroes(): Observable<Hero[]> {
  //   // of(HEROES) 會返回一個 Observable<Hero[]>，它會發出單個值，這個值就是這些模擬英雄的陣列。
  //   const heroes = of(HEROES);
  //   return heroes;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    // 在獲取到英雄陣列時傳送一條訊息。
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
