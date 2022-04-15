import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationWidgetComponent} from './components/notification-widget/notification-widget.component';


@NgModule({
  declarations: [
    NotificationWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationWidgetComponent
  ]
})
export class NotificationModule { }
