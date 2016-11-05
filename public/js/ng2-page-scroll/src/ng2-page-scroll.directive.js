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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var ng2_page_scroll_service_1 = require('./ng2-page-scroll.service');
var ng2_page_scroll_instance_1 = require('./ng2-page-scroll-instance');
var ng2_page_scroll_util_service_1 = require('./ng2-page-scroll-util.service');
var ng2_page_scroll_config_1 = require('./ng2-page-scroll-config');
var PageScroll = (function () {
    function PageScroll(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollEasing = null;
        this.pageScroll = null;
        this.pageScrollFinish = new core_1.EventEmitter();
        this.document = document;
    }
    PageScroll.prototype.ngOnDestroy = function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    PageScroll.prototype.generatePageScrollInstance = function () {
        if (ng2_page_scroll_util_service_1.PageScrollUtilService.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = ng2_page_scroll_instance_1.PageScrollInstance.advancedInstance(this.document, this.href, null, this.pageScroll, this.pageScrollOffset, this.pageScrollInterruptible, this.pageScrollEasing, this.pageScrollDuration, this.pageScrollFinish);
        }
        return this.pageScrollInstance;
    };
    PageScroll.prototype.handleClick = function (clickEvent) {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            // We need to navigate their first.
            // Navigation is handled by the routerLink directive
            // so we only need to listen for route change
            // Note: the change event is also emitted when navigating to the current route again
            var subscription_1 = this.router.events.subscribe(function (routerEvent) {
                if (routerEvent instanceof router_1.NavigationEnd) {
                    subscription_1.unsubscribe();
                    _this.pageScrollService.start(_this.generatePageScrollInstance());
                }
                else if (routerEvent instanceof router_1.NavigationError || routerEvent instanceof router_1.NavigationCancel) {
                    subscription_1.unsubscribe();
                }
            });
        }
        else {
            this.pageScrollService.start(this.generatePageScrollInstance());
        }
        return false; // to preventDefault()
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PageScroll.prototype, "routerLink", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PageScroll.prototype, "href", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PageScroll.prototype, "pageScrollOffset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PageScroll.prototype, "pageScrollDuration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ng2_page_scroll_config_1.EasingLogic)
    ], PageScroll.prototype, "pageScrollEasing", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PageScroll.prototype, "pageScrollInterruptible", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PageScroll.prototype, "pageScroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PageScroll.prototype, "pageScrollFinish", void 0);
    PageScroll = __decorate([
        core_1.Directive({
            selector: '[pageScroll]',
            host: {
                '(click)': 'handleClick($event)',
            }
        }),
        __param(1, core_1.Optional()),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [ng2_page_scroll_service_1.PageScrollService, router_1.Router, Object])
    ], PageScroll);
    return PageScroll;
}());
exports.PageScroll = PageScroll;
//# sourceMappingURL=ng2-page-scroll.directive.js.map