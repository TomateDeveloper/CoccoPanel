import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {InfoModalComponent} from "../../../shared/ui/components/modal/info-modal/info-modal.component";

@Component({
  selector: 'app-user-creation-help',
  templateUrl: './user-creation-help.component.html',
  styleUrls: ['./user-creation-help.component.scss']
})
export class UserCreationHelpComponent {

  @ViewChild('userCreationHelpModal') public helpModal?: InfoModalComponent;

  constructor(private router: Router) {}

  navigateToContact(): void {
    this.router.navigate(['/contacts/create']);
  }

  open(): void {
    this.helpModal!.open();
  }


}
