import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {UIModule} from "../shared/ui/ui.module";



@NgModule({
  declarations: [
  
    LoginPageComponent
  ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        UIModule
    ]
})
export class AuthenticationModule { }
