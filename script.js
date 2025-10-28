// Shared JavaScript across all pages
console.log('ByteBazaar Tech Emporium loaded');

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    showNotification('Товар добавлен в корзину!');
}

function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.textContent = cart.length;
        cartCounter.style.display = cart.length > 0 ? 'flex' : 'none';
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize cart counter on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCounter();
    
    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('[data-product]').forEach(button => {
        button.addEventListener('click', function() {
            const productData = JSON.parse(this.getAttribute('data-product'));
            addToCart(productData);
        });
    });
});

// Search functionality
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Price formatter
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(price);
}

