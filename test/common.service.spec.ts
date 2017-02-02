/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonService } from '../component/common.service';

describe('Service: Common', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService]
    });
  });

  it('should create', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Service: Common => isNull', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService]
    });
  });

  it(`should create`, inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));

  it(`should return 'true' if data equal null`, inject([CommonService], (service: CommonService) => {
    let data: any = null;
    expect(service.isNull(data)).toEqual(true);
  }));

});
