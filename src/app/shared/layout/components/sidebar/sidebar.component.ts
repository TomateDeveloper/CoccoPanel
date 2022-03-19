import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public profileExpanded: boolean = false;

  public switchStatus(): void {
    this.profileExpanded = !this.profileExpanded;
  }

}
