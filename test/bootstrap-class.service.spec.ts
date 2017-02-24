/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BootstrapClassService } from './index';

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

  it(`should return 'alert-success' if prefix is 'alert' and colorTheme is 'success' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
    let prefix = 'alert';
    let styleClass = 'success';
    expect(service.setStyleClass(styleClass, prefix)).toEqual(`alert-success`);
  }));

  it(`should return 'btn-outline-success' if prefix is 'btn' and colorTheme is 'outline-success' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
    let prefix = 'btn';
    let styleClass = 'outline-success';
    expect(service.setStyleClass(styleClass, prefix)).toEqual(`btn-outline-success`);
  }));

  it(`should return 'btn-sm' if prefix is 'btn' and buttonSize is 'sm' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
    let prefix = 'btn';
    let styleClass = 'sm';
    expect(service.setSizeClass(styleClass, prefix)).toEqual(`btn-sm`);
  }));

});
