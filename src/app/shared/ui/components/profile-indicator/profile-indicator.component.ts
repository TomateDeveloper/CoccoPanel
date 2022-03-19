import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile-indicator',
  templateUrl: './profile-indicator.component.html',
  styleUrls: ['./profile-indicator.component.scss']
})
export class ProfileIndicatorComponent {

  @Output() public clickAction: EventEmitter<void> = new EventEmitter<void>();
  @Input() public active: boolean = false;

  public switchStatus(): void {
    this.clickAction.emit();
  }

}
