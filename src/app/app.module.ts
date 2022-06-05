import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./shared/layout/layout.module";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "./auth/store/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {AppStoreModule} from "./store/app.store.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MaterialModule} from "./material/material.module";
import {ProductModule} from "./product/product.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MaterialModule,
        ProductModule,

        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LayoutModule,
        NgxIntlTelInputModule,
        NgbModule,
        HttpClientModule,
        AppStoreModule,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
