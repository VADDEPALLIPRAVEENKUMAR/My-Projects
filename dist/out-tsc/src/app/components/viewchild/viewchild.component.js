import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ViewchildComponent = /** @class */ (function () {
    function ViewchildComponent() {
        this.var_one = "Message from child component ";
        this.var_two = "Message from child component ";
    }
    ViewchildComponent.prototype.ngOnInit = function () {
    };
    ViewchildComponent = tslib_1.__decorate([
        Component({
            selector: 'app-viewchild',
            templateUrl: './viewchild.component.html',
            styleUrls: ['./viewchild.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ViewchildComponent);
    return ViewchildComponent;
}());
export { ViewchildComponent };
//# sourceMappingURL=viewchild.component.js.map