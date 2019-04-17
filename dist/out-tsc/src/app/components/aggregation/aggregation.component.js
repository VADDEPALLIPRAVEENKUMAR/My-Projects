import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AggregationService } from "../../services/aggregation.service";
var AggregationComponent = /** @class */ (function () {
    function AggregationComponent(_service) {
        this._service = _service;
    }
    AggregationComponent.prototype.ngOnInit = function () {
        this._service.getData().subscribe(function (posRes) {
            this.result = posRes;
        }, function (errRes) {
            console.log(errRes);
        });
    };
    AggregationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-aggregation',
            templateUrl: './aggregation.component.html',
            styles: []
        }),
        tslib_1.__metadata("design:paramtypes", [AggregationService])
    ], AggregationComponent);
    return AggregationComponent;
}());
export { AggregationComponent };
//# sourceMappingURL=aggregation.component.js.map