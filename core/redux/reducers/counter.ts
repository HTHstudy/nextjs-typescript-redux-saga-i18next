import { HYDRATE } from 'next-redux-wrapper'
import { CounterState, actionTypesCounter, ActionsCounter } from '../../interfaces'

export const initialState: CounterState = {
  count: 0,
}

interface HydratePayload {
  counter: CounterState
}

const counter = (state = initialState, action: ActionsCounter | { type: typeof HYDRATE; payload: HydratePayload }): CounterState => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = { ...state, ...action.payload.counter }
      if (state.count) nextState.count = state.count
      return nextState
    }

    case actionTypesCounter.COUNTER_INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case actionTypesCounter.COUNTER_DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case actionTypesCounter.COUNTER_RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    default:
      return state
  }
}
export default counter
