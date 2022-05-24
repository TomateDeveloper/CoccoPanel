import {createReducer, on} from "@ngrx/store";
import {productAdapter, ProductState} from "./product.state";
import {focusAll, focusProduct, getSuccess, listSuccess, setActive} from "./product.actions";

const initialState = productAdapter.getInitialState();

const _productReducer = createReducer(
    initialState,
    on(listSuccess, (state, action) =>
        productAdapter.addMany(
            action.products.map(product => ({...product, selected: false})),
            state
        )
    ),
    on(focusAll, (state, action) => productAdapter.map(material => ({...material, selected: action.selected}), state)),
    on(setActive, (state, action) => ({...state, activeMaterialId: action.id})),
    on(getSuccess, (state, action) => productAdapter.addOne(action.product, state)),
    on(focusProduct, (state, action) => productAdapter.updateOne(action.product, state)),
);

export function ProductReducer(state: ProductState, action: any) {
    return _productReducer(state, action);
}