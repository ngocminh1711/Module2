"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(firstname, lastname, birthday, address, position, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.address = address;
        this.position = position;
        this.id = id;
    }
    setFirstName(firstname) {
        this.firstname = firstname;
    }
    setLastName(lastname) {
        this.lastname = lastname;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    setAddress(address) {
        this.address = address;
    }
    setPosition(position) {
        this.position = position;
    }
    setID(id) {
        this.id = id;
    }
    getLastName() {
        return this.lastname;
    }
    getFirstName() {
        return this.firstname;
    }
    getBirthday() {
        return this.birthday;
    }
    getAddress() {
        return this.address;
    }
    getPosition() {
        return this.position;
    }
    getID(id) {
        return this.id;
    }
}
exports.Employee = Employee;
