import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent {

  public active: boolean = false;

  public switchNotifications(): void {
    this.active = !this.active;
  }

}
