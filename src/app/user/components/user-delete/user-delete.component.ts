import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {

  @ViewChild('userDeleteModal') public deleteModal?: Component;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.deleteModal, { centered: true });
  }

}
