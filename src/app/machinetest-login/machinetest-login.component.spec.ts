import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinetestLoginComponent } from './machinetest-login.component';

describe('MachinetestLoginComponent', () => {
  let component: MachinetestLoginComponent;
  let fixture: ComponentFixture<MachinetestLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinetestLoginComponent]
    });
    fixture = TestBed.createComponent(MachinetestLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
