import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

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
  @Input() public controlName: string = "";
  @Input() public controlGroup?: FormGroup;
  @Input() public invalid: boolean = true;
  @Input() public invalidHelp: string = "";
  @Input() public standaloneHelp: boolean = false;

  public focus: boolean = false;

}
