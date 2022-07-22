"use strict";
exports.__esModule = true;
exports.NumberPhoneRegex = void 0;
var NumberPhoneRegex = /** @class */ (function () {
    function NumberPhoneRegex() {
        this.NUBMERPHONE_REGEXP = /^\([+0-9]{2}\)-\([0]{1}[0-9]{9}\)$/;
    }
    NumberPhoneRegex.prototype.validate = function (regex) {
        return this.NUBMERPHONE_REGEXP.test(regex);
    };
    return NumberPhoneRegex;
}());
exports.NumberPhoneRegex = NumberPhoneRegex;
