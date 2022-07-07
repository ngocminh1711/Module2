import  {Book} from './Book';
import {BookManager} from "./BookManager";

let book1 = new Book ('B001','Lập trình Java');
let book2 = new Book ('B002','Lập trình PHP');
let book3 = new Book ('B003','Lập trình Typescript');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003','MY SQL');
console.log(bookManager.getList())

bookManager.delete('B003');



console.log(bookManager.getList());
