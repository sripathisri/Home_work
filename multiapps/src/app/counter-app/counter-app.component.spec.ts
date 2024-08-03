import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAppComponent } from './counter-app.component';

describe('CounterAppComponent', () => {
  let component: CounterAppComponent;
  let fixture: ComponentFixture<CounterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
