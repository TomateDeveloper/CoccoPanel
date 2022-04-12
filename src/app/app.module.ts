import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./shared/layout/layout.module";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LayoutModule,
        NgxIntlTelInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
