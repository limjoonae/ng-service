/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonService } from './index';

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

describe('Service: CommonService => isNull', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService]
    });
  });

  it(`should create service`, inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));

  it(`should return 'true' if data equal null`, inject([CommonService], (service: CommonService) => {
    let data: any = null;
    expect(service.isNull(data)).toEqual(true);
  }));

  it(`should return 'true' if data equal ''`, inject([CommonService], (service: CommonService) => {
    let data: any = '';
    expect(service.isNull(data)).toEqual(true);
  }));

  it(`should return 'true' if data equal undefined`, inject([CommonService], (service: CommonService) => {
    let data: any = undefined;
    expect(service.isNull(data)).toEqual(true);
  }));

});
