import { TestBed } from '@angular/core/testing';

import { GetUiDataService } from './get-ui-data.service';

describe('GetUiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUiDataService = TestBed.get(GetUiDataService);
    expect(service).toBeTruthy();
  });
});
