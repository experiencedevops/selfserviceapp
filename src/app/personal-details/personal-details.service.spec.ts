import { TestBed, inject } from '@angular/core/testing';

import { PersonalDetailsService } from './personal-details.service';

describe('PersonalDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalDetailsService]
    });
  });

  it('should be created', inject([PersonalDetailsService], (service: PersonalDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
