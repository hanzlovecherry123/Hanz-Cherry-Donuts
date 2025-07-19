// Simple cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Cart counter
    let cartCount = 0;
    const cartBtn = document.createElement('a');
    cartBtn.href = '#cart';
    cartBtn.className = 'cart-btn';
    cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    
    // Add cart button to navigation
    const nav = document.querySelector('nav');
    nav.appendChild(cartBtn);
    
    // Add to cart functionality
    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            
            // Update cart display
            if (cartCount > 0) {
                cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cartCount}`;
            }
            
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#6b3e26'; // Brown
            
            // Reset after 1 second
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '#ff9bb3'; // Pink
            }, 1000);
        });
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash && this.hash !== '#cart') {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
