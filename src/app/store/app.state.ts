import {AUTH_STATE_NAME} from "../auth/store/auth.selector";
import {AuthReducer} from "../auth/store/auth.reducer";
import {AuthState} from "../auth/store/auth.state";
import {MATERIAL_STATE_NAME} from "../material/store/material.selector";
import {MaterialState} from "../material/store/material.state";
import {MaterialReducer} from "../material/store/material.reducer";
import {PRODUCT_STATE_NAME} from "../product/store/product.selector";
import {ProductState} from "../product/store/product.state";
import {ProductReducer} from "../product/store/product.reducer";

export interface AppState {
    [AUTH_STATE_NAME]: AuthState;
    [MATERIAL_STATE_NAME]: MaterialState;
    [PRODUCT_STATE_NAME]: ProductState;
}

export const appReducer = {
    [AUTH_STATE_NAME]: AuthReducer,
    [MATERIAL_STATE_NAME]: MaterialReducer,
    [PRODUCT_STATE_NAME]: ProductReducer,
};