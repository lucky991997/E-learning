import { Action } from "../action/ActionType";
import { StudentState, studentType } from "../enums/EnumsStudentType";

const initialState: StudentState = {
  student: null,
  studentList: [],
};

const StudentReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case studentType.GET_LIST_STUDENT:
      return { ...state, studentList: action.payload };
    case studentType.GET_STUDENT_DETAIL:
        return {...state, student: action.payload}
    default:
      return state;
  }
};
export default StudentReducer;
