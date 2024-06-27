document.addEventListener('DOMContentLoaded', () => {
    const product = JSON.parse(localStorage.getItem('currentProduct'));

    if (product) {
        document.getElementById('productImage').src = product.imageUrl;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productCategory').textContent = `Category: ${product.category}`;
        document.getElementById('productPrice').textContent = `Price: $${product.price.toFixed(2)}`;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function addToCart() {
        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity += 1;  
        } else {
            cart.push({ ...product, quantity: 1 });  
        }
        saveCart();  
        alert(`${product.name} added to cart`);
    }

    const addToCartButton = document.getElementById('addToCartButton');
    addToCartButton.addEventListener('click', (event) => {
        event.preventDefault();  
        addToCart();
    });
});