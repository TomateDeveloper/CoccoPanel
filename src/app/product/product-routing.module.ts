import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductCreatePageComponent} from "./pages/create/product-create-page.component";

const routes: Routes = [
    /*
    {
        path: '',
        component: MaterialMainPageComponent
    },*/
    {
        path: 'create',
        component: ProductCreatePageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }