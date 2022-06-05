import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Material} from "../../../material/store/material.model";
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {FormUtilities} from "../../../shared/abstract/form-utilities";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";
import {TabUtilities} from "../../../shared/utilities/tabUtilities";

@Component({
  selector: 'app-product-breakdown-group',
  templateUrl: './product-breakdown-group.component.html',
  styleUrls: ['./product-breakdown-group.component.scss']
})
export class ProductBreakdownGroupComponent {

  @Input() public breakdownGroup!: FormGroup;
  @Input() public form!: FormGroup;
  @Input() public materials: Material[];
  @Input() public listIndex!: number;
  @Output('removeGroup') public eventEmitter: EventEmitter<void>;

  public validation = ValidationUtilities;
  public formHelper = FormUtilities;
  public tabUtilities = TabUtilities;

  constructor() {
    this.materials = [];
    this.eventEmitter = new EventEmitter<void>();
  }

  public getForm(): FormGroup {
    return this.formHelper.getGroupFromAbstract(this.breakdownGroup);
  }

  /**
   * Emit removal event in order to communicate with breakdown group.
   */
  public emitRemovalEvent(): void {
    this.eventEmitter.emit();
  }

  /**
   * Push a new breakdown group into the actual form.
   * @param control of breakdown group where item will be added
   */
  public addBreakdown(control: FormArray): void {
    const breakdownArray: FormArray = FormUtilities.getArrayFromControl(control.get('breakdowns')!);
    breakdownArray.push(ProductUtilities.initBreakdown());
  }

  /**
   * Remove a breakdown from an indicated position
   * of the array.
   * @param control of breakdown group where item will be removed
   * @param index position to remove
   */
  public removeBreakdown(control: AbstractControl, index: number): void {
    const breakdownGroup: FormArray = FormUtilities.getArrayFromControl(<AbstractControl>control.get('breakdowns'));
    breakdownGroup.removeAt(index);
  }

}
