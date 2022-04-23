import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {MaterialService} from "./material.service";
import {create, createError, createSuccess} from "./material.actions";
import {catchError, exhaustMap, map, of} from "rxjs";

@Injectable()
export class MaterialEffects {

    constructor(
        private actions$: Actions,
        private materialService: MaterialService,
        private router: Router
    ) {}

    public create$ = createEffect(() =>
        this.actions$.pipe(
            ofType(create),
            exhaustMap((action) => this.materialService.create(action.material)
                .pipe(
                    map(material => {

                        console.log(material);
                        return createSuccess({material});
                    }),
                    catchError(error => {
                        console.log(error);
                        return of(createError(error));
                    })
                )
            )
        )
    );

}