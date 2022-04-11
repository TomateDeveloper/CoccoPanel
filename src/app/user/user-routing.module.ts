import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserMainPageComponent} from "./pages/main/user-main-page.component";
import {UserCreatePageComponent} from "./pages/create/user-create-page.component";
const routes: Routes = [
    {
        path: '',
        component: UserMainPageComponent
    },
    {
        path: 'create',
        component: UserCreatePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }