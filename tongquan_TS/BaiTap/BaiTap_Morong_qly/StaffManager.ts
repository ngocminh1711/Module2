import {Staff} from './Staff'

export class StaffManager{
    staffs: Staff[] = [];

    constructor() {
    }

    addStaff(staff: Staff): void {
        this.staffs.push(staff);
    }

    removeStaff(name: string): void {
        this.staffs.forEach((staff, index) => {
            if (staff.getName() === name) {
                this.staffs.splice(index, 1);
            }
        })
    } getInfo(): Staff[] {
        return this.staffs;
    }
}