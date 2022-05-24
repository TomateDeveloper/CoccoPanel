import {createAction, props} from "@ngrx/store";
import {Update} from "@ngrx/entity";
import {Product} from "./product.model";

export enum ProductActionType {
    CREATE = '[Product] Create',
    CREATE_SUCCESS = '[Product] Create success',
    CREATE_ERROR = '[Product] Create error',
    LIST = '[Product] List',
    LIST_SUCCESS = '[Product] List success',
    LIST_ERROR = '[Product] List error',
    GET = '[Product] Get',
    GET_SUCCESS = '[Product] Get success',
    GET_ERROR = '[Product] Get error',
    UPDATE = '[Product] Update',
    UPDATE_SUCCESS = '[Product] Update success',
    UPDATE_ERROR = '[Product] Update error',
    DELETE = '[Product] Delete',
    DELETE_SUCCESS = '[Product] Delete success',
    DELETE_ERROR = '[Product] Delete error',
    SET_ACTIVE = '[Product] Set active',
    FOCUS = '[Product] Focus',
    FOCUS_ALL = '[Product] Focus all'
}

export const create = createAction(
    ProductActionType.CREATE,
    props<{ product: Product }>()
);

export const createSuccess = createAction(
    ProductActionType.CREATE_SUCCESS,
    props<{ product: Product }>()
);

export const createError = createAction(
    ProductActionType.CREATE_ERROR,
    props<{ message: string }>()
);

export const list = createAction(
    ProductActionType.LIST,
    props<{ query: any }>()
);

export const listSuccess = createAction(
    ProductActionType.LIST_SUCCESS,
    props<{ products: Product[] }>()
);

export const listError = createAction(
    ProductActionType.LIST_ERROR,
    props<{ message: string }>()
);

export const get = createAction(
    ProductActionType.GET,
    props<{ id: string }>()
);

export const getSuccess = createAction(
    ProductActionType.GET_SUCCESS,
    props<{ product: Product }>()
);

export const getError = createAction(
    ProductActionType.GET_ERROR,
    props<{ message: string }>()
);

export const update = createAction(
    ProductActionType.UPDATE,
    props<{ product: Product }>()
);

export const updateSuccess = createAction(
    ProductActionType.UPDATE_SUCCESS,
    props<{ product: Product }>()
);

export const updateError = createAction(
    ProductActionType.UPDATE_ERROR,
    props<{ message: string }>()
);

export const focusProduct = createAction(
    ProductActionType.FOCUS,
    props<{product: Update<Product>}>()
);

export const focusAll = createAction(
    ProductActionType.FOCUS_ALL,
    props<{selected: boolean}>()
);

export const deleteAction = createAction(ProductActionType.DELETE);

export const setActive = createAction(
    ProductActionType.SET_ACTIVE,
    props<{id: string}>()
);

export const deleteSuccess = createAction(
    ProductActionType.DELETE_SUCCESS,
    props<{deleted: boolean}>()
);

export const deleteError = createAction(
    ProductActionType.DELETE_ERROR,
    props<{ message: string }>()
);
