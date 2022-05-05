import { ThunkAction } from "redux-thunk";
import { RootState } from "../";
import firebase, { dbLearning } from "../../config/ConfigFirebase";
import { ILearning, learningType } from "../enums/EnumsLearningType";
import { Action } from "./ActionType";

export const getLearningList = (): ThunkAction<
  void, 
  RootState,
  null,
  Action
> => {
  return async (dispatch) => {
    try {
      await dbLearning
        .get()
        .then(
          (
            snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
          ) => {
            const data = snapshot.docs.map((doc) => ({
              ...doc.data(),
            }));
           
            
            if (data.length > 0) {
                const learningList = data as ILearning[];
            
                dispatch({
                  type: learningType.GET_LEARNING_LIST,
                  payload: learningList,
                });
               
              }
          }
        );
    } catch (err) {
      console.log(err);
    }
  };
};
