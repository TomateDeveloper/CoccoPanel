import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";
import {FormUtilities} from "../../../shared/abstract/form-utilities";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {Material} from "../../../material/store/material.model";

@Component({
  selector: 'app-create',
  templateUrl: './product-create-page.component.html',
  styleUrls: ['./product-create-page.component.scss']
})
export class ProductCreatePageComponent {

  public createForm: FormGroup;

  public validationHelper = ValidationUtilities;
  public productHelper = ProductUtilities;
  public formHelper = FormUtilities;

  public material: Material[] = [
    {
      id: "0123456789abcdef",
      name: "Demo",
      measure: 140,
      price: 28000
    } as any,
    {
      id: "abcdef0123456789",
      name: "Demo 2",
      measure: 180,
      price: 24000
    }as any
  ];

  constructor() {
    this.createForm = this.initializeForm();
  }

  /**
   * Initialize a form with the required data and validation
   * in order to make the technical sheet of the product
   * assembly work.
   */
  public initializeForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(
          null,
          [Validators.required, Validators.minLength(5)]
      ),
      reference: new FormControl(
          null,
          [Validators.required, Validators.minLength(5)]
      ),
      breakdownGroup: new FormArray([ProductUtilities.initBreakdownGroup()]),
      labors: new FormArray([ProductUtilities.initLabor()])
    });
  }

  /**
   * Save item and store it into database.
   */
  public saveForm(): void {
    console.log(this.createForm.value);
  }

  /**
   * Push a new breakdown group into the actual form.
   */
  public addBreakdownGroup(): void {
    const breakdownGroup: FormArray = FormUtilities.getArrayFromControl(this.createForm.get('breakdownGroup')!);
    breakdownGroup.push(ProductUtilities.initBreakdownGroup());
  }

  /**
   * Push a new breakdown group into the actual form.
   */
  public addLabor(): void {
    const laborGroup: FormArray = FormUtilities.getArrayFromControl(this.createForm.get('labors')!);
    laborGroup.push(ProductUtilities.initLabor());
  }

  /**
   * Remove a breakdown group from an indicated position
   * of the array.
   * @param index position to remove
   */
  public removeBreakdownGroup(index: number): void {
    const breakdownGroup: FormArray = FormUtilities.getArrayFromControl(this.createForm.get('breakdownGroup')!);
    breakdownGroup.removeAt(index);
  }

}
