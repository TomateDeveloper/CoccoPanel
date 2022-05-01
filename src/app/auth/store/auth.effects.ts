import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {login, loginError, loginSuccess} from "./auth.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) {}

    public login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            exhaustMap((action) =>
                this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        return loginSuccess({user: data, redirect: ""});
                    }),
                    catchError((message) => {
                        return of(loginError(message));
                    })
                )
            )
        )
    );

    public loginRedirect$ = createEffect( () =>
        this.actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {

                if (action.redirect === '') {
                    return;
                }

                this.router.navigate([action.redirect]); //TODO: Handle this action error

            })
        )
    );

}