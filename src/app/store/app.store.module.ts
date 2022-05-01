import {EffectsModule} from "@ngrx/effects";
import {NgModule} from "@angular/core";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/store/auth.service";
import {StoreModule} from "@ngrx/store";

@NgModule({
    declarations: [],
    imports: [
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
        EffectsModule.forRoot([]),
    ],
    providers: [
        AuthService
    ]
})
export class AppStoreModule { }
