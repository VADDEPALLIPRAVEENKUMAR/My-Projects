import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
        this.products = [
            { p_id: 111, p_name: "Pavankalyan", p_cost: 10000000000 },
            { p_id: 222, p_name: "manojkumar", p_cost: 200000000000 },
            { p_id: 333, p_name: "vinoodkumar", p_cost: 30000000000 },
        ];
    }
    ParentComponent.prototype.Clickme = function (data) {
        alert(data);
    };
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-parent',
            templateUrl: './parent.component.html',
            styleUrls: ['./parent.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());
export { ParentComponent };
//# sourceMappingURL=parent.component.js.map