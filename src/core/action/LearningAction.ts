import { ThunkAction } from "redux-thunk";
import { RootState } from "../";
import firebase, { dbLearning } from "../../config/ConfigFirebase";
import { ILearning, IPoint, learningType } from "../enums/EnumsLearningType";
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
            const point = data.map((item) => ({...item.point}))
            
            if (data.length > 0) {
                const learningList = data as ILearning[];
                const pointList = point as IPoint[]
                dispatch({
                  type: learningType.GET_LEARNING_LIST,
                  payload: learningList,
                });
                dispatch({
                    type: learningType.GET_POINT_LIST,
                    payload: pointList,
                  });
              }
          }
        );
    } catch (err) {
      console.log(err);
    }
  };
};
