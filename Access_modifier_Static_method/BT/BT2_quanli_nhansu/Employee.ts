export class Employee {
   private firstname: string;
   private lastname: string;
   private birthday?: Date;
   private address: string;
   private position: string;
   id: string;

    constructor(firstname: string,
                lastname: string,
                birthday: Date,
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
}
