import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AbstractCheckProvider} from "../../../utilities/abstract-check.provider";
import {Observable} from "rxjs";
import {Model, Selectable} from "../../../../core/model/model.dto";

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.scss']
})
export class TableFiltersComponent extends AbstractCheckProvider implements OnInit {

  public searchForm: FormGroup;
  public focused: number = 0;
  @Input() public focusedItems!: Observable<Selectable[]>;

  constructor() {
    super();
    this.searchForm = this.initializeForm();
  }

  public ngOnInit(): void {
    this.focusedItems.subscribe(data => {
      this.focused = data.filter(data => data.selected).length;
    });
  }

  public initializeForm(): FormGroup {
    return new FormGroup({
      search: new FormControl(null)
    });
  }

}
