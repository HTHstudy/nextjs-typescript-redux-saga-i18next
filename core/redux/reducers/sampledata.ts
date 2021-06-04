import { SampleData, actionTypesSampleData, ActionsUsers } from '../../interfaces'

export const initialState: SampleData = {
  users: null,
}

const sampledata = (state = initialState, action: ActionsUsers): SampleData => {
  switch (action.type) {
    case actionTypesSampleData.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypesSampleData.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ users: action.data },
      }

    default:
      return state
  }
}
export default sampledata
