const categories = [
  'Blusas', 'Camisas', 'Casacas', 'Chalecos', 'Jeans', 
  'Chompas', 'Joggers', 'Pantalones', 'Polos', 'Poleras', 
  'Shorts', 'Pack de polos'
];


const catalogoPorCategoria = {
  'Blusas': [
    { id: 'b-1', name: 'Blusa 01', audience: 'Mujer', price: 39, image: 'blusas/blusa-1.jpg', alt: 'Blusa elegante casual', tag: 'Favorito' },
    { id: 'b-2', name: 'Blusa 02', audience: 'Mujer', price: 44, image: 'blusas/blusa-2.jpg', alt: 'Blusa estampada floral', tag: 'Nuevo' },
    { id: 'b-3', name: 'Blusa 03', audience: 'Mujer', price: 39, image: 'blusas/blusa-3.jpg', alt: 'Blusa manga larga', tag: '' },
    { id: 'b-4', name: 'Blusa 04', audience: 'Mujer', price: 49, image: 'blusas/blusa-4.jpg', alt: 'Blusa básica de seda', tag: '' }
  ],
  'Camisas': [
    { id: 'cam-1', name: 'Camisa 01', audience: 'Hombre', price: 45, image: 'camisas/camisa-1.jpg', alt: 'Camisa formal clásica', tag: 'Favorito' },
    { id: 'cam-2', name: 'Camisa 02', audience: 'Hombre', price: 48, image: 'camisas/camisa-2.jpg', alt: 'Camisa casual fit', tag: 'Nuevo' },
    { id: 'cam-3', name: 'Camisa 03', audience: 'Unisex', price: 45, image: 'camisas/camisa-3.jpg', alt: 'Camisa cuello mao', tag: '' },
    { id: 'cam-4', name: 'Camisa 04', audience: 'Hombre', price: 52, image: 'camisas/camisa-4.jpg', alt: 'Camisa de franela', tag: '' }
  ],
  'Casacas': [
    { id: 'c-1', name: 'Casaca 01', audience: 'Unisex', price: 89, image: 'casacas/casaca-1.jpg', alt: 'Casaca clásica', tag: 'Favorito' },
    { id: 'c-2', name: 'Casaca 02', audience: 'Hombre', price: 95, image: 'casacas/casaca-2.jpg', alt: 'Casaca sport', tag: 'Nuevo' },
    { id: 'c-3', name: 'Casaca 03', audience: 'Mujer', price: 89, image: 'casacas/casaca-3.jpg', alt: 'Casaca invierno', tag: '' },
    { id: 'c-4', name: 'Casaca 04', audience: 'Unisex', price: 99, image: 'casacas/casaca-4.jpg', alt: 'Casaca denim', tag: '' }
  ],
  'Chalecos': [
    { id: 'chal-1', name: 'Chaleco 01', audience: 'Unisex', price: 59, image: 'chalecos/chaleco-1.jpg', alt: 'Chaleco acolchado', tag: 'Favorito' },
    { id: 'chal-2', name: 'Chaleco 02', audience: 'Hombre', price: 62, image: 'chalecos/chaleco-2.jpg', alt: 'Chaleco casual', tag: 'Nuevo' },
    { id: 'chal-3', name: 'Chaleco 03', audience: 'Mujer', price: 59, image: 'chalecos/chaleco-3.jpg', alt: 'Chaleco tejido', tag: '' },
    { id: 'chal-4', name: 'Chaleco 04', audience: 'Unisex', price: 65, image: 'chalecos/chaleco-4.jpg', alt: 'Chaleco urbano', tag: '' }
  ],
  'Jeans': [
    { id: 'j-1', name: 'Jean 01', audience: 'Mujer', price: 69, image: 'jeans/jean-1.jpg', alt: 'Jean skinny tiro alto', tag: 'Favorito' },
    { id: 'j-2', name: 'Jean 02', audience: 'Hombre', price: 72, image: 'jeans/jean-2.jpg', alt: 'Jean mom fit', tag: 'Nuevo' },
    { id: 'j-3', name: 'Jean 03', audience: 'Unisex', price: 69, image: 'jeans/jean-3.jpg', alt: 'Jean wide leg', tag: '' },
    { id: 'j-4', name: 'Jean 04', audience: 'Mujer', price: 75, image: 'jeans/jean-4.jpg', alt: 'Jean estilo urbano', tag: '' }
  ],
  'Chompas': [
    { id: 'cho-1', name: 'Chompa 01', audience: 'Unisex', price: 65, image: 'chompas/chompa-1.jpg', alt: 'Chompa clásica de hilo', tag: 'Favorito' },
    { id: 'cho-2', name: 'Chompa 02', audience: 'Mujer', price: 68, image: 'chompas/chompa-2.jpg', alt: 'Chompa cuello alto', tag: 'Nuevo' },
    { id: 'cho-3', name: 'Chompa 03', audience: 'Hombre', price: 65, image: 'chompas/chompa-3.jpg', alt: 'Chompa abierta', tag: '' },
    { id: 'cho-4', name: 'Chompa 04', audience: 'Unisex', price: 72, image: 'chompas/chompa-4.jpg', alt: 'Chompa navideña / diseño', tag: '' }
  ],
  'Joggers': [
    { id: 'jog-1', name: 'Jogger 01', audience: 'Unisex', price: 49, image: 'joggers/jogger-1.jpg', alt: 'Jogger deportivo básico', tag: 'Favorito' },
    { id: 'jog-2', name: 'Jogger 02', audience: 'Hombre', price: 52, image: 'joggers/jogger-2.jpg', alt: 'Jogger afelpado', tag: 'Nuevo' },
    { id: 'jog-3', name: 'Jogger 03', audience: 'Mujer', price: 49, image: 'joggers/jogger-3.jpg', alt: 'Jogger casual fit', tag: '' },
    { id: 'jog-4', name: 'Jogger 04', audience: 'Unisex', price: 55, image: 'joggers/jogger-4.jpg', alt: 'Jogger urbano', tag: '' }
  ],
  'Pantalones': [
    { id: 'pan-1', name: 'Pantalón 01', audience: 'Hombre', price: 59, image: 'pantalones/pantalon-1.jpg', alt: 'Pantalón formal', tag: 'Favorito' },
    { id: 'pan-2', name: 'Pantalón 02', audience: 'Mujer', price: 62, image: 'pantalones/pantalon-2.jpg', alt: 'Pantalón vestir', tag: 'Nuevo' },
    { id: 'pan-3', name: 'Pantalón 03', audience: 'Unisex', price: 59, image: 'pantalones/pantalon-3.jpg', alt: 'Pantalón cargo', tag: '' },
    { id: 'pan-4', name: 'Pantalón 04', audience: 'Hombre', price: 65, image: 'pantalones/pantalon-4.jpg', alt: 'Pantalón drill', tag: '' }
  ],
  'Polos': [
    { id: 'p-1', name: 'Polo 01', audience: 'Unisex', price: 29, image: 'polos/polo-1.jpg', alt: 'Polo básico algodón', tag: 'Favorito' },
    { id: 'p-2', name: 'Polo 02', audience: 'Hombre', price: 32, image: 'polos/polo-2.jpg', alt: 'Polo oversize gráfico', tag: 'Nuevo' },
    { id: 'p-3', name: 'Polo 03', audience: 'Mujer', price: 29, image: 'polos/polo-3.jpg', alt: 'Polo deportivo', tag: '' },
    { id: 'p-4', name: 'Polo 04', audience: 'Unisex', price: 35, image: 'polos/polo-4.jpg', alt: 'Polo casual con bolsillo', tag: '' }
  ],
  'Poleras': [
    { id: 'pole-1', name: 'Polera 01', audience: 'Unisex', price: 49, image: 'poleras/polera-1.jpg', alt: 'Polera con capucha básica', tag: 'Favorito' },
    { id: 'pole-2', name: 'Polera 02', audience: 'Hombre', price: 52, image: 'poleras/polera-2.jpg', alt: 'Polera canguro estampada', tag: 'Nuevo' },
    { id: 'pole-3', name: 'Polera 03', audience: 'Mujer', price: 49, image: 'poleras/polera-3.jpg', alt: 'Polera abierta con cierre', tag: '' },
    { id: 'pole-4', name: 'Polera 04', audience: 'Unisex', price: 55, image: 'poleras/polera-4.jpg', alt: 'Polera oversize', tag: '' }
  ],
  'Shorts': [
    { id: 'sho-1', name: 'Short 01', audience: 'Mujer', price: 35, image: 'shorts/short-1.jpg', alt: 'Short casual de verano', tag: 'Favorito' },
    { id: 'sho-2', name: 'Short 02', audience: 'Hombre', price: 38, image: 'shorts/short-2.jpg', alt: 'Short deportivo', tag: 'Nuevo' },
    { id: 'sho-3', name: 'Short 03', audience: 'Unisex', price: 35, image: 'shorts/short-3.jpg', alt: 'Short denim', tag: '' },
    { id: 'sho-4', name: 'Short 04', audience: 'Mujer', price: 40, image: 'shorts/short-4.jpg', alt: 'Short playero', tag: '' }
  ],
  'Pack de polos': [
    { id: 'pack-1', name: 'Pack de Polos 01', audience: 'Unisex', price: 69, image: 'packs/pack-polo-1.jpg', alt: 'Pack de 2 polos básicos', tag: 'Favorito' },
    { id: 'pack-2', name: 'Pack de Polos 02', audience: 'Hombre', price: 72, image: 'packs/pack-polo-2.jpg', alt: 'Pack de 3 polos variados', tag: 'Nuevo' },
    { id: 'pack-3', name: 'Pack de Polos 03', audience: 'Mujer', price: 69, image: 'packs/pack-polo-3.jpg', alt: 'Pack de polos casuales', tag: '' },
    { id: 'pack-4', name: 'Pack de Polos 04', audience: 'Unisex', price: 75, image: 'packs/pack-polo-4.jpg', alt: 'Pack dúo premium', tag: '' }
  ]
};


