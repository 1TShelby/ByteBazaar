class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1f2937;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          color: #3b82f6;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-section a:hover {
          color: #3b82f6;
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          margin-top: 2rem;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #374151;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .social-links a:hover {
          background: #3b82f6;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>ByteBazaar</h3>
            <p>Ваш надежный партнер в мире компьютерной техники и инновационных технологий</p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Категории</h3>
            <ul>
              <li><a href="#"><i data-feather="monitor"></i>Компьютеры</a></li>
              <li><a href="#"><i data-feather="laptop"></i>Ноутбуки</a></li>
              <li><a href="#"><i data-feather="cpu"></i>Комплектующие</a></li>
              <li><a href="#"><i data-feather="headphones"></i>Периферия</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Помощь</h3>
            <ul>
              <li><a href="#"><i data-feather="help-circle"></i>Поддержка</a></li>
              <li><a href="#"><i data-feather="truck"></i>Доставка</a></li>
              <li><a href="#"><i data-feather="shield"></i>Гарантия</a></li>
              <li><a href="#"><i data-feather="credit-card"></i>Оплата</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Контакты</h3>
            <ul>
              <li><a href="#"><i data-feather="phone"></i>+7 (495) 123-45-67</a></li>
              <li><a href="#"><i data-feather="mail"></i>info@bytebazaar.ru</a></li>
              <li><a href="#"><i data-feather="map-pin"></i>Москва, ул. Технологическая, 15</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 ByteBazaar Tech Emporium. Все права защищены.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
