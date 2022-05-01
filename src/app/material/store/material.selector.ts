import {createFeatureSelector, createSelector} from "@ngrx/store";
import {materialAdapter, MaterialState} from "./material.state";

export const MATERIAL_STATE_NAME = 'material';

const getMaterialState = createFeatureSelector<MaterialState>(MATERIAL_STATE_NAME);
export const materialSelectors = materialAdapter.getSelectors();

export const getMaterials = createSelector(getMaterialState, materialSelectors.selectAll);