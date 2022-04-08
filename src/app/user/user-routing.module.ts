import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserMainPageComponent} from "./pages/main/user-main-page.component";
const routes: Routes = [
    {
        path: '',
        component: UserMainPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }