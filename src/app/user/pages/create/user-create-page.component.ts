import { Component, OnInit } from '@angular/core';
import {
  CountryISO,
} from "ngx-intl-tel-input";

@Component({
  selector: 'app-create',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent implements OnInit {

  public CountryISO: any = CountryISO;

  public groupMock: any[] = [
    {
      id: "1",
      icon: "uil uil-star",
      name: "Administrador"
    },
    {
      id: "1",
      icon: "uil uil-star",
      name: "Quaility Analysis"
    },
    {
      id: "1",
      icon: "uil uil-user",
      name: "Usuario"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
