import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isload:boolean=false
  apieeror:string=''
constructor(private _AuthService:AuthService,private _Router:Router  ){
  if(localStorage.getItem("usettoken")!==null){
    this._Router.navigate(['/home'])
  }
}

  loginform :FormGroup=new FormGroup({
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,12}$/)])

  })
 
  handlelogin(loginform:FormGroup){


   
    this.isload=true
    console.log(loginform.value)
    if(loginform.valid){
this._AuthService.login(loginform.value).subscribe({
  
  next:(e)=>{
    if(e.message=='success')
    console.log(e)
 localStorage.setItem('usettoken',e.token)
 this._AuthService.decode()
    this.isload=false
  this._Router.navigate(['/home'])
  },
  error:(err)=> {console.log(err)
  this.apieeror=err.error.message
this.isload=false},

})}

  }
}
