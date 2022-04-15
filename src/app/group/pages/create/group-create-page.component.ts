import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './group-create-page.component.html',
  styleUrls: ['./group-create-page.component.scss']
})
export class GroupCreatePageComponent implements OnInit {

  public color: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
