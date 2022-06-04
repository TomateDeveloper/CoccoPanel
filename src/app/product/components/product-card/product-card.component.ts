import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {Product} from "../../store/product.model";
import {focusProduct} from "../../store/product.actions";
import {Router} from "@angular/router";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";
import {Material} from "../../../material/store/material.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() public product!: Product;
  public populateError: boolean = false;

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

  public getPrice(): number {
    const pricing = ProductUtilities.getFullProductValue(this.product);
    this.populateError = pricing.material === -1;
    return (pricing.labor as number) + (pricing.material);
  }

}
