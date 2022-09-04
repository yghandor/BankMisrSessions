import { TestBed } from '@angular/core/testing';

import { PagesguardGuard } from './pagesguard.guard';

describe('PagesguardGuard', () => {
  let guard: PagesguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PagesguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
