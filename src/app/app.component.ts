import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public active: boolean = false;

  public switchActive(): void {
    this.active = !this.active;
  }

}
