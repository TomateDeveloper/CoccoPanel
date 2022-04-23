import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {FormUtilities} from "./form-utilities";
import {Material} from "../../material/store/material.model";

export class ProductUtilities {

  /**
   * Utility function to obtain area from material.
   * The measurement of the area is obtained by multiplying
   * width of the material by height (Usually 1 meter).
   * @param material
   */
  public static getAreaFromMaterial(material: Material): number {
    return material.measure * 100;
  }

  /**
   * Utility function to obtain material consume. It obtains the actual
   * consume by dividing the area of a piece (Breakdown) by the area
   * of the material, and giving an approx of the material wasted
   * by the products.
   * @param area to be calculated
   * @param material to be used
   */
  public static getMaterialConsume(area: number, material: Material): number {
    return area / this.getAreaFromMaterial(material);
  }

  /**
   * Utility function to obtain cost and consume (cm/2) of
   * the piece (Breakdown) from an {@link AbstractControl};
   * @param control where the breakdown data is obtained.
   * @param materials to filter
   */
  public static getConsumeFromControl(control: AbstractControl, materials: Material[]): {cost: number, consume: number} {

    const area: number = control.get('area') ? parseInt(control.get('area')?.value) || 0 : 0;
    const material: Material | null = this.getMaterialFromControl(control, materials);

    if (!material) {
      return {cost: 0, consume: 0};
    }

    const consume: number = this.getMaterialConsume(area, material);

    return {
      cost: consume * material.price,
      consume
    };

  }
  /**
   * Utility function to obtain selected material of
   * the piece (Breakdown) from an {@link AbstractControl};
   * @param control where the breakdown data is obtained.
   * @param materials to be filtered.
   */
  public static getMaterialFromControl(control: AbstractControl, materials: Material[]): Material | null {

    const materialId: string = control.get('material') ? control.get('material')?.value : "";

    if (!materialId) {
      return null;
    }

    return materials.filter(m => m.id === materialId)[0];

  }

  /**
   * Utility function to get material cost
   * from a {@link FormGroup}.
   * @param form to parse
   * @param materials to filter
   */
  public static getMaterialCost(form: FormGroup, materials: Material[]): number {

    const breakdownGroup: FormArray = FormUtilities.getArrayFromControl(form.get('breakdownGroup')!);

    let cost = 0;

    breakdownGroup.controls.forEach(control => {
      const breakdownControl: FormArray = FormUtilities.getArrayFromControl(control.get('breakdowns')!);
      breakdownControl.controls.forEach(breakdown => {
        cost += this.getConsumeFromControl(breakdown, materials).cost;
      });
    });

    return cost;

  }

  /**
   * Initializes a new breakdown group that must be pushed
   * into the {@link FormArray} breakdown group.
   */
  public static initBreakdownGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(
          null,
          [Validators.required, Validators.minLength(3)]
      ),
      breakdowns: new FormArray([this.initBreakdown()]),
    });
  }

  /**
   * Initializes a new breakdown that mus
   */
  public static initBreakdown(): FormGroup {
    return new FormGroup({
      mold: new FormControl(
          null,
          [Validators.required, Validators.minLength(3)]
      ),
      area: new FormControl(
          null,
          [Validators.required, Validators.pattern("^[0-9]*$")]
      ),
      material: new FormControl(
          null,
          [Validators.required, Validators.minLength(16)]
      ),
    });
  }

  public static initLabor(): FormGroup {
    return new FormGroup({
      name: new FormControl(
        null,
        [Validators.required, Validators.minLength(3)]
      ),
      price: new FormControl(
        null,
        [Validators.required, Validators.pattern("^[0-9]*$")]
      ),
    })
  }

}
