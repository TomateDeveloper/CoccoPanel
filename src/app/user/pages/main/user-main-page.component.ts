import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.scss']
})
export class UserMainPageComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateCreation(): void {
    this.router.navigate(['/users/create']);
  }
}


