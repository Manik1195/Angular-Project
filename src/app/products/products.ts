import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../product-service';
import { Iproducts } from '../iproducts';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  data = signal<Iproducts[]>([]);
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.product.getData().subscribe((res) => this.data.set(res));
    console.log(this.data());
  }
}
