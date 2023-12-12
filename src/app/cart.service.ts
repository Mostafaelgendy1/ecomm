import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
headers:any={token:localStorage.getItem("usettoken")}
cart:boolean=false
numberofCart =new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient) {
    this.getLogedUserCart().subscribe({
      next:(res)=>{
        if(res.numOfCartItems==0){  
          this.cart =true
        }
        
        this.numberofCart.next(res.numOfCartItems)
        console.log(res.numOfCartItems)
      
     
      },
      error:(err)=>console.log(err)
    })


   }

  addtocart(productid:string):Observable<any>{

return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:productid},
 {headers:this.headers}) 
  }

getLogedUserCart():Observable<any>{

return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart",
 {headers:this.headers}) 
  }
removecart(productId:string):Observable<any>{

return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
 {headers:this.headers}) 
  }
updatecart(productId:string,countt:number):Observable<any>{

  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:countt},
  {headers:this.headers}) 
  }

onlinepayment(shipingadress:any,cartId:string):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{shipingadress:shipingadress},{headers:this.headers})
}
}