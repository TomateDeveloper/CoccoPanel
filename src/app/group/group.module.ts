import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupMainPageComponent } from './pages/main/group-main-page.component';
import {GroupRoutingModule} from "./group-routing.module";
import {UIModule} from "../shared/ui/ui.module";



@NgModule({
  declarations: [
    GroupMainPageComponent
  ],
    imports: [
        CommonModule,
        GroupRoutingModule,
        UIModule
    ]
})
export class GroupModule { }
