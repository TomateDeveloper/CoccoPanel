import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() public icon: string = "";
  @Input() public placeholder: string = "";
  @Input() public type: string = "";

  public focus: boolean = false;
}
