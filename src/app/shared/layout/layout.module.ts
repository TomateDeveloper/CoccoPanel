import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {UIModule} from "../ui/ui.module";
import { MenuComponent } from './components/menu/menu.component';
import {ProfileMenuComponent} from "./components/profile-menu/profile-menu.component";
import {NgScrollbarModule} from "ngx-scrollbar";



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    ProfileMenuComponent
  ],
  exports: [
    SidebarComponent,
    ProfileMenuComponent
  ],
    imports: [
        CommonModule,
        UIModule,
        NgScrollbarModule
    ]
})
export class LayoutModule { }
