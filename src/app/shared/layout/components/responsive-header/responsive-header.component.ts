import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from "../../menu-item.model";
import {PROFILE_MENU} from "../../registry";

@Component({
  selector: 'app-responsive-header',
  templateUrl: './responsive-header.component.html',
  styleUrls: ['./responsive-header.component.scss']
})
export class ResponsiveHeaderComponent {

  @Input() public headerActive: boolean = false;
  @Output() public change: EventEmitter<void> = new EventEmitter<void>();
  public menu: MenuItem[] = PROFILE_MENU;

  public notificationActive: boolean = false;
  public searchActive: boolean = false;
  public profileActive: boolean = false;

  public switchNotifications(): void {
    this.searchActive = false;
    this.profileActive = false;
    this.notificationActive = !this.notificationActive;
  }

  public switchSearch(): void {
    this.notificationActive = false;
    this.profileActive = false
    this.searchActive = !this.searchActive;
  }

  public switchProfile(): void {
    this.notificationActive = false;
    this.searchActive = false;
    this.profileActive = !this.profileActive;
  }


}
