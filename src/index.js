import './styles/main.css';
import { loadAbout } from './pages/about';
import { loadFeatures } from './pages/features';
import { loadReviews } from './pages/reviews';

function clearMainContent() {
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = '';
  }
}

function navigateTo(path) {
  clearMainContent();

  const main = document.querySelector('main') || document.createElement('main');
  if (!main.parentElement) {
    document.body.appendChild(main);
  }

  switch (path) {
    case '':
    case '#about':
      loadAbout(main);
      break;
    case '#features':
      loadFeatures(main);
      break;
    case '#reviews':
      loadReviews(main);
      break;
    default:
      main.innerHTML =
        '<section class="notfound"><h2>404 - Page not found</h2></section>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  navigateTo(window.location.hash);

  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });

  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const path = event.target.getAttribute('href');
      window.location.hash = path;
    });
  });
});
