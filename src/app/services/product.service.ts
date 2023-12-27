import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  host :string ="http://localhost:8089";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.host}/products`,{observe:'response'});
  }

}
