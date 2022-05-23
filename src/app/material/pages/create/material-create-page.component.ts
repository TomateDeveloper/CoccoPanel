import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {ModalConfirmComponent} from "../../../shared/ui/components/modal/modal-confirm/modal-confirm.component";
import {create, update} from "../../store/material.actions";
import {Router} from "@angular/router";
import {getActiveMaterial} from "../../store/material.selector";
import {EditableCreateComponent} from "../../../shared/abstract/editable-create.component";3

@Component({
  selector: 'app-create',
  templateUrl: './material-create-page.component.html',
  styleUrls: ['./material-create-page.component.scss']
})
export class MaterialCreatePageComponent extends EditableCreateComponent {

  @ViewChild('confirmCreate') public confirmModal?: ModalConfirmComponent;
  public validate = ValidationUtilities.validate;

  public dummyProviders: any[] =  [
    {
      name: 'El Trebol',
      id: '10'
    },
    {
      name: 'Orion',
      id: '10'
    }
  ];

  constructor(private store: Store<AppState>, private router: Router) {

    super('/materials/edit', MaterialCreatePageComponent.initializeForm());
    this.checkEditMode(this.router.url);

    if (this.hasEditMode()) {
      this.store.select(getActiveMaterial).subscribe((material: any) => {
        if (material) {
          this.patchFormValues(material);
        }
      });
    }

  }

  public static initializeForm(): FormGroup {
    return new FormGroup({
      measurable: new FormControl(false),
      name: new FormControl(
          '',
          [Validators.required, Validators.minLength(3)]
      ),
      price: new FormControl(
          0,
          [Validators.required, Validators.pattern(/^[1-9]\d*$/)]
      ),
      providers: new FormControl([]),
      length: new FormControl(0, Validators.pattern(/^[0-9]\d*$/)),
    });
  }

  public isMeasurable(): boolean {
    return this.getForm().value.measurable;
  }

  public submit(): void {

    this.confirmModal!.close();

    if (this.hasEditMode()) {
      this.store.dispatch(update({material: {...this.getForm().value, id: this.getEditingId()}}));
    } else {
      this.store.dispatch(create({material: this.getForm().value}));
    }

  }

}
