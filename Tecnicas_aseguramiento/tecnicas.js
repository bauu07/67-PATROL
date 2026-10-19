/* Lógica interactiva para las tarjetas de la US-03 */
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.tech-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
});