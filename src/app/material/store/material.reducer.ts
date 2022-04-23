import {createReducer, on} from "@ngrx/store";
import {adapter} from "./material.state";
import {create, deleteAction, list, update} from "./material.actions";

const initialState = adapter.getInitialState();

const _materialReducer = createReducer(
    initialState,
    on(create, (state, action) => { return {...state}}),
    on(list, (state, action) => { return {...state}}),
    on(update, (state, action) => { return {...state}}),
    on(deleteAction, (state, action) => { return {...state}})
);

export function MaterialReducer(state: any, action: any) {
    return _materialReducer(state, action);
}