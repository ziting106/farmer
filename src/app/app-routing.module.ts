import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'pageTwo', component: PageTwoComponent },
  { path: 'pageOne', component: PageOneComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '', component: PageOneComponent },
  { path: '**', component: PageOneComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // 將 RouterModule 新增到 AppRoutingModule 的 imports 陣列中，同時透過呼叫 RouterModule.forRoot() 來用這些 routes 配置它
  // forRoot() 方法會提供路由所需的服務提供者和指令，還會基於瀏覽器的當前 URL 執行首次導航。
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
