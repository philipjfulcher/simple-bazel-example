import { TestBed } from '@angular/core/testing';

import { AmiiboAPIService } from './amiibo-api.service';

describe('AmiiboAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmiiboAPIService = TestBed.get(AmiiboAPIService);
    expect(service).toBeTruthy();
  });
});
