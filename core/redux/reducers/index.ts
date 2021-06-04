import { combineReducers, Reducer, AnyAction } from 'redux'
import { RootStateInterface } from '../../interfaces/RootState'
import counter from './counter'
import sampledata from './sampledata'
import { HYDRATE } from 'next-redux-wrapper'

const rootReducer: Reducer<RootStateInterface, AnyAction> = (state, action: { type: typeof HYDRATE; payload: RootStateInterface }) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState: RootStateInterface = { ...state, ...action.payload }
      if (state.sampledata.users) nextState.sampledata.users = state.sampledata.users
      if (state.counter) nextState.counter = state.counter
      return nextState
    }
    default: {
      const combinedReducer = combineReducers<RootStateInterface>({
        counter,
        sampledata,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
