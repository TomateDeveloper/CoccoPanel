import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './group-main-page.component.html',
  styleUrls: ['./group-main-page.component.scss']
})
export class GroupMainPageComponent {

  constructor(private router: Router) {}

  navigateCreation() {
    this.router.navigate(['/groups/create']);
  }

}
