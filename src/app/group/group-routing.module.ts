import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GroupMainPageComponent} from "./pages/main/group-main-page.component";
import {GroupCreatePageComponent} from "./pages/create/group-create-page.component";

const routes: Routes = [
    {
        path: '',
        component: GroupMainPageComponent
    },
    {
        path: 'create',
        component: GroupCreatePageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupRoutingModule { }