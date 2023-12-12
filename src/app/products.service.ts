import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService  {

  constructor( private _HttpClient:HttpClient) { }

getproducts ():Observable <any> {
  return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products")
}

getproductdetails(id:string):Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}
getcategory():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

getspaccategory(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories//api/v1/categories/${id}`)
  }
}
