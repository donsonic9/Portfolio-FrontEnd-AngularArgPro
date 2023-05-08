import { TestBed } from '@angular/core/testing';

import { AuthBGuardService } from './auth-b-guard.service';

describe('AuthBGuardService', () => {
  let service: AuthBGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
