import {Component} from '@angular/core';
import {AbstractCheckProvider} from "../../../shared/utilities/abstract-check.provider";

@Component({
  selector: 'app-material-table-header',
  templateUrl: './material-table-header.component.html',
  styleUrls: ['./material-table-header.component.scss']
})
export class MaterialTableHeaderComponent extends AbstractCheckProvider {
  constructor() {
    super();
  }
}
