import { TestBed } from '@angular/core/testing';

import { ToggleLanguagesService } from './toggle-languages.service';

describe('ToggleLanguagesService', () => {
  let service: ToggleLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
