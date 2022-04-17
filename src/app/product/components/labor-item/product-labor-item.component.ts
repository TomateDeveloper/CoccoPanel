import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {FormUtilities} from "../../../shared/abstract/form-utilities";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";

@Component({
  selector: 'app-product-labor-item',
  templateUrl: './product-labor-item.component.html',
  styleUrls: ['./product-labor-item.component.scss']
})
export class ProductLaborItemComponent {

  @Input() public labor!: FormGroup;
  @Input() public laborItem!: FormGroup;
  public formHelper = FormUtilities;
  public validationHelper = ValidationUtilities;
  @Output('removeLabor') public eventEmitter: EventEmitter<void>;

  constructor() {
    this.eventEmitter = new EventEmitter<void>();
  }

  /**
   * Emit removal event for the labor item.
   */
  public emitRemovalEvent(): void {
    this.eventEmitter.emit();
  }

}
