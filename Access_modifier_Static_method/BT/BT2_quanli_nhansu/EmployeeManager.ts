import {Employee} from "./Employee";

export class EmployeeManager {
    static employees: Employee[] = [];

    constructor() {

    }

    getInfo(): Employee[] {
        return EmployeeManager.employees;
    }

    addEmmployee(employee: Employee): void {
        EmployeeManager.employees.push(employee);
    }

    delete(lastname: string): void {
        EmployeeManager.employees.forEach((employee, index) => {
            if (employee.getLastName() === lastname) {
                EmployeeManager.employees.splice(index, 1)
            }
        })

    }
    update (firstname: string,
            lastname: string,
            birthday: string,
            address: string,
            position: string,
            id : string): void {
     EmployeeManager.employees.forEach((employee, index) => {
         if (employee.id === id) {
             employee.setFirstName(firstname);
             employee.setLastName(lastname);
             employee.setBirthday(birthday);
             employee.setAddress(address);
             employee.setPosition(position);
         }
     })
    }
}

