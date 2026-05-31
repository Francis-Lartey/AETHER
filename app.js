/**
 * Aether Shop - Premium E-Commerce Application Controller
 * High-performance storefront orchestrator, offline cart calculations, and payment wizards.
 */

// --- 1. Premium Product Dataset (with Dynamic SVGs & Swatches) ---
const PRODUCTS = [
  {
    id: 'p1',
    name: 'Aether Mechanical Keyboard',
    category: 'workspace',
    price: 249,
    stockStatus: 'limited',
    desc: 'Minimalist mechanical keyboard featuring hot-swappable tactile silent switches, machined frosted aluminum framing, and dynamic organic RGB edge glow rigging.',
    colors: [
      { name: 'Cyber Violet', hex: '#ab47bc', glow: 'rgba(171, 71, 188, 0.4)', fill: 'url(#kb-grad-violet)' },
      { name: 'Aurora Cyan', hex: '#00e5ff', glow: 'rgba(0, 229, 255, 0.4)', fill: 'url(#kb-grad-cyan)' },
      { name: 'Solar Gold', hex: '#ffca28', glow: 'rgba(255, 202, 40, 0.4)', fill: 'url(#kb-grad-gold)' }
    ],
    svgTemplate: (fillGrad) => `
      <svg viewBox="0 0 160 120" class="product-graphic-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kb-grad-violet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#311b92"/>
          </linearGradient>
          <linearGradient id="kb-grad-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#006064"/>
          </linearGradient>
          <linearGradient id="kb-grad-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffca28"/><stop offset="100%" stop-color="#ff6f00"/>
          </linearGradient>
        </defs>
        <!-- Keyboard Frame -->
        <rect x="20" y="35" width="120" height="50" rx="6" fill="#12131a" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
        <rect x="22" y="37" width="116" height="46" rx="4" fill="none" stroke="${fillGrad}" stroke-width="1.5" opacity="0.8"/>
        <!-- Glow Backlight -->
        <rect x="24" y="39" width="112" height="42" rx="3" fill="${fillGrad}" opacity="0.12"/>
        <!-- Key Rows -->
        <g fill="#1a1c24" opacity="0.9">
          <rect x="28" y="44" width="8" height="6" rx="1.5"/>
          <rect x="39" y="44" width="8" height="6" rx="1.5"/>
          <rect x="50" y="44" width="8" height="6" rx="1.5"/>
          <rect x="61" y="44" width="8" height="6" rx="1.5"/>
          <rect x="72" y="44" width="8" height="6" rx="1.5"/>
          <rect x="83" y="44" width="8" height="6" rx="1.5"/>
          <rect x="94" y="44" width="8" height="6" rx="1.5"/>
          <rect x="105" y="44" width="8" height="6" rx="1.5"/>
          <rect x="116" y="44" width="8" height="6" rx="1.5"/>
          <rect x="127" y="44" width="5" height="6" rx="1.5"/>
          
          <rect x="28" y="53" width="12" height="6" rx="1.5"/>
          <rect x="43" y="53" width="8" height="6" rx="1.5"/>
          <rect x="54" y="53" width="8" height="6" rx="1.5"/>
          <rect x="65" y="53" width="8" height="6" rx="1.5"/>
          <rect x="76" y="53" width="8" height="6" rx="1.5"/>
          <rect x="87" y="53" width="8" height="6" rx="1.5"/>
          <rect x="98" y="53" width="8" height="6" rx="1.5"/>
          <rect x="109" y="53" width="8" height="6" rx="1.5"/>
          <rect x="120" y="53" width="12" height="6" rx="1.5"/>
          
          <!-- Spacebar Row -->
          <rect x="28" y="62" width="15" height="6" rx="1.5"/>
          <rect x="46" y="62" width="8" height="6" rx="1.5"/>
          <rect x="57" y="62" width="46" height="6" rx="1.5" fill="${fillGrad}" opacity="0.6"/> <!-- spacebar -->
          <rect x="106" y="62" width="8" height="6" rx="1.5"/>
          <rect x="117" y="62" width="15" height="6" rx="1.5"/>
        </g>
      </svg>`
  },
  {
    id: 'p2',
    name: 'Holographic Audio Orb',
    category: 'audio',
    price: 329,
    stockStatus: 'stock',
    desc: 'Inductive resonant spatial audio speaker projecting localized sound fields with real-time dynamic sound-wave particle glows corresponding to acoustic peaks.',
    colors: [
      { name: 'Aurora Cyan', hex: '#00e5ff', glow: 'rgba(0, 229, 255, 0.4)', fill: 'url(#orb-grad-cyan)' },
      { name: 'Cyber Violet', hex: '#ab47bc', glow: 'rgba(171, 71, 188, 0.4)', fill: 'url(#orb-grad-violet)' },
      { name: 'Solar Gold', hex: '#ffca28', glow: 'rgba(255, 202, 40, 0.4)', fill: 'url(#orb-grad-gold)' }
    ],
    svgTemplate: (fillGrad) => `
      <svg viewBox="0 0 160 120" class="product-graphic-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="orb-grad-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#006064"/>
          </linearGradient>
          <linearGradient id="orb-grad-violet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#311b92"/>
          </linearGradient>
          <linearGradient id="orb-grad-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffca28"/><stop offset="100%" stop-color="#ff6f00"/>
          </linearGradient>
        </defs>
        <!-- Speaker Base Plinth -->
        <ellipse cx="80" cy="92" rx="35" ry="8" fill="#111218" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
        <line x1="80" y1="92" x2="80" y2="78" stroke="rgba(255,255,255,0.12)" stroke-width="3"/>
        
        <!-- Levitating Acoustic Orb Spherical Ring -->
        <circle cx="80" cy="52" r="30" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="3"/>
        <circle cx="80" cy="52" r="30" fill="none" stroke="${fillGrad}" stroke-width="1.5" stroke-dasharray="10 30" opacity="0.65"/>
        
        <!-- Glowing Core Waveform Ball -->
        <circle cx="80" cy="52" r="18" fill="${fillGrad}" opacity="0.8"/>
        <circle cx="80" cy="52" r="18" fill="none" stroke="#fff" stroke-width="1" opacity="0.3"/>
        <circle cx="80" cy="52" r="28" fill="${fillGrad}" opacity="0.08"/> <!-- Glow cloud -->
        
        <!-- Orbit waveform lines -->
        <path d="M 64 52 Q 72 40 80 52 T 96 52" fill="none" stroke="#fff" stroke-width="1" opacity="0.4"/>
        <path d="M 64 52 Q 72 64 80 52 T 96 52" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
      </svg>`
  },
  {
    id: 'p3',
    name: 'Vortex Helix Smart Ring',
    category: 'wearables',
    price: 189,
    stockStatus: 'stock',
    desc: 'Polished aerospace titanium double-helix smart ring embedding active biometric and vascular oxygenation flow tracking, paired with elegant haptic alerts.',
    colors: [
      { name: 'Solar Gold', hex: '#ffca28', glow: 'rgba(255, 202, 40, 0.4)', fill: 'url(#ring-grad-gold)' },
      { name: 'Aurora Cyan', hex: '#00e5ff', glow: 'rgba(0, 229, 255, 0.4)', fill: 'url(#ring-grad-cyan)' },
      { name: 'Cyber Violet', hex: '#ab47bc', glow: 'rgba(171, 71, 188, 0.4)', fill: 'url(#ring-grad-violet)' }
    ],
    svgTemplate: (fillGrad) => `
      <svg viewBox="0 0 160 120" class="product-graphic-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ring-grad-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffca28"/><stop offset="100%" stop-color="#ff8f00"/>
          </linearGradient>
          <linearGradient id="ring-grad-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#00b0ff"/>
          </linearGradient>
          <linearGradient id="ring-grad-violet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#7e57c2"/>
          </linearGradient>
        </defs>
        <!-- Ring body rendering -->
        <ellipse cx="80" cy="60" rx="32" ry="26" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="12"/>
        <ellipse cx="80" cy="60" rx="32" ry="26" fill="none" stroke="${fillGrad}" stroke-width="6" opacity="0.95"/>
        <ellipse cx="80" cy="60" rx="30" ry="24" fill="none" stroke="#fff" stroke-width="1" opacity="0.3"/>
        
        <!-- Smart Node Highlight -->
        <circle cx="80" cy="34" r="5" fill="#fff" opacity="0.9"/>
        <circle cx="80" cy="34" r="9" fill="none" stroke="${fillGrad}" stroke-width="1" opacity="0.8"/>
        <circle cx="80" cy="34" r="14" fill="${fillGrad}" opacity="0.15"/>
      </svg>`
  },
  {
    id: 'p4',
    name: 'Helios Desktop Prism',
    category: 'workspace',
    price: 119,
    stockStatus: 'stock',
    desc: 'Crystalline optical prism desk fixture engineered to diffuse local natural light into luxurious chromatic and geometric refractions across your setup.',
    colors: [
      { name: 'Solar Gold', hex: '#ffca28', glow: 'rgba(255, 202, 40, 0.4)', fill: 'url(#prism-grad-gold)' },
      { name: 'Cyber Violet', hex: '#ab47bc', glow: 'rgba(171, 71, 188, 0.4)', fill: 'url(#prism-grad-violet)' },
      { name: 'Aurora Cyan', hex: '#00e5ff', glow: 'rgba(0, 229, 255, 0.4)', fill: 'url(#prism-grad-cyan)' }
    ],
    svgTemplate: (fillGrad) => `
      <svg viewBox="0 0 160 120" class="product-graphic-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="prism-grad-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffca28"/><stop offset="100%" stop-color="#ff8f00"/>
          </linearGradient>
          <linearGradient id="prism-grad-violet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#673ab7"/>
          </linearGradient>
          <linearGradient id="prism-grad-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#00838f"/>
          </linearGradient>
        </defs>
        <!-- Triangle Prism Solid -->
        <polygon points="80,25 125,95 35,95" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3" stroke-linejoin="round"/>
        <polygon points="80,25 125,95 35,95" fill="${fillGrad}" opacity="0.3" stroke="${fillGrad}" stroke-width="1.5" stroke-linejoin="round"/>
        
        <!-- Internal Refraction Lines -->
        <line x1="80" y1="25" x2="80" y2="95" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
        <path d="M 80 45 L 55 95 M 80 45 L 105 95 M 80 65 L 45 95 M 80 65 L 115 95" stroke="#fff" stroke-width="1" opacity="0.4"/>
        
        <!-- Glowing Aura Base -->
        <polygon points="70,95 90,95 80,75" fill="${fillGrad}" opacity="0.6"/>
      </svg>`
  },
  {
    id: 'p5',
    name: 'Aether Wireless Headset',
    category: 'audio',
    price: 399,
    stockStatus: 'limited',
    desc: 'State-of-the-art wireless spatial headphones featuring hybrid multi-channel noise cancellation, custom memory foam ear cups, and ultra-high-definition sound transmission.',
    colors: [
      { name: 'Cyber Violet', hex: '#ab47bc', glow: 'rgba(171, 71, 188, 0.4)', fill: 'url(#hs-grad-violet)' },
      { name: 'Aurora Cyan', hex: '#00e5ff', glow: 'rgba(0, 229, 255, 0.4)', fill: 'url(#hs-grad-cyan)' },
      { name: 'Solar Gold', hex: '#ffca28', glow: 'rgba(255, 202, 40, 0.4)', fill: 'url(#hs-grad-gold)' }
    ],
    svgTemplate: (fillGrad) => `
      <svg viewBox="0 0 160 120" class="product-graphic-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hs-grad-violet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#512da8"/>
          </linearGradient>
          <linearGradient id="hs-grad-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#006064"/>
          </linearGradient>
          <linearGradient id="hs-grad-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffca28"/><stop offset="100%" stop-color="#f57c00"/>
          </linearGradient>
        </defs>
        <!-- Headband Arc -->
        <path d="M 42 65 A 42 42 0 0 1 118 65" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="8" stroke-linecap="round"/>
        <path d="M 42 65 A 42 42 0 0 1 118 65" fill="none" stroke="${fillGrad}" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
        
        <!-- Metal Adjuster Forks -->
        <line x1="38" y1="62" x2="38" y2="76" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
        <line x1="122" y1="62" x2="122" y2="76" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
        
        <!-- Frosted Cup Bodies -->
        <rect x="25" y="70" width="26" height="32" rx="8" fill="#12131a" stroke="${fillGrad}" stroke-width="1.5"/>
        <rect x="109" y="70" width="26" height="32" rx="8" fill="#12131a" stroke="${fillGrad}" stroke-width="1.5"/>
        
        <!-- Cushion Paddings -->
        <rect x="45" y="73" width="7" height="26" rx="3" fill="${fillGrad}" opacity="0.3"/>
        <rect x="108" y="73" width="7" height="26" rx="3" fill="${fillGrad}" opacity="0.3"/>
      </svg>`
  },
  {
    id: 'p6',
    name: 'Orion Kinetic Watch',
    category: 'wearables',
    price: 499,
    stockStatus: 'limited',
    desc: 'Kinetic modular digital smartwatch framing a dynamic spatial watch face widget that tracks health parameters with fluid orbit animations.',
    colors: [
      { name: 'Aurora Cyan', hex: '#00e5ff', glow: 'rgba(0, 229, 255, 0.4)', fill: 'url(#wt-grad-cyan)' },
      { name: 'Cyber Violet', hex: '#ab47bc', glow: 'rgba(171, 71, 188, 0.4)', fill: 'url(#wt-grad-violet)' },
      { name: 'Solar Gold', hex: '#ffca28', glow: 'rgba(255, 202, 40, 0.4)', fill: 'url(#wt-grad-gold)' }
    ],
    svgTemplate: (fillGrad) => `
      <svg viewBox="0 0 160 120" class="product-graphic-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wt-grad-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#00e5ff"/>
          </linearGradient>
          <linearGradient id="wt-grad-violet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ab47bc"/><stop offset="100%" stop-color="#ab47bc"/>
          </linearGradient>
          <linearGradient id="wt-grad-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffca28"/><stop offset="100%" stop-color="#ffca28"/>
          </linearGradient>
        </defs>
        <!-- Strap loop -->
        <rect x="62" y="10" width="36" height="100" rx="10" fill="#111218" stroke="rgba(255,255,255,0.03)" stroke-width="2"/>
        
        <!-- Watch Case Solid -->
        <rect x="52" y="32" width="56" height="56" rx="16" fill="#1b1c25" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <rect x="54" y="34" width="52" height="52" rx="14" fill="none" stroke="${fillGrad}" stroke-width="1" opacity="0.6"/>
        
        <!-- Screen details -->
        <circle cx="80" cy="60" r="20" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="4"/>
        <circle cx="80" cy="60" r="20" fill="none" stroke="${fillGrad}" stroke-width="2" stroke-dasharray="25 15" opacity="0.85"/>
        
        <!-- Glowing Dial Core -->
        <circle cx="80" cy="60" r="10" fill="${fillGrad}" opacity="0.9"/>
        
        <!-- Dial needles -->
        <line x1="80" y1="60" x2="80" y2="46" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="80" y1="60" x2="90" y2="60" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
      </svg>`
  }
];

