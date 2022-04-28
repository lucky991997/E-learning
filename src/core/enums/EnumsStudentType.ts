export enum studentType {
  GET_LIST_STUDENT = " GET_LIST_STUDENT",
  GET_STUDENT_DETAIL = "GET_STUDENT_DETAIL",
}
export interface Student {
  key: number;
  id: string;
  name: string;
  birthday: string;
  gender: string; // true: name, false : nữ
  nation: string;
  class: string;
  status: string;
  awards?: number;
  // discipients?: number;
  school?: string;
  sem?: string;
  dateReveser?: string;
  dateChangeSchool?: string;
}

export interface StudentState {
    student: Student | null;
    studentList: Array<Student>;
}




