document.addEventListener('DOMContentLoaded', () => {
  // 1. Control del Menú Drawer (Hamburguesa / Sistema) - IDs corregidos para coincidir con el HTML
  const menuOpenBtn = document.getElementById('btnOpenDrawer');
  const menuCloseBtn = document.getElementById('btnCloseDrawer');
  const sidebarDrawer = document.getElementById('menuDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  function openMenu() {
    if (sidebarDrawer) sidebarDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
  }

  function closeMenu() {
    if (sidebarDrawer) sidebarDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
  }

  if (menuOpenBtn) menuOpenBtn.addEventListener('click', openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMenu);

  // 2. Reloj UTC en Vivo
  function updateLiveClock() {
    const clockElement = document.getElementById('liveClock');
    if (!clockElement) return;
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    clockElement.textContent = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
  }
  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // 3. Sistema de Pestañas Interactivas (ISO 9126 vs SQuaRE)
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const parentTabsWrapper = button.closest('.tabs-wrapper');
      if (!parentTabsWrapper) return;
      const targetTabId = button.getAttribute('data-tab');

      // Limpiar estados activos
      parentTabsWrapper.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      parentTabsWrapper.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });

      // Activar selección
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      const targetPane = parentTabsWrapper.querySelector(`#${targetTabId}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 4. Simulador Dinámico de DRE (Eficiencia de Detección de Defectos)
  const dreRange = document.getElementById('dreRange');
  const valB = document.getElementById('valB');
  const valC = document.getElementById('valC');
  const dreOutput = document.getElementById('dreOutput');

  if (dreRange && valB && valC && dreOutput) {
    dreRange.addEventListener('input', (e) => {
      const bVal = parseInt(e.target.value);
      const cVal = 100 - bVal; // simulando base 100 total
      valB.textContent = bVal;
      valC.textContent = cVal;
      
      const dreCalc = (bVal / (bVal + (cVal === 0 ? 1 : cVal))) * 100;
      dreOutput.textContent = dreCalc.toFixed(1) + '%';
    });
  }
});