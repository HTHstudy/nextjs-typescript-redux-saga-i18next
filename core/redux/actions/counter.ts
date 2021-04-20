import { actionTypesCounter } from '../../interfaces/counter/counterAct.interfaces'

export function counterIncrement() {
  return { type: actionTypesCounter.COUNTER_INCREMENT }
}

export function counterDecrement() {
  return { type: actionTypesCounter.COUNTER_DECREMENT }
}

export function counterReset() {
  return { type: actionTypesCounter.COUNTER_RESET }
}
