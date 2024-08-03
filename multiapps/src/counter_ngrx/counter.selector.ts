import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reduser';

export const selectCounterState =
  createFeatureSelector<CounterState>('counter');

export const selectCounters = createSelector(
  selectCounterState,
  (state) => state.counters
);
