import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Material} from "../../store/material.model";
import {MaterialFacade} from "../../guards/material.facade";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {deleteAction, focusAll} from "../../store/material.actions";
import {getFirstSelected} from "../../store/material.selector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './material-main-page.component.html',
  styleUrls: ['./material-main-page.component.scss']
})
export class MaterialMainPageComponent implements OnInit {

  public materials!: Observable<Material[]>;

  constructor(private materialFacade: MaterialFacade, private store: Store<AppState>, private router: Router) {
  }

  public create(): void {
    this.router.navigate(['/materials/create']);
  }

  public ngOnInit(): void {
    this.materials = this.materialFacade.materials;
  }

  public selectAll(event: boolean): void {
    this.store.dispatch(focusAll({selected: event}));
  }

  public deleteSelected(): void {
    this.store.dispatch(deleteAction());
  }

  public edit(): void {
    this.store.select(getFirstSelected).subscribe(async selection => {
      try {
        await this.router.navigate(['/materials/edit/' + selection.id]);
      } catch (e) {
        console.log(e);
        //TODO: Create resilience system
      }

    })
  }

}
