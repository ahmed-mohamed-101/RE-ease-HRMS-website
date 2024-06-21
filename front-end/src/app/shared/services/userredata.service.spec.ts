import { TestBed } from '@angular/core/testing';

import { UserredataService } from './userredata.service';

describe('UserredataService', () => {
  let service: UserredataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserredataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
