import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() public title: string = "Breadcrumb";
  @Input() public sub: string = "Awesome breadcrumb";
  @Input() public button: string = "";
  @Output() public clickAction: EventEmitter<void> = new EventEmitter<void>();
}
