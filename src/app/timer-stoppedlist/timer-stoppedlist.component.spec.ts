import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStoppedlistComponent } from './timer-stoppedlist.component';

describe('TimerStoppedlistComponent', () => {
  let component: TimerStoppedlistComponent;
  let fixture: ComponentFixture<TimerStoppedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerStoppedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStoppedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