const allProducts = [];
Object.keys(catalogoPorCategoria).forEach(cat => {
  catalogoPorCategoria[cat].forEach(item => {
    allProducts.push({
      ...item,
      category: cat,
      colors: [
        { name: 'Azul marino', hex: '#172640' },
        { name: 'Negro', hex: '#252525' },
        { name: 'Blanco', hex: '#f8f6f0' }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    });
  });
});

const $ = id => document.getElementById(id);
const money = n => new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(n);
let cart = JSON.parse(localStorage.getItem('yeromaCart') || '[]');
let appliedCoupon = '';
let discountRate = 0;
let currentOrder = null;

function initialize() {
  document.querySelectorAll('[data-category]').forEach(b => b.addEventListener('click', () => {
    const c = b.dataset.category;
    const targetCat = categories.includes(c) ? c : 'Todos';
    $('categoryFilter').value = targetCat;
    renderProducts();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  }));

  categories.forEach(c => {
    const o = document.createElement('option');
    o.value = c;
    o.textContent = c;
    $('categoryFilter').append(o);
  });

  renderChips();
  renderProducts();
  renderCart();

  ['searchInput', 'audienceFilter', 'categoryFilter', 'sortFilter'].forEach(id => 
    $(id).addEventListener(id === 'searchInput' ? 'input' : 'change', renderProducts)
  );

  $('openCart').addEventListener('click', openCart);
  $('closeCart').addEventListener('click', closeCart);$('overlay').addEventListener('click', closeCart);
  $('applyCoupon').addEventListener('click', applyCoupon);$('couponInput').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); applyCoupon(); } });
  $('checkoutButton').addEventListener('click', openCheckout);$('closeCheckout').addEventListener('click', () => $('checkoutModal').hidden = true);$('shippingMethod').addEventListener('change', renderTotals);
  $('checkoutForm').addEventListener('submit', submitOrder);$('closeConfirmation').addEventListener('click', () => $('confirmationModal').hidden = true);$('finishOrder').addEventListener('click', () => { $('confirmationModal').hidden = true; closeCart(); window.scrollTo({ top: 0, behavior: 'smooth' }); });$('printOrder').addEventListener('click', () => window.print());

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCart();
      $('checkoutModal').hidden = true;
      $('confirmationModal').hidden = true;
    }
  });
}

