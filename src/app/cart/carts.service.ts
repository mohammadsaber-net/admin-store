import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  http = inject(HttpClient)
  getCarts() {
    return this.http.get("https://fakestoreapi.com/carts")
  }
  deleteCart(id: number) {
    return this.http.delete(`https://fakestoreapi.com/carts/${id}`)
  }
  getProduct(id: number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
