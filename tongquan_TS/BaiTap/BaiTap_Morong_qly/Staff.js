"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(name, gender, birthday, email, phoneNumber) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getGender = function () {
        return this.gender;
    };
    Staff.prototype.getBirthday = function () {
        return this.birthday;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getphoneNumber = function () {
        return this.phoneNumber;
    };
    Staff.prototype.checkGender = function (gender) {
        var male = true;
        var female = false;
        if (gender === male) {
            console.log("Gender is male");
        }
        else if (gender === female) {
            console.log("Gender is female");
        }
    };
    return Staff;
}());
exports.Staff = Staff;
