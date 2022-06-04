import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
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
  @Output('removeLabor') public eventEmitter: EventEmitter<void>;
  public validation = ValidationUtilities;

  constructor() {
    this.eventEmitter = new EventEmitter<void>();
  }

  public getForm(): FormGroup {
    return this.formHelper.getGroupFromAbstract(this.laborItem);
  }

  /**
   * Emit removal event for the labor item.
   */
  public emitRemovalEvent(): void {
    this.eventEmitter.emit();
  }


  public getErrors(): string {
    return JSON.stringify(this.getForm().errors);
  }

}
