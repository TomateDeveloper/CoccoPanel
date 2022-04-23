import {createAction, props} from "@ngrx/store";
import {Material} from "./material.model";

export enum MaterialActionType {
    CREATE = '[Material] Create',
    CREATE_SUCCESS = '[Material] Create success',
    CREATE_ERROR = '[Material] Create error',
    LIST = '[Material] List',
    LIST_SUCCESS = '[Material] List success',
    LIST_ERROR = '[Material] List error',
    UPDATE = '[Material] Update',
    UPDATE_SUCCESS = '[Material] Update success',
    UPDATE_ERROR = '[Material] Update error',
    DELETE = '[Material] Delete',
    DELETE_SUCCESS = '[Material] Delete success',
    DELETE_ERROR = '[Material] Delete error'
}

export const create = createAction(
    MaterialActionType.CREATE,
    props<{ material: Material }>()
);

export const createSuccess = createAction(
    MaterialActionType.CREATE_SUCCESS,
    props<{ material: Material }>()
);

export const createError = createAction(
    MaterialActionType.CREATE_ERROR,
    props<{ message: string }>()
);

export const list = createAction(
    MaterialActionType.LIST,
    props<{ material: Material[] }>()
);

export const listSuccess = createAction(
    MaterialActionType.LIST_SUCCESS,
    props<{ material: Material[] }>()
);

export const listError = createAction(
    MaterialActionType.LIST_ERROR,
    props<{ message: string }>()
);

export const update = createAction(
    MaterialActionType.UPDATE,
    props<{ material: Material }>()
);

export const updateSuccess = createAction(
    MaterialActionType.UPDATE_SUCCESS,
    props<{ material: Material }>()
);

export const updateError = createAction(
    MaterialActionType.LIST_ERROR,
    props<{ message: string }>()
);

export const deleteAction = createAction(
    MaterialActionType.DELETE,
    props<{id: string}>()
);

export const deleteSuccess = createAction(
    MaterialActionType.DELETE_SUCCESS,
    props<{deleted: boolean}>()
);

export const deleteError = createAction(
    MaterialActionType.DELETE_ERROR,
    props<{ message: string }>()
);
