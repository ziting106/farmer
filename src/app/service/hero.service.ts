import { Injectable } from '@angular/core';
//資料型別檔
import { Hero } from '../hero';
// 資料檔
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// @Injectable() 裝飾器會接受該服務的元資料物件，就像 @Component() 對元件類別的作用一樣。
//Angular CLI 命令 ng generate service 會透過給 @Injectable() 裝飾器新增 providedIn: 'root' 元資料的形式，用根注入器將你的服務註冊成為提供者。
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //   return HEROES;
  // }
  // 擁有非同步資料的方法
  // getHeroes(): Observable<Hero[]> {
  //   // of(HEROES) 會返回一個 Observable<Hero[]>，它會發出單個值，這個值就是這些模擬英雄的陣列。
  //   const heroes = of(HEROES);
  //   return heroes;
  // }
  /** Log a HeroService message with the MessageService */

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    // HttpClient.put() 方法接受三個引數：URL 地址、要修改的資料（這裡就是修改後的英雄）、選項
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  // getHero()非同步函式簽名。它用 RxJS 的 of() 函式返回一個 Observable 形式的模擬英雄資料。
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = 'api/heroes'; // URL to web api

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   // 在獲取到英雄陣列時傳送一條訊息。
  //   // this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }

  // 轉換成使用 HttpClient
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  handleError<T>(
    arg0: string,
    arg1: never[]
  ): (
    err: any,
    caught: Observable<Hero[]>
  ) => import('rxjs').ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  // 補充addHero方法
  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
}
