import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addCounter,
  resetCounters,
  incrementCounter,
  decrementCounter,
  deleteCounter,
} from '../../counter_ngrx/counter.action';
import { selectCounters } from '../../counter_ngrx/counter.selector';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  constructor(private store: Store) {
    this.counters$ = this.store.select(selectCounters);
  }

  counters$: Observable<number[]>;

  addCounter() {
    this.store.dispatch(addCounter());
  }

  resetCounters() {
    this.store.dispatch(resetCounters());
  }

  increment(index: number) {
    this.store.dispatch(incrementCounter({ index }));
  }

  decrement(index: number) {
    this.store.dispatch(decrementCounter({ index }));
  }

  deleteCounter(index: number) {
    this.store.dispatch(deleteCounter({ index }));
  }
}
