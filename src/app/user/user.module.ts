import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainPageComponent } from './pages/main/user-main-page.component';
import {UserRoutingModule} from "./user-routing.module";
import {UIModule} from "../shared/ui/ui.module";
import { UserFiltersComponent } from './components/user-filters/user-filters.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserTableHeaderComponent } from './components/user-table-header/user-table-header.component';
import { UserCreatePageComponent } from './pages/create/user-create-page.component';
import {SharedModule} from "../shared/shared.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";



@NgModule({
    declarations: [
        UserMainPageComponent,
        UserFiltersComponent,
        UserCardComponent,
        UserTableHeaderComponent,
        UserCreatePageComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        UIModule,
        SharedModule,
        NgSelectModule,
        ReactiveFormsModule,
        NgxIntlTelInputModule,
    ]
})
export class UserModule { }
