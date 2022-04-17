import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {Material} from "../../../material/store/material.dto";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";
import {FormUtilities} from "../../../shared/abstract/form-utilities";

@Component({
  selector: 'app-product-breakdown',
  templateUrl: './product-breakdown.component.html',
  styleUrls: ['./product-breakdown.component.scss']
})
export class ProductBreakdownComponent {

  @Input() public breakdown!: AbstractControl;
  @Input() public breakdownGroup!: FormGroup;
  @Input() public materials: Material[];
  @Output('remove') public eventEmitter: EventEmitter<void>;

  public validationHelper = ValidationUtilities;
  public productHelper = ProductUtilities;
  public formHelper = FormUtilities;

  constructor() {
    this.materials = [];
    this.eventEmitter = new EventEmitter<void>();
  }

  /**
   * Emit removal event in order to communicate with breakdown group.
   */
  public emitRemovalEvent(): void {
    this.eventEmitter.emit();
  }

}
