import { createAction, props } from '@ngrx/store';

export const addCounter = createAction('[Counter] Add Counter');
export const resetCounters = createAction('[Counter] Reset Counters');
export const incrementCounter = createAction(
  '[Counter] Increment Counter',
  props<{ index: number }>()
);
export const decrementCounter = createAction(
  '[Counter] Decrement Counter',
  props<{ index: number }>()
);
export const deleteCounter = createAction(
  '[Counter] Delete Counter',
  props<{ index: number }>()
);
