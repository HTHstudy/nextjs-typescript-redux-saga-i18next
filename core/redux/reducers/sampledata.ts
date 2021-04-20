import { HYDRATE } from 'next-redux-wrapper'
import { SampleData, actionTypesSampleData, ActionsUsers, User } from '../../interfaces'

export const initialState: SampleData = {
  users: null,
}

interface HydratePayload {
  sampledata: SampleData
}

const sampledata = (state = initialState, action: ActionsUsers | { type: typeof HYDRATE; payload: HydratePayload }): SampleData => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload.sampledata,
      }
      if (state.users) nextState.users = state.users
      return nextState
    }

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
