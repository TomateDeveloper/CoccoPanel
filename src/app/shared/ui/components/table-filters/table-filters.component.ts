import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-table-filters',
  templateUrl: './table-filters.component.html',
  styleUrls: ['./table-filters.component.scss']
})
export class TableFiltersComponent {
  @Output() public deleteAction: EventEmitter<void> = new EventEmitter<void>();
}
