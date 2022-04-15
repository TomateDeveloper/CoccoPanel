import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {InfoModalComponent} from "../info-modal/info-modal.component";

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
  @ViewChild('confirmModal') public  confirmModal?: InfoModalComponent;
  @Input() public image: string = "assets/img/alert.png";
  @Output() public confirm: EventEmitter<void> = new EventEmitter<void>();

  open(): void {
    this.confirmModal!.open();
  }
}
