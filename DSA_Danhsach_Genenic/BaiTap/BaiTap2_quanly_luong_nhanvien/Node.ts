export class Node<T> {
    month: number;
    money: number;

    next: Node<T> | null = null;

    constructor(month: number, money: number) {
        this.month = month;
        this.money = money;
    }
}