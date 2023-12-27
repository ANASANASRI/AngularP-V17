import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BrosCode';

  actions : Array<any> =[
    {title:"home" , "routes":"/home" , icon:"house"},
    {title:"products" , "routes":"/products" , icon:"safe"},
    {title:"addproduct" , "routes":"/addproduct" , icon:"safe"}
  ];

  currentActin: any;

  setCurrentAction(currentActin: any) {
    this.currentActin=currentActin;
  }
}
