/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeaderService } from './leader.service';

describe('Service: LeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaderService]
    });
  });

  it('should ...', inject([LeaderService], (service: LeaderService) => {
    expect(service).toBeTruthy();
  }));
});
