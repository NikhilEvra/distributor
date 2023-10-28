import { TestBed } from '@angular/core/testing';

import { PatnersService } from './patners.service';

describe('PatnersService', () => {
  let service: PatnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
