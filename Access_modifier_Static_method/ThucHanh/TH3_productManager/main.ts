import {Product} from './Product'
import {ProductManager} from './productManager'

let laptop = new Product("Laptop", 20000000);
let iphone = new Product("Iphone",17000000);

let productmanager = new ProductManager();
productmanager.add(laptop);
productmanager.add(iphone);

console.log(productmanager.getAll())
