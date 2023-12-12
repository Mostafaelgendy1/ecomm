import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private _CartService:CartService){}
shipingadress:FormGroup=new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null)

})
handleadress(shipingadress:FormGroup){
  if(shipingadress.valid){
    console.log(shipingadress.value)
    this._CartService.onlinepayment(shipingadress.value,"6573f419d34ae3b209c6224c").subscribe({
      next:(res)=>{console.log(res)
      window.location.href=res.session?.url
      },
      error:(res)=>{console.log(res)}
    })
  }
}
}
//  "shippingAddress":{
//         "details": "details",
//         "phone": "01010800921",
//         "city": "Cairo"
//         }