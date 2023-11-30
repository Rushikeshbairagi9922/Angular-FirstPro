import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTaskComponent } from './pipe-task.component';

describe('PipeTaskComponent', () => {
  let component: PipeTaskComponent;
  let fixture: ComponentFixture<PipeTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeTaskComponent]
    });
    fixture = TestBed.createComponent(PipeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
