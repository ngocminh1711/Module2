"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookList_1 = require("./bookList");
let book1 = new bookList_1.Book('The Eyes', 'Alex Ferb', false);
let book2 = new bookList_1.Book('The Maze Runnder', 'James Dashner', true);
let books = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = `${book.title} by ${book.author}`;
    if (book.alreadyRead) {
        console.log(`You already read ${bookInfo}`);
    }
    else {
        console.log(`You should read ${bookInfo}`);
    }
}
