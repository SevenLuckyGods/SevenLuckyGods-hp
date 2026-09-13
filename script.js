// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
    });
  });
}

// Page top button
const pageTop = document.getElementById('pageTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    pageTop.classList.add('visible');
  } else {
    pageTop.classList.remove('visible');
  }
});

// Smooth reveal
const revealEls = document.querySelectorAll(
  '.reason-card, .result-card, .voice-card, .flow-item, .item-card, .faq-item'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 40);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
