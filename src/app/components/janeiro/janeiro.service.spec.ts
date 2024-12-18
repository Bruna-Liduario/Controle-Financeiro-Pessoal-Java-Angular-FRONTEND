import { TestBed } from '@angular/core/testing';

import { JaneiroService } from './janeiro.service';

describe('JaneiroService', () => {
  let service: JaneiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaneiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
