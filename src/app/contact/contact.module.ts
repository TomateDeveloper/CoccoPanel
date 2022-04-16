import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCreatePageComponent } from './pages/create/contact-create-page.component';
import {ContactRoutingModule} from "./contact-routing.module";
import {UIModule} from "../shared/ui/ui.module";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import { ContactMainPageComponent } from './pages/main/contact-main-page.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactTableHeaderComponent } from './components/contact-table-header/contact-table-header.component';



@NgModule({
  declarations: [
    ContactCreatePageComponent,
    ContactMainPageComponent,
    ContactCardComponent,
    ContactTableHeaderComponent
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
