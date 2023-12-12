import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[]=[]
   search:string=''
   constructor( private _ProductsService:ProductsService ,private _CartService:CartService){
}
addtocart(productid:string){
  this._CartService.addtocart(productid).subscribe({
    next:(response)=>{console.log(response)
    this._CartService.numberofCart.next(response.numOfCartItems)  },
    error:(err)=>console.log(err)
  })
}

ngOnInit(): void {

  this._ProductsService.getproducts().subscribe(
    {
      next:(response)=>{console.log(this.products=response.data) 
      
      
      }
    }
  )
  
}

}
