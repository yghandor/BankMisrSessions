import { TestBed } from '@angular/core/testing';

import { PagesGuard } from './pages.guard';

describe('PagesGuard', () => {
  let guard: PagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
