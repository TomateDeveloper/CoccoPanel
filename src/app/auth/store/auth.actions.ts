import {createAction, props} from "@ngrx/store";

export enum AuthActionTypes {
    LOGIN = '[Auth] LOGIN',
    LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS',
    LOGIN_ERROR = '[Auth] LOGIN_ERROR',
}

export const login = createAction(
    AuthActionTypes.LOGIN,
    props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ user: any, redirect: string }>()
);


export const loginError = createAction(
    AuthActionTypes.LOGIN_ERROR,
    props<{ message: string }>()
);
