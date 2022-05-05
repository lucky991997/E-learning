export enum PointType {
    GET_POINT_lIST = 'GET_POINT_lIST',
    DETAILS_POINT = 'DETAILS_POINT',
    ADD_POINT = 'ADD_POINT',
    DELETE_POINT = 'DELETE_POINT',
    UPDATE_POINT = 'UPDATE_POINT',
}
export interface IPoint {
    id: string,
    heSo: number,
    pointTyp?: string,
    sem1:number,
    sem2:number,
}
export interface PointState {
    point : IPoint | null
    pointList: Array<IPoint>
}