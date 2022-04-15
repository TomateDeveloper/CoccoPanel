import {Component} from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent {

  public notificationMenuActive: boolean = false;

  public switchNotifications(): void {
    this.notificationMenuActive = !this.notificationMenuActive;
  }

}
