import {Component} from '@angular/core';
import {MenuItem} from "../../menu-item.model";
import {MENU} from "../../registry";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public groups: MenuItem[] = MENU;

  constructor(private router: Router) { }

  /**
   * Retrieves if actual route is active
   */
  public isActive(item: MenuItem): boolean {
    const url = this.router.url;
    return item.link === url;
  }

  public navigate(route: string): void {
    this.router.navigate([route]);
  }

}
