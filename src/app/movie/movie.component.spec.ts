import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOvieComponent } from './movie.component';

describe('MOvieComponent', () => {
  let component: MOvieComponent;
  let fixture: ComponentFixture<MOvieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MOvieComponent]
    });
    fixture = TestBed.createComponent(MOvieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
