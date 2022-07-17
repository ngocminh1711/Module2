export class Node<T> {
    month: number;
    money: number;

    next: Node<T> | null = null;

    constructor(month: number, money: number) {
        this.month = month;
        this.money = money;
    }
    readData() :object {
        return { month: this.month, money: this.money };
    }
    getMoney(): number {
        return this.money;
    }
    getMonth(): number {
        return this.month;
    }
}