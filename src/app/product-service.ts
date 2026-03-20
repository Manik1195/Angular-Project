import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiurl = ' http://localhost:3002/products';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<Iproducts[]>(this.apiurl);
  }
}
  