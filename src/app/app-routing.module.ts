import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {AddproductComponent} from "./addproduct/addproduct.component";

const routes: Routes = [
  {path: "home",component:HomeComponent},
  {path: "products",component:ProductsComponent},
  {path: "addproduct",component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
