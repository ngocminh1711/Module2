var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["user"] = 2] = "user";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return ("".concat(this.name, " - ").concat(this.email, " - ").concat(this.role));
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    User.prototype.isAdmin = function () {
        if (this.role == 1) {
            return ("Admin");
        }
        else {
            return ("User");
        }
    };
    return User;
}());
var user1 = new User('Ngoc', 'ngocskit@gmail.com', Role.admin);
console.log(user1.getInfo());
console.log(user1.isAdmin());
user1.setRole(Role.user);
console.log(user1.getInfo());
user1.setEmail('ngoc@gmail.com');
console.log(user1.getInfo());
