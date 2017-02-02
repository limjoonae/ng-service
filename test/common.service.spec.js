/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var common_service_1 = require('../component/common.service');
describe('Service: Common', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [common_service_1.CommonService]
        });
    });
    it('should create', testing_1.inject([common_service_1.CommonService], function (service) {
        expect(service).toBeTruthy();
    }));
});
describe('Service: Common => isNull', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [common_service_1.CommonService]
        });
    });
    it("should create", testing_1.inject([common_service_1.CommonService], function (service) {
        expect(service).toBeTruthy();
    }));
    it("should return 'true' if data equal null", testing_1.inject([common_service_1.CommonService], function (service) {
        var data = null;
        expect(service.isNull(data)).toEqual(true);
    }));
});
//# sourceMappingURL=common.service.spec.js.map