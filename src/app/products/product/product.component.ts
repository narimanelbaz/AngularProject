import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../../../app/sharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../../../app/sharedClassesAndTypes/IProduct';
import { ICategory } from '../../../app/sharedClassesAndTypes/ICategory';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  discount: DiscountOffers
  storeName:string
  storeLogo:string
  productList:IProduct[]
  categoryList:ICategory[]
  clientName:string
  isPurshased:boolean
  constructor() {
    this.discount=DiscountOffers.offer1
    this.storeName="Nariman Store"
    this.storeLogo="NN"
    this.productList=[{
        id: 1,
        name: 'kia',
        quantity: 10,
        price: 10000,
        img: 'assets/woman.png',
    } ]
    this.categoryList=[
      {
        id: 1,
        name: 'phones',
      },
      {
        id: 2,
        name: 'cars',
      }
    ]
    this.clientName="hamed"
    this.isPurshased=true

   }

  ngOnInit(): void {
  }

}
