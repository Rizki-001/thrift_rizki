/* Interaktivitas dasar: filter, keranjang, mobile menu */
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const cartCountEl = document.getElementById('cartCount');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  // Filter produk
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active', 'bg-sage', 'text-white'));
      btn.classList.add('active', 'bg-sage', 'text-white');

      const category = btn.dataset.category;
      productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Tambah ke keranjang (hanya demo counter)
  window.addToCart = function (button) {
    let count = parseInt(cartCountEl.textContent);
    cartCountEl.textContent = ++count;
    button.textContent = 'Ditambahkan!';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Tambah ke Keranjang';
      button.disabled = false;
    }, 1500);
  };

  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
});