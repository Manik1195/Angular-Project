import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  // isEligibleForSubscrition() {
  //   if (this.userData.subscription == 'basic') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  apiurl = ' http://localhost:3000/Users';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.apiurl);
  }
}