function renderChips() {
  const wrap = $('categoryChips');
  if (!wrap) return;
  wrap.innerHTML = '';
  ['Todos', ...categories].forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === 'Todos' ? ' active' : '');
    b.textContent = c;
    b.addEventListener('click', () => {
      $('categoryFilter').value = c;
      wrap.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', x === b));
      renderProducts();
    });
    wrap.append(b);
  });
}

function renderProducts() {
  const q = $('searchInput').value.trim().toLowerCase(),
        aud = $('audienceFilter').value,
        cat = $('categoryFilter').value,
        sort = $('sortFilter').value;

  let products = allProducts.filter(p => 
    (!q || `${p.name} ${p.category} ${p.audience}`.toLowerCase().includes(q)) &&
    (aud === 'Todos' || p.audience === aud) &&
    (cat === 'Todos' || p.category === cat)
  );

  if (sort === 'priceAsc') products.sort((a, b) => a.price - b.price);
  if (sort === 'priceDesc') products.sort((a, b) => b.price - a.price);
  if (sort === 'name') products.sort((a, b) => a.name.localeCompare(b.name));

  $('productTotal').textContent = `${products.length} productos`;
  const grid = $('productGrid');
  grid.innerHTML = '';
  $('emptyState').hidden = products.length > 0;

  products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-photo">
        <img loading="lazy" src="assets/${p.image}" alt="${p.alt}">
        <span class="tag">${p.tag || p.category}</span>
        <button class="quick-add" data-add="${p.id}">+ Agregar al carrito</button>
      </div>
      <div class="product-info">
        <span class="product-type">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="product-meta">
          <span class="price">${money(p.price)}</span>
          <span class="audience">${p.audience}</span>
        </div>
        <div class="product-options">
          <select aria-label="Color para ${p.name}" data-color="${p.id}">
            ${p.colors.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
          </select>
          <select aria-label="Talla para ${p.name}" data-size="${p.id}">
            ${p.sizes.map(s => `<option>${s}</option>`).join('')}
          </select>
        </div>
      </div>
    `;
    grid.append(card);
  });

  grid.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', () => {
    const p = allProducts.find(x => x.id === btn.dataset.add),
          size = grid.querySelector(`[data-size="${p.id}"]`).value,
          color = grid.querySelector(`[data-color="${p.id}"]`).value;
    addToCart(p, size, color);
    openCart();
  }));

  $('categoryChips').querySelectorAll('.chip').forEach(b => b.classList.toggle('active', b.textContent === cat));
}

function saveCart() { localStorage.setItem('yeromaCart', JSON.stringify(cart)); }

function addToCart(p, size, color) {
  const existing = cart.find(i => i.id === p.id && i.size === size && i.color === color);
  if (existing) existing.qty++;
  else cart.push({ id: p.id, name: p.name, category: p.category, price: p.price, image: p.image, size, color, qty: 1 });
  saveCart();
  renderCart();
}

function renderCart() {
  const wrap = $('cartItems');
  wrap.innerHTML = '';
  if (!cart.length) {
    wrap.innerHTML = '<div class="cart-empty">Tu carrito está esperando prendas favoritas.<br><br>Explora el catálogo y agrega productos.</div>';
  }
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <img src="assets/${item.image}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <small>Talla: ${item.size}<br>Color: ${item.color}<br>${money(item.price)} por unidad</small>
        <div class="quantity-control">
          <button data-qty="-1" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">−</button>
          <span>${item.qty}</span>
          <button data-qty="1" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">+</button>
        </div>
      </div>
      <div class="cart-row-price">
        ${money(item.price * item.qty)}<br>
        <button class="remove-item" data-remove="${item.id}" data-size="${item.size}" data-color="${item.color}">Quitar</button>
      </div>
    `;
    wrap.append(row);
  });

  wrap.querySelectorAll('[data-qty]').forEach(b => b.addEventListener('click', () => {
    const i = cart.find(x => x.id === b.dataset.id && x.size === b.dataset.size && x.color === b.dataset.color);
    i.qty += Number(b.dataset.qty);
    if (i.qty <= 0) cart = cart.filter(x => x !== i);
    saveCart();
    renderCart();
  }));

  wrap.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => {
    cart = cart.filter(x => !(x.id === b.dataset.remove && x.size === b.dataset.size && x.color === b.dataset.color));
    saveCart();
    renderCart();
  }));

  $('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
  renderTotals();
}

function subtotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function shippingCost() { const method = $('shippingMethod')?.value || ''; return !cart.length || method === 'Tienda' ? 0 : 15; }

function renderTotals() {
  const sub = subtotal(), disc = sub * discountRate, ship = shippingCost();
  $('subtotalValue').textContent = money(sub);$('discountValue').textContent = '− ' + money(disc);
  $('shippingValue').textContent = money(ship);$('totalValue').textContent = money(Math.max(0, sub - disc) + ship);
  if (!$('checkoutModal').hidden) {$('checkoutTotal').textContent = money(Math.max(0, sub - disc) + ship);
    renderCheckoutSummary();
  }
}

function applyCoupon() {
  const code = $('couponInput').value.trim().toUpperCase();
  const rates = { 'YEROMA5': .05, 'YEROMA10': .10, 'YEROMA15': .15 };
  discountRate = rates[code] || 0;
  appliedCoupon = discountRate ? code : '';
  $('couponMessage').textContent = discountRate ? `¡Cupón ${code} aplicado! Obtienes ${discountRate * 100}% de descuento.` : code ? 'Cupón no válido.' : 'Prueba YEROMA5, YEROMA10 o YEROMA15.';
  $('couponMessage').style.color = discountRate ? '#267448' : '#a05252';
  renderTotals();
}

