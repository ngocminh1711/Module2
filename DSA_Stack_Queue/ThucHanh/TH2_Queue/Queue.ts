export class Queue<T> {
    container: T[] = [];

    constructor() {

    }

    enqueue(item: T): void {
        this.container.push(item);
    }
    dequeue(): T | undefined {
       return this.container.shift();
    }
    getSize(): number {
        return this.container.length;
    }
}