import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {UIModule} from "../shared/ui/ui.module";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import { HttpClientModule} from "@angular/common/http";



@NgModule({
    declarations: [
        LoginPageComponent,
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        UIModule,
        ReactiveFormsModule
    ],
    providers: [
    ]
})
export class AuthenticationModule { }
