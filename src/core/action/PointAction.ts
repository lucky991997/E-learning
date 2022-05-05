import { ThunkAction } from "redux-thunk";
import { RootState } from "../";
import firebase, { dbPoint } from "../../config/ConfigFirebase";
import { IPoint, PointType } from "../enums/EnumsPoint";

import { Action } from "./ActionType";

export const getPointList = (): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    try {
      await dbPoint
        .get()
        .then(
          (
            snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
          ) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            if (data.length > 0) {
              const pointList = data as IPoint[];
              dispatch({
                type: PointType.GET_POINT_lIST,
                payload: pointList,
              });
            }
          }
        )
        .catch((err) => console.error(err));
    } catch (err) {
      console.log(err);
    }
  };
};
export const addPoint = (
  payload: any
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    try {
      const dataAdd = payload as IPoint;

      dbPoint.doc().set(dataAdd);
      dispatch({
        type: PointType.ADD_POINT,
        payload: dataAdd,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const deletePoint = (
  payload: string
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    console.log(payload);

    try {
      dbPoint.doc(payload).delete();
      dispatch({
        type: PointType.DELETE_POINT,
        payload: payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// export const getPointDetail = (
//   payload: any
// ): ThunkAction<void, RootState, null, Action> => {
//   return async (dispatch) => {
//     console.log(payload);
//     try {
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export const updatePoint = (
  id:string,
  payload: any
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    try {
      const dataAdd = payload as IPoint;

      dbPoint.doc(id).update(dataAdd);
      dispatch({
        type: PointType.UPDATE_POINT,
        payload: dataAdd,
      });
    } catch (err) {
      console.log(err);
    }
  };
};