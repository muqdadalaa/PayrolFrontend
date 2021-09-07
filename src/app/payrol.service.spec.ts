import { TestBed } from '@angular/core/testing';

import { PayrolService } from './payrol.service';

describe('PayrolService', () => {
  let service: PayrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
