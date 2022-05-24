import {createFeatureSelector, createSelector} from "@ngrx/store";
import {productAdapter, ProductState} from "./product.state";

export const PRODUCT_STATE_NAME = 'product';

const getProductState = createFeatureSelector<ProductState>(PRODUCT_STATE_NAME);
export const productSelectors = productAdapter.getSelectors();

export const getProducts = createSelector(getProductState, productSelectors.selectAll);
export const getSelectedProducts = createSelector(getProducts, (products) => (products.filter(material => material.selected)));
export const getActiveId = createSelector(getProductState, (products) => products.activeMaterialId);
export const getActiveProduct = createSelector(getProducts, getActiveId, (products, id) => {
    return products.filter(product => product.id === id)[0];
});
export const getFirstSelected = createSelector(getSelectedProducts, (products) => products[0]);