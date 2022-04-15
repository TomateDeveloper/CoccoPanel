import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {

  public active: boolean = false;

  public switchActive(): void {
    this.active = !this.active;
  }
}
