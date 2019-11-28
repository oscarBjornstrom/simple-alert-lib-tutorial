import { TestBed } from '@angular/core/testing';

import { OscarNotSoSimpleInputService } from './oscar-not-so-simple-input.service';

describe('OscarNotSoSimpleInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OscarNotSoSimpleInputService = TestBed.get(OscarNotSoSimpleInputService);
    expect(service).toBeTruthy();
  });
});
