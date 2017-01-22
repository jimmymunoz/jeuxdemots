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
var word_service_1 = require("./word.service");
var ListSearchResultDetailComponent = (function () {
    function ListSearchResultDetailComponent(wordService) {
        this.wordService = wordService;
        this.wordEvent = new core_1.EventEmitter();
        this.titre = "Result Details";
        this.orderByDir = "-"; //Descending
        this.orderByField = "w"; //weight
        this.maxHeight = 35;
        this.maxHeightDefinitions = 80;
        //console.log("List result : " + this.listResult);
    }
    ListSearchResultDetailComponent.prototype.searchNewWord = function (newword) {
        this.sendWord(newword);
    };
    ListSearchResultDetailComponent.prototype.keys = function (object) {
        if (!object) {
            object = [];
        }
        return Object.keys(object);
    };
    ListSearchResultDetailComponent.prototype.getFontSizeByWeight = function (objRow, w) {
        var distance = ((objRow.max_w - objRow.min_w) / 10);
        var size = Math.floor(w / distance);
        return "font_size-1-" + size;
    };
    ListSearchResultDetailComponent.prototype.sortListData = function (listData, sort_field, sort_dir) {
        listData.sort_field = sort_field;
        listData.sort_dir = sort_dir;
    };
    ListSearchResultDetailComponent.prototype.mouseEnterDefinition = function (id) {
        var myDiv = document.getElementById("rafinement_semantique_" + id);
        myDiv.className += ' reamark_text';
    };
    ListSearchResultDetailComponent.prototype.mouseLeaveDefinition = function (id) {
        var myDiv = document.getElementById("rafinement_semantique_" + id);
        myDiv.className = ' byline definitions_text';
    };
    ListSearchResultDetailComponent.prototype.sendWord = function (word) {
        this.wordEvent.emit(word);
    };
    return ListSearchResultDetailComponent;
}());
__decorate([
    core_1.Output("newWord"),
    __metadata("design:type", core_1.EventEmitter)
], ListSearchResultDetailComponent.prototype, "wordEvent", void 0);
ListSearchResultDetailComponent = __decorate([
    core_1.Component({
        selector: 'list-search-result-detail-component',
        templateUrl: 'html/list_definition.html',
        styles: ["\n    left-menu {\n      display: block; border: 1px solid #ccc;\n    }\n  "],
        inputs: ['listResult', 'word'],
        outputs: ['newWord']
    }),
    __metadata("design:paramtypes", [word_service_1.WordService])
], ListSearchResultDetailComponent);
exports.ListSearchResultDetailComponent = ListSearchResultDetailComponent;
//# sourceMappingURL=list-search-result-detail-component.js.map