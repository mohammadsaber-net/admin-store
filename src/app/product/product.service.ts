import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get("https://fakestoreapi.com/products")
  }
  sendProduct(id: number, model: any): Observable<any> {
    return this.http.put(`https://fakestoreapi.com/products/${id}`, model)
  }
  uploadProduct(model: any): Observable<any> {
    return this.http.post("https://fakestoreapi.com/products", model)
  }
}
