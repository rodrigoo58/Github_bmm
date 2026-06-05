// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animación de las barras de habilidades al hacer scroll
const skillFills = document.querySelectorAll('.skill-fill');

const animateSkills = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.style.width;
      observer.unobserve(entry.target);
    }
  });
};

const skillObserver = new IntersectionObserver(animateSkills, { threshold: 0.3 });
skillFills.forEach(fill => {
  const targetWidth = fill.style.width;
  fill.style.width = '0%';
  skillObserver.observe(fill);
  setTimeout(() => { fill.style.width = targetWidth; }, 200);
});

// Scroll suave activo en navbar
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const highlightNav = () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--color-text)'
      : '';
  });
};

window.addEventListener('scroll', highlightNav);

// Formulario de contacto (demo)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '¡Enviado! ✓';
  btn.style.background = '#22c55e';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar mensaje';
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});
