import { Action } from "../action/ActionType";
import { PointState, PointType } from "../enums/EnumsPoint";

const initialState: PointState = {
  point: null,
  pointList: [],
};
const PointReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PointType.GET_POINT_lIST:
      return { ...state, pointList: action.payload };
    case PointType.ADD_POINT:
      
      state.pointList.push(action.payload);
      return { ...state };
    case PointType.DELETE_POINT:
     
      const ponitDelete = state.pointList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        pointList: ponitDelete,
      };
    case PointType.DETAILS_POINT:
      return { ...state };
    case PointType.UPDATE_POINT:
      return { ...state, point: action.payload };
    default:
      return state;
  }
};

export default PointReducer;
