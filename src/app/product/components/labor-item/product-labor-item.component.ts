import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormUtilities} from "../../../shared/abstract/form-utilities";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {TabUtilities} from "../../../shared/utilities/tabUtilities";

@Component({
  selector: 'app-product-labor-item',
  templateUrl: './product-labor-item.component.html',
  styleUrls: ['./product-labor-item.component.scss']
})
export class ProductLaborItemComponent {

  @Input() public labor!: FormGroup;
  @Input() public laborItem!: FormGroup;
  @Input() public listIndex!: number;
  public formHelper = FormUtilities;
  @Output('removeLabor') public eventEmitter: EventEmitter<void>;
  public validation = ValidationUtilities;
  public tabUtilities = TabUtilities;

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

}
