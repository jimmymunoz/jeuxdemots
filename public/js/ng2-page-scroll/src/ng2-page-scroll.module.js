/**
 * Created by sebastianfuss on 03.09.16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var ng2_page_scroll_service_1 = require('./ng2-page-scroll.service');
var ng2_page_scroll_directive_1 = require('./ng2-page-scroll.directive');
var Ng2PageScrollModule = (function () {
    function Ng2PageScrollModule() {
    }
    Ng2PageScrollModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ng2_page_scroll_directive_1.PageScroll],
            exports: [ng2_page_scroll_directive_1.PageScroll],
            providers: [
                { provide: ng2_page_scroll_service_1.PageScrollService, useClass: ng2_page_scroll_service_1.PageScrollService }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2PageScrollModule);
    return Ng2PageScrollModule;
}());
exports.Ng2PageScrollModule = Ng2PageScrollModule;
//# sourceMappingURL=ng2-page-scroll.module.js.map