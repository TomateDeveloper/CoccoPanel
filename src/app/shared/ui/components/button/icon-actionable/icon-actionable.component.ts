import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-icon-actionable',
  templateUrl: './icon-actionable.component.html',
  styleUrls: ['./icon-actionable.component.scss']
})
export class IconActionableComponent {
  @Input() public active: boolean = false;
  @Input() public icon: string = "uil uil-bell";
  @Input() public indicator: string = "";
  @Input() public disabled: boolean = false;
  @Output() public clickAction: EventEmitter<void> = new EventEmitter<void>();

  public emitAction(): void {
    if (this.disabled) {
      return;
    }
    this.clickAction.emit();
  }

}
