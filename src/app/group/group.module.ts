import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupMainPageComponent } from './pages/main/group-main-page.component';
import {GroupRoutingModule} from "./group-routing.module";
import {UIModule} from "../shared/ui/ui.module";
import { GroupCardComponent } from './components/group-card/group-card.component';
import { GroupTableHeaderComponent } from './components/group-table-header/group-table-header.component';



@NgModule({
  declarations: [
    GroupMainPageComponent,
    GroupCardComponent,
    GroupTableHeaderComponent
  ],
    imports: [
        CommonModule,
        GroupRoutingModule,
        UIModule
    ]
})
export class GroupModule { }