function openCart() { $('overlay').hidden = false; requestAnimationFrame(() => $('cartDrawer').classList.add('open'));$('cartDrawer').setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
function closeCart() { $('cartDrawer').classList.remove('open'); $('cartDrawer').setAttribute('aria-hidden', 'true');$('overlay').hidden = true; if ($('checkoutModal').hidden &&$('confirmationModal').hidden) document.body.style.overflow = ''; }

function openCheckout() {
  if (!cart.length) { alert('Agrega al menos un producto antes de continuar.'); return; }
  closeCart();
  $('checkoutModal').hidden = false;
  document.body.style.overflow = 'hidden';
  renderCheckoutSummary();
  $('checkoutTotal').textContent =$('totalValue').textContent;
}

function renderCheckoutSummary() {
  const wrap = $('checkoutSummary');
  if (!wrap) return;
  wrap.innerHTML = cart.map(i => `<div class="summary-line"><span>${i.qty} × ${i.name} · ${i.size} · ${i.color}</span><b>${money(i.qty * i.price)}</b></div>`).join('') +
    `<div class="summary-line"><span>Subtotal</span><b>${money(subtotal())}</b></div>` +
    `<div class="summary-line"><span>Descuento ${appliedCoupon ? `(${appliedCoupon})` : ''}</span><b>− ${money(subtotal() * discountRate)}</b></div>` +
    `<div class="summary-line"><span>Envío</span><b>${money(shippingCost())}</b></div>`;
}

function submitOrder(e) {
  e.preventDefault();
  const form = new FormData(e.currentTarget), data = Object.fromEntries(form.entries());
  const sub = subtotal(), disc = sub * discountRate, ship = shippingCost(), total = Math.max(0, sub - disc) + ship;
  currentOrder = { data, items: cart.map(x => ({ ...x })), subtotal: sub, discount: disc, shipping: ship, total, coupon: appliedCoupon, number: 'YR-' + Date.now().toString().slice(-7) };
  $('checkoutModal').hidden = true;
  $('confirmationModal').hidden = false;
  $('finalOrderSummary').innerHTML = `<b>Pedido:</b> ${currentOrder.number}<br><b>Cliente:</b> ${escapeHtml(data.customerName)}<br><b>Documento:</b> ${escapeHtml(data.documentType)} · ${escapeHtml(data.documentNumber)}<br><b>Envío:</b> ${escapeHtml(data.shipping)} — ${escapeHtml(data.district)}, ${escapeHtml(data.province)}<br><b>Dirección:</b> ${escapeHtml(data.address)}<br><b>Pago elegido:</b> ${escapeHtml(data.payment)}<br><b>Productos:</b><br>${currentOrder.items.map(i => `${i.qty} × ${escapeHtml(i.name)} (${i.size}, ${escapeHtml(i.color)}) —${money(i.qty * i.price)}`).join('<br>')}<hr><b>Subtotal:</b> ${money(sub)}<br><b>Descuento:</b> − ${money(disc)}<br><b>Envío:</b> ${money(ship)}<br><b>TOTAL ESTIMADO: ${money(total)}</b><br><br><small>El pago está pendiente de coordinación. No se ha efectuado ningún cobro.</small>`;
  document.body.style.overflow = 'hidden';
}

function escapeHtml(str = '') { return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

initialize();