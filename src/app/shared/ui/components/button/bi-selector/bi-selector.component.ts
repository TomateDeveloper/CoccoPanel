import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bi-selector',
  templateUrl: './bi-selector.component.html',
  styleUrls: ['./bi-selector.component.scss']
})
export class BiSelectorComponent {
  @Input() public firstOption: string = "1";
  @Input() public secondOption: string = "2";
}
