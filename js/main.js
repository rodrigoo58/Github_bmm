// Tema claro/oscuro
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

const applyTheme = (theme) => {
  if (theme === 'light') {
    html.setAttribute('data-theme', 'light');
    themeBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
  } else {
    html.removeAttribute('data-theme');
    themeBtn.setAttribute('aria-label', 'Cambiar a modo claro');
  }
};

themeBtn.addEventListener('click', () => {
  const isLight = html.getAttribute('data-theme') === 'light';
  const next = isLight ? 'dark' : 'light';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// Sincronizar si el usuario cambia la preferencia del sistema
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'light' : 'dark');
  }
});

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
