// ===== DONUT DATA =====
const donuts = [
  { name: "Cherry Donut", flavor: "Cherry Flavor", price: "₱50", image: "assets/img/cherry-donut.jpg" },
  { name: "Honey & Choco", flavor: "Honey and Choco Flavor", price: "₱50", image: "assets/img/honey-choco-donut.jpg" },
  { name: "Choco Sprinkles", flavor: "Chocolate with Sprinkles", price: "₱50", image: "assets/img/choco-sprinkles-donut.jpg" },
  { name: "Caramel Donut", flavor: "Caramel Flavor", price: "₱50", image: "assets/img/caramel-donut.jpg" },
  { name: "Strawberry Donut", flavor: "Strawberry Flavor", price: "₱50", image: "assets/img/strawberry-donut.jpg" },
  { name: "Classic Donut", flavor: "Regular Donut", price: "₱50", image: "assets/img/regular-donut.jpg" }
];

// ===== INITIALIZE PAGE =====
document.addEventListener('DOMContentLoaded', () => {
  renderDonuts();
  setupCart();
});

// ===== RENDER DONUT CARDS =====
function renderDonuts() {
  const menuGrid = document.querySelector('.menu-grid');
  
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
    menuGrid.appendChild(card);
  });
}

// ===== CART FUNCTIONALITY =====
function setupCart() {
  let cartCount = 0;
  const cartIcon = document.querySelector('.cart-count');
  
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      cartCount++;
      cartIcon.textContent = cartCount;
      e.target.textContent = "Added!";
      setTimeout(() => e.target.textContent = "Add to Cart", 1000);
    }
  });
}
