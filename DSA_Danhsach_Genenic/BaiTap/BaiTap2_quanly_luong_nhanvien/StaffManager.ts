import {Node} from '../BaiTap2_quanly_luong_nhanvien/Node'

export class StaffManager<T> {
    header: Node<T> | null;
    tail: Node<T> | null;

    size: number;
    constructor() {
    }
    getSize(): number {
        return this.size;
    }


}