import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { Ireg } from './ireg';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiurl = '  http://localhost:3003/Users';
  constructor(private http: HttpClient) {}
  addUser(user: Iuser) {
    return this.http.post(`${this.apiurl}`, user);
  }
  ValidateUser(email: string, password: string) {
    return this.http.get<Ireg[]>(`${this.apiurl}?email=${email}&password=${password}`);
  }
}
