import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-creation-help',
  templateUrl: './user-creation-help.component.html',
  styleUrls: ['./user-creation-help.component.scss']
})
export class UserCreationHelpComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
