import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductCreatePageComponent} from "./pages/create/product-create-page.component";
import {ProductMainPageComponent} from "./pages/main/product-main-page.component";
import {ProductViewPageComponent} from "./pages/view/product-view-page.component";

const routes: Routes = [
    {
        path: '',
        component: ProductMainPageComponent
    },
    {
        path: 'create',
        component: ProductCreatePageComponent
    },
    {
        path: 'view',
        component: ProductViewPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }