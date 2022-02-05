import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild (ProductsComponent) child! :ProductsComponent
  
  
  
  title = 'Angular1';
  banner="../../assets/livingroom2.jpg"
}
