import {AbstractControl, FormArray, FormGroup} from "@angular/forms";

export class FormUtilities {

  /**
   * Utility method that receives any type of group/control and
   * transforms in a {@link FormArray}.
   * @param control to be converted
   */
  public static getArrayFromControl(control: AbstractControl): FormArray {
    return control as FormArray;
  }

  /**
   * Utility method that receives any type of control and
   * transforms in a {@link FormGroup}.
   * @param control to be converted
   */
  public static getGroupFromAbstract(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }


}
