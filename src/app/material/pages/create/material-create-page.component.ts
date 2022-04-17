import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './material-create-page.component.html',
  styleUrls: ['./material-create-page.component.scss']
})
export class MaterialCreatePageComponent implements OnInit {

  public dummyMaterial: any[] =  [
    {
      name: 'El Trebol',
      id: '10'
    },
    {
      name: 'Orion',
      id: '10'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
