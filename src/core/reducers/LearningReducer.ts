import { Action } from "../action/ActionType";
import { ILearningState, learningType } from "../enums/EnumsLearningType";


const initialState:ILearningState  = {
  learning: null,
  learningList: [],
 
};

const LearningReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case learningType.GET_LEARNING_LIST:
      return { ...state, learningList: action.payload };
   
    default:
      return state;
  }
};
export default LearningReducer;