// --- 2. Global Shopping State Management ---
let state = {
  cart: [], // items array: { productId, quantity, color }
  searchQuery: '',
  selectedCategory: 'all'
};

// LocalStorage helpers to retain items
function initCartStorage() {
  const local = localStorage.getItem('aether_cart_state');
  if (local) {
    try {
      state.cart = JSON.parse(local);
    } catch(e) {
      state.cart = [];
    }
  }
  updateCartIndicators();
}

function saveCartStorage() {
  localStorage.setItem('aether_cart_state', JSON.stringify(state.cart));
}

// --- 3. App Inits ---
document.addEventListener('DOMContentLoaded', () => {
  initCartStorage();
  initNavbarScroll();
  renderCatalogBoard();
  initNavSearch();
  initCategoryFilters();
  initCartDrawer();
  initQuickViewDialog();
  initCheckoutWizard();
});

// --- 4. Navbar Scrolling Visuals ---
function initNavbarScroll() {
  const header = document.getElementById('nav-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- 5. Catalog Products Board Rendering ---
function renderCatalogBoard() {
  const grid = document.getElementById('catalog-grid');
  const resultsCounter = document.getElementById('results-counter');
  if (!grid) return;

  grid.innerHTML = '';
  let renderedCount = 0;

  PRODUCTS.forEach(product => {
    // 1. Check Category tab Filter
    const catMatch = state.selectedCategory === 'all' || product.category === state.selectedCategory;
    // 2. Check Search query filter
    const query = state.searchQuery.toLowerCase().trim();
    const queryMatch = !query || 
                       product.name.toLowerCase().includes(query) || 
                       product.desc.toLowerCase().includes(query);

    if (catMatch && queryMatch) {
      renderedCount++;
      const primaryColor = product.colors[0];

      const card = document.createElement('article');
      card.className = 'product-card';
      card.dataset.id = product.id;

      // Map stock badges
      let badgeHtml = '';
      if (product.stockStatus === 'limited') {
        badgeHtml = `<span class="product-tag tag-limited">Limited Rig</span>`;
      } else {
        badgeHtml = `<span class="product-tag tag-stock">In Stock</span>`;
      }

      card.innerHTML = `
        ${badgeHtml}
        <div class="product-graphic-box">
          ${product.svgTemplate(primaryColor.fill)}
          <div class="product-graphic-overlay">
            <span class="btn-secondary" style="padding: 0.5rem 1.25rem; font-size: 0.8rem; border-radius: 100px;">Quick View</span>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          <div class="product-footer">
            <span class="price-text">$${product.price}</span>
            <button class="btn-buy-icon" title="Instant Add to Cart" aria-label="Add ${product.name} to Cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Bind Click triggers for Quick-View
      const qvElements = [
        card.querySelector('.product-graphic-box'),
        card.querySelector('.product-name')
      ];
      qvElements.forEach(el => {
        el.addEventListener('click', () => {
          openQuickView(product.id);
        });
      });

      // Bind Instant Buy Add Button
      const buyBtn = card.querySelector('.btn-buy-icon');
      buyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id, 1, primaryColor.name);
        openCartDrawer();
      });

      grid.appendChild(card);
    }
  });

  // Update counters
  if (resultsCounter) {
    resultsCounter.textContent = `Displaying ${renderedCount} ${renderedCount === 1 ? 'premium object' : 'premium objects'}`;
  }
}

// --- 6. Nav Search Controller ---
function initNavSearch() {
  const searchInput = document.getElementById('nav-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderCatalogBoard();
  });
}

// --- 7. Category Selection Tabs ---
function initCategoryFilters() {
  const tabs = document.querySelectorAll('#catalog-filter-tabs .filter-tab-btn');
  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      state.selectedCategory = tab.dataset.category;
      renderCatalogBoard();
    });
  });
}

// --- 8. Slide-Out Cart Panel Drawer ---
const cartOverlay = document.getElementById('cart-drawer-overlay');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');

function initCartDrawer() {
  if (!openCartBtn || !closeCartBtn || !cartOverlay) return;

  openCartBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);

  // Close when clicking overlay backdrop
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      closeCartDrawer();
    }
  });
}

function openCartDrawer() {
  if (cartOverlay) cartOverlay.classList.add('active');
  renderCartDrawerContents();
}

function closeCartDrawer() {
  if (cartOverlay) cartOverlay.classList.remove('active');
}

// --- 9. Cart Operations & Calculation Engines ---
function addToCart(productId, qty = 1, colorName) {
  // Find duplicate configurations
  const existing = state.cart.find(item => item.productId === productId && item.color === colorName);
  
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      productId: productId,
      quantity: qty,
      color: colorName
    });
  }

  saveCartStorage();
  updateCartIndicators();
}

function updateCartIndicators() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update header badges
  const navBadge = document.getElementById('nav-cart-badge');
  if (navBadge) {
    navBadge.textContent = totalCount;
  }
}

function changeCartQty(productId, colorName, delta) {
  const item = state.cart.find(item => item.productId === productId && item.color === colorName);
  if (!item) return;

  item.quantity += delta;
  
  if (item.quantity <= 0) {
    // Delete item configuration
    state.cart = state.cart.filter(item => !(item.productId === productId && item.color === colorName));
  }

  saveCartStorage();
  updateCartIndicators();
  renderCartDrawerContents();
}

function deleteCartRow(productId, colorName) {
  state.cart = state.cart.filter(item => !(item.productId === productId && item.color === colorName));
  saveCartStorage();
  updateCartIndicators();
  renderCartDrawerContents();
}

// Recalculates subtotals, tax, shipping, and totals
function renderCartDrawerContents() {
  const deck = document.getElementById('cart-items-deck');
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const taxEl = document.getElementById('summary-tax');
  const grandTotalEl = document.getElementById('summary-total');
  const checkoutBtn = document.getElementById('checkout-trigger-btn');

  if (!deck) return;

  deck.innerHTML = '';
  
  if (state.cart.length === 0) {
    deck.innerHTML = `
      <div class="cart-empty-message" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span>Your shopping cart is empty.</span>
      </div>
    `;
    
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (shippingEl) shippingEl.textContent = 'Calculated next';
    if (taxEl) taxEl.textContent = '$0.00';
    if (grandTotalEl) grandTotalEl.textContent = '$0.00';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  let subtotal = 0;

  state.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;

    const rowCost = product.price * item.quantity;
    subtotal += rowCost;

    const swatchColorObj = product.colors.find(c => c.name === item.color);

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-thumb">
        ${product.svgTemplate(swatchColorObj ? swatchColorObj.fill : product.colors[0].fill)}
      </div>
      <div class="cart-item-info">
        <span class="cart-item-name">${product.name}</span>
        <span class="cart-item-color">Color: ${item.color}</span>
        <span class="cart-item-price">$${product.price}</span>
      </div>
      <div class="cart-item-tools">
        <button class="cart-item-delete" title="Delete product item" aria-label="Delete ${product.name} from Cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
        <div class="qty-control">
          <button class="qty-btn" data-action="minus" aria-label="Decrease quantity">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" data-action="plus" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `;

    // Hook listeners
    row.querySelector('.qty-btn[data-action="minus"]').addEventListener('click', () => {
      changeCartQty(item.productId, item.color, -1);
    });

    row.querySelector('.qty-btn[data-action="plus"]').addEventListener('click', () => {
      changeCartQty(item.productId, item.color, 1);
    });

    row.querySelector('.cart-item-delete').addEventListener('click', () => {
      deleteCartRow(item.productId, item.color);
    });

    deck.appendChild(row);
  });

  // Calculate taxes and shipping
  // Free shipping above $200, else $15 flat
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = Math.round(subtotal * 0.085 * 100) / 100; // 8.5%
  const grandTotal = subtotal + shipping + tax;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2})}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free Shipping' : `$${shipping.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2})}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2})}`;
  if (checkoutBtn) checkoutBtn.disabled = false;
}

// --- 10. Product Quick-View Modals ---
const qvModal = document.getElementById('quickview-modal');
const qvCloseBtn = document.getElementById('close-quickview-btn');

let activeQvProduct = null;
let activeQvColor = null;

function initQuickViewDialog() {
  if (!qvModal || !qvCloseBtn) return;

  qvCloseBtn.addEventListener('click', closeQuickView);
  
  // Close on outside backdrop click
  qvModal.addEventListener('click', (e) => {
    if (e.target === qvModal) {
      closeQuickView();
    }
  });

  // Hook Quickview Buy Button
  const addBtn = document.getElementById('qv-add-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (activeQvProduct && activeQvColor) {
        addToCart(activeQvProduct.id, 1, activeQvColor.name);
        closeQuickView();
        openCartDrawer();
      }
    });
  }
}

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !qvModal) return;

  activeQvProduct = product;
  activeQvColor = product.colors[0]; // default to first color option

  // Populate basic specs
  document.getElementById('qv-category').textContent = product.category;
  document.getElementById('qv-name').textContent = product.name;
  document.getElementById('qv-price').textContent = `$${product.price}`;
  document.getElementById('qv-desc').textContent = product.desc;

  // Render SVG graphics showcase
  renderQvShowcase();

  // Populate swatches circles
  const swatchDeck = document.getElementById('qv-swatches-deck');
  if (swatchDeck) {
    swatchDeck.innerHTML = '';
    
    product.colors.forEach(color => {
      const circle = document.createElement('span');
      circle.className = `swatch-circle ${color.name === activeQvColor.name ? 'active' : ''}`;
      circle.style.backgroundColor = color.hex;
      circle.title = color.name;
      circle.setAttribute('role', 'button');
      circle.setAttribute('aria-label', `Select ${color.name} color`);

      circle.addEventListener('click', () => {
        // Toggle selected swatches
        swatchDeck.querySelectorAll('.swatch-circle').forEach(c => c.classList.remove('active'));
        circle.classList.add('active');
        
        activeQvColor = color;
        renderQvShowcase();
      });

      swatchDeck.appendChild(circle);
    });
  }

  // Open HTML5 Modal
  qvModal.style.display = 'flex';
  qvModal.showModal();
}

function closeQuickView() {
  if (qvModal) {
    qvModal.close();
    qvModal.style.display = 'none';
  }
  activeQvProduct = null;
  activeQvColor = null;
}

function renderQvShowcase() {
  const container = document.getElementById('qv-graphic-container');
  if (container && activeQvProduct && activeQvColor) {
    container.innerHTML = activeQvProduct.svgTemplate(activeQvColor.fill);
  }
}

// --- 11. Multi-Step Checkout Wizard & Luhn Validator ---
const checkModal = document.getElementById('checkout-modal');
const openCheckoutBtn = document.getElementById('checkout-trigger-btn');
const closeCheckoutBtn = document.getElementById('close-checkout-btn');

let currentStep = 1;

function initCheckoutWizard() {
  if (!checkModal || !openCheckoutBtn || !closeCheckoutBtn) return;

  openCheckoutBtn.addEventListener('click', () => {
    closeCartDrawer();
    openCheckoutWizard();
  });

  closeCheckoutBtn.addEventListener('click', closeCheckoutWizard);

  // Step 1: Shipping submit
  const formShipping = document.getElementById('form-shipping');
  formShipping.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateShipping()) {
      transitionToStep(2);
    }
  });

  // Back button from Payment Step
  const backBtn = document.getElementById('payment-back-btn');
  backBtn.addEventListener('click', () => {
    transitionToStep(1);
  });

  // Step 2: Payment submit
  const formPayment = document.getElementById('form-payment');
  formPayment.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validatePayment()) {
      generateOrderReceipt();
      transitionToStep(3);
    }
  });

  // Credit Card spacing formatting listener
  const cardInput = document.getElementById('input-pay-card');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      // Strips letters and injects spaces
      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let formatted = '';
      for (let i = 0; i < val.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formatted += ' ';
        }
        formatted += val[i];
      }
      e.target.value = formatted;
    });
  }

  // Credit Card Expiry format listener
  const expiryInput = document.getElementById('input-pay-expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      if (val.length >= 2) {
        e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
      } else {
        e.target.value = val;
      }
    });
  }

  // Step 3 success reset button
  const successResetBtn = document.getElementById('success-reset-btn');
  successResetBtn.addEventListener('click', () => {
    closeCheckoutWizard();
    // Clear cart entirely
    state.cart = [];
    saveCartStorage();
    updateCartIndicators();
    renderCartDrawerContents();
  });
}

