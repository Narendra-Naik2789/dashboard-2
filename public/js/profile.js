// Toggle mobile menu
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar');
  const isClickInside = navbar.contains(event.target);
  
  if (!isClickInside) {
    document.querySelector('.nav-links').classList.remove('active');
  }
});

// Smooth scroll for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});