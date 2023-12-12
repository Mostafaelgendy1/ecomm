import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [

  {path:"" ,redirectTo:"register", pathMatch:"full"},
  {path:"home" ,canActivate:[authGuard], component:HomeComponent},
  {path:"cart" ,canActivate:[authGuard],component:CartComponent},
  {path:"brands" ,canActivate:[authGuard],component:BrandsComponent},
  {path:"categories" ,canActivate:[authGuard],component:CategoriesComponent},
  {path:"Productdetails/:id" ,canActivate:[authGuard],component:ProductdetailsComponent},
  {path:"checkout" ,canActivate:[authGuard],component:CheckoutComponent},
  {path:"setting" ,canActivate:[authGuard], loadChildren:()=>import("./seting/seting.module").then((x)=>x.SetingModule)},
 
  {path:"login" ,component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  
  {path:"**" ,component:NotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModulne { }
