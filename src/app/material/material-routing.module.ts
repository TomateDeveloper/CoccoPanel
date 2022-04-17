import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MaterialCreatePageComponent} from "./pages/create/material-create-page.component";
import {MaterialMainPageComponent} from "./pages/main/material-main-page.component";

const routes: Routes = [
    {
        path: '',
        component: MaterialMainPageComponent
    },
    {
        path: 'create',
        component: MaterialCreatePageComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaterialRoutingModule { }