import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {FormUtilities} from "../../../shared/abstract/form-utilities";

@Component({
  selector: 'app-product-labor',
  templateUrl: './product-labor.component.html',
  styleUrls: ['./product-labor.component.scss']
})
export class ProductLaborComponent {

  @Input() public laborGroup!: FormGroup;
  public validationHelper = ValidationUtilities;
  public formHelper = FormUtilities;
  @Output('addLabor') public eventEmitter: EventEmitter<void>;

  constructor() {
    this.eventEmitter = new EventEmitter<void>();
  }

  /**
   * Emit add new labor event for the product.
   */
  public emitAddEvent(): void {
    this.eventEmitter.emit();
  }

  /**
   * Remove a labor group from an indicated position
   * of the array.
   * @param index position to remove
   */
  public removeLaborGroup(index: number): void {
    const laborGroup: FormArray = FormUtilities.getArrayFromControl(this.laborGroup!);
    laborGroup.removeAt(index);
  }

}
