export class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(item: T): void {
        this.container.push(item);
    }

    pop(): T {
       return  this.container.pop();
    }

    getSize(): number {
        return this.container.length;
    }
    // top() {
    //     return this.item
    // }
}