import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {InfoModalComponent} from "../../../shared/ui/components/modal/info-modal/info-modal.component";

@Component({
  selector: 'app-group-creation-confirm',
  templateUrl: './group-creation-confirm.component.html',
  styleUrls: ['./group-creation-confirm.component.scss']
})
export class GroupCreationConfirmComponent {

  @ViewChild('groupCreationConfirmModal') public helpModal?: InfoModalComponent;
  @Output() public createConfirm: EventEmitter<void> = new EventEmitter<void>();

  open(): void {
    this.helpModal!.open();
  }

  create(): void {
    this.createConfirm.emit();
  }


}
