import {createFeatureSelector, createSelector} from "@ngrx/store";
import {materialAdapter, MaterialState} from "./material.state";

export const MATERIAL_STATE_NAME = 'material';

const getMaterialState = createFeatureSelector<MaterialState>(MATERIAL_STATE_NAME);
export const materialSelectors = materialAdapter.getSelectors();

export const getMaterials = createSelector(getMaterialState, materialSelectors.selectAll);
export const getSelectedMaterials = createSelector(getMaterials, (materials) => (materials.filter(material => material.selected)));
export const getActiveId = createSelector(getMaterialState, (materials) => materials.activeMaterialId);
export const getActiveMaterial = createSelector(getMaterials, getActiveId, (materials, id) => {
    return materials.filter(material => material.id === id)[0];
});
export const getFirstSelected = createSelector(getSelectedMaterials, (materials) => materials[0]);