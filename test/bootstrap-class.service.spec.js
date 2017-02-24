/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var index_1 = require('./index');
describe('Service: BootstrapClass', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [index_1.BootstrapClassService]
        });
    });
    it('should create', testing_1.inject([index_1.BootstrapClassService], function (service) {
        expect(service).toBeTruthy();
    }));
});
describe('Service: BootstrapClass => setStyleClass', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [index_1.BootstrapClassService]
        });
    });
    it("should create", testing_1.inject([index_1.BootstrapClassService], function (service) {
        expect(service).toBeTruthy();
    }));
    it("should return 'alert-success' if prefix is 'alert' and colorTheme is 'success' ", testing_1.inject([index_1.BootstrapClassService], function (service) {
        var prefix = 'alert';
        var styleClass = 'success';
        expect(service.setStyleClass(styleClass, prefix)).toEqual("alert-success");
    }));
    it("should return 'btn-outline-success' if prefix is 'btn' and colorTheme is 'outline-success' ", testing_1.inject([index_1.BootstrapClassService], function (service) {
        var prefix = 'btn';
        var styleClass = 'outline-success';
        expect(service.setStyleClass(styleClass, prefix)).toEqual("btn-outline-success");
    }));
    it("should return 'btn-sm' if prefix is 'btn' and buttonSize is 'sm' ", testing_1.inject([index_1.BootstrapClassService], function (service) {
        var prefix = 'btn';
        var styleClass = 'sm';
        expect(service.setSizeClass(styleClass, prefix)).toEqual("btn-sm");
    }));
});
//# sourceMappingURL=bootstrap-class.service.spec.js.map