import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskngifNgforComponent } from './taskngif-ngfor.component';

describe('TaskngifNgforComponent', () => {
  let component: TaskngifNgforComponent;
  let fixture: ComponentFixture<TaskngifNgforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskngifNgforComponent]
    });
    fixture = TestBed.createComponent(TaskngifNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
