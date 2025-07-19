document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-btn');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const donutName = this.parentElement.querySelector('h3').textContent;
            alert(`Added ${donutName} to cart!`);
            // You can extend this to actually add to a cart system
        });
    });
});
