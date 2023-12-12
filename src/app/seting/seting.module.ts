import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetingRoutingModule } from './seting-routing.module';
import { ChangPasswordComponent } from './chang-password/chang-password.component';


@NgModule({
  declarations: [
    ChangPasswordComponent
  ],
  imports: [
    CommonModule,
    SetingRoutingModule
  ]
})
export class SetingModule { }
