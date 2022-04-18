import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {InfoModalComponent} from "../../../shared/ui/components/modal/info-modal/info-modal.component";

@Component({
  selector: 'app-generate-product-modal',
  templateUrl: './generate-product-modal.component.html',
  styleUrls: ['./generate-product-modal.component.scss']
})
export class GenerateProductModalComponent {

  @ViewChild('generateProductModal') public generateModal?: InfoModalComponent;
  @Output() public createConfirm: EventEmitter<void> = new EventEmitter<void>();

  open(): void {
    this.generateModal!.open();
  }

  generate(): void {

  }

}
