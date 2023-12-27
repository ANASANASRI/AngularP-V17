import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  host :string ="http://localhost:8089";
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.host}/products`,{observe:'response'});
  }

  deleteProduct(product: any) {
    return this.http.delete(`${this.host}/products/${product.id}`);
  }
}
