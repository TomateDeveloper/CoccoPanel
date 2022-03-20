import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {
  @Input() public active: boolean = false;
  @Output() public clickAction: EventEmitter<void> = new EventEmitter<void>();
  @Input() public type: string = "collapse";

  public click(): void {
    this.clickAction.emit();
  }

}
