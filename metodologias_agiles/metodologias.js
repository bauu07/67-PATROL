/* ========================================================== */
/* SCRIPT DE METODOLOGÍAS ÁGILES (metodologias.js)            */
/* ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Control para Abrir y Cerrar el Menú Lateral (Drawer) ---
  const menuToggle = document.getElementById('menuToggle');
  const closeDrawer = document.getElementById('closeDrawer');
  const navDrawer = document.getElementById('navDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  if (menuToggle && navDrawer) {
    menuToggle.addEventListener('click', () => {
      navDrawer.classList.add('open');
      if (drawerOverlay) drawerOverlay.classList.add('active');
    });
  }

  if (closeDrawer && navDrawer) {
    closeDrawer.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      if (drawerOverlay) drawerOverlay.classList.remove('active');
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
    });
  }

  // --- 1.1 Control para Minimizar y Expandir el Menú Flotante (TOC) ---
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const floatingToc = document.getElementById('floatingToc');
  const tocToggleIcon = document.getElementById('tocToggleIcon');

  if (tocToggleBtn && floatingToc) {
    tocToggleBtn.addEventListener('click', () => {
      floatingToc.classList.toggle('minimized');
      if (floatingToc.classList.contains('minimized')) {
        tocToggleIcon.className = "fa-solid fa-chevron-right";
      } else {
        tocToggleIcon.className = "fa-solid fa-chevron-left";
      }
    });
  }

  // --- 2. Sistema de Pestañas para Scrum ---
  const scrumBtns = document.querySelectorAll('.scrum-tab-btn');
  const scrumContents = document.querySelectorAll('.scrum-tab-content');

  scrumBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-scrum');

      scrumBtns.forEach(b => b.classList.remove('active'));
      scrumContents.forEach(c => {
        c.style.display = 'none';
        c.classList.remove('active');
      });

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.style.display = 'block';
        targetContent.classList.add('active');
      }
    });
  });

  // --- 3. Línea de Tiempo Interactiva de Eventos Scrum ---
  const timelineBtns = document.querySelectorAll('.timeline-btn');
  const timelineDisplay = document.getElementById('timelineDisplay');

  timelineBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timelineBtns.forEach(b => b.style.borderColor = 'var(--border-glass)');
      btn.style.borderColor = 'var(--accent-cyan)';
      const infoText = btn.getAttribute('data-info');
      if (timelineDisplay) {
        timelineDisplay.innerHTML = infoText;
      }
    });
  });

  // --- 4. Sistema de Modales para Tarjetas Modulares ---
  const modCards = document.querySelectorAll('.interactive-mod-card');
  const customModalOverlay = document.getElementById('customModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBodyContent = document.getElementById('modalBodyContent');

  const modalData = {
    scrumModal: `
      <h2 style="color: var(--electric-blue); font-family: var(--font-title); margin-bottom: 1rem;"><i class="fa-solid fa-cubes"></i> Detalle Estructural: Scrum</h2>
      <p style="color: var(--text-muted); margin-bottom: 1rem;">Scrum se basa en la heurística de control de procesos empírico: transparencia, inspección y adaptación.</p>
      <ul style="color: var(--text-muted); display: flex; flex-direction: column; gap: 8px; padding-left: 1.2rem;">
        <li><strong>Sprints:</strong> Ciclos cortos de 1 a 4 semanas donde se construye un incremento funcional.</li>
        <li><strong>Roles Autogestionados:</strong> Sin jerarquías de mando tradicionales; cada rol protege el valor o el proceso.</li>
        <li>Alineación directa con los principios de entrega temprana y continua de valor.</li>
      </ul>
    `,
    kanbanModal: `
      <h2 style="color: var(--amber-neon, #ffbb00); font-family: var(--font-title); margin-bottom: 1rem;"><i class="fa-solid fa-columns"></i> Detalle Estructural: Kanban</h2>
      <p style="color: var(--text-muted); margin-bottom: 1rem;">Método visual para gestionar el trabajo conforme avanza por el proceso de producción.</p>
      <ul style="color: var(--text-muted); display: flex; flex-direction: column; gap: 8px; padding-left: 1.2rem;">
        <li><strong>Visualizar el flujo:</strong> Hacer transparentes las fases por las que pasa una tarea.</li>
        <li><strong>Límites WIP (Work in Progress):</strong> Evitar la saturación limitando las tareas simultáneas en cada columna.</li>
        <li>Optimización del tiempo de ciclo (Lead Time).</li>
      </ul>
    `,
    xpModal: `
      <h2 style="color: var(--accent-purple); font-family: var(--font-title); margin-bottom: 1rem;"><i class="fa-solid fa-code"></i> Detalle Estructural: Extreme Programming (XP)</h2>
      <p style="color: var(--text-muted); margin-bottom: 1rem;">Metodología enfocada en potenciar las buenas prácticas de ingeniería de software y calidad técnica.</p>
      <ul style="color: var(--text-muted); display: flex; flex-direction: column; gap: 8px; padding-left: 1.2rem;">
        <li><strong>Pair Programming:</strong> Dos programadores en una misma estación (conductor y observador).</li>
        <li><strong>TDD (Test-Driven Development):</strong> Escribir pruebas automatizadas antes de programar la funcionalidad.</li>
        <li>Refactorización continua y propiedad colectiva del código.</li>
      </ul>
    `
  };

  modCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetKey = card.getAttribute('data-modaltarget');
      if (modalData[targetKey] && customModalOverlay) {
        modalBodyContent.innerHTML = modalData[targetKey];
        customModalOverlay.classList.add('active');
      }
    });
  });

  if (modalCloseBtn && customModalOverlay) {
    modalCloseBtn.addEventListener('click', () => {
      customModalOverlay.classList.remove('active');
    });
    customModalOverlay.addEventListener('click', (e) => {
      if (e.target === customModalOverlay) {
        customModalOverlay.classList.remove('active');
      }
    });
  }

});

/* --- 5. Funciones de Drag and Drop para el Tablero Kanban --- */
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  
  let targetColumn = ev.target.closest('.kanban-column');
  if (targetColumn && draggedElement) {
    targetColumn.appendChild(draggedElement);
  }
}