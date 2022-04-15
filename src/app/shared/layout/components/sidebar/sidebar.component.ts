import {Component} from '@angular/core';
import {BreakpointUtils} from "../../../utilities/breakpoint.utils";

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

  public getRelativeHeight(): number {
    return BreakpointUtils.getWidth() >= 768 ? 70 : 90;
  }

  public getDiscountablePixels(): number {
    return BreakpointUtils.getWidth() >= 768 ? 0 : 80;
  }

}
