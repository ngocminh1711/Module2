"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    constructor(name, gender, birthday, email, phoneNumber) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    getBirthday() {
        return this.birthday;
    }
    getEmail() {
        return this.email;
    }
    getphoneNumber() {
        return this.phoneNumber;
    }
    checkGender(gender) {
        let male = true;
        let female = false;
        if (gender === male) {
            console.log("Gender is male");
        }
        else if (gender === female) {
            console.log("Gender is female");
        }
    }
}
exports.Staff = Staff;
