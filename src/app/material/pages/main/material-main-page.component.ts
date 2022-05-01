import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Material} from "../../store/material.model";
import {MaterialFacade} from "../../guards/material.facade";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {focusAll} from "../../store/material.actions";

@Component({
  selector: 'app-main',
  templateUrl: './material-main-page.component.html',
  styleUrls: ['./material-main-page.component.scss']
})
export class MaterialMainPageComponent implements OnInit {

  public materials!: Observable<Material[]>;

  constructor(private materialFacade: MaterialFacade, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.materials = this.materialFacade.materials;
    this.materials.subscribe(res => {
    });
  }

  public selectAll(event: boolean): void {
    this.store.dispatch(focusAll({selected: event}));
  }

}
