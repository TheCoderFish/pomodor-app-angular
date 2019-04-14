import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDataComponent } from './timer-data.component';

describe('TimerDataComponent', () => {
  let component: TimerDataComponent;
  let fixture: ComponentFixture<TimerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
