'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.hero__carousel__slide');
  const labels = ['Intro', 'Town', 'Nature'];
  const descs  = [
    'By the same illusion which lifts the horizon.',
    'Architecture and rhythm of urban space.',
    'Calm and beauty of infinite landscapes.'
  ];

  let current = 0;

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    document.getElementById('slideLabel').textContent = labels[current];
    document.getElementById('slideDesc').textContent  = descs[current];
  }

  document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
  document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

  // setInterval(() => goTo(current + 1), 4000);
});

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// створюємо overlay динамічно
const overlay = document.createElement('div');
overlay.id = 'menu-overlay';
overlay.style.cssText = `
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.35s ease;
  opacity: 0;
`;
document.body.appendChild(overlay);

function openMenu() {
  burger.classList.add('is-open');
  menu.classList.add('is-open');
  overlay.style.display = 'block';
  // невеликий delay щоб transition спрацював
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
  });
  document.body.style.overflow = 'hidden'; // блокуємо скрол
}

function closeMenu() {
  burger.classList.remove('is-open');
  menu.classList.remove('is-open');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 350);
  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  menu.classList.contains('is-open') ? closeMenu() : openMenu();
});

// закриття при кліку на overlay
overlay.addEventListener('click', closeMenu);

// закриття при кліку на пункт меню
document.querySelectorAll('.header__menu-item').forEach(item => {
  item.addEventListener('click', closeMenu);
});

// закриття по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});