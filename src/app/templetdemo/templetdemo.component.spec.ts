import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletdemoComponent } from './templetdemo.component';

describe('TempletdemoComponent', () => {
  let component: TempletdemoComponent;
  let fixture: ComponentFixture<TempletdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempletdemoComponent]
    });
    fixture = TestBed.createComponent(TempletdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
