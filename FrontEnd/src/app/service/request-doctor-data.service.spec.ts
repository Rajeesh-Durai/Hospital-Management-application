import { TestBed } from '@angular/core/testing';

import { RequestDoctorDataService } from './request-doctor-data.service';

describe('RequestDoctorDataService', () => {
  let service: RequestDoctorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestDoctorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
