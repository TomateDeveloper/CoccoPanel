import {AUTH_STATE_NAME} from "../auth/store/auth.selector";
import {AuthReducer} from "../auth/store/auth.reducer";
import {AuthState} from "../auth/store/auth.state";
import {MATERIAL_STATE_NAME} from "../material/store/material.selector";
import {MaterialState} from "../material/store/material.state";
import {MaterialReducer} from "../material/store/material.reducer";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState;
    [MATERIAL_STATE_NAME]: MaterialState;
}

export const appReducer = {
    [AUTH_STATE_NAME]: AuthReducer,
    [MATERIAL_STATE_NAME]: MaterialReducer,
};