import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./shared/layout/layout.module";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { environment } from 'src/environments/environment.prod';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./auth/store/auth.effects";
import {AuthService} from "./auth/store/auth.service";
import {HttpClientModule} from "@angular/common/http";

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
        HttpClientModule,
        StoreModule.forRoot(
            {},
            {
                metaReducers: !environment.production ? [] : [],
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true
                }
            }
        ),
        EffectsModule.forRoot([AuthEffects]),
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
