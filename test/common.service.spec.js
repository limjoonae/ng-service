/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var index_1 = require('./index');
describe('Service: Common', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [index_1.CommonService]
        });
    });
    it('should create', testing_1.inject([index_1.CommonService], function (service) {
        expect(service).toBeTruthy();
    }));
});
describe('Service: CommonService => isNull', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [index_1.CommonService]
        });
    });
    it("should create service", testing_1.inject([index_1.CommonService], function (service) {
        expect(service).toBeTruthy();
    }));
    it("should return 'true' if data equal null", testing_1.inject([index_1.CommonService], function (service) {
        var data = null;
        expect(service.isNull(data)).toEqual(true);
    }));
    it("should return 'true' if data equal ''", testing_1.inject([index_1.CommonService], function (service) {
        var data = '';
        expect(service.isNull(data)).toEqual(true);
    }));
    it("should return 'true' if data equal undefined", testing_1.inject([index_1.CommonService], function (service) {
        var data = undefined;
        expect(service.isNull(data)).toEqual(true);
    }));
});
//# sourceMappingURL=common.service.spec.js.map