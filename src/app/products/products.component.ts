import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  products: any[] = [];

  getProducts() {
    this.productService.getProducts().subscribe(
      (resp: any) => {
        this.products = resp.body;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des produits.', error);
      }
    );
  }

}
