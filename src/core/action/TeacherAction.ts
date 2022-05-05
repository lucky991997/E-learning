import { ThunkAction } from "redux-thunk";
import { RootState } from "../";
import firebase, { dbTeacher } from "../../config/ConfigFirebase";
import { Student, studentType } from "../enums/EnumsStudentType";
import { ITeacher, teacherType } from "../enums/EnumTeacherType";
import { Action } from "./ActionType";

export const getTeacherList = (): ThunkAction<
  void,
  RootState,
  null,
  Action
> => {
  return async (dispatch) => {
    try {
      await dbTeacher
        .get()
        .then(
          (
            snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
          ) => {
            const data = snapshot.docs.map((doc) => ({ ...doc.data() }));

            if (data.length > 0) {
              const teacherList = data as ITeacher[];
              
              dispatch({
                type: teacherType.GET_TEACHER_LIST,
                payload: teacherList,
              });
            }
          }
        )

        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
};
