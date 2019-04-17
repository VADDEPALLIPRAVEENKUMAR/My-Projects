import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var AggregationService = /** @class */ (function () {
    function AggregationService(_http) {
        this._http = _http;
    }
    AggregationService.prototype.getData = function () {
        return this._http.get("http://localhost:8080/aggr");
    };
    AggregationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AggregationService);
    return AggregationService;
}());
export { AggregationService };
//# sourceMappingURL=aggregation.service.js.map