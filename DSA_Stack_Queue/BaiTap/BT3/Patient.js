"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
    getCode() { return this.code; }
}
exports.Patient = Patient;
