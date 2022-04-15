import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactCreatePageComponent} from "./pages/create/contact-create-page.component";
import {ContactMainPageComponent} from "./pages/main/contact-main-page.component";

const routes: Routes = [
    {
        path: 'create',
        component: ContactCreatePageComponent
    },
    {
        path: '',
        component: ContactMainPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }