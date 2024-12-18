import { TestBed } from '@angular/core/testing';

import { GastofixoService } from './gastofixo.service';

describe('GastofixoService', () => {
  let service: GastofixoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastofixoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
