import { Injectable } from '@angular/core';
import { IProduct } from '../sharedClassesAndTypes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList:IProduct[]
  constructor() { 
   this.productList=[
     {
      id: 1,
      name: 'blouse',
      quantity: 10,
      price: 400,
      img: 'assets/avatar_hat.jpg',
     },
      {
      id: 2,
      name: 'trousers',
      quantity: 20,
      price: 300,
      img: 'assets/drawing.jpg',
      }
     ]
  }

  GetAllProducts(){
  return this.productList
  }
  
  GetProductById(prdId:any){
    if (typeof prdId != 'number') 
    return null 
    else 
    for (let i of this.productList) {
      if (i.id === prdId)
      return i
      else
      return null
    }
  }
}
