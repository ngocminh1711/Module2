"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManager = void 0;
class StaffManager {
    constructor() {
        this.staffs = [];
    }
    addStaff(staff) {
        this.staffs.push(staff);
    }
    removeStaff(name) {
        this.staffs.forEach((staff, index) => {
            if (staff.getName() === name) {
                this.staffs.splice(index, 1);
            }
        });
    }
    getInfo() {
        return this.staffs;
    }
}
exports.StaffManager = StaffManager;
