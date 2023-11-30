import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentformreactiveComponent } from './studentformreactive.component';

describe('StudentformreactiveComponent', () => {
  let component: StudentformreactiveComponent;
  let fixture: ComponentFixture<StudentformreactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentformreactiveComponent]
    });
    fixture = TestBed.createComponent(StudentformreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
