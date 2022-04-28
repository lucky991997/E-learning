import { Action } from "../action/ActionType";
import { ILearningState, learningType } from "../enums/EnumsLearningType";


const initialState:ILearningState  = {
  learning: null,
  learningList: [],
  pointList: []
};

const LearningReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case learningType.GET_LEARNING_LIST:
      return { ...state, learningList: action.payload };
    case learningType.GET_POINT_LIST: 
    console.log(action.payload)
      return {...state , pointList: action.payload };
    default:
      return state;
  }
};
export default LearningReducer;
