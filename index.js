/* ========================================================== */
/* ESTILOS GENERALES Y RESPONSIVIDAD PARA MÓVILES (estilo.css) */
/* ========================================================== */

:root {
  --bg-main: #05070c;
  --bg-card: rgba(10, 16, 28, 0.85);
  --bg-drawer: #020408;
  --accent-cyan: #00f2fe;
  --cyan-glow: rgba(0, 242, 254, 0.25);
  --accent-purple: #bd00ff;
  --purple-glow: rgba(189, 0, 255, 0.3);
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(0, 242, 254, 0.35);
  --font-title: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-main);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Contenedor Adaptable */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem; /* Padding reducido para móviles */
}

/* Header Superior */
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(5, 7, 12, 0.9);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--border-glass);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-logo-img {
  width: 35px;
  height: 35px;
  object-fit: contain;
  border-radius: 10px;
}

.logo-text {
  font-family: var(--font-title);
  font-size: 1.2rem;
  font-weight: 800;
  color: #ffffff;
}

.menu-toggle {
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  color: var(--accent-cyan);
  font-size: 1.1rem;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
}

/* Menú Lateral Desplegable (Drawer Móvil) */
.nav-drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background-color: var(--bg-drawer);
  border-left: 1px solid var(--border-glass);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.8);
  z-index: 200;
  transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 2rem 1.5rem;
  overflow-y: auto;
}

.nav-drawer.open {
  right: 0;
}

.drawer-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}

.close-drawer {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-glass);
  color: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drawer-menu {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.drawer-menu a {
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.drawer-menu a i {
  color: var(--accent-cyan);
  width: 20px;
  text-align: center;
}

.drawer-menu a:hover,
.drawer-menu a.active {
  background: rgba(0, 242, 254, 0.1);
  border-color: var(--border-cyan);
  color: #ffffff;
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(5, 7, 12, 0.7);
  backdrop-filter: blur(4px);
  z-index: 150;
  display: none;
}

.drawer-overlay.active {
  display: block;
}

/* Secciones Hero y Directorio */
.hero-section {
  text-align: center;
  padding: 2rem 0;
}

.hero-section h1 {
  font-family: var(--font-title);
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
}

.hero-section p {
  color: var(--text-muted);
  font-size: 1rem;
}

.directory-section h2 {
  font-family: var(--font-title);
  font-size: 1.2rem;
  color: var(--accent-cyan);
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Grillas Adaptables para Celulares */
.directory-grid,
.team-grid {
  display: grid;
  grid-template-columns: 1fr; /* Una columna por defecto en teléfonos */
  gap: 1.2rem;
}

/* Media Queries para Tablets y Computadoras */
@media (min-width: 640px) {
  .directory-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-section h1 {
    font-size: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .directory-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .container {
    padding: 4rem 2rem;
  }
}

/* Tarjetas */
.directory-card,
.team-card {
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  transition: all 0.3s ease;
  color: inherit;
}

.directory-card:hover,
.team-card:hover {
  border-color: var(--accent-cyan);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px var(--cyan-glow);
}

.directory-card i,
.icon-wrapper i {
  font-size: 1.5rem;
  color: var(--accent-cyan);
  margin-bottom: 5px;
}

.directory-card h3,
.team-card h3 {
  font-family: var(--font-title);
  font-size: 1.05rem;
  color: #ffffff;
}

.directory-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.role-badge {
  background-color: rgba(5, 7, 12, 0.8);
  border: 1px solid var(--border-glass);
  color: var(--text-muted);
  font-family: var(--font-title);
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 20px;
}

.footer {
  text-align: center;
  padding: 2rem 1rem;
  border-top: 1px solid var(--border-glass);
  color: var(--text-muted);
  font-size: 0.85rem;
  background-color: #020408;
  margin-top: 3rem;
}