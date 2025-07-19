// Donut data
const donuts = [
    {
        name: "Cherry Donut",
        description: "Sweet cherry flavor with a creamy filling",
        price: "₱50",
        image: "assets/img/cherry-donut.jpg"
    },
    {
        name: "Honey & Choco",
        description: "Golden honey drizzle with rich chocolate",
        price: "₱50",
        image: "assets/img/honey-choco-donut.jpg"
    },
    {
        name: "Choco Sprinkles",
        description: "Rich chocolate with colorful sprinkles",
        price: "₱50",
        image: "assets/img/choco-sprinkles-donut.jpg"
    },
    {
        name: "Caramel Donut",
        description: "Buttery caramel with a hint of sea salt",
        price: "₱50",
        image: "assets/img/caramel-donut.jpg"
    },
    {
        name: "Strawberry Donut",
        description: "Fresh strawberry glaze with real fruit",
        price: "₱50",
        image: "assets/img/strawberry-donut.jpg"
    },
    {
        name: "Classic Donut",
        description: "Simple, timeless, and delicious",
        price: "₱50",
        image: "assets/img/regular-donut.jpg"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderDonuts();
    setupCart();
    setupSmoothScrolling();
});

// Render donut cards
function renderDonuts() {
    const donutGrid = document.querySelector('.donut-grid');
    
    donuts.forEach(donut => {
        const card = document.createElement('div');
        card.className = 'donut-card';
        card.innerHTML = `
            <img src="${donut.image}" alt="${donut.name}" class="donut-img">
            <div class="donut-info">
                <h3>${donut.name}</h3>
                <p>${donut.description}</p>
                <p class="price">${donut.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        donutGrid.appendChild(card);
    });
}

// Cart functionality
function setupCart() {
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            count++;
            cartCount.textContent = count;
            
            // Visual feedback
            e.target.textContent = 'Added!';
            e.target.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
                e.target.style.backgroundColor = '';
            }, 1500);
        }
    });
}

// Smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#cart') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
