"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = require("rxjs/Subject");
var CompleterSearchWord = (function (_super) {
    __extends(CompleterSearchWord, _super);
    function CompleterSearchWord(http, url) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = url;
        return _this;
    }
    CompleterSearchWord.prototype.search = function (term) {
        var _this = this;
        this.http.get(this.url + term + "")
            .map(function (res) {
            // Convert the result to CompleterItem[]
            var data = res.json();
            var matches = data.data.map(function (item) {
                return {
                    title: item.value
                };
            });
            _this.next(matches);
        })
            .subscribe();
    };
    CompleterSearchWord.prototype.cancel = function () {
        // Handle cancel
    };
    return CompleterSearchWord;
}(Subject_1.Subject));
exports.CompleterSearchWord = CompleterSearchWord;
//# sourceMappingURL=completer-search-word.js.map