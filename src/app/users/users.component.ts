import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private productServiceService:ProductServiceService) { }
  usersData:any
  errMessage:any
  ngOnInit(): void {
    this.productServiceService.getUsers().subscribe(
      (data)=>{
         this.usersData=data
      },
      (error)=>{
        this.errMessage=error
      }
    )
  }

}
