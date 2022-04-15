import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() public id: string = "";
  @Input() public icon: string = "";
  @Input() public placeholder: string = "";
  @Input() public type: string = "";
  @Input() public label: string = "";
  @Input() public tabIndex: number = 0;
  @Input() public help: string = "";
  @Input() public standaloneHelp: boolean = false;

  public focus: boolean = false;

}
