import { TestBed } from '@angular/core/testing';

import { NachhilfeService } from './nachhilfe.service';

describe('NachhilfeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NachhilfeService = TestBed.get(NachhilfeService);
    expect(service).toBeTruthy();
  });
});
