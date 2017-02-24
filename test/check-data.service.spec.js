/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var index_1 = require('./index');
describe('Service: CheckData', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [index_1.CheckDataService]
        });
    });
    it('should ...', testing_1.inject([index_1.CheckDataService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('case checkbox: should return true if complete data', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '11', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
            { value: '12', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
        ];
        expect(service.checkData(DATA)).toBe(true);
    }));
    it('case checkbox: should return false if data not complete is value not data', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
            { value: '12', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
        ];
        expect(service.checkData(DATA)).toBe(false);
    }));
    it('case checkbox: should return false if data not complete is label not data', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '1', label: '', disable: '', readonly: '', checked: '' },
            { value: '12', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
        ];
        expect(service.checkData(DATA)).toBe(false);
    }));
    it('case checkbox: should return false data not complete is value (data 2) not data ', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '1', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
            { value: '', label: 'checkbox 2', disable: '', readonly: 'true', checked: '' }
        ];
        expect(service.checkData(DATA)).toBe(false);
    }));
    it('case checkbox: should return false if data not complete is value and label not data ', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '1', label: 'checkbox 1', disable: '', readonly: '', checked: '' },
            { value: '', label: '', disable: '', readonly: 'true', checked: '' }
        ];
        expect(service.checkData(DATA)).toBe(false);
    }));
    it('case checkbox: should return false if data not complete', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [];
        expect(service.checkData(DATA)).toBe(false);
    }));
    it('case checkbox: should return false if data not complete', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA;
        expect(service.checkData(DATA)).toBe(false);
    }));
    it('case radio: should return true if data more than one ', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' },
            { value: '2', label: 'radio 2', disable: '', readonly: 'true', checked: '' }
        ];
        expect(service.checkRadio(DATA)).toBe(true);
    }));
    it('case radio: should return false if data not more than one ', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' }
        ];
        expect(service.checkRadio(DATA)).toBe(false);
    }));
    it('case radio: should return false if data more than one but data not complete 1 ', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' },
            { value: '', label: 'radio 1', disable: '', readonly: '', checked: '' }
        ];
        expect(service.checkRadio(DATA)).toBe(false);
    }));
    it('case radio: should return false if data more than one but data not complete 2 ', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [
            { value: '1', label: 'radio 1', disable: '', readonly: '', checked: '' },
            { value: '2', label: '', disable: '', readonly: '', checked: '' }
        ];
        expect(service.checkRadio(DATA)).toBe(false);
    }));
    it('case radio: should return false if data not complete', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA;
        expect(service.checkRadio(DATA)).toBe(false);
    }));
    it('case radio: should return false if data not complete', testing_1.inject([index_1.CheckDataService], function (service) {
        var DATA = [];
        expect(service.checkRadio(DATA)).toBe(false);
    }));
});
//# sourceMappingURL=check-data.service.spec.js.map