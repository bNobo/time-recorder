import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleClicDetectorComponent } from './triple-clic-detector.component';

describe('TripleClicDetectorComponent', () => {
  let component: TripleClicDetectorComponent;
  let fixture: ComponentFixture<TripleClicDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleClicDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleClicDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
