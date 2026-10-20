document.addEventListener("DOMContentLoaded", () => {
  const menuOpenBtn = document.getElementById("menuOpenBtn");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  const menuContainer = document.getElementById("menuContainer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const logoHome = document.getElementById("logoHome");

  function openMenu() {
    if (menuContainer) menuContainer.classList.add("active");
    if (drawerOverlay) drawerOverlay.classList.add("active");
  }

  function closeMenu() {
    if (menuContainer) menuContainer.classList.remove("active");
    if (drawerOverlay) drawerOverlay.classList.remove("active");
  }

  if (menuOpenBtn) menuOpenBtn.addEventListener("click", openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener("click", closeMenu);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeMenu);

  if (logoHome) {
    logoHome.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});