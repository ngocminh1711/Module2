"use strict";
exports.__esModule = true;
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this.name = name;
        this.code = code;
    }
    Patient.prototype.getCode = function () { return this.code; };
    return Patient;
}());
exports.Patient = Patient;
