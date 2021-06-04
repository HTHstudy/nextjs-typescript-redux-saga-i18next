import { actionTypesCounter, ActionsCounter } from '../../interfaces'

const counter = (state = 0, action: ActionsCounter): number => {
  switch (action.type) {
    case actionTypesCounter.COUNTER_INCREMENT:
      return state + 1

    case actionTypesCounter.COUNTER_DECREMENT:
      return state - 1

    case actionTypesCounter.COUNTER_RESET:
      return 0

    default:
      return state
  }
}
export default counter
