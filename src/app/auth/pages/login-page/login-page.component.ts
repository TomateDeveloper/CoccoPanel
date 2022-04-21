import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
      private store: Store<any>
  ) { }

  dispatch(): void {
  }

}
