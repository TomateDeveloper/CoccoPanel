import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCreatePageComponent } from './pages/create/contact-create-page.component';
import {ContactRoutingModule} from "./contact-routing.module";
import {UIModule} from "../shared/ui/ui.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import { ContactMainPageComponent } from './pages/main/contact-main-page.component';



@NgModule({
  declarations: [
    ContactCreatePageComponent,
    ContactMainPageComponent
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        UIModule,
        NgSelectModule,
        NgxIntlTelInputModule
    ]
})
export class ContactModule { }
