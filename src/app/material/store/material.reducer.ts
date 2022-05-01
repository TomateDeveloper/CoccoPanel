import {createReducer, on} from "@ngrx/store";
import {materialAdapter} from "./material.state";
import {focusAll, focusMaterial, listSuccess} from "./material.actions";

const initialState = materialAdapter.getInitialState();

const _materialReducer = createReducer(
    initialState,
    on(listSuccess, (state, action) =>
        materialAdapter.addMany(
            action.materials.map(material => ({...material, selected: false})),
            state
        )
    ),
    on(focusAll, (state, action) => materialAdapter.map(material => ({...material, selected: action.selected}), state)),
    on(focusMaterial, (state, action) => materialAdapter.updateOne(action.material, state)),
);

export function MaterialReducer(state: any, action: any) {
    return _materialReducer(state, action);
}