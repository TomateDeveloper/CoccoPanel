import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input() public title: string = "Breadcrumb";
  @Input() public sub: string = "Awesome breadcrumb";
  @Input() public button: string = "Do something";
  @Input() public action: () => void = () => {};
}
