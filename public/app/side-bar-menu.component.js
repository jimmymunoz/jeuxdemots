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
var core_1 = require("@angular/core");
//import { OrderBy } from './orderby'; //http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
//import { PopoverModule } from "ng2-popover"; //https://github.com/pleerock/ng2-popover
//import { Historique }   from './history.component';
var SideBarMenuComponent = (function () {
    function SideBarMenuComponent() {
    }
    return SideBarMenuComponent;
}());
SideBarMenuComponent = __decorate([
    core_1.Component({
        selector: 'side-bar-menu',
        templateUrl: 'html/side-bar-menu.html',
        styles: ["\n    \n  "],
        inputs: ['listResult', 'history', 'word']
    }),
    __metadata("design:paramtypes", [])
], SideBarMenuComponent);
exports.SideBarMenuComponent = SideBarMenuComponent;
//# sourceMappingURL=side-bar-menu.component.js.map