import { TestBed } from '@angular/core/testing';

import { KeksService } from './keks.service';

describe('KeksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeksService = TestBed.get(KeksService);
    expect(service).toBeTruthy();
  });
});
