import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() public active: boolean = false;
  @Input() public icon: string = "";
  @Input() public name: string = "";
  @Output() public clickAction: EventEmitter<void> = new EventEmitter<void>();
}

