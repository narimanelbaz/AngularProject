import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Register } from '../register';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private enrollment:EnrollmentService ) { 
  }
  topics=["Facebook","Twitter","Google"]
  registerModel:Register= new Register("","","","","")

  onSubmit(){
    console.log(this.registerModel)
    this.enrollment.enroll(this.registerModel).subscribe(
     (res)=> {
        console.log("success",res);
      },
      (error)=>
      {
       console.log("error",error);
      })
  }
  ngOnInit():void {
  }
 
  
}