function openCheckoutWizard() {
  currentStep = 1;
  transitionToStep(1);
  
  // Update charge summary total
  const totalsSummaryEl = document.getElementById('checkout-charge-total');
  const cartTotalText = document.getElementById('summary-total').textContent;
  if (totalsSummaryEl) totalsSummaryEl.textContent = cartTotalText;

  checkModal.style.display = 'flex';
  checkModal.showModal();
}

function closeCheckoutWizard() {
  if (checkModal) {
    checkModal.close();
    checkModal.style.display = 'none';
  }
}

function transitionToStep(step) {
  currentStep = step;

  // Toggle sheets
  const sheets = ['shipping', 'payment', 'success'];
  sheets.forEach((sheetName, idx) => {
    const sheet = document.getElementById(`sheet-${sheetName}`);
    if (idx + 1 === step) {
      sheet.classList.add('active');
    } else {
      sheet.classList.remove('active');
    }
  });

  // Update Stepper nodes
  for (let s = 1; s <= 3; s++) {
    const node = document.getElementById(`step-node-${s}`);
    if (s < step) {
      node.className = 'step-node completed';
    } else if (s === step) {
      node.className = 'step-node active';
    } else {
      node.className = 'step-node';
    }
  }

  // Update stepper line progress
  const progressBar = document.getElementById('wizard-progress-bar');
  if (progressBar) {
    let progressVal = 0;
    if (step === 2) progressVal = 50;
    if (step === 3) progressVal = 100;
    progressBar.style.width = `${progressVal}%`;
  }
}

// Form validations shipping sheet
function validateShipping() {
  const fields = {
    name: {
      input: document.getElementById('input-chk-name'),
      group: document.getElementById('group-chk-name'),
      test: (val) => val.trim().length > 0
    },
    email: {
      input: document.getElementById('input-chk-email'),
      group: document.getElementById('group-chk-email'),
      test: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
    },
    address: {
      input: document.getElementById('input-chk-address'),
      group: document.getElementById('group-chk-address'),
      test: (val) => val.trim().length > 5
    },
    city: {
      input: document.getElementById('input-chk-city'),
      group: document.getElementById('group-chk-city'),
      test: (val) => val.trim().length > 0
    },
    zip: {
      input: document.getElementById('input-chk-zip'),
      group: document.getElementById('group-chk-zip'),
      test: (val) => val.trim().length >= 4
    }
  };

  let isValid = true;

  Object.keys(fields).forEach(key => {
    const f = fields[key];
    const val = f.input.value;
    const passes = f.test(val);

    if (!passes) {
      f.group.classList.add('invalid');
      isValid = false;

      f.input.addEventListener('input', function clearErr() {
        if (f.test(f.input.value)) {
          f.group.classList.remove('invalid');
          f.input.removeEventListener('input', clearErr);
        }
      });
    } else {
      f.group.classList.remove('invalid');
    }
  });

  return isValid;
}

// Payment validations (Luhn Credit Card checksum)
function validatePayment() {
  const fields = {
    name: {
      input: document.getElementById('input-pay-name'),
      group: document.getElementById('group-pay-name'),
      test: (val) => val.trim().length > 0
    },
    card: {
      input: document.getElementById('input-pay-card'),
      group: document.getElementById('group-pay-card'),
      test: (val) => {
        // Strip spaces
        const numbers = val.replace(/\s+/g, '');
        return luhnChecksum(numbers);
      }
    },
    expiry: {
      input: document.getElementById('input-pay-expiry'),
      group: document.getElementById('group-pay-expiry'),
      test: (val) => {
        const parts = val.split('/');
        if (parts.length !== 2) return false;
        
        const mm = parseInt(parts[0]);
        const yy = parseInt(parts[1]);
        if (isNaN(mm) || isNaN(yy) || mm < 1 || mm > 12) return false;

        // Simple future check (assuming 2000s)
        const now = new Date();
        const currentYear = now.getFullYear() % 100; // yy
        const currentMonth = now.getMonth() + 1; // 1-12
        
        if (yy < currentYear) return false;
        if (yy === currentYear && mm < currentMonth) return false;
        return true;
      }
    },
    cvv: {
      input: document.getElementById('input-pay-cvv'),
      group: document.getElementById('group-pay-cvv'),
      test: (val) => /^[0-9]{3,4}$/.test(val.trim())
    }
  };

  let isValid = true;

  Object.keys(fields).forEach(key => {
    const f = fields[key];
    const val = f.input.value;
    const passes = f.test(val);

    if (!passes) {
      f.group.classList.add('invalid');
      isValid = false;

      f.input.addEventListener('input', function clearErr() {
        if (f.test(f.input.value)) {
          f.group.classList.remove('invalid');
          f.input.removeEventListener('input', clearErr);
        }
      });
    } else {
      f.group.classList.remove('invalid');
    }
  });

  return isValid;
}

