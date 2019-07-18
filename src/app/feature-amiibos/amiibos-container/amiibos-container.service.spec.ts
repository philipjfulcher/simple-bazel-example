import { TestBed } from '@angular/core/testing';

import { AmiibosContainerFacade } from './amiibos-container.facade';

describe('AmiibosContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmiibosContainerFacade = TestBed.get(AmiibosContainerFacade);
    expect(service).toBeTruthy();
  });
});
