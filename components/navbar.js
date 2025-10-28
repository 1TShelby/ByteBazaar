class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .logo {
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        a:hover {
          color: #3b82f6;
        }
        .cart-icon {
          position: relative;
        }
        .cart-counter {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #ef4444;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: none;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          padding: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .mobile-menu.active {
          display: block;
        }
        .mobile-nav-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .mobile-nav-links li {
          margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="index.html" class="logo">
          <i data-feather="cpu"></i>
          ByteBazaar
        </a>
        
        <ul class="nav-links">
          <li><a href="index.html"><i data-feather="home"></i>Главная</a></li>
          <li><a href="products.html"><i data-feather="shopping-cart"></i>Товары</a></li>
          <li><a href="about.html"><i data-feather="info"></i>О нас</a></li>
            <li><a href="contact.html"><i data-feather="mail"></i>Контакты</a></li>
            <li><a href="cart.html"><i data-feather="shopping-bag"></i>Корзина</a></li>
<li><a href="cart.html"><i data-feather="shopping-bag"></i>Корзина</a></li>
<li class="cart-icon">
            <a href="/cart.html">
              <i data-feather="shopping-bag"></i>
              <span class="cart-counter" id="cart-counter"></span>
            </a>
          </li>
        </ul>
        
        <button class="mobile-menu-btn" onclick="this.parentElement.host.toggleMobileMenu()">
          <i data-feather="menu"></i>
        </button>
        
        <div class="mobile-menu hidden" id="mobile-menu">
          <ul class="mobile-nav-links">
            <li><a href="index.html"><i data-feather="home"></i>Главная</a></li>
            <li><a href="products.html"><i data-feather="shopping-cart"></i>Товары</a></li>
            <li><a href="about.html"><i data-feather="info"></i>О нас</a></li>
            <li><a href="contact.html"><i data-feather="mail"></i>Контакты</a></li>
            <li><a href="cart.html"><i data-feather="shopping-bag"></i>Корзина</a></li>
          </ul>
        </div>
      </nav>
    `;
  }

  toggleMobileMenu() {
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
