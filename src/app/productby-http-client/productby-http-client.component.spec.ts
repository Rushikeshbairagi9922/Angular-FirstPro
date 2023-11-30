import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbyHttpClientComponent } from './productby-http-client.component';

describe('ProductbyHttpClientComponent', () => {
  let component: ProductbyHttpClientComponent;
  let fixture: ComponentFixture<ProductbyHttpClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductbyHttpClientComponent]
    });
    fixture = TestBed.createComponent(ProductbyHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
