import { ThunkAction } from "redux-thunk";
import { RootState } from "../";
import firebase, { dbStudent } from "../../config/ConfigFirebase";
import { Student, studentType } from "../enums/EnumsStudentType";
import { Action } from "./ActionType";

export const getStudentList = (): ThunkAction<
  void,
  RootState,
  null,
  Action 
> => {
  return async (dispatch) => {
    try {
      await dbStudent
        .get()
        .then(
          (
            snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
          ) => {
            const data = snapshot.docs.map((doc) => ({ ...doc.data() }));

            if (data.length > 0) {
              const studentList = data as Student[];
              dispatch({
                type: studentType.GET_LIST_STUDENT,
                payload: studentList,
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
