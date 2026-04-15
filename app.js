// app.js

// Cart Management
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
        this.updateLocalStorage();
        this.notify('Item added to cart.');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateLocalStorage();
        this.notify('Item removed from cart.');
    }

    updateLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    clearCart() {
        this.items = [];
        this.updateLocalStorage();
        this.notify('Cart cleared.');
    }

    notify(message) {
        console.log(message);
        // Additional notification logic can be implemented here
    }
}

// Wishlist Management
class Wishlist {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
        this.updateLocalStorage();
        this.notify('Item added to wishlist.');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateLocalStorage();
        this.notify('Item removed from wishlist.');
    }

    updateLocalStorage() {
        localStorage.setItem('wishlist', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        this.items = JSON.parse(localStorage.getItem('wishlist')) || [];
    }

    notify(message) {
        console.log(message);
    }
}

// Product Filtering
class ProductManager {
    constructor(products) {
        this.products = products;
    }

    filterByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    filterByPriceRange(min, max) {
        return this.products.filter(product => product.price >= min && product.price <= max);
    }
}

// Search Functionality
function searchProducts(products, query) {
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

// Example Usage
const cart = new Cart();
const wishlist = new Wishlist();
const products = [ /* Array of products */ ];

// Load cart and wishlist from local storage
cart.loadFromLocalStorage();
wishlist.loadFromLocalStorage();

// Display product search
const searchQuery = 'example'; // Replace with actual search input
const filteredProducts = searchProducts(products, searchQuery);
console.log(filteredProducts);
