import {AbstractControl, FormGroup} from '@angular/forms';

/**
 * Abstract class where a basic reactive form and a basic
 * validation method is provided in order to keep clean the
 * template.
 */
export abstract class AbstractValidationComponent {

  protected constructor(private form: FormGroup) {}

  /**
   * Check if control is correctly validated from a field.
   * @param field         Will be validated from the
   *                     corresponding form.
   */
  public validate(field: string): boolean {
    const control: AbstractControl = this.form.get(field) as AbstractControl;
    if (!control) return false;
    return control.invalid && control.touched;
  }

  /**
   * Obtain the provided form and prevent duplicated code inside the
   * child classes.
   */
  public getForm(): FormGroup {
    return this.form;
  }

}
