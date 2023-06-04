import { TestBed } from '@angular/core/testing';

import { DeleteproService } from './deletepro.service';

describe('DeleteproService', () => {
  let service: DeleteproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
