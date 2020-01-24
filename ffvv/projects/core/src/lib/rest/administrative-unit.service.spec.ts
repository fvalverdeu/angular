import { TestBed } from '@angular/core/testing';

import { AdministrativeUnitService } from './administrative-unit.service';

describe('AdministrativeUnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministrativeUnitService = TestBed.get(AdministrativeUnitService);
    expect(service).toBeTruthy();
  });
});
