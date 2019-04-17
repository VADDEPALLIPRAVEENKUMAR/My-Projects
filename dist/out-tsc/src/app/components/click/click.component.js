import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ClickComponent = /** @class */ (function () {
    function ClickComponent() {
    }
    ClickComponent.prototype.f1 = function () {
        if (this.uname == "admin" && this.upwd == "admin") {
            this.str = "Login Successfully";
            this.status = "green";
        }
        else {
            this.str = "Invalid User name and Password";
            this.status = "red";
        }
    };
    ClickComponent.prototype.ngOnInit = function () {
    };
    ClickComponent = tslib_1.__decorate([
        Component({
            selector: 'app-click',
            templateUrl: './click.component.html',
            styleUrls: ['./click.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ClickComponent);
    return ClickComponent;
}());
export { ClickComponent };
//# sourceMappingURL=click.component.js.map