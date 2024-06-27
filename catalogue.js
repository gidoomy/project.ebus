document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Iron Man T-shirt', price: 215, imageUrl: 'C:/Users/hp/Documents/images/IronMan.jpg', category: 'Unisex T-shirts'},
        { id: 2, name: 'Tea with Milk T-shirt', price: 205, imageUrl: 'C:/Users/hp/Documents/images/Tea.jpg', category: 'Unisex T-shirts'},
        { id: 3, name: 'Among-Us T-shirt', price: 192, imageUrl: 'C:/Users/hp/Documents/images/AmongUs.jpg', category: 'Unisex T-shirts'},
        { id: 4, name: 'Hakuna Matata Hoodie', price: 195, imageUrl: 'C:/Users/hp/Documents/images/HakunaMatata.jpg', category: 'Hoodies'},
        { id: 5, name: 'Palestine Hoodie', price: 200, imageUrl: 'C:/Users/hp/Documents/images/Palestine.jpg', category: 'Hoodies'},
        { id: 6, name: 'Stranger Things Hoodie', price: 185, imageUrl: 'C:/Users/hp/Documents/images/StrangerThings.jpg', category: 'Hoodies'},
        { id: 7, name: 'AUC Upper Long Sleeve', price: 190, imageUrl: 'C:/Users/hp/Documents/images/AUC.jpg', category: 'Long Sleeve'},
        { id: 8, name: 'Family Long Sleeve', price: 182, imageUrl: 'C:/Users/hp/Documents/images/Family.jpg', category: 'Long Sleeve'},
        { id: 9, name: 'Special Long Sleeve', price: 187, imageUrl: 'C:/Users/hp/Documents/images/Special.jpg', category: 'Long Sleeve'},
        { id: 10, name: 'Supermom T-Shirt', price: 175, imageUrl: 'C:/Users/hp/Documents/images/Supermom.jpg', category: 'Unisex T-shirts'},
        { id: 11, name: 'Rafiki Lion King Hoodie', price: 188, imageUrl: 'C:/Users/hp/Documents/images/Rafiki.jpg', category: 'Hoodies'},
        { id: 12, name: 'Guns n Roses Shirt', price: 191, imageUrl: 'C:/Users/hp/Documents/images/GunsNroses.jpg', category: 'Long Sleeve'},
    ];

    const productGrid = document.querySelector('.product-grid');
    const filterCheckboxes = document.querySelectorAll('.filters [name="category"]');
    const sortSelect = document.getElementById('sortPrice');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product, event) {
    event.stopPropagation();
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
        cartItem.quantity += 1; 
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(); 
    alert(`${product.name} added to cart`); 
}

function displayProducts(items) {
    productGrid.innerHTML = '';
    items.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" style="max-height: 200px; object-fit: scale-down;" />
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productItem);

        productItem.querySelector('img').addEventListener('click', () => {
            localStorage.setItem('currentProduct', JSON.stringify(product)); 
            window.location.href = 'productdetails.html'; 
        });

        

        const addToCartButton = productItem.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', (event) => addToCart(product, event));
    });
}
    function sortProducts(criteria) {
        let sortedProducts = [...products];
        sortedProducts.sort((a, b) => {
            return criteria === 'lowToHigh' ? a.price - b.price : b.price - a.price;
        });
        displayProducts(sortedProducts);
    }

    function filterProducts() {
        let selectedCategories = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        let filteredProducts = products.filter(product =>
            selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true
        );
        displayProducts(filteredProducts);
    }

    sortSelect.addEventListener('change', (e) => sortProducts(e.target.value));
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    displayProducts(products);
});

