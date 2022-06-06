import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {ProductService} from "./product.service";
import {create, createError, createSuccess, list, listError, listSuccess} from "./product.actions";
import {updateSuccess} from "../../material/store/material.actions";
import {Router} from "@angular/router";

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private router: Router
    ) {}

    public list$ = createEffect(() =>
        this.actions$.pipe(
            ofType(list),
            exhaustMap((action) => this.productService.query({})
                .pipe(
                    map(products => listSuccess({products})),
                    catchError((error) => of(listError(error)))
                )
            )
        )
    );

    public create$ = createEffect(() =>
        this.actions$.pipe(
            ofType(create),
            exhaustMap((action) => this.productService.create(action.product)
                .pipe(
                    map(product => createSuccess({product})),
                    catchError((error) => of(createError(error)))
                )
            )
        )
    );

    public writeSuccess$ = createEffect(() =>
            this.actions$.pipe(
                ofType(...[createSuccess, updateSuccess]),
                tap((action) => {
                    this.router.navigateByUrl('/products/view/' + (action as any).product.id);
                })
            ),
        { dispatch: false }
    );

}