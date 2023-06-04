import { TestBed } from '@angular/core/testing';

import { DeletecatService } from './deletecat.service';

describe('DeletecatService', () => {
  let service: DeletecatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
