import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MaterialService} from "./material.service";
import {create, createError, createSuccess, list, listError, listSuccess} from "./material.actions";
import {catchError, exhaustMap, map, of} from "rxjs";

@Injectable()
export class MaterialEffects {

    constructor(
        private actions$: Actions,
        private materialService: MaterialService
    ) {}

    public create$ = createEffect(() =>
        this.actions$.pipe(
            ofType(create),
            exhaustMap((action) => this.materialService.create(action.material)
                .pipe(
                    map(material => createSuccess({material})),
                    catchError(error => of(createError(error)))
                )
            )
        )
    );

    public list$ = createEffect(() =>
        this.actions$.pipe(
            ofType(list),
            exhaustMap((action) => this.materialService.query({})
                .pipe(
                    map(materials => listSuccess({materials})),
                    catchError((error) => of(listError(error)))
                )
            )
        )
    );

}