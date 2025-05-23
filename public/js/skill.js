document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navLinks && navbar) {
    // Toggle Mobile Menu
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');

      // Disable body scroll when menu is open
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Close menu when clicking a nav link (optional)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Close menu on window resize (desktop view)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Page fade-in on load
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.3s ease';

  // Page fade-out on internal link click
  document.querySelectorAll('a').forEach(link => {
    if (link.href.includes(window.location.origin)) {
      link.addEventListener('click', function (e) {
        // Prevent if it's an anchor link with #
        if (link.getAttribute('href').startsWith('#')) return;

        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = link.href;
        }, 300);
      });
    }
  });
});
