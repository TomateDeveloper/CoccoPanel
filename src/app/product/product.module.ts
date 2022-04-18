import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreatePageComponent } from './pages/create/product-create-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductIdentityFormComponent } from './components/identity-form/product-identity-form.component';
import {UIModule} from "../shared/ui/ui.module";
import { ProductSummaryComponent } from './components/summary/product-summary.component';
import {ProductRoutingModule} from "./product-routing.module";
import { ProductBreakdownComponent } from './components/breakdown/product-breakdown.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { ProductBreakdownGroupComponent } from './components/breakdown-group/product-breakdown-group.component';
import { ProductLaborComponent } from './components/labor/product-labor.component';
import { ProductLaborItemComponent } from './components/labor-item/product-labor-item.component';
import { ProductMainPageComponent } from './pages/main/product-main-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductTableHeaderComponent } from './components/product-table-header/product-table-header.component';
import { ProductViewPageComponent } from './pages/view/product-view-page.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { BreakdownInfoComponent } from './components/breakdown-info/breakdown-info.component';
import {NgScrollbarModule} from "ngx-scrollbar";



@NgModule({
  declarations: [
    ProductCreatePageComponent,
    ProductIdentityFormComponent,
    ProductSummaryComponent,
    ProductBreakdownComponent,
    ProductBreakdownGroupComponent,
    ProductLaborComponent,
    ProductLaborItemComponent,
    ProductMainPageComponent,
    ProductCardComponent,
    ProductTableHeaderComponent,
    ProductViewPageComponent,
    ProductInfoComponent,
    BreakdownInfoComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UIModule,
        ProductRoutingModule,
        NgSelectModule,
        NgScrollbarModule
    ]
})
export class ProductModule { }
