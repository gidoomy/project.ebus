document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    function loadCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems(cart);  
        updateCartTotal(cart);
    }

    function updateCartTotal(cart) {
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        cartTotalElement.textContent = `$${total.toFixed(2)}`;  
    }

    function displayCartItems(cart) {
        cartItemsElement.innerHTML = '';  
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                    <input type="number" value="${item.quantity}" min="1">
                    <button class="remove">Remove</button>
                </div>
            `;
            cartItemsElement.appendChild(itemElement);

            itemElement.querySelector('input[type="number"]').addEventListener('change', (event) => {
                const newQuantity = parseInt(event.target.value);
                if(newQuantity > 0) {
                    item.quantity = newQuantity;
                    saveCart(cart);  
                } else {
                    alert("Quantity must be at least 1");
                    event.target.value = item.quantity; 
                }
            });

            itemElement.querySelector('.remove').addEventListener('click', () => {
                removeItemFromCart(index, cart);
            });
        });
    }

    function removeItemFromCart(index, cart) {
        cart.splice(index, 1);  
        saveCart(cart);  
    }

    const cart = loadCart();
    displayCartItems(cart);
    updateCartTotal(cart);
});

const checkoutButton = document.getElementById('checkoutButton');

checkoutButton.addEventListener('click', () => {
    window.location.href = 'checkout.html';
});