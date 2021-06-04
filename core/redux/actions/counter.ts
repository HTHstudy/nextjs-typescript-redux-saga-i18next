import { actionTypesCounter, CounterIncrement, CounterDecrement, CounterReset } from '../../interfaces/counter/counterAct.interfaces'

export function counterIncrement(): CounterIncrement {
  return { type: actionTypesCounter.COUNTER_INCREMENT }
}

export function counterDecrement(): CounterDecrement {
  return { type: actionTypesCounter.COUNTER_DECREMENT }
}

export function counterReset(): CounterReset {
  return { type: actionTypesCounter.COUNTER_RESET }
}
