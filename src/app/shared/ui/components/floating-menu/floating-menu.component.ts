import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss']
})
export class FloatingMenuComponent {
  @Input() public active: boolean = false;
}
