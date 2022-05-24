import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Material} from "../../../material/store/material.model";
import {MaterialFacade} from "../../../material/guards/material.facade";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {Router} from "@angular/router";
import {deleteAction, focusAll} from "../../../material/store/material.actions";
import {getFirstSelected} from "../../../material/store/material.selector";
import {Product} from "../../store/product.model";
import {ProductFacade} from "../../guards/product.facade";

@Component({
  selector: 'app-product-main-page',
  templateUrl: './product-main-page.component.html',
  styleUrls: ['./product-main-page.component.scss']
})
export class ProductMainPageComponent implements OnInit {

  public products!: Observable<Product[]>;

  constructor(private productFacade: ProductFacade, private store: Store<AppState>, private router: Router) {
  }

  public create(): void {
    this.router.navigate(['/products/create']);
  }

  public ngOnInit(): void {
    this.products = this.productFacade.products;
  }

  public selectAll(event: boolean): void {
    this.store.dispatch(focusAll({selected: event}));
  }

  public deleteSelected(): void {
    this.store.dispatch(deleteAction());
  }

  public edit(): void {
    this.store.select(getFirstSelected).subscribe(async selection => {
      try {
        await this.router.navigate(['/products/edit/' + selection.id]);
      } catch (e) {
        console.log(e);
        //TODO: Create resilience system
      }
    })
  }
}
