import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.sendData = new EventEmitter();
    }
    ChildComponent.prototype.Clickme = function () {
        this.sendData.emit(this.p_id + "......" + this.p_name + "......" + this.p_cost);
    };
    ChildComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input('_id'),
        tslib_1.__metadata("design:type", Object)
    ], ChildComponent.prototype, "p_id", void 0);
    tslib_1.__decorate([
        Input('_name'),
        tslib_1.__metadata("design:type", Object)
    ], ChildComponent.prototype, "p_name", void 0);
    tslib_1.__decorate([
        Input('_cost'),
        tslib_1.__metadata("design:type", Object)
    ], ChildComponent.prototype, "p_cost", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], ChildComponent.prototype, "sendData", void 0);
    ChildComponent = tslib_1.__decorate([
        Component({
            selector: 'app-child',
            templateUrl: './child.component.html',
            styleUrls: ['./child.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());
export { ChildComponent };
//# sourceMappingURL=child.component.js.map