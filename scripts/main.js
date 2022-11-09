import { ProductController } from "../controllers/product.controller.js"

const products = [
    { name: 'Laptop', price: 43000, brand: 'Lenovo', color: 'silver' },
    { name: 'Mobile', price: 13000, brand: 'Mi', color: 'black' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'gold' },
    { name: 'Shoes', price: 300, brand: 'Puma', color: 'white' },
    { name: 'Shirt', price: 800, brand: 'Nike', color: 'black' },
    { name: 'Sunglasses', price: 2000, brand: 'Rayban', color: 'black' },
    { name: 'Camera', price: 40000, brand: 'Nikon', color: 'black' },
    { name: 'Laptop', price: 43000, brand: 'Lenovo', color: 'silver' },
    { name: 'Mobile', price: 13000, brand: 'Mi', color: 'black' },
]

const productList = document.querySelector('.product--list')

// Cargar los productos
for (let product of products) {
    let newProduct = new ProductController(product)
    let productElement = newProduct.productElement      // obtener el html del producto
    productList.appendChild(productElement)             // mostrar el producto en pantalla
}
