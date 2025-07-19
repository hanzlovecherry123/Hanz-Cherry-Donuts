// Donut data
const donuts = [
    {
        name: "Cherry Donut",
        flavor: "Cherry Flavor",
        price: "₱50",
        image: "assets/img/cherry-donut.jpg"
    },
    {
        name: "Honey & Choco",
        flavor: "Honey and Choco Flavor",
        price: "₱50",
        image: "assets/img/honey-choco-donut.jpg"
    },
    {
        name: "Choco Sprinkles",
        flavor: "Chocolate with Sprinkles",
        price: "₱50",
        image: "assets/img/choco-sprinkles-donut.jpg"
    },
    {
        name: "Caramel Donut",
        flavor: "Caramel Flavor",
        price: "₱50",
        image: "assets/img/caramel-donut.jpg"
    },
    {
        name: "Strawberry Donut",
        flavor: "Strawberry Flavor",
        price: "₱50",
        image: "assets/img/strawberry-donut.jpg"
    },
    {
        name: "Classic Donut",
        flavor: "Regular Donut",
        price: "₱50",
        image: "assets/img/regular-donut.jpg"
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    renderDonuts();
    setupCart();
});

// Render donut cards
function renderDonuts() {
    const grid = document.querySelector('.donut-grid');
    
    donuts.forEach(donut => {
        const card = document.createElement('div');
        card.className = 'donut-card';
        card.innerHTML = `
            <img src="${donut.image}" alt="${donut.name}">
            <h3>${donut.name}</h3>
            <p>${donut.flavor}</p>
            <p class="price">${donut.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Cart functionality
function setupCart() {
    let cartCount = 0;
    const cartBtn = document.querySelector('.cart-btn');
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            cartCount++;
            if (cartCount > 0) {
                cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cartCount}`;
            }
            
            // Visual feedback
            e.target.textContent = "Added!";
            setTimeout(() => {
                e.target.textContent = "Add to Cart";
            }, 1000);
        }
    });
}
