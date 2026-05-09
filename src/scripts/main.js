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

burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  menu.classList.toggle('is-open');
});

// закриття меню при кліку на пункт
document.querySelectorAll('.header__menu-item').forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
  });
});

// закриття при кліку поза меню
document.addEventListener('click', (e) => {
  if (!e.target.closest('.header')) {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
  }
});