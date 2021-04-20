import { combineReducers, Reducer, AnyAction } from 'redux'
import { RootStateInterface } from '../../interfaces/RootState'
import counter from './counter'
import sampledata from './sampledata'

const rootReducer: Reducer<RootStateInterface, AnyAction> = combineReducers<RootStateInterface>({
  counter,
  sampledata,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
