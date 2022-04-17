import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {FormUtilities} from "../../../shared/abstract/form-utilities";

@Component({
  selector: 'app-product-identity-form',
  templateUrl: './product-identity-form.component.html',
  styleUrls: ['./product-identity-form.component.scss']
})
export class ProductIdentityFormComponent {
  @Input() public form!: FormGroup;
  public validationHelper = ValidationUtilities;
  public formHelper = FormUtilities;
}
