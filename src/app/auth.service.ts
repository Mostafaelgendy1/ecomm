import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userdata=new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
if(localStorage.getItem("usettoken")!==null)
this.decode()
  }

register(user:any):Observable<any> {
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",user)

}

login(user:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",user)
}

decode(){
 let uncodetoken=JSON.stringify(localStorage.getItem("usettoken"))
 let decoded:any=jwtDecode(uncodetoken)
 this.userdata.next( decoded)

}
logout(){
  localStorage.removeItem("usettoken")
  this.userdata.next(null)
this._Router.navigate(['/register'])
}

}
