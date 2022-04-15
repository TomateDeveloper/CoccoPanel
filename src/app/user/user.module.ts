import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserMainPageComponent} from './pages/main/user-main-page.component';
import {UserRoutingModule} from "./user-routing.module";
import {UIModule} from "../shared/ui/ui.module";
import {UserCardComponent} from './components/user-card/user-card.component';
import {UserTableHeaderComponent} from './components/user-table-header/user-table-header.component';
import {UserCreatePageComponent} from './pages/create/user-create-page.component';
import {SharedModule} from "../shared/shared.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {UserCreationHelpComponent} from './components/user-creation-help/user-creation-help.component';
import {UserCreationConfirmComponent} from './components/user-creation-confirm/user-creation-confirm.component';
import {UserDeleteComponent} from './components/user-delete/user-delete.component';


@NgModule({
    declarations: [
        UserMainPageComponent,
        UserCardComponent,
        UserTableHeaderComponent,
        UserCreatePageComponent,
        UserCreationHelpComponent,
        UserCreationConfirmComponent,
        UserDeleteComponent
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
