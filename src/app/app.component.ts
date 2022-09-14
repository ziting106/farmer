import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// @Component用來宣告這個class代表的是一個component
@Component({
  // 就是選取器
  selector: 'app-root', //引入到HTML裡時要用的標籤名稱<app-root>，也可以取用className(不建議)
  // 指選取器要選的HTML位置
  templateUrl: './app.component.html',
  // 指選取器位置的style檔案
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
