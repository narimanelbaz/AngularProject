import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  constructor(private login:LoginService) { }
  loginModel:User=new User( "","")
 
  onLogin()
  {
    
    // console.log(this.loginModel);
    // this.login.loginUser(this.loginModel).subscribe(res=>
    //   {
    //     console.log("success",res);
    //   },
    //   error=>
    //   {
    //    console.log("error",error);
    //   })


  }
  ngOnInit(): void {
  }
}
