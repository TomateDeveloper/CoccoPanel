import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent {

  @ViewChild('modal') public helpModal?: Component;
  @Input() public image: string = "";
  @Input() public alt: string = "";
  @Input() public title: string = "";
  @Input() public content: any;
  @Input() public firstButton: string = "";
  @Input() public firstClass: string = "";
  @Input() public secondButton: string = "";
  @Input() public secondClass: string = "";
  @Output() public firstClickAction: EventEmitter<void> = new EventEmitter<void>();
  @Output() public secondClickAction: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(this.helpModal, { centered: true });
  }

  close() {
    this.modalService.dismissAll();
  }

}
