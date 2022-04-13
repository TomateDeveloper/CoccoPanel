import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GroupMainPageComponent} from "./pages/main/group-main-page.component";
const routes: Routes = [
    {
        path: '',
        component: GroupMainPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupRoutingModule { }