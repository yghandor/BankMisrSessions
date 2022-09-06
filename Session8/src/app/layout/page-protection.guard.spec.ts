import { TestBed } from '@angular/core/testing';

import { PageProtectionGuard } from './page-protection.guard';

describe('PageProtectionGuard', () => {
  let guard: PageProtectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageProtectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
