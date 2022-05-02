import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationUtilities} from "../../../shared/abstract/validation-utilities";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {ModalConfirmComponent} from "../../../shared/ui/components/modal/modal-confirm/modal-confirm.component";
import {create} from "../../store/material.actions";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Material} from "../../store/material.model";
import {getActiveMaterial} from "../../store/material.selector";

@Component({
  selector: 'app-create',
  templateUrl: './material-create-page.component.html',
  styleUrls: ['./material-create-page.component.scss']
})
export class MaterialCreatePageComponent {

  public createForm!: FormGroup;
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

    this.createForm = this.initializeForm();

    if (this.router.url.includes('/materials/edit')) {
      this.store.select(getActiveMaterial).subscribe(material => {
        console.log(material);
        this.createForm.setValue({...material, id: undefined});
      });
    }

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
          [Validators.required, Validators.pattern(/^[1-9]\d*$/)]
      ),
      providers: new FormControl([]),
      length: new FormControl(0, Validators.pattern(/^[1-9]\d*$/)),
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
