import {Employee} from "./Employee";

export class EmployeeManager {
    static employees : Employee[] = [];
    constructor(){

    }
    getInfo() :Employee[] {
        return EmployeeManager.employees;
    }
    addEmmployee(employee: Employee) :void {
        EmployeeManager.employees.push(employee);
    }
    delete(id: string):void {
        let indexEmployeeDelete = this.findID(id)
        if (indexEmployeeDelete !== -1) {
            EmployeeManager.employees.splice(indexEmployeeDelete, 1);
        } else {
            throw new Error ('delete error')
        }
    }
    update()
    findID(id: string) {
    let i = -1;
    EmployeeManager.employees.forEach((employee,index) =>{
        if(employee.id === id) {
            i = index;
        }
    })
    return i;
    }
}

