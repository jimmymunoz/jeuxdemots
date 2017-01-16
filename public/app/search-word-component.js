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
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
//import { Word } from './words';
var ng2_completer_1 = require("ng2-completer");
var completer_search_word_1 = require("./completer-search-word");
var word_service_1 = require("./word.service");
var SearchWordComponet = (function () {
    //private dataService: CompleterData;
    function SearchWordComponet(wordService, _sanitizer, completerService, http) {
        var _this = this;
        this.wordService = wordService;
        this._sanitizer = _sanitizer;
        this.completerService = completerService;
        this.http = http;
        this.title = 'Search a Word';
        this.word = "";
        this.wordObjet = { id: "test", value: "test" };
        this.history = [];
        this.leftAligned = function (data) {
            var html = "<div style=\"text-align:left\">" + data.value + "</div>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
        this.resultsParent = {
            "data": []
        };
        this.dataService = new completer_search_word_1.CompleterSearchWord(http, wordService.getfindWordsUrl() + '?word=');
        //this.dataService = completerService.remote(wordService.getfindWordsUrl() + '?word=', 'data', 'value');
    }
    SearchWordComponet.prototype.getSearchResult = function () {
        var _this = this;
        this.setHistory(this.getWord());
        this.wordService
            .searchResults(this.word)
            .then(function (resultsParent) { return _this.resultsParent = resultsParent; });
    };
    SearchWordComponet.prototype.getWord = function () {
        return this.word;
    };
    SearchWordComponet.prototype.setHistory = function (word) {
        if (this.history.indexOf(word) === -1) {
            this.history.push(word);
        }
    };
    SearchWordComponet.prototype.getHistory = function (word) {
        return this.history;
    };
    SearchWordComponet.prototype.clearResults = function () {
        this.resultsParent = {
            "data": []
        };
    };
    SearchWordComponet.prototype.typingEvent = function (event) {
        //console.log("event:" + event.target.value);
        if (event.target.value != this.word) {
            this.clearResults();
        }
        this.word = event.target.value;
    };
    SearchWordComponet.prototype.completeCallBack = function (event) {
        //console.log(event);
        this.clearResults();
        this.word = event.value;
        console.log(this.word);
        //this.getSearchResult();	
    };
    SearchWordComponet.prototype.json = function (obj) {
        return JSON.stringify(obj);
    };
    return SearchWordComponet;
}());
SearchWordComponet = __decorate([
    core_1.Component({
        selector: 'search-word-component',
        templateUrl: 'app/html/search-word.html',
        styles: ["\n    ng2-auto-complete {\n      display: inline-block; position: relative; width: 100% !important;\n    }\n    ng2-auto-complete input {\n      display: inline-block; position: relative; width: 100%;\n    }\n  "],
        providers: [word_service_1.WordService]
    }),
    __metadata("design:paramtypes", [word_service_1.WordService,
        platform_browser_1.DomSanitizer,
        ng2_completer_1.CompleterService,
        http_1.Http])
], SearchWordComponet);
exports.SearchWordComponet = SearchWordComponet;
/*
 
npm install ng2-auto-complete --save
https://github.com/ng2-ui/ng2-auto-complete/blob/master/app/app.component.ts

 */ 
//# sourceMappingURL=search-word-component.js.map