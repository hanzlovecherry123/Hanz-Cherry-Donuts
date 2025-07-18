// ===== DOM ELEMENTS =====
const callButton = document.querySelector('.call-button');
const donutCards = document.querySelectorAll('.donut-card');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const navLinks = document.querySelectorAll('nav a');

// ===== GLOBAL VARIABLES =====
let cartItems = 0;

// ===== FUNCTIONS =====

// 1. Call Button Alert
function handleCallButton() {
  alert("📞 Calling Hanz & Cherry Donuts: +1 (555) 123-4567");
}

// 2. Donut Card Hover Animation
function addDonutHoverEffect() {
  donutCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.querySelector('h2').style.color = '#ff6b6b'; // Cherry red
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.querySelector('h2').style.color = '#ff9bb3'; // Original pink
    });
  });
}

// 3. Add to Cart Simulation
function setupCart() {
  donutCards.forEach(card => {
    const addButton = document.createElement('button');
    addButton.className = 'add-to-cart';
    addButton.innerHTML = '<i class="fas fa-cart-plus"></i> Add';
    card.appendChild(addButton);

    addButton.addEventListener('click', (e) => {
      e.stopPropagation();
      cartItems++;
      cartCount.textContent = cartItems;
      cartIcon.classList.add('shake');
      
      // Reset animation
      setTimeout(() => cartIcon.classList.remove('shake'), 500);
      
      // Visual feedback
      card.style.boxShadow = '0 0 15px #ff9bb3';
      setTimeout(() => card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)', 1000);
    });
  });
}

// 4. Smooth Scrolling for Navigation
function enableSmoothScroll() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// 5. Initialize Everything
function init() {
  handleCallButton();
  addDonutHoverEffect();
  setupCart();
  enableSmoothScroll();
  
  // Load cart items from localStorage (optional)
  if (localStorage.getItem('cartItems')) {
    cartItems = parseInt(localStorage.getItem('cartItems'));
    cartCount.textContent = cartItems;
  }
}

// ===== EVENT LISTENERS =====
callButton.addEventListener('click', handleCallButton);
document.addEventListener('DOMContentLoaded', init);

// Save cart on page close (optional)
window.addEventListener('beforeunload', () => {
  localStorage.setItem('cartItems', cartItems);
});
