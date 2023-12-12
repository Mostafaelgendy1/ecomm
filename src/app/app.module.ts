import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule}from'@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {BrowserAnimationsModule}from'@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';

import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';

import { SubcatComponent } from './subcat/subcat.component';
import { SpecificcatComponent } from './specificcat/specificcat.component';
import { AppRoutingModulne } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    CartComponent,
  
    LoginComponent,
    RegisterComponent,
    BrandsComponent,
    CategoriesComponent,
    SignupComponent,
    ProductdetailsComponent,
    SliderComponent,
 

    SearchPipe,
    CheckoutComponent,
    SubcatComponent,
    SpecificcatComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   HttpClientModule,AppRoutingModulne,BrowserAnimationsModule, CarouselModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
