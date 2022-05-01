import {Component, Input} from '@angular/core';
import {Material} from "../../store/material.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {focusMaterial} from "../../store/material.actions";

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent {

  @Input() public material!: Material;

  constructor(private store: Store<AppState>) {}

  public updateCheck(checked: boolean): void {
    this.store.dispatch(
        focusMaterial({
            material: {
                id: this.material.id,
                changes: {
                    selected: checked
                }
            }
        })
    );
  }

}
