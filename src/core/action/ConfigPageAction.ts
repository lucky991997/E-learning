import { ThunkAction } from "redux-thunk";
import { Action } from "./ActionType";
import {RootState} from '../index'
import { configPageType } from "../enums/EnumsConfigPage";
export const getPageSize = (payload:number) :ThunkAction<void, RootState, unknown, Action> => {
    return async (dispatch) => {
        dispatch({
            type: configPageType.GET_PAGE_SIZE,
            payload: payload
        })
    }
}