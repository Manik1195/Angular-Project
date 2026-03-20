import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Crudservice {
  apiurl = 'http://localhost:3000/Users';

  constructor(private http: HttpClient) {}
  getData(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.apiurl);
  }
  postData(data: Iuser) {
    return this.http.post<Iuser>(this.apiurl, data);
  }
  getDataById(id: number) {
    return this.http.get<Iuser>(`${this.apiurl}/${id}`);
  }
  putDataByID(id: number, data: Iuser) {
    return this.http.put<Iuser>(`${this.apiurl}/${id}`, data);
  }
  DeleteDataById(id: number) {
    return this.http.delete<Iuser>(`${this.apiurl}/${id}`);
  }
}
