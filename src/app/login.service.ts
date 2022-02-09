import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  url="http://localhost:2000/login"

  loginUser(logiin:LoginFormComponent){
    return this.http.post(this.url,logiin)
  }
}
