import { TestBed, inject } from '@angular/core/testing';

import { InstanceSearchService } from './instance-search.service';

describe('InstanceSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstanceSearchService]
    });
  });

  it('should be created', inject([InstanceSearchService], (service: InstanceSearchService) => {
    expect(service).toBeTruthy();
  }));
});
