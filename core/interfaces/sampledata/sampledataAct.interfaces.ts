import { User } from '../index'

export enum actionTypesSampleData {
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  FAILURE = 'FAILURE',
}

export type ActionsUsers = LoadData | LoadDataSuccess | Failure

export interface Failure {
  type: actionTypesSampleData.FAILURE
  error: any
}

export interface LoadData {
  type: actionTypesSampleData.LOAD_DATA
}

export interface LoadDataSuccess {
  type: actionTypesSampleData.LOAD_DATA_SUCCESS
  data: User[]
}
