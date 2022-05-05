export enum teacherType {
  GET_TEACHER_LIST = " GET_TEACHER_LIST",
  GET_TEACHER_DETAIL = "GET_TEACHER_DETAIL",
}
export interface ITeacher {
  key: number;
  id: string;
  name: string;
  chucvu: string;
  birthday: string;
  nation: string;
  status: string;
  gender: string; // true: name, false : nữ
}

export interface TeacherState {
  teacher: ITeacher | null;
  teacherList: Array<ITeacher>;
}
