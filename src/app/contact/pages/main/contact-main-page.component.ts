import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './contact-main-page.component.html',
  styleUrls: ['./contact-main-page.component.scss']
})
export class ContactMainPageComponent {

  constructor(private router: Router) {}

  navigateCreation() {
    this.router.navigate(['/groups/create']);
  }

}
