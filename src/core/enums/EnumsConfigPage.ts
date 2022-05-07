export enum configPageType {
    GET_PAGE_SIZE = 'GET_PAGE_SIZE'
}
export interface IConfig {
    pageSize: number,
}
export interface IConfigState { 
    pageSizeConfig: number 
}