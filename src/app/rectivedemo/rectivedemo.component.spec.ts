import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectivedemoComponent } from './rectivedemo.component';

describe('RectivedemoComponent', () => {
  let component: RectivedemoComponent;
  let fixture: ComponentFixture<RectivedemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectivedemoComponent]
    });
    fixture = TestBed.createComponent(RectivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
