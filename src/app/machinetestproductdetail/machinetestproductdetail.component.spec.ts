import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinetestproductdetailComponent } from './machinetestproductdetail.component';

describe('MachinetestproductdetailComponent', () => {
  let component: MachinetestproductdetailComponent;
  let fixture: ComponentFixture<MachinetestproductdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinetestproductdetailComponent]
    });
    fixture = TestBed.createComponent(MachinetestproductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
