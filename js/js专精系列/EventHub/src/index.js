"use strict";
exports.__esModule = true;
var Eventhub = /** @class */ (function () {
    function Eventhub() {
        this.cache = {};
    }
    Eventhub.prototype.on = function (eventName, fn) {
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].push(fn);
    };
    Eventhub.prototype.emit = function (eventName, args) {
        (this.cache[eventName] || []).forEach(function (fn) {
            return fn(args);
        });
    };
    Eventhub.prototype.off = function (eventName, fn) {
        var index = indexOf(this.cache[eventName], fn);
        if (index >= 0) {
            this.cache[eventName].splice(index, 1);
        }
    };
    return Eventhub;
}());
exports["default"] = Eventhub;
/***
 * helper indexOf兼容
 */
function indexOf(arr, item) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            index = i;
            break;
        }
    }
    return index;
}
