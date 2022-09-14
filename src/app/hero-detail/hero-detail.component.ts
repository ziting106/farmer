import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
// ActivatedRoute 儲存著到這個 HeroDetailComponent 實例的路由資訊。這個元件對從 URL 中提取的路由引數感興趣。其中的 id 引數就是要顯示的英雄的 id。
import { ActivatedRoute } from '@angular/router';
// location 是一個 Angular 的服務，用來與瀏覽器打交道。 稍後，你就會使用它來導航回上一個檢視。
import { Location } from '@angular/common';
// HeroService 從遠端伺服器獲取英雄資料，本元件將使用它來獲取要顯示的英雄。
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  // 這行代表??
  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
// 😂🍉🍉🤣🤩❤️❤️😊🥥😍😒🍇🍇🥥
