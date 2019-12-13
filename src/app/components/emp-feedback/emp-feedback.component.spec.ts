import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFeedbackComponent } from './emp-feedback.component';

describe('EmpFeedbackComponent', () => {
  let component: EmpFeedbackComponent;
  let fixture: ComponentFixture<EmpFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
