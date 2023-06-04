import { TestBed } from '@angular/core/testing';

import { SearchbrandService } from './searchbrand.service';

describe('SearchbrandService', () => {
  let service: SearchbrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
