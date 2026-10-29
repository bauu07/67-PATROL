/* ========================================================== */
/* VALIDACIÓN Y LÓGICA DEL FORMULARIO DE CONTACTO (contacto.js) */
/* ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Control del Menú Lateral (Drawer) ---
  const menuToggle = document.getElementById('menuToggle');
  const closeDrawer = document.getElementById('closeDrawer');
  const navDrawer = document.getElementById('navDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  if (menuToggle && navDrawer) {
    menuToggle.addEventListener('click', () => {
      navDrawer.classList.add('open');
      drawerOverlay.classList.add('active');
    });
  }

  if (closeDrawer && navDrawer) {
    closeDrawer.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
    });
  }

  // --- 2. Validación de Formulario (US-17) ---
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita el envío tradicional para validar por JS

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const asunto = document.getElementById('asunto').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validación de campos vacíos
      if (!nombre || !email || !asunto || !mensaje) {
        showAlert('Por favor, completa todos los campos obligatorios.', 'error');
        return;
      }

      // Validación de formato de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+кур?$/i; // Validación robusta de correo
      // Simplificando una expresión regular estándar y segura:
      const standardEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!standardEmailRegex.test(email)) {
        showAlert('Por favor, ingresa una dirección de correo electrónico válida (ej: usuario@dominio.com).', 'error');
        return;
      }

      // Si pasa todas las validaciones exitosamente
      showAlert('¡Mensaje enviado con éxito! Gracias por tu feedback, nos pondremos en contacto pronto.', 'success');
      
      // Limpiar formulario tras el envío exitoso
      contactForm.reset();
    });
  }

  // Función auxiliar para mostrar alertas en pantalla
  function showAlert(message, type) {
    formAlert.textContent = message;
    formAlert.style.display = 'block';
    formAlert.className = `form-alert ${type}`;

    // Desplazarse suavemente hacia la alerta para que el usuario la vea
    formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

});