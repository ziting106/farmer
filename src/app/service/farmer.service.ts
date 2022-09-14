import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
//有Service一個夠了
export class FarmerService {
  // 都要加private, http為自取
  constructor(private http: HttpClient) {}

  //getAPI這個名子可以自己取
  getAPI(url: string) {
    return this.http.get(url);
  }
}
