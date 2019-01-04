import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
