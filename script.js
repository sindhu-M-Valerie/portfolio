const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

const evaluationCard = projectCards[3];
if (evaluationCard) {
  evaluationCard.classList.add('project-card-concept');
  const projectLabel = evaluationCard.querySelector('.project-meta span');
  if (projectLabel) projectLabel.textContent = '04 / Concept — in progress';

  evaluationCard.querySelector('.project-meta a')?.remove();

  const artworkLink = evaluationCard.querySelector('.project-mark-link');
  if (artworkLink) {
    const artwork = document.createElement('div');
    artwork.className = artworkLink.className;
    artwork.setAttribute('aria-hidden', 'true');
    artwork.innerHTML = artworkLink.innerHTML;
    artworkLink.replaceWith(artwork);
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    projectCards.forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});