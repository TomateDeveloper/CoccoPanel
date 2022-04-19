import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./shared/layout/layout.module";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AngularFireModule} from "@angular/fire/compat";
import { environment } from 'src/environments/environment.prod';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LayoutModule,
        NgxIntlTelInputModule,
        NgbModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
