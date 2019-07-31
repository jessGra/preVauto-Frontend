import { TestBed } from '@angular/core/testing';

import { VehiculoIdServiceService } from './vehiculo-id-service.service';

describe('VehiculoIdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiculoIdServiceService = TestBed.get(VehiculoIdServiceService);
    expect(service).toBeTruthy();
  });
});
