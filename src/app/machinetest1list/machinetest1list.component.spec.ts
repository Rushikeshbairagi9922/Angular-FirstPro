import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Machinetest1listComponent } from './machinetest1list.component';

describe('Machinetest1listComponent', () => {
  let component: Machinetest1listComponent;
  let fixture: ComponentFixture<Machinetest1listComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Machinetest1listComponent]
    });
    fixture = TestBed.createComponent(Machinetest1listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
