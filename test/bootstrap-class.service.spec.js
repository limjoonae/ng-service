/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var bootstrap_class_service_1 = require('../component/bootstrap-class.service');
describe('Service: BootstrapClass', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [bootstrap_class_service_1.BootstrapClassService]
        });
    });
    it('should create', testing_1.inject([bootstrap_class_service_1.BootstrapClassService], function (service) {
        expect(service).toBeTruthy();
    }));
});
describe('Service: BootstrapClass => setColorTheme', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [bootstrap_class_service_1.BootstrapClassService]
        });
    });
    it("should create", testing_1.inject([bootstrap_class_service_1.BootstrapClassService], function (service) {
        expect(service).toBeTruthy();
    }));
    // it(`should return 'alert alert-success' if colorClassPrefix is 'alert alert-' and colorClass is 'success' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
    //   let colorClassPrefix = 'alert alert-';
    //   let colorClass = 'success';
    //   expect(service.setColorTheme(colorClassPrefix, colorClass)).toEqual(colorClassPrefix.concat(colorClass));
    // }));
    // it(`should return 'btn-outline-warning' if colorClassPrefix is 'btn-', colorClass is 'warning' and isOutlineColor equal 'true'`, inject([BootstrapClassService], (service: BootstrapClassService) => {
    //   let colorClassPrefix = 'btn-';
    //   let colorClass = 'warning';
    //   let isOutlineColor = 'true';
    //   expect(service.setColorTheme(colorClassPrefix, colorClass, isOutlineColor)).toEqual('btn-outline-');
    // }));
    // it(`should return 'btn-sm' if colorClassPrefix is 'btn-', size is 'sm' `, inject([BootstrapClassService], (service: BootstrapClassService) => {
    //   let colorClassPrefix = 'btn-';
    //   let size = 'sm';
    //   expect(service.setSize(size)).toEqual('btn-sm');
    // }));
});
//# sourceMappingURL=bootstrap-class.service.spec.js.map