import { TestBed } from '@angular/core/testing';

import { NetworkcheckService } from './networkcheck.service';

describe('NetworkcheckService', () => {
  let service: NetworkcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
