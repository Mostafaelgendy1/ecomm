import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdetails:any
 
  numcart:number=0
  constructor(private _CartService:CartService){
_CartService.numberofCart.subscribe((x)=>{this.numcart=x})

  }
removecart(productid:string){

  this._CartService.removecart(productid).subscribe({
    next:(res)=>{console.log(res)
      this.cartdetails=res.data 
      this._CartService.numberofCart.next(res.numOfCartItems) 
    this._CartService.numberofCart.subscribe((x)=>{this.numcart= res.numberofCart})
   
    
    } ,
      
      error:(err)=>console.log(err)


  })
}


  ngOnInit(): void {
    this._CartService.getLogedUserCart().subscribe({
      next:(res)=>{console.log(res) 
      this.cartdetails=res.data
      },
      error:(err)=>console.log(err)
    })
  }
  updatecart(productid:string,count:number){
    this._CartService.updatecart(productid,count).subscribe({
      next:(res)=>{console.log(res)
        this.numcart=res.numOfCartItems
       
        this.cartdetails=res.data} ,
        error:(err)=>console.log(err)
    })
  }

}
