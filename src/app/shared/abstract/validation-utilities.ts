import {AbstractControl, FormGroup} from "@angular/forms";

export class ValidationUtilities {

  /**
   * Validate if field is invalid and touched to give feedback.
   * @param form to validate
   * @param field to search
   */
  public static validate(form: FormGroup, field: string): boolean {
    const control: AbstractControl = form.get(field) as AbstractControl;
    if (!control) return false;
    return control.invalid && control.touched;
  }

  /**
   * Validate if field is invalid and touched to give feedback.
   * @param control to validate
   * @param field to search
   */
  public static validateAbstract(control: AbstractControl, field: string): boolean {
    return control.get(field)!.invalid && control.get(field)!.touched;
  }

}
