import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-bi-selector',
  templateUrl: './bi-selector.component.html',
  styleUrls: ['./bi-selector.component.scss']
})
export class BiSelectorComponent {
  @Input() public id: string = "";
  @Input() public firstOption: string = "1";
  @Input() public secondOption: string = "2";
  @Input() public controlName: string = "";
  @Input() public controlGroup?: FormGroup;
}
