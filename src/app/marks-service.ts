import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imarks } from './imarks';

@Injectable({
  providedIn: 'root',
})
export class MarksService {
  apiurl = 'http://localhost:3001/marks';
  constructor(private http: HttpClient) {}
  getMarkByNameAndRoll(name: string, roll: number) {
    return this.http.get<Imarks[]>(`http://localhost:3001/marks?name=${name}&rollnumber=${roll}`);
  }
}
