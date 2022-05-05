export enum learningType {
  GET_LEARNING_LIST = " GET_LEARNING_LIST",
  GET_POINT_LIST = " GET_POINT_LIST",
  }

  export interface ILearning {
    key:number,
    idCount:string,
    idKhoi: string,
    idClass: string,
    name: string,
    nameClass:string,
    nameCourse:string,
    nameDep:string,
    nameKhoi: string,
    schoolYear:string,
    sem1:string,
    sem2:string,
    startDate:string,
    teacher:string,
    typeCourse:string,
    endDate: string,
    // point:IPoint
  }
  
  export interface ILearningState {
      learning: ILearning | null;
      learningList: Array<ILearning>;
  }
  