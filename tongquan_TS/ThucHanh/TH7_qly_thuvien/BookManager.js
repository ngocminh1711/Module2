"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
class BookManager {
    constructor() {
        this.books = [];
    }
    add(book) {
        this.books.push(book);
    }
    getList() {
        return this.books;
    }
    delete(id) {
        let indexBookDelete = this.findBook(id);
        if (indexBookDelete !== -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    }
    update(id, name) {
        let indexBookUpdate = this.findBook(id);
        if (indexBookUpdate !== -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    }
    findBook(id) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.id === id) {
                i = index;
            }
        });
        return i;
    }
}
exports.BookManager = BookManager;
