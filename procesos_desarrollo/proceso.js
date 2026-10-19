document.addEventListener('DOMContentLoaded', () => {

  // 1. CONTROL DEL DRAWER DE NAVEGACIÓN
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const navDrawer = document.getElementById('navDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const dLinks = document.querySelectorAll('.d-link');

  function openDrawer() {
    navDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
  }

  function closeDrawer() {
    navDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
  }

  if (openMenuBtn) openMenuBtn.addEventListener('click', openDrawer);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  dLinks.forEach(link => {
    link.addEventListener('click', () => {
      dLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // 2. INTERACTIVIDAD DE ETAPAS SDLC (PESTAÑAS Y PIPELINE)
  const stageTabBtns = document.querySelectorAll('.stage-tab-btn');
  const stagePanels = document.querySelectorAll('.stage-panel');
  const pipeNodes = document.querySelectorAll('.pipe-node');

  function activateStage(stageNumber) {
    // Activar Pestaña Lateral
    stageTabBtns.forEach(btn => {
      if (btn.getAttribute('data-stage') === String(stageNumber)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Activar Panel de Contenido
    stagePanels.forEach(panel => {
      if (panel.id === `stage-panel-${stageNumber}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Activar Nodo en el Pipeline del Hero
    pipeNodes.forEach(node => {
      if (node.getAttribute('data-step') === String(stageNumber)) {
        node.classList.add('active');
      } else {
        node.classList.remove('active');
      }
    });
  }

  // Event Listeners para Pestañas
  stageTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stage = btn.getAttribute('data-stage');
      activateStage(stage);
    });
  });

  // Event Listeners para Nodos del Pipeline Superior
  pipeNodes.forEach(node => {
    node.addEventListener('click', () => {
      const step = node.getAttribute('data-step');
      activateStage(step);
      // Desplazar suavemente a la sección de etapas
      document.getElementById('etapas').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 3. RETORNO AL INICIO AL HACER CLIC EN LOGO
  const brandLogo = document.getElementById('brandLogo');
  if (brandLogo) {
    brandLogo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});