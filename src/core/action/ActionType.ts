import {  Student } from "../enums/EnumsStudentType";
import { studentType } from "../enums/EnumsStudentType";
import {ILearning, IPoint, learningType} from '../enums/EnumsLearningType'
export interface getStudentList {
  type: typeof studentType.GET_LIST_STUDENT;
  payload: Student[];
}
export interface getStudentDetail {
  type: typeof studentType.GET_STUDENT_DETAIL;
  payload: Student;
}
export interface getLearningList {
  type: typeof learningType.GET_LEARNING_LIST;
  payload: ILearning[];
}
export interface getPointList {
  type: typeof learningType.GET_POINT_LIST;
  payload: IPoint[];
}

export type Action = getStudentList | getLearningList  | getPointList | getStudentDetail;
