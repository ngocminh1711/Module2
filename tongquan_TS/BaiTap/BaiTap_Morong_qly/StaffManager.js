"use strict";
exports.__esModule = true;
exports.StaffManager = void 0;
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        this.staffs = [];
    }
    StaffManager.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    StaffManager.prototype.removeStaff = function (name) {
        var _this = this;
        this.staffs.forEach(function (staff, index) {
            if (staff.getName() === name) {
                _this.staffs.splice(index, 1);
            }
        });
    };
    StaffManager.prototype.getInfo = function () {
        return this.staffs;
    };
    return StaffManager;
}());
exports.StaffManager = StaffManager;
