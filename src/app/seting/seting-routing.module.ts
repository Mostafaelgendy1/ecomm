import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangPasswordComponent } from './chang-password/chang-password.component';

const routes: Routes = [{path:"change-password",component:ChangPasswordComponent},
{path:"",redirectTo:"change-password", pathMatch:"full" }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetingRoutingModule { }
