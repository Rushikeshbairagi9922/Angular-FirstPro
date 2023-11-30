import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRouteComponent } from './emp-route.component';

describe('EmpRouteComponent', () => {
  let component: EmpRouteComponent;
  let fixture: ComponentFixture<EmpRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpRouteComponent]
    });
    fixture = TestBed.createComponent(EmpRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
