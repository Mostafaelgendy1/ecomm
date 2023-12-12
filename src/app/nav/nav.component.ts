import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {
  catrnum:number=0
  islogin:boolean=false
constructor(private _AuthService:AuthService ,private _CartService:CartService ){
 _CartService.numberofCart.subscribe({
  next:(x)=>{console.log(x)
  this.catrnum=x}
 })
}
ngOnInit(): void {
  
  this._AuthService.userdata.subscribe({
next:()=>{
  if(this._AuthService.userdata.getValue()!==null){
this.islogin=true
  }
  else{
    this.islogin=false}
}
  })

  
}


logout(){
  this._AuthService.logout()
}
}

