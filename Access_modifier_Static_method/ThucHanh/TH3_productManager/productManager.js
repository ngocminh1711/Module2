"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    constructor() {
        this.products = [];
    }
    getAll() {
        return this.products;
    }
    add(product) {
        this.products.push(product);
    }
}
exports.ProductManager = ProductManager;
