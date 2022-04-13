import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {InfoModalComponent} from "../../../shared/ui/components/info-modal/info-modal.component";

@Component({
  selector: 'app-user-creation-confirm',
  templateUrl: './user-creation-confirm.component.html',
  styleUrls: ['./user-creation-confirm.component.scss']
})
export class UserCreationConfirmComponent {

  @ViewChild('userCreationConfirmModal') public helpModal?: InfoModalComponent;
  @Output() public createConfirm: EventEmitter<void> = new EventEmitter<void>();

  open(): void {
    this.helpModal!.open();
  }

  create(): void {
    this.createConfirm.emit();
  }

}
