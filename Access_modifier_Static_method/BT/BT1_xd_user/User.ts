enum Role {
    admin= 1,
    user

}
class User {
    protected name: string;
    protected email: string;
    role : Role

    constructor(name: string, email: string,role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo():string {
        return (`${this.name} - ${this.email} - ${this.role}`);
    }
    setName (name:string)  {
        this.name = name;
    }
    setEmail (email:string) {
        this.email = email;
    }
    setRole (role:Role) {
        this.role = role;
    }
    isAdmin(): string {
        if (this.role == 1) {
        return (`Admin`);
        }
        else {
            return (`User`)
        }
    }
}

    let user1 = new User('Ngoc','ngocskit@gmail.com',Role.admin);
    console.log(user1.getInfo());
    console.log(user1.isAdmin());

    user1.setRole(Role.user);
    console.log(user1.getInfo());

    user1.setEmail('ngoc@gmail.com');
    console.log(user1.getInfo());