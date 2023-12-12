import { Component } from '@angular/core';
import{FormGroup,FormControl, Validators}from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
isload:boolean=false
apierror:string=''
constructor(private _AuthService:AuthService ,private _Router:Router){}

  regesterrform:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,12}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,12}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
   },{validators:this.passwrdmatch})


   passwrdmatch(regesterrform:any){
    let passwordControl=regesterrform.get("password")
    let rePasswordControl=regesterrform.get("rePassword")
    if(passwordControl?.value===rePasswordControl?.value){
      return null
    }else{
      rePasswordControl.setErrors({passwordmath:"password dosent match"})
      return {passwordmath:"password dosent match"}
    }

   }
   
   handle(regesterrform:FormGroup){
    this.isload=true
    console.log(regesterrform.value)

   if(regesterrform.valid){
    this._AuthService.register(regesterrform.value).subscribe({
      next:(response)=>{
        if(response.message== 'success')
        
          this.isload = false
          this._Router.navigate(['/login'])
         
        },
     error:(e)=>{
   this.isload=false
this.apierror=e.error.message
     
     }
      
    })
   }
   }
}
