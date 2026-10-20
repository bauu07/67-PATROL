document.addEventListener('DOMContentLoaded', () => {
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
});