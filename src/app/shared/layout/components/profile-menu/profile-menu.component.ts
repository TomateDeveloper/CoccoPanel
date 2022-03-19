import {Component, Input} from '@angular/core';
import {MenuItem} from "../../menu-item.model";
import {PROFILE_MENU} from "../../registry";

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  public menu: MenuItem[] = PROFILE_MENU;
  @Input() public active: boolean = false;
}
