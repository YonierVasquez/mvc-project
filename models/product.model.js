export class ProductModel {
    name
    price
    brand
    color

    constructor(product) {
        this.name = product.name
        this.price = product.price
        this.brand = product.brand
        this.color = product.color
    }
}