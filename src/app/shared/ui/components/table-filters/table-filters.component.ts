import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AbstractCheckProvider} from "../../../utilities/abstract-check.provider";

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.scss']
})
export class TableFiltersComponent extends AbstractCheckProvider {

  public searchForm: FormGroup;

  constructor() {
    super();
    this.searchForm = this.initializeForm();
  }

  public initializeForm(): FormGroup {
    return new FormGroup({
      search: new FormControl(null)
    });
  }

}
