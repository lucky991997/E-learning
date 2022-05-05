import { Action } from "../action/ActionType";
import { TeacherState, teacherType } from "../enums/EnumTeacherType";


const initialState:TeacherState  = {
  teacher: null,
  teacherList: [],

};

const TeacherReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case teacherType.GET_TEACHER_LIST:
      return { ...state, teacherList: action.payload };
    case teacherType.GET_TEACHER_DETAIL: 

      return {...state , teacher: action.payload };
    default:
      return state;
  }
};
export default TeacherReducer;
