import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecknetworkComponent } from './checknetwork.component';

describe('ChecknetworkComponent', () => {
  let component: ChecknetworkComponent;
  let fixture: ComponentFixture<ChecknetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecknetworkComponent]
    });
    fixture = TestBed.createComponent(ChecknetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
