import {AUTH_STATE_NAME} from "../auth/store/auth.selector";
import {AuthReducer} from "../auth/store/auth.reducer";
import {AuthState} from "../auth/store/auth.state";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
    [AUTH_STATE_NAME]: AuthReducer,
};