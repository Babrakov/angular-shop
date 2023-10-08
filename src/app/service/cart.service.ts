import { Injectable } from '@angular/core';
import {Product} from "../products";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  items: Product[] = [];

  addToCArt(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    console.log(this.items);
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}
