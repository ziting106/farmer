import { FarmerService } from './../service/farmer.service';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

//HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
})
//HttpClient start
@Injectable()
export class PageTwoComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  test: any;

  arr: any[] = [];

  //HttpClient----start
  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    // farmerService此名稱自己取，FarmerService是service.ts中的class name
    private farmerService: FarmerService // private data: Array<any>
  ) {}
  // data;
  ngOnInit(): void {
    this.http
      // 用pose方法，重URL取值，後面一定要加.subscribe({})`
      .get('https://restcountries.com/v3.1/name/japan')
      .subscribe({
        next: (data) => {
          console.log(data);
          this.test = (data as Array<any>)[0].flag;
        },
        error: (error) => {},
        complete: () => {
          console.log('end');
        },
      });
    // .subscribe((result) => {
    //   this.data = result;
    // });
    // 從service.ts中讀取API，後面一樣要加.subscribe({})
    this.farmerService
      .getAPI('https://restcountries.com/v3.1/name/japan')
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {}
      );

    this.arr = [
      { code: 'A', name: 'Name: A' },
      { code: 'B', name: 'Name: B' },
      { code: 'C', name: 'Name: C' },
    ];
  }
  //HttpClient----End

  // 拖拉模組start
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  todo2 = ['Apple', 'Banana', 'Papaya', 'watermelon'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    console.log(this.test);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.todo, this.done);
  }
  // 拖拉模組END
  // 外框框XX模組 start
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  // 外框框XX模組 END
}
