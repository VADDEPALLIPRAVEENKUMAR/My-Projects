import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewchildComponent } from "../viewchild/viewchild.component";
var ViewparentComponent = /** @class */ (function () {
    function ViewparentComponent() {
    }
    ViewparentComponent.prototype.ngOnInit = function () {
    };
    ViewparentComponent.prototype.clickMe = function () {
        this._child.var_one = "I am from Parent Component !";
        this._child.var_two = "Hello...!";
        this._fname.nativeElement.style.backgroundColor = "green";
        this._fname.nativeElement.style.color = "red";
        this._lname.nativeElement.style.backgroundColor = "red";
        this._lname.nativeElement.style.color = "green";
    };
    tslib_1.__decorate([
        ViewChild(ViewchildComponent),
        tslib_1.__metadata("design:type", ViewchildComponent)
    ], ViewparentComponent.prototype, "_child", void 0);
    tslib_1.__decorate([
        ViewChild("fname"),
        tslib_1.__metadata("design:type", ElementRef)
    ], ViewparentComponent.prototype, "_fname", void 0);
    tslib_1.__decorate([
        ViewChild("lname"),
        tslib_1.__metadata("design:type", ElementRef)
    ], ViewparentComponent.prototype, "_lname", void 0);
    ViewparentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-viewparent',
            templateUrl: './viewparent.component.html',
            styleUrls: ['./viewparent.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ViewparentComponent);
    return ViewparentComponent;
}());
export { ViewparentComponent };
//# sourceMappingURL=viewparent.component.js.map