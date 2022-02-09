import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url:any="http://localhost:2000/enroll"
  constructor(private http:HttpClient) {

   }
   enroll(register:Register){
    return this.http.post(this.url,register)
   }
}
