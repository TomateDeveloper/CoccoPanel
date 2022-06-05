import {EffectsModule} from "@ngrx/effects";
import {NgModule} from "@angular/core";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth/store/auth.service";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MaterialEffects} from "../material/store/material.effects";
import {MATERIAL_STATE_NAME} from "../material/store/material.selector";
import {MaterialReducer} from "../material/store/material.reducer";

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

        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        EffectsModule.forRoot([]),
    ],
    providers: [
        AuthService
    ]
})
export class AppStoreModule { }
