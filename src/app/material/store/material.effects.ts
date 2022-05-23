import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MaterialService} from "./material.service";
import {
    create,
    createError,
    createSuccess,
    deleteAction,
    get, getError,
    getSuccess,
    list,
    listError,
    listSuccess, update, updateSuccess
} from "./material.actions";
import {catchError, empty, exhaustMap, map, of, tap} from "rxjs";
import {Router} from "@angular/router";

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

    public delete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteAction)
        )
    );

    public get$ = createEffect(() =>
        this.actions$.pipe(
            ofType(get),
            exhaustMap((action) => this.materialService.get(action.id)
                .pipe(
                    map(material => getSuccess({material})),
                    catchError((error) => of(getError(error)))
                )
            )
        )
    );

    public update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(update),
            exhaustMap((action) => this.materialService.update(action.material)
                .pipe(
                    map(material => updateSuccess({material})),
                    catchError((error) => of(getError(error)))
                )
            )
        )
    );

    public writeSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(...[createSuccess, updateSuccess]),
            tap((action) => {
                this.router.navigateByUrl('/materials');
            })
        ),
        { dispatch: false }
    );

}