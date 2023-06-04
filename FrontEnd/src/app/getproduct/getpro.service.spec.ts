import { TestBed } from '@angular/core/testing';

import { GetproService } from './getpro.service';

describe('GetproService', () => {
  let service: GetproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
