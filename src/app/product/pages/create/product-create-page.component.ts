import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductUtilities} from "../../../shared/abstract/product-utilities";
import {FormUtilities} from "../../../shared/abstract/form-utilities";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {Material} from "../../../material/store/material.model";
import {MaterialFacade} from "../../../material/guards/material.facade";
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {create} from "../../store/product.actions";
import {BreakdownGroup} from "../../store/product.model";
import {MATERIAL_STATE_NAME} from "../../../material/store/material.selector";

@Component({
  selector: 'app-create',
  templateUrl: './product-create-page.component.html',
  styleUrls: ['./product-create-page.component.scss']
})
export class ProductCreatePageComponent implements OnInit {

  public createForm: FormGroup;
  public formHelper = FormUtilities;

  public material: Material[] = [];

  constructor(private materialFacade: MaterialFacade, private store: Store<AppState>) {
    this.createForm = this.initializeForm();
  }

  ngOnInit(): void {
    this.materialFacade.load({});
    this.materialFacade.materials.subscribe(material => {
      this.material = material;
    })
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
    this.store.dispatch(create(
        {
          product: {
            ...this.createForm.value,
            breakdownGroup: (this.createForm.value.breakdownGroup as BreakdownGroup[]).map(breakdownGroup => this.restoreReferences(breakdownGroup))
          }
        }
    ));
  }

  private restoreReferences(group: BreakdownGroup): BreakdownGroup {
    return {
      ...group,
      breakdowns: group.breakdowns.map(breakdown =>
          ({...breakdown, material: {id: breakdown.material as any, databaseCollection: MATERIAL_STATE_NAME}})
      )
    };
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
