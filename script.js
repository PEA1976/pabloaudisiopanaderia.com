// ============================================
// Año del footer
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Menú mobile
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Revelado al hacer scroll
// ============================================
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ============================================
// Botones "Quiero este ebook": preseleccionan
// el ebook en el formulario y hacen scroll
// ============================================
const ebookSelect = document.getElementById('ebook');

document.querySelectorAll('[data-ebook]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const ebookName = btn.getAttribute('data-ebook');
    if (ebookSelect) {
      ebookSelect.value = ebookName;
    }
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name')?.focus({ preventScroll: true });
  });
});

// ============================================
// Envío del formulario de contacto vía FormSubmit
// (servicio gratuito, no requiere backend propio)
// Ver README.md para configurar tu email.
// ============================================
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tu-email@ejemplo.com';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Honeypot anti-spam: si este campo tiene valor, es un bot
  if (form._honey.value) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  const data = new FormData(form);

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });

    if (!response.ok) throw new Error('Respuesta no válida del servidor');

    formStatus.textContent = '¡Gracias! Te voy a responder a la brevedad.';
    formStatus.classList.add('success');
    form.reset();
  } catch (err) {
    formStatus.textContent =
      'No se pudo enviar el mensaje. Probá de nuevo o escribime directamente por email.';
    formStatus.classList.add('error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar consulta';
  }
});
