import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {Material} from "../../../material/store/material.model";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";
import {FormUtilities} from "../../../shared/abstract/form-utilities";
import {TabUtilities} from "../../../shared/utilities/tabUtilities";

@Component({
  selector: 'app-product-breakdown',
  templateUrl: './product-breakdown.component.html',
  styleUrls: ['./product-breakdown.component.scss']
})
export class ProductBreakdownComponent {

  @Input() public breakdown!: AbstractControl;
  @Input() public breakdownGroup!: FormGroup;
  @Input() public materials: Material[];
  @Input() public listIndex!: number;
  @Input() public parentIndex!: number;
  @Output('remove') public eventEmitter: EventEmitter<void>;

  public validation = ValidationUtilities;
  public productHelper = ProductUtilities;
  public formHelper = FormUtilities;
  public tabUtilities = TabUtilities;

  constructor() {
    this.materials = [];
    this.eventEmitter = new EventEmitter<void>();
  }

  public getForm(): FormGroup {
    return this.formHelper.getGroupFromAbstract(this.breakdown);
  }

  /**
   * Emit removal event in order to communicate with breakdown group.
   */
  public emitRemovalEvent(): void {
    this.eventEmitter.emit();
  }

}
