import { TestBed } from '@angular/core/testing';

import { ObsTimerService } from './obs-timer.service';

describe('ObsTimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObsTimerService = TestBed.get(ObsTimerService);
    expect(service).toBeTruthy();
  });
});
