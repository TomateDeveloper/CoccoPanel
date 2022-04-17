import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Material} from "../../../material/store/material.dto";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent {
  @Input() public form!: FormGroup;
  @Input() public materials: Material[] = [];
  public productHelper = ProductUtilities;
}
