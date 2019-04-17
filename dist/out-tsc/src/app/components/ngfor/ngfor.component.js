import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var NgforComponent = /** @class */ (function () {
    function NgforComponent() {
        this.array = [
            { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
            { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
            { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
            { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
            { "p_id": 555, "p_name": "p_five", "p_cost": 50000 },
        ];
    }
    NgforComponent.prototype.ngOnInit = function () {
    };
    NgforComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ngfor',
            templateUrl: './ngfor.component.html',
            styleUrls: ['./ngfor.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgforComponent);
    return NgforComponent;
}());
export { NgforComponent };
//# sourceMappingURL=ngfor.component.js.map