import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRunninglistComponent } from './timer-runninglist.component';

describe('TimerRunninglistComponent', () => {
  let component: TimerRunninglistComponent;
  let fixture: ComponentFixture<TimerRunninglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerRunninglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerRunninglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
