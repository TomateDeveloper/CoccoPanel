import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-responsive-header',
  templateUrl: './responsive-header.component.html',
  styleUrls: ['./responsive-header.component.scss']
})
export class ResponsiveHeaderComponent {
  @Input() public active: boolean = false;
  @Output() public change: EventEmitter<void> = new EventEmitter<void>();

  public notificationActive: boolean = false;

  public switchNotifications(): void {
    this.notificationActive = !this.notificationActive;
  }

}
