import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {Product} from "../../store/product.model";
import {focusProduct} from "../../store/product.actions";
import {Router} from "@angular/router";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() public product!: Product;
  public productHelper = ProductUtilities;

  constructor(private store: Store<AppState>, private router: Router) {}

  public updateCheck(checked: boolean): void {
    this.store.dispatch(
        focusProduct({
          product: {
            id: this.product.id,
            changes: {
              selected: checked
            }
          }
        })
    );
  }

  public navigateToProduct(id: string): void {
    this.router.navigate(['/products/' + id]);
  }

}
