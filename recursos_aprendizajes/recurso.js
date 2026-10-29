/* ========================================================== */
/* LÓGICA DE RECURSOS, GLOSARIO Y ACORDEÓN FAQ (recurso.js)   */
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

  // --- 2. Funcionalidad del Acordeón FAQ ---
  const faqQuestions = document.querySelectorAll('.faq-question-btn');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      
      // Cerrar todos los demás acordeones (Opcional, estilo acordeón exclusivo)
      faqQuestions.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.style.maxHeight = null;
      });

      // Alternar el estado actual si no estaba expandido
      if (!expanded) {
        button.setAttribute('aria-expanded', 'true');
        const answerWrapper = button.nextElementSibling;
        answerWrapper.style.maxHeight = answerWrapper.scrollHeight + 'px';
      }
    });
  });

  // --- 3. Buscador y Filtro A-Z del Glosario ---
  const searchInput = document.getElementById('glossarySearch');
  const clearSearchBtn = document.getElementById('clearSearch');
  const alphaButtons = document.querySelectorAll('.alpha-btn');
  const glossaryGroups = document.querySelectorAll('.glossary-group');
  const noResultsCard = document.getElementById('noResults');
  const resetFilterBtn = document.getElementById('resetFilterBtn');

  let currentLetter = 'all';

  function filterGlossary() {
    const query = searchInput.value.toLowerCase().trim();
    let totalVisibleTerms = 0;

    glossaryGroups.forEach(group => {
      const groupLetter = group.getAttribute('data-group');
      const termCards = group.querySelectorAll('.term-card');
      let groupHasVisibleTerm = false;

      // Verificar filtro por letra del índice A-Z
      const matchesLetter = (currentLetter === 'all' || groupLetter === currentLetter);

      if (!matchesLetter) {
        group.style.display = 'none';
        return;
      }

      termCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tag = card.querySelector('.term-tag').textContent.toLowerCase();

        const matchesSearch = title.includes(query) || description.includes(query) || tag.includes(query);

        if (matchesSearch) {
          card.style.display = 'flex';
          groupHasVisibleTerm = true;
          totalVisibleTerms++;
        } else {
          card.style.display = 'none';
        }
      });

      if (groupHasVisibleTerm) {
        group.style.display = 'block';
      } else {
        group.style.display = 'none';
      }
    });

    // Mostrar u ocultar botón de limpiar búsqueda
    if (query.length > 0) {
      clearSearchBtn.style.display = 'block';
    } else {
      clearSearchBtn.style.display = 'none';
    }

    // Manejar pantalla de "Sin Resultados"
    if (totalVisibleTerms === 0) {
      noResultsCard.style.display = 'block';
    } else {
      noResultsCard.style.display = 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterGlossary);
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      filterGlossary();
    });
  }

  alphaButtons.forEach(button => {
    button.addEventListener('click', () => {
      alphaButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentLetter = button.getAttribute('data-letter');
      filterGlossary();
    });
  });

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentLetter = 'all';
      alphaButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelector('.alpha-btn[data-letter="all"]').classList.add('active');
      filterGlossary();
    });
  }

});