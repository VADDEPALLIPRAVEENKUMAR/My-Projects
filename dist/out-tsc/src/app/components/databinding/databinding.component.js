import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DatabindingComponent = /** @class */ (function () {
    function DatabindingComponent() {
        this.firstname = "Adam";
        this.lastname = "Smith";
        this.age = 34;
        this.recievenewsletters = true;
        this.gender = "Male";
        this.country = "India";
        this.address = "http://www.facebook.com";
    }
    DatabindingComponent.prototype.ChangeData = function () {
        this.firstname = "John";
        this.lastname = "David";
        this.age = 32;
        this.recievenewsletters = false;
        this.gender = "Female";
        this.country = "USA";
    };
    DatabindingComponent.prototype.ngOnInit = function () {
    };
    DatabindingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-databinding',
            templateUrl: './databinding.component.html',
            styleUrls: ['./databinding.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DatabindingComponent);
    return DatabindingComponent;
}());
export { DatabindingComponent };
//# sourceMappingURL=databinding.component.js.map