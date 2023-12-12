import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
CartService
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productid:any
  productedetailsarr:any
  //@ts-ignore
constructor(private _ActivatedRoute:ActivatedRoute  ,private _CartService:CartService, private _Router:Router,private _ProductsService:ProductsService){

}



addtocart(productid:string){
  this._CartService.addtocart(productid).subscribe({
    next:(response)=>{console.log(response)
      this._CartService.numberofCart.next(response.numOfCartItems) 
      this._Router.navigate(["/cart"])
    },
    error:(err)=>console.log(err)
  })

}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((p)=>{

this.productid=p.get("id")
  })
this._ProductsService.getproductdetails(this.productid).subscribe({
  next:(data)=>{(data.data)
  console.log(data.data)
  console.log(data.data._id)
    this.productedetailsarr=data.data
    console.log(   this.productedetailsarr.category
      )
  }

})



}




}
// addtocart(productid:string){
//   this._CartService.addtocart(productid).subscribe({
//     next:(response)=>{console.log(response)
//     this._CartService.numberofCart.next(response.numOfCartItems)  },
//     error:(err)=>console.log(err)
//   })
// }

//  import { CartService } from '../cart.service';
//  ,private _CartService:CartService