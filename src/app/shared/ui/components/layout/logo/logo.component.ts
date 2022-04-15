import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() public color: string = "#31355d";
  @Input() public dot: string = "#ed6f96";
  @Input() public width: number = 500;
}
