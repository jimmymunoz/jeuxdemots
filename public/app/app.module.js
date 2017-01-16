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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var search_word_component_1 = require("./search-word-component");
var history_component_1 = require("./history.component");
var list_search_result_detail_component_1 = require("./list-search-result-detail-component");
var side_bar_menu_component_1 = require("./side-bar-menu.component");
var filter_list_component_1 = require("./filter-list.component");
var word_service_1 = require("./word.service");
//import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
var ng2_completer_1 = require("ng2-completer");
//import { CompleterSearchWord } from "./completer-search-word";
var ng2_page_scroll_1 = require("ng2-page-scroll"); //https://www.npmjs.com/package/ng2-page-scroll#example-app
var orderby_1 = require("./orderby");
var ng2_popover_1 = require("ng2-popover");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            //    Ng2AutoCompleteModule,
            ng2_completer_1.Ng2CompleterModule,
            ng2_page_scroll_1.Ng2PageScrollModule,
            ng2_popover_1.PopoverModule
        ],
        declarations: [
            search_word_component_1.SearchWordComponet,
            list_search_result_detail_component_1.ListSearchResultDetailComponent,
            history_component_1.Historique,
            app_component_1.AppComponent,
            orderby_1.OrderBy,
            side_bar_menu_component_1.SideBarMenuComponent,
            //    CompleterSearchWord,
            filter_list_component_1.FilterListComponent
        ],
        providers: [
            word_service_1.WordService,
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map