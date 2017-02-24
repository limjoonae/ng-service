/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckDataService } from './index';

describe('Service: CheckData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckDataService]
    });
  });

  it('should ...', inject([CheckDataService], (service: CheckDataService) => {
    expect(service).toBeTruthy();
  }));

  it('case checkbox: should return true if complete data', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [
      { value: '11', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
      { value: '12', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
    ];
    expect(service.checkData(DATA)).toBe(true);
  }));

  it('case checkbox: should return false if data not complete is value not data', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [
      { value: '', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
      { value: '12', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
    ];
    expect(service.checkData(DATA)).toBe(false);
  }));

  it('case checkbox: should return false if data not complete is label not data', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [
      { value: '1', label: '', disable: '', readonly: '', checked: '' },
      { value: '12', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
    ];
    expect(service.checkData(DATA)).toBe(false);
  }));

  it('case checkbox: should return false data not complete is value (data 2) not data ', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [
      { value: '1', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
      { value: '', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
    ];
    expect(service.checkData(DATA)).toBe(false);
  }));

   it('case checkbox: should return false if data not complete is value and label not data ', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [
      { value: '1', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
      { value: '', label: '', disable: '', readonly: 'true', checked: '' }
    ];
    expect(service.checkData(DATA)).toBe(false);
  }));

  it('case checkbox: should return false if data not complete', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [];
    expect(service.checkData(DATA)).toBe(false);
  }));

  it('case checkbox: should return false if data not complete', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any>;
    expect(service.checkData(DATA)).toBe(false);
  }));

  it('case radio: should return true if data more than one ', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [
      { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' },
      { value: '2', label: 'radio 2', disable: '', readonly: 'true', checked: '' }
    ];
    expect(service.checkRadio(DATA)).toBe(true);
  }));

  it('case radio: should return false if data not more than one ', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [
      { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' }
    ];
    expect(service.checkRadio(DATA)).toBe(false);
  }));

    it('case radio: should return false if data more than one but data not complete 1 ', inject([CheckDataService], (service: CheckDataService) => {
      let DATA: Array<any> = [
        { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' },
        { value: '', label: 'radio 1', disable: '', readonly: '', checked: '' }
      ];
      expect(service.checkRadio(DATA)).toBe(false);
    }));

    it('case radio: should return false if data more than one but data not complete 2 ', inject([CheckDataService], (service: CheckDataService) => {
      let DATA: Array<any> = [
        { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' },
        { value: '2', label: '', disable: '', readonly: '', checked: '' }
      ];
      expect(service.checkRadio(DATA)).toBe(false);
    }));

    it('case radio: should return false if data not complete', inject([CheckDataService], (service: CheckDataService) => {
        let DATA: Array<any>;
        expect(service.checkRadio(DATA)).toBe(false);
    }));

    it('case radio: should return false if data not complete', inject([CheckDataService], (service: CheckDataService) => {
    let DATA: Array<any> = [];
    expect(service.checkRadio(DATA)).toBe(false);
    }));



});
