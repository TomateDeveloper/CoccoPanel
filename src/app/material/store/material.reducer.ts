import {createReducer, on} from "@ngrx/store";
import {materialAdapter, MaterialState} from "./material.state";
import {focusAll, focusMaterial, getSuccess, listSuccess, setActive, updateSuccess} from "./material.actions";

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
    on(setActive, (state, action) => ({...state, activeMaterialId: action.id})),
    on(getSuccess, (state, action) => materialAdapter.addOne(action.material, state)),
    on(focusMaterial, (state, action) => materialAdapter.updateOne(action.material, state)),
);

export function MaterialReducer(state: MaterialState, action: any) {
    return _materialReducer(state, action);
}