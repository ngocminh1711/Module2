"use strict";
exports.__esModule = true;
var bookList_1 = require("./bookList");
var book1 = new bookList_1.Book('The Eyes', 'Alex Ferb', false);
var book2 = new bookList_1.Book('The Maze Runnder', 'James Dashner', true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = "".concat(book.title, " by ").concat(book.author);
    if (book.alreadyRead) {
        console.log("You already read ".concat(bookInfo));
    }
    else {
        console.log("You should read ".concat(bookInfo));
    }
}
