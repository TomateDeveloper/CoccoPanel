import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {InfoModalComponent} from "../../../shared/ui/components/modal/info-modal/info-modal.component";

@Component({
  selector: 'app-material-create-help-modal',
  templateUrl: './material-create-help-modal.component.html',
  styleUrls: ['./material-create-help-modal.component.scss']
})
export class MaterialCreateHelpModalComponent {

  @ViewChild('materialCreateHelpModal') public helpModal?: InfoModalComponent;
  @Output() public createConfirm: EventEmitter<void> = new EventEmitter<void>();

  open(): void {
    this.helpModal!.open();
  }

}
