import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-creation-confirm',
  templateUrl: './user-creation-confirm.component.html',
  styleUrls: ['./user-creation-confirm.component.scss']
})
export class UserCreationConfirmComponent {

  @ViewChild('userCreationConfirmModal') public helpModal?: Component;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.helpModal, { centered: true });
  }

}
