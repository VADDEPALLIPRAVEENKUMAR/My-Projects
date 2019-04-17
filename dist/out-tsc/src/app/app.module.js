import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AggregationComponent } from './components/aggregation/aggregation.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ClickComponent } from './components/click/click.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { ViewparentComponent } from './components/viewparent/viewparent.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AggregationComponent,
                DatabindingComponent,
                ClickComponent,
                NgforComponent,
                ChildComponent,
                ParentComponent,
                ViewchildComponent,
                ViewparentComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule, HttpClientModule, FormsModule
            ],
            providers: [],
            bootstrap: [ViewparentComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map