import { createReducer, on } from '@ngrx/store';

import { addCounter, resetCounters, incrementCounter, decrementCounter,deleteCounter } from './counter.action';

export interface CounterState {
  counters: number[];
}

export const initialState: CounterState = {
  counters: [],
};

const _counterReducer = createReducer(
  initialState,
  on(addCounter, (state) => ({
    ...state,
    counters: [...state.counters, 0],
  })),
  on(resetCounters, (state) => ({
    ...state,
    counters: [],
  })),
  on(incrementCounter, (state, { index }) => {
    const updatedCounters = [...state.counters];
    updatedCounters[index]++;
    return {
      ...state,
      counters: updatedCounters,
    };
  }),
  on(decrementCounter, (state, { index }) => {
    const updatedCounters = [...state.counters];
    if (updatedCounters[index] > 0) {
      updatedCounters[index]--;
    }
    return {
      ...state,
      counters: updatedCounters,
    };
  }),
  on(deleteCounter, (state, { index }) => ({
    ...state,
    counters: state.counters.filter((_, i) => i !== index),
  }))
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}