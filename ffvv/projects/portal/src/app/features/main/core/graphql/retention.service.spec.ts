import { TestBed } from '@angular/core/testing';

import { RetentionService } from './retention.service';

describe('RetentionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetentionService = TestBed.get(RetentionService);
    expect(service).toBeTruthy();
  });
});
