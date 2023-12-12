import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bodygardGuard } from './bodygard.guard';

describe('bodygardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bodygardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
