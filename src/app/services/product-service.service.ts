import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable , throwError} from 'rxjs';
import { IProduct } from '../sharedClassesAndTypes/IProduct';
import { IPosts } from './IPosts';
import { IUsers } from './IUsers';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList:IProduct[]
  constructor( private http :HttpClient ) { 
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
  // --------

  private url:string ="https://jsonplaceholder.typicode.com/users"
  getUsers():Observable<IUsers>{
    return this.http.get<IUsers>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message || "server error")
    }))
  }

  private url2:string ="https://jsonplaceholder.typicode.com/posts"
  getPosts():Observable<IPosts>{
    return this.http.get<IPosts>(this.url2).pipe(catchError((err)=>
    {
      return throwError(err.message || "server error")
    }
    ))
  }


   // --------
  GetAllProducts(){
  return this.productList
  }
  
  GetProductById(prdId:any):any{
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
