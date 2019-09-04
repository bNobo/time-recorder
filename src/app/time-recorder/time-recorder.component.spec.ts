import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRecorderComponent } from './time-recorder.component';

describe('TimeRecorderComponent', () => {
  let component: TimeRecorderComponent;
  let fixture: ComponentFixture<TimeRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
