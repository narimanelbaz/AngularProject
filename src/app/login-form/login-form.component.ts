import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  constructor(private login:LoginService ,  private fb:FormBuilder) { }
  loginModel:User=new User( '','')
 
  loginForm = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]

  })

get email (){
return this.loginForm.get('email')
}

get password (){
  return this.loginForm.get('password')
  }


  // onLogin()
  // {
    
    // console.log(this.loginModel);
    // this.login.loginUser(this.loginModel).subscribe(res=>
    //   {
    //     console.log("success",res);
    //   },
    //   error=>
    //   {
    //    console.log("error",error);
    //   })


  // }
  ngOnInit(): void {
  }
}
