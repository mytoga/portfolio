// ===== Mobile menu toggle =====
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');

function toggleMenu() {
  if (!nav || !menuBtn) return;
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fermer le menu principal' : 'Ouvrir le menu principal');
}

menuBtn?.addEventListener('click', toggleMenu);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav?.classList.contains('open')) {
    toggleMenu();
  }
});

// ===== Smooth scroll for same-page links =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== Lightbox (visionneuse) =====
const lb = document.getElementById('lightbox');
const lbImg = lb?.querySelector('img');
const lbCap = lb?.querySelector('.caption');
let lastFocused = null;

function openLB(src, alt, cap) {
  if (!lb || !lbImg) return;
  lastFocused = document.activeElement;
  lbImg.src = src;
  lbImg.alt = alt || '';
  if (lbCap) lbCap.textContent = cap || alt || '';
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  lb.querySelector('.close')?.focus();
  document.body.style.overflow = 'hidden';
}

function closeLB() {
  if (!lb) return;
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused && 'focus' in lastFocused) {
    lastFocused.focus();
  }
}

document.querySelectorAll('.media-item').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const href = a.getAttribute('href');
    const img = a.querySelector('img');
    if (!href || !img) return;
    openLB(href, img.alt, a.getAttribute('data-caption'));
  });
});

lb?.addEventListener('click', e => {
  if (e.target === lb || (e.target instanceof HTMLElement && e.target.classList.contains('close'))) {
    closeLB();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lb?.classList.contains('open')) {
    closeLB();
  }
});
