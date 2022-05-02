import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MaterialCreatePageComponent} from "./pages/create/material-create-page.component";
import {MaterialMainPageComponent} from "./pages/main/material-main-page.component";
import {MaterialMainPageGuard} from "./guards/material-main-page.guard";
import {MaterialEditPageGuard} from "./guards/material-edit-page.guard";

const routes: Routes = [
    {
        path: '',
        component: MaterialMainPageComponent,
        canActivate: [MaterialMainPageGuard]
    },
    {
        path: 'create',
        component: MaterialCreatePageComponent
    },
    {
        path: 'edit/:id',
        component: MaterialCreatePageComponent,
        canActivate: [MaterialEditPageGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaterialRoutingModule { }