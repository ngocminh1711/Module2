"use strict";
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo() {
        return (`${this.name} - ${this.email} - ${this.role}`);
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setRole(role) {
        this.role = role;
    }
    isAdmin() {
        if (this.role == 1) {
            return (`Admin`);
        }
        else {
            return (`User`);
        }
    }
}
let user1 = new User('Ngoc', 'ngocskit@gmail.com', Role.admin);
console.log(user1.getInfo());
console.log(user1.isAdmin());
user1.setRole(Role.user);
console.log(user1.getInfo());
user1.setEmail('ngoc@gmail.com');
console.log(user1.getInfo());
