"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (data) {
        this.container.push(data);
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
