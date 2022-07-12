export class Employee {
    private firstname: string;
    private lastname: string;
    private birthday: string;
    private address: string;
    private position: string;
    id: string;

    constructor(firstname: string,
                lastname: string,
                birthday: string,
                address: string,
                position: string,
                id: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.address = address;
        this.position = position;
        this.id = id;
    }

    setFirstName(firstname: string) {
        this.firstname = firstname;
    }

    setLastName(lastname: string) {
        this.lastname = lastname;
    }

    setBirthday(birthday: string) {
        this.birthday = birthday;
    }

    setAddress(address: string) {
        this.address = address;
    }

    setPosition(position: string) {
        this.position = position;
    }

    setID(id: string) {
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
    getID(id: string) {
        return this.id;
    }
}