// Luhn card algorithm checksum validation
function luhnChecksum(cardNumber) {
  if (cardNumber.length < 13 || cardNumber.length > 19) return false;
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);
    if (isNaN(digit)) return false;

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (sum % 10) === 0;
}

// Generates physical receipt sheet summary
function generateOrderReceipt() {
  const receiptId = document.getElementById('receipt-order-id');
  const receiptDate = document.getElementById('receipt-date-display');
  const itemsDeck = document.getElementById('receipt-items-deck');
  
  const receiptSubtotal = document.getElementById('receipt-subtotal');
  const receiptShipping = document.getElementById('receipt-shipping');
  const receiptTax = document.getElementById('receipt-tax');
  const receiptTotal = document.getElementById('receipt-total');

  if (!itemsDeck) return;

  // Stamping order values
  const uniqueId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  if (receiptId) receiptId.textContent = uniqueId;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  if (receiptDate) receiptDate.textContent = new Date().toLocaleDateString('en-US', options);

  // Inject Items line
  itemsDeck.innerHTML = '';
  state.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return;

    const line = document.createElement('div');
    line.className = 'receipt-item-line';
    line.innerHTML = `
      <span>${product.name} (x${item.quantity}) - ${item.color}</span>
      <span>$${(product.price * item.quantity).toLocaleString()}</span>
    `;
    itemsDeck.appendChild(line);
  });

  // Pull calculations from main cart drawer footer summaries
  const subtotalText = document.getElementById('summary-subtotal').textContent;
  const shippingText = document.getElementById('summary-shipping').textContent;
  const taxText = document.getElementById('summary-tax').textContent;
  const totalText = document.getElementById('summary-total').textContent;

  if (receiptSubtotal) receiptSubtotal.textContent = subtotalText;
  if (receiptShipping) receiptShipping.textContent = shippingText === 'Free Shipping' ? '$0.00' : shippingText;
  if (receiptTax) receiptTax.textContent = taxText;
  if (receiptTotal) receiptTotal.textContent = totalText;
}
