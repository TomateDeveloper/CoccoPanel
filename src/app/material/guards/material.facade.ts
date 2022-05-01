import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Material} from "../store/material.model";
import {select, Store} from "@ngrx/store";
import {list} from "../store/material.actions";
import {AppState} from "../../store/app.state";
import {getMaterials} from "../store/material.selector";


@Injectable({
    providedIn: 'root'
})
export class MaterialFacade {

    readonly materials: Observable<Material[]>;

    constructor(private store: Store<AppState>) {
        this.materials = store.pipe(select(getMaterials));
    }

    load() {
        this.store.dispatch(list({query: {}}));
    }

}