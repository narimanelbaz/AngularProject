import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';
import { Register } from '../register';
import { confirmPasswordValidator } from '../confirmPassword.validator';
import { forbiddenNameValidator } from '../name.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private enrollment:EnrollmentService, private fb:FormBuilder ) { 
  }
  topics=["Facebook","Twitter","Google"]
  registerModel:Register= new Register("","","","","")
  
  registrationForm=this.fb.group({
    name:['',[Validators.required ,Validators.minLength(3),forbiddenNameValidator(/admin/)] ],
    email: ['',Validators.required],
    password: ['',Validators.required],
    confirmpassword:[''],
    alternativeComment:this.fb.array([]),
    topic: ['',Validators.required],
    number:[''],
    subscribe:[false],
   },{Validators:[confirmPasswordValidator]})
  
  

get Name() 
{
return this.registrationForm.get('name')
}

get email() 
{
return this.registrationForm.get('email')
}

get password() 
{
return this.registrationForm.get('password')
}

get confirmpassword() 
{
return this.registrationForm.get('confirm password')
}

get topic() 
{
return this.registrationForm.get('topics')
}

get alternativeComment(){
  return this.registrationForm.get('alternativeComment') as FormArray;
}
get number(){
  return this.registrationForm.get('number')
}

addAlternativeComment(){
  this.alternativeComment.push(this.fb.control(""))
}

setNumberValidation(){
  this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue){
        this.number?.setValidators(Validators.required)
      }
      else{
        this.number?.clearValidators();
      }
      this.number?.updateValueAndValidity();
  })
}

  // -------tdf-------
  // onSubmit(){
  //   console.log(this.registerModel)
  //   this.enrollment.enroll(this.registerModel).subscribe(
  //    (res)=> {
  //       console.log("success",res);
  //     },
  //     (error)=>
  //     {
  //      console.log("error",error);
  //     })
  // }
  ngOnInit():void {
  }
 
  
}
