import { Student } from "../enums/EnumsStudentType";
import { studentType } from "../enums/EnumsStudentType";
import { ILearning, learningType } from "../enums/EnumsLearningType";
import { ITeacher, teacherType } from "../enums/EnumTeacherType";
import { IPoint, PointType } from "../enums/EnumsPoint";

// StudentAction
export interface getStudentList {
  type: typeof studentType.GET_LIST_STUDENT;
  payload: Student[];
}
export interface getStudentDetail {
  type: typeof studentType.GET_STUDENT_DETAIL;
  payload: Student;
}

// learningAction
export interface getLearningList {
  type: typeof learningType.GET_LEARNING_LIST;
  payload: ILearning[];
}

// TeacherAction
export interface getTeacherList {
  type: typeof teacherType.GET_TEACHER_LIST;
  payload: ITeacher[];
}
export interface getTeacherDetail {
  type: typeof teacherType.GET_TEACHER_DETAIL;
  payload: ITeacher;
}
// point
export interface getPointList {
  type: typeof PointType.GET_POINT_lIST;
  payload: IPoint[];
}
export interface addPoint {
  type: typeof PointType.ADD_POINT;
  payload: IPoint;
}
export interface deletePoint {
  type: typeof PointType.DELETE_POINT;
  payload: string;
}
export interface updatePoint {
  type: typeof PointType.UPDATE_POINT;
  payload: IPoint;
}
export interface detailPoint {
  type: typeof PointType.DETAILS_POINT;
  payload: string;
}
export type Action =
  | getStudentList
  | getLearningList
  | getPointList
  | addPoint
  | deletePoint
  | detailPoint
  | updatePoint
  | getStudentDetail
  | getTeacherList
  | getTeacherDetail;
