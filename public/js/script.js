document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if(hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Page fade-in
  document.body.style.opacity = '1';

  // Close mobile menu on click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if(window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Active link highlighting
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if(link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }
  });
});