import { TestBed } from '@angular/core/testing';

import { GainService } from './gain.service';

describe('GainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GainService = TestBed.get(GainService);
    expect(service).toBeTruthy();
  });
});
