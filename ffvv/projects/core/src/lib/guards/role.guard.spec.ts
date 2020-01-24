import { TestBed, async, inject } from '@angular/core/testing';

import { RoleGuard } from './role.guard';

describe('RolGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuard]
    });
  });

  it('should ...', inject([RoleGuard], (guard: RoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
