import {Component, ViewChild} from '@angular/core';
import {CountryISO,} from "ngx-intl-tel-input";
import {UserCreationHelpComponent} from "../../components/user-creation-help/user-creation-help.component";
import {UserCreationConfirmComponent} from "../../components/user-creation-confirm/user-creation-confirm.component";

@Component({
  selector: 'app-create',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent {

  @ViewChild(UserCreationHelpComponent) public createHelpModal!: UserCreationHelpComponent;
  @ViewChild(UserCreationConfirmComponent) public createConfirmModal!: UserCreationConfirmComponent;
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

  openCreateHelp(): void {
    this.createHelpModal!.open();
  }

  openCreateConfirm(): void {
    this.createConfirmModal!.open();
  }

}
