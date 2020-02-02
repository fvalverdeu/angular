import { TestBed } from '@angular/core/testing';

import { ParticipanteService } from './participante.service';

describe('ParticipanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipanteService = TestBed.get(ParticipanteService);
    expect(service).toBeTruthy();
  });
});
