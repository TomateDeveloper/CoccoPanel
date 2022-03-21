import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {UIModule} from "../ui/ui.module";
import { MenuComponent } from './components/menu/menu.component';
import {ProfileMenuComponent} from "./components/profile-menu/profile-menu.component";
import {NgScrollbarModule} from "ngx-scrollbar";
import {ResponsiveHeaderComponent} from "./components/responsive-header/responsive-header.component";
import { SidebarLayoutComponent } from './pages/sidebar-layout/sidebar-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';



@NgModule({
    declarations: [
        SidebarComponent,
        MenuComponent,
        ProfileMenuComponent,
        ResponsiveHeaderComponent,
        SidebarLayoutComponent,
        HeaderComponent,
        TitleComponent,
        HeaderToolbarComponent
    ],
    exports: [
        SidebarComponent,
        ProfileMenuComponent,
        ResponsiveHeaderComponent,
        SidebarLayoutComponent
    ],
    imports: [
        CommonModule,
        UIModule,
        NgScrollbarModule
    ]
})
export class LayoutModule { }
