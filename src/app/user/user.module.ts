import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainPageComponent } from './pages/main/user-main-page.component';
import {UserRoutingModule} from "./user-routing.module";
import {UIModule} from "../shared/ui/ui.module";



@NgModule({
  declarations: [
    UserMainPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UIModule
  ]
})
export class UserModule { }
