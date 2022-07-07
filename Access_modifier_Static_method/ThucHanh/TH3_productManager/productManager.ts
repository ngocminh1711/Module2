export class ProductManager {
    private products = [];

    constructor() {
    }
     getAll() {
        return this.products;
    }
     add(product: any) {
        this.products.push(product);
    }
}