import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchWidgetComponent} from './components/search-widget/search-widget.component';


@NgModule({
  declarations: [
    SearchWidgetComponent
  ],
  exports: [
    SearchWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
