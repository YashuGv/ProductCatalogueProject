import { TestBed } from '@angular/core/testing';

import { UpdateproService } from './updatepro.service';

describe('UpdateproService', () => {
  let service: UpdateproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
