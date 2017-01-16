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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var WordService = (function () {
    function WordService(http) {
        var _this = this;
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        //private searchUrl = 'csv_example.json';  // URL to web api
        this.searchUrl = 'application/index/search'; // URL to web api
        this.history = [];
        this.findUrl = "application/index/autocompleteword";
        this.baseUrl = "/";
        this.useRemote = false; //Jimmy (Cordova -> Remote) true Remote, false: Local
        this.findWords = function (startsWith) {
            return _this.http.get(_this.getfindWordsUrl() + ("?word=" + startsWith))
                .map(function (h) { return h.json(); });
            //.catch(e => console.error(e));
        };
        if (this.useRemote) {
            this.baseUrl = "http://46.101.40.23/jeuxdemots/public/";
        }
    }
    WordService.prototype.getSearchUrl = function () {
        return "" + this.baseUrl + this.searchUrl;
    };
    WordService.prototype.getfindWordsUrl = function () {
        return "" + this.baseUrl + this.findUrl;
    };
    WordService.prototype.searchResults = function (word) {
        var _this = this;
        return this.http.get(this.getSearchUrl() + ("?word=" + word))
            .toPromise()
            .then(function (response) { return _this.setDefaultValuesList(response.json()); })
            .catch(this.handleError);
    };
    WordService.prototype.setDefaultValuesList = function (listResult) {
        for (var key in listResult['data']) {
            var isCollapsable = (listResult['data'][key].data.length > 15) ? true : false; //12 words
            if (key == 'definitions') {
                isCollapsable = (listResult['data'][key].data.length > 3) ? true : false; //2 definitions
            }
            listResult['data'][key]['isCollapsed'] = isCollapsable;
            listResult['data'][key]['isCollapsable'] = isCollapsable;
            listResult['data'][key]['sort_field'] = "w"; // w -> weight, name -> name 
            listResult['data'][key]['sort_dir'] = "-"; // + -> asc, - -> desc
            listResult['data'][key]['visible'] = 1; // 1 - 0
        }
        console.log(listResult);
        return listResult;
    };
    WordService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return WordService;
}());
WordService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WordService);
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map