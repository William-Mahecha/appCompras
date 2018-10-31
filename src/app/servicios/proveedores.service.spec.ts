import { TestBed } from '@angular/core/testing';

import { ProveedoresService } from './proveedores.service';

describe('ProveedoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProveedoresService = TestBed.get(ProveedoresService);
    expect(service).toBeTruthy();
  });
});
