import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {UIModule} from "../ui/ui.module";
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent
  ],
  exports: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        UIModule
    ]
})
export class LayoutModule { }
