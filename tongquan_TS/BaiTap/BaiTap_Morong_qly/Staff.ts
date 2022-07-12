export class Staff {
    name: string;
    gender: boolean;
    birthday: string;
    email: string;
    phoneNumber: string;

    constructor(name: string,
                gender: boolean,
                birthday: string,
                email: string,
                phoneNumber: string) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    getName(): string {
        return this.name;
    }

    getGender(): boolean {
        return this.gender;
    }

    getBirthday(): string {
        return this.birthday;
    }

    getEmail(): string {
        return this.email;
    }

    getphoneNumber(): string {
        return this.phoneNumber;
    }

    checkGender(gender: boolean): void {
        let male = true
        let female = false
        if (gender === male) {
            console.log("Gender is male")
        } else if (gender === female) {
            console.log("Gender is female")
        }
    }

}