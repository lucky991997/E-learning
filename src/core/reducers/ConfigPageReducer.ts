import { Action } from "../action/ActionType"
import { configPageType, IConfigState } from "../enums/EnumsConfigPage"


const initialState:IConfigState = {
    pageSizeConfig: 8,
}
const  ConfigPageReducer = (state = initialState, action:Action) => {
    switch (action.type){
        case configPageType.GET_PAGE_SIZE:
            return { ...state, pageSizeConfig: action.payload}
        default:
            return state
    }
}
export default ConfigPageReducer