import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../../app/sharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../../app/sharedClassesAndTypes/IProduct';
import { ICategory } from '../../app/sharedClassesAndTypes/ICategory';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
    this.storeLogo="../../assets/smiley.png"
    this.productList=[{
        id: 1,
        name: 'blouse',
        quantity: 10,
        price: 400,
        img: 'assets/avatar_hat.jpg',
    } ]
    this.categoryList=[
      {
        id: 1,
        name: 'phones',
      },
      {
        id: 2,
        name: 'cars',
      },
      {
        id :3,
        name:'clothes'
      }
    ]
    this.clientName="Nariman"
    this.isPurshased=true
  }
  message=''
  IsPurchased:boolean =false
  hideTable(){
  this.IsPurchased != this.IsPurchased
   this.message = "THanks for purchasing from our Store"+''+this.clientName
  }

  ngOnInit(): void {
  }
  

}
