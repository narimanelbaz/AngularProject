import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  postsData:any
  depId:any
  errorMSG: any;
  constructor(private productServiceService:ProductServiceService, private router:Router, private activatedRouter:ActivatedRoute ) { 
    // this.activatedRouter.paramMap.subscribe((params:ParamMap)=>
    // {
    //   this.depId=params.get("id");
    // })
  }

  ngOnInit(): void {
    this.productServiceService.getPosts().subscribe(
      (data: any) => {
        this.postsData = data;
      },
      (error: any) => {
        this.errorMSG = error;
      }
    );
  
  }

  goToPosts(){
    let prevId=parseInt(this.depId)-1;
    this.router.navigate(['/posts',{id:this.depId}])
  }
}
