import {Component, ViewChild} from '@angular/core';
import {InfoModalComponent} from "../../../shared/ui/components/modal/info-modal/info-modal.component";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {

  @ViewChild('userDeleteModal') public deleteModal?: InfoModalComponent;

  open() {
    this.deleteModal!.open();
  }

  confirmDelete() {

  }

}
