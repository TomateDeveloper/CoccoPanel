import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {ModalConfirmComponent} from "../../../shared/ui/components/modal/modal-confirm/modal-confirm.component";
import {create} from "../../store/material.actions";

@Component({
  selector: 'app-create',
  templateUrl: './material-create-page.component.html',
  styleUrls: ['./material-create-page.component.scss']
})
export class MaterialCreatePageComponent {

  public createForm: FormGroup;
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

  constructor(private store: Store<AppState>) {
    this.createForm = this.initializeForm();
  }

  public initializeForm(): FormGroup {
    return new FormGroup({
      measurable: new FormControl(false),
      name: new FormControl(
          '',
          [Validators.required, Validators.minLength(3)]
      ),
      price: new FormControl(
          0,
          [Validators.required]
      ),
      providers: new FormControl([], []),
      length: new FormControl(0),
    });
  }

  public isMeasurable(): boolean {
    return this.createForm.value.measurable;
  }

  public submit(): void {
    this.confirmModal!.close();
    this.store.dispatch(create({material: this.createForm.value}));
  }

}
