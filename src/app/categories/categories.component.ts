import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
category:any []=[]
  constructor(private _ProductsService:ProductsService)
  {

  }
  spasificcat(id:string){
    this._ProductsService.getspaccategory(id).subscribe({
      next:(x)=>{console.log(x)}
    })
  }
  ngOnInit(): void {
   this._ProductsService.getcategory().subscribe((data)=>{
     this.category=data.data
     console.log( this.category)
   })
  }
//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: true,
//     touchDrag: true,
//     pullDrag: false,
//     dots: false,
//     navSpeed: 700,
//     navText: ['', ''],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     }
// }

 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      290: {
        items: 2
      }
      ,500:{
        items: 4
      }
      ,940: {
                items: 7
              }
     
    },
    nav: true
  }




}

