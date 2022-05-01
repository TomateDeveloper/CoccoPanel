import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialRoutingModule} from "./material-routing.module";
import { MaterialMainPageComponent } from './pages/main/material-main-page.component';
import { MaterialCreatePageComponent } from './pages/create/material-create-page.component';
import {UIModule} from "../shared/ui/ui.module";
import {NgSelectModule} from "@ng-select/ng-select";
import { MaterialCreateHelpModalComponent } from './components/create-help-modal/material-create-help-modal.component';
import { MaterialCardComponent } from './components/material-card/material-card.component';
import { MaterialTableHeaderComponent } from './components/material-table-header/material-table-header.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {MaterialReducer} from "./store/material.reducer";
import {MATERIAL_STATE_NAME} from "./store/material.selector";
import {EffectsModule} from "@ngrx/effects";
import {MaterialEffects} from "./store/material.effects";
import {MaterialMainPageGuard} from "./guards/material-main-page.guard";



@NgModule({
    declarations: [
        MaterialMainPageComponent,
        MaterialCreatePageComponent,
        MaterialCreateHelpModalComponent,
        MaterialCardComponent,
        MaterialTableHeaderComponent
    ],
    imports: [
        CommonModule,
        MaterialRoutingModule,
        UIModule,
        NgSelectModule,
        ReactiveFormsModule,
        StoreModule.forFeature(MATERIAL_STATE_NAME, MaterialReducer),
        EffectsModule.forFeature([MaterialEffects])
    ],
    providers: [
        MaterialMainPageGuard
    ]
})
export class MaterialModule { }
