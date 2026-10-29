/* ========================================================== */
/* LÓGICA DE INTERACTIVIDAD (gestion.js)                      */
/* ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Control del Menú Lateral Desplegable (Drawer) ---
  const btnOpenDrawer = document.getElementById('btnOpenDrawer');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const menuDrawer = document.getElementById('menuDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  const openMenu = () => {
    menuDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
  };

  const closeMenu = () => {
    menuDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
  };

  if (btnOpenDrawer && btnCloseDrawer && menuDrawer && drawerOverlay) {
    btnOpenDrawer.addEventListener('click', openMenu);
    btnCloseDrawer.addEventListener('click', closeMenu);
    drawerOverlay.addEventListener('click', closeMenu);
  }

  // --- 2. Control de Pestañas (Tabs) para ISO 9126 vs ISO 25000 ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Remover clases activas de botones
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.style.borderColor = 'var(--border-glass)';
        btn.style.color = 'var(--text-muted)';
      });

      // Activar botón seleccionado
      button.classList.add('active');
      button.style.background = targetTab === 'iso9126' ? 'rgba(0, 102, 255, 0.2)' : 'rgba(255, 187, 0, 0.2)';
      button.style.borderColor = targetTab === 'iso9126' ? 'var(--electric-blue)' : 'var(--laser-gold)';
      button.style.color = '#ffffff';

      // Ocultar/Mostrar contenidos de forma dinámica
      tabContents.forEach(content => {
        if (content.id === targetTab) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });

  // --- 3. Control de Tarjetas Giratorias (Flip Cards - Caja Negra y Blanca) ---
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // --- 4. Reloj Digital en Vivo en la Barra Superior ---
  const liveClock = document.getElementById('liveClock');
  if (liveClock) {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      liveClock.textContent = `${hours}:${minutes}:${seconds} UTC`;
    }, 1000);
  }

});