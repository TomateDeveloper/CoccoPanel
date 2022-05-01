import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() public id: string = "";
  @Input() public label: string = "";
  @Input() public active: boolean = false;
  @Output() public checkChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public updateValue(): void {
    this.active = !this.active;
    this.checkChange.emit(this.active);
  }

}
