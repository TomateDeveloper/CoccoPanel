import {Component, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-creation-help',
  templateUrl: './user-creation-help.component.html',
  styleUrls: ['./user-creation-help.component.scss']
})
export class UserCreationHelpComponent {

  @ViewChild('userCreationHelpModal') public helpModal?: Component;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.helpModal, { centered: true });
  }

}
