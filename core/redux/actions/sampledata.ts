import { actionTypesSampleData } from '../../interfaces/sampledata/sampledataAct.interfaces'

export function failure(error: any) {
  return {
    type: actionTypesSampleData.FAILURE,
    error,
  }
}
export function loadData() {
  return { type: actionTypesSampleData.LOAD_DATA }
}

export function loadDataSuccess(data: any) {
  return {
    type: actionTypesSampleData.LOAD_DATA_SUCCESS,
    data,
  }
}
