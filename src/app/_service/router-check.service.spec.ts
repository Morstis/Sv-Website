import { TestBed } from '@angular/core/testing';

import { RouterCheckService } from './router-check.service';

describe('RouterCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterCheckService = TestBed.get(RouterCheckService);
    expect(service).toBeTruthy();
  });
});
