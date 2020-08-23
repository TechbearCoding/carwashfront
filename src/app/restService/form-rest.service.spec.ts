import { TestBed } from '@angular/core/testing';

import { FormRestService } from './form-rest.service';

describe('FormRestService', () => {
  let service: FormRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
