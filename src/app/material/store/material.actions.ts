import {createAction, props} from "@ngrx/store";
import {Material} from "./material.model";
import {Update} from "@ngrx/entity";

export enum MaterialActionType {
    CREATE = '[Material] Create',
    CREATE_SUCCESS = '[Material] Create success',
    CREATE_ERROR = '[Material] Create error',
    LIST = '[Material] List',
    LIST_SUCCESS = '[Material] List success',
    LIST_ERROR = '[Material] List error',
    GET = '[Material] Get',
    GET_SUCCESS = '[Material] Get success',
    GET_ERROR = '[Material] Get error',
    UPDATE = '[Material] Update',
    UPDATE_SUCCESS = '[Material] Update success',
    UPDATE_ERROR = '[Material] Update error',
    DELETE = '[Material] Delete',
    DELETE_SUCCESS = '[Material] Delete success',
    DELETE_ERROR = '[Material] Delete error',
    SET_ACTIVE = '[Material] Set active',
    FOCUS = '[Material] Focus',
    FOCUS_ALL = '[Material] Focus all'
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
    props<{ query: any }>()
);

export const listSuccess = createAction(
    MaterialActionType.LIST_SUCCESS,
    props<{ materials: Material[] }>()
);

export const listError = createAction(
    MaterialActionType.LIST_ERROR,
    props<{ message: string }>()
);

export const get = createAction(
    MaterialActionType.GET,
    props<{ id: string }>()
);

export const getSuccess = createAction(
    MaterialActionType.GET_SUCCESS,
    props<{ material: Material }>()
);

export const getError = createAction(
    MaterialActionType.GET_ERROR,
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
    MaterialActionType.UPDATE_ERROR,
    props<{ message: string }>()
);

export const focusMaterial = createAction(
    MaterialActionType.FOCUS,
    props<{material: Update<Material>}>()
);

export const focusAll = createAction(
    MaterialActionType.FOCUS_ALL,
    props<{selected: boolean}>()
);

export const deleteAction = createAction(MaterialActionType.DELETE);

export const setActive = createAction(
    MaterialActionType.SET_ACTIVE,
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
