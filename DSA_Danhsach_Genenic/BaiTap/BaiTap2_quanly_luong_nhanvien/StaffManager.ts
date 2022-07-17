import {Node} from '../BaiTap2_quanly_luong_nhanvien/Node'

export class StaffManager<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    staffList: any[] = [];

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(month: number, money: number): void {
        let node = new Node(month, money);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLast(month: number, money: number): void {
        if (!this.head) {
            this.insertFirst(month, money);
        } else {
            let node = new Node(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    getSize(): number {
        return this.size;
    }

    readList(): any[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode != null) {
            listData.push(currentNode.readData())
            currentNode = currentNode.next;

        }
        return listData;

    }

    sumMoney() {
        let sum = 0;
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {
            sum += currentNode.getMoney();
            currentNode = currentNode.next;
        }
        return sum;
    }

    findMonthHasMoneyHigher() {
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++) {

            if (this.findMaxMoney() === currentNode.getMoney()) {
                return currentNode.getMonth();
            }
            currentNode = currentNode.next;
        }
    }
        findMaxMoney()
        {
            let currentNode = this.head;
            let max = 0;
            while (currentNode != null) {
                for (let i = 0; i < this.size; i++) {
                    if (currentNode.getMoney() > max) {
                        max = currentNode.getMoney();
                    }
                    currentNode = currentNode.next;
                }
            }
            return max;


        }


    }