import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAdderComponent } from './timer-adder.component';

describe('TimerAdderComponent', () => {
  let component: TimerAdderComponent;
  let fixture: ComponentFixture<TimerAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
