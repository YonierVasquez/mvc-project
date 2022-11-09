import { ProductModel } from "../models/product.model.js"

export class ProductController {
    product
    productElement

    constructor(product) {
        this.product = new ProductModel(product)
        this.render()
        this.setEvent_BtnBuyProduct()
    }

    render() {
        this.productElement = document.createElement('div')
        this.productElement.classList.add('product--item')
        this.productElement.innerHTML = `
            <h2>${this.product.name}</h2>
            <p>Precio: $${this.product.price}</p>
            <p>Marca: ${this.product.brand}</p>
            <p>Color: ${this.product.color}</p>
            <button class="btn--buy--product">Comprar</button>
        `
    }

    /**
     * Agregar el evento click al botón de comprar
     */
    setEvent_BtnBuyProduct() {
        this.productElement.querySelector('.btn--buy--product').addEventListener('click', () => {
            this.buy()
        })
    }

    /**
     * Comprar el producto (se muestra un alert con el nombre del producto)
     */
    buy() {
        alert(this.product.name + ' se agregó al carrito')
    }
}