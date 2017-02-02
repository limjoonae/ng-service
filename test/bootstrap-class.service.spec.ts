/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BootstrapClassService } from '../component/bootstrap-class.service';

describe('Service: BootstrapClass', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootstrapClassService]
    });
  });

  it('should create', inject([BootstrapClassService], (service: BootstrapClassService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Service: BootstrapClass => setStyleClass', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BootstrapClassService]
    });
  });

  it(`should create`, inject([BootstrapClassService], (service: BootstrapClassService) => {
    expect(service).toBeTruthy();
  }));

  it(`should return 'alert-success' if prefix is 'alert' and styleClass is 'success' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
    let prefix = 'alert';
    let styleClass = 'success';
    expect(service.setStyleClass(prefix, prefix)).toEqual(`alert-success`);
  }));

  it(`should return 'btn-outline-warning' if colorClassPrefix is 'btn-', colorClass is 'warning' and isOutlineColor equal 'true'`, inject([BootstrapClassService], (service: BootstrapClassService) => {
    let prefix = 'btn';
    let styleClass = 'sm';
    expect(service.setSizeClass(prefix, prefix)).toEqual(`btn-sm`);
  }));

  // it(`should return 'btn-sm' if colorClassPrefix is 'btn-', size is 'sm' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
  //   let colorClassPrefix = 'btn-';
  //   let size = 'sm';
  //   expect(service.setSize(size)).toEqual('btn-sm');
  // }));

});
