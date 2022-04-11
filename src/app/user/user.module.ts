import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainPageComponent } from './pages/main/user-main-page.component';
import {UserRoutingModule} from "./user-routing.module";
import {UIModule} from "../shared/ui/ui.module";
import { UserFiltersComponent } from './components/user-filters/user-filters.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserTableHeaderComponent } from './components/user-table-header/user-table-header.component';



@NgModule({
  declarations: [
    UserMainPageComponent,
    UserFiltersComponent,
    UserCardComponent,
    UserTableHeaderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UIModule
  ]
})
export class UserModule { }
