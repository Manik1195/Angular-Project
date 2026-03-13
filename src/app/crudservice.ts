import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root',
})
export class Crudservice {
  apiurl = 'http://localhost:3000/Users';

  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.apiurl);
  }
  postData(data: Iuser) {
    return this.http.post(this.apiurl, data);
  }
  getDataById(id: number) {
    return this.http.get(`${this.apiurl}/${id}`);
  }
}
