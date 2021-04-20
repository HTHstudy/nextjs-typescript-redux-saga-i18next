export enum actionTypesCounter {
  COUNTER_INCREMENT = 'COUNTER_INCREMENT',
  COUNTER_DECREMENT = 'COUNTER_DECREMENT',
  COUNTER_RESET = 'COUNTER_RESET',
}

export type ActionsCounter = CounterIncrement | CounterDecrement | CounterReset

export interface CounterIncrement {
  type: actionTypesCounter.COUNTER_INCREMENT
}

export interface CounterDecrement {
  type: actionTypesCounter.COUNTER_DECREMENT
}

export interface CounterReset {
  type: actionTypesCounter.COUNTER_RESET
}
