import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsData:any
  errMsg:any
  constructor(private productServiceService:ProductServiceService) { }

  ngOnInit(): void {
    this.productServiceService.getPosts().subscribe(
      (pdata)=>{
        this.postsData=pdata
      },
      (error)=>{
        this.errMsg=error
      }
    )
  }

}
