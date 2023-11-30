import { TestBed } from '@angular/core/testing';

import { HttpClientDemoService } from './http-client-demo.service';

describe('HttpClientDemoService', () => {
  let service: HttpClientDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
