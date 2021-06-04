import { actionTypesSampleData } from '../../interfaces/sampledata/sampledataAct.interfaces'
import { User } from '../../interfaces/sampledata/sampledata.interfaces'

export function failure(error: any) {
  return {
    type: actionTypesSampleData.FAILURE,
    error,
  }
}
export function loadData() {
  return { type: actionTypesSampleData.LOAD_DATA }
}

export function loadDataSuccess(data: User[] | null) {
  return {
    type: actionTypesSampleData.LOAD_DATA_SUCCESS,
    data,
  }
}
