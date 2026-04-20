const genreConfig = {
  'rpg': {
    name: 'РПГ',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>'
  },
  'action': {
    name: 'Экшен',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
  },
  'adventure': {
    name: 'Приключения',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>'
  },
  'shooter': {
    name: 'Шутер',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
  },
  'horror': {
    name: 'Хоррор',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>'
  },
  'open-world': {
    name: 'Открытый мир',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
  },
  'stealth': {
    name: 'Стелс',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>'
  },
  'strategy': {
    name: 'Стратегия',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V8.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .5.5V20"/><path d="M10 20V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v15"/><path d="M15 20v-8.5a.5.5 0 0 1 .5-.5H19a.5.5 0 0 1 .5.5V20"/></svg>'
  },
  'flash': {
    name: 'Флеш',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>'
  },
  'gta-like': {
    name: 'GTA-like',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>'
  },
  'souls-like': {
    name: 'Souls-like',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
  },
  'racing': {
    name: 'Гонки',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>'
  },
  'slasher': {
    name: 'Слэшер',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/></svg>'
  },
  'puzzle': {
    name: 'Головоломка',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.04.967a2.5 2.5 0 1 1-3.237-3.237c.463-.2.893-.547.967-1.04a1.026 1.026 0 0 0-.29-.877l-1.563-1.563A2.404 2.404 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.04-.967a2.5 2.5 0 1 1 3.237 3.237c-.463.2-.893.547-.967 1.04z"/></svg>'
  },
  'co-op': {
    name: 'Кооп',
    icon:
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  }
};

let currentFilter = 'all';
let currentSort = 'default';
let sortDirection = 'desc';

function translateGenre(genre) {
  const lower = genre.toLowerCase();
  return genreConfig[lower]?.name || genre;
}

function getRatingClass(rating) {
  if (rating >= 7.5) return 'high';
  if (rating >= 5.0) return 'mid';
  return 'low';
}

function getRatingColor(rating) {
  if (rating >= 7.5) return '#10b981';
  if (rating >= 5.0) return '#f59e0b';
  return '#ef4444';
}

function updateStats() {
  const total = games.length;
  document.getElementById('totalGames').textContent = total;

  const topGenreIcon = document.getElementById('topGenreIcon');
  const topGenreText = document.getElementById('topGenre');

  if (total === 0) {
    topGenreText.textContent = '—';
    return;
  }

  const genreCount = {};
  games.forEach(g => {
    g.genres.forEach(genre => {
      genreCount[genre.toLowerCase()] = (genreCount[genre.toLowerCase()] || 0) + 1;
    });
  });

  let topGenre = '';
  let maxCount = 0;
  for (let genre in genreCount) {
    if (genreCount[genre] > maxCount) {
      maxCount = genreCount[genre];
      topGenre = genre;
    }
  }
  
  topGenreText.textContent = translateGenre(topGenre);
  
  // Подменяем иконку на иконку топового жанра (увеличивая размер с 16 до 24)
  if (topGenre && genreConfig[topGenre] && genreConfig[topGenre].icon) {
      let svgString = genreConfig[topGenre].icon;
      svgString = svgString.replace('width="16"', 'width="24"').replace('height="16"', 'height="24"');
      topGenreIcon.innerHTML = svgString;
  }
}

function renderFilters() {
  const container = document.getElementById('filtersContainer');
  container.innerHTML = '';

  const genreSet = new Set();
  games.forEach(
      g => g.genres.forEach(genre => genreSet.add(genre.toLowerCase())));

  const allBtn = document.createElement('button');
  allBtn.className = 'filter-chip active';
  allBtn.dataset.filter = 'all';
  allBtn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Все';
  container.appendChild(allBtn);

  const sortedGenres = Array.from(genreSet).sort();

  sortedGenres.forEach(genreKey => {
    const config = genreConfig[genreKey];
    if (!config) return;

    const btn = document.createElement('button');
    btn.className = 'filter-chip';
    btn.dataset.filter = genreKey;
    btn.innerHTML = `${config.icon} ${config.name}`;
    container.appendChild(btn);
  });

  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', function() {
      container.querySelectorAll('.filter-chip')
          .forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      renderGames();
    });
  });
}

function getFilteredGames() {
  if (currentFilter === 'all') return games.slice();
  return games.filter(
      g => g.genres.some(x => x.toLowerCase() === currentFilter.toLowerCase()));
}

function getSortedGames(list) {
  if (currentSort === 'default') {
    return list.slice().sort((a, b) => {
      if (b.myRating !== a.myRating) return b.myRating - a.myRating;
      return b.steamRating - a.steamRating;
    });
  }

  return list.slice().sort((a, b) => {
    let diff = b[currentSort] - a[currentSort];
    if (diff === 0) {
      const secondRating =
          currentSort === 'myRating' ? 'steamRating' : 'myRating';
      diff = b[secondRating] - a[secondRating];
    }
    return sortDirection === 'asc' ? -diff : diff;
  });
}

function getStatusConfig(times) {
  const checkIcon =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';
  const trophyIcon =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>';
  const crossIcon =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6L6 18M6 6l12 12"/></svg>';
  const infinityIcon =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/></svg>';
  const eyeIcon =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
  const usersIcon =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';

  switch (times) {
    case -1:
      return {cls: 'online', icon: infinityIcon, text: 'Онлайн'};
    case 0:
      return {
        cls: 'not-completed',
        icon: crossIcon,
        text: 'Не пройдена до конца'
      };
    case 1:
      return {cls: 'completed', icon: checkIcon, text: 'Пройдена'};
    case 2:
      return {
        cls: 'multi',
        icon: trophyIcon,
        text: 'Пройдена много раз'
      };  // Изменено здесь
    case 3:
      return {cls: 'watched', icon: eyeIcon, text: 'Смотрел прохождение'};
    case 4:
      return {cls: 'coop', icon: usersIcon, text: 'Пройдена (кооп)'};
    default:
      return {cls: 'not-completed', icon: crossIcon, text: 'Не указано'};
  }
}

function createCard(game) {
  const card = document.createElement('div');
  card.className = 'game-card';

  const myRatingClass = getRatingClass(game.myRating);
  const steamRatingClass = getRatingClass(game.steamRating);

  let genreChips = game.genres
                       .map(
                           g => `<span class="genre-chip" data-genre="${
                               g.toLowerCase()}">${translateGenre(g)}</span>`)
                       .join('');

  const starIcon =
      '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  const status = getStatusConfig(game.timesCompleted);

  let actionBtn = '';
  if (game.description) {
    actionBtn = `<button class="card-action">
      <span>Подробнее</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </button>`;
  }

  card.innerHTML = `
    <div class="card-image-container">
      <img src="${game.image}" alt="${
      game.title}" class="card-image" loading="lazy">
      <div class="card-image-overlay"></div>
      <div class="completion-badge ${status.cls}">${status.icon} ${
      status.text}</div>
      <div class="rating-orbs">
        <div class="rating-orb">
          <span class="orb-label">Моя</span>
          <div class="orb-value ${myRatingClass}">${starIcon} ${
      game.myRating.toFixed(1)}</div>
        </div>
        <div class="rating-orb steam-orb">
          <span class="orb-label">Steam</span>
          <div class="orb-value ${steamRatingClass}">${starIcon} ${
      game.steamRating.toFixed(1)}</div>
        </div>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">${game.title}</h3>
      <div class="card-genres">${genreChips}</div>
      ${actionBtn}
    </div>`;

  card.querySelectorAll('.genre-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const genreKey = chip.dataset.genre;

      document.querySelectorAll('.filter-chip')
          .forEach(b => b.classList.remove('active'));
      const targetBtn =
          document.querySelector(`.filter-chip[data-filter="${genreKey}"]`);
      if (targetBtn) {
        targetBtn.classList.add('active');
        currentFilter = genreKey;
        renderGames();
        document.querySelector('.controls-section').scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  if (game.description) {
    card.querySelector('.card-action')
        .addEventListener('click', () => openModal(game));
  }

  return card;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.05, rootMargin: '0px 0px -20px 0px'});

// Плавная смена карточек при фильтрации
function renderGames() {
  const grid = document.getElementById('gamesGrid');
  const empty = document.getElementById('emptyState');

  grid.classList.add('fading');

  setTimeout(() => {
    grid.innerHTML = '';
    let list = getSortedGames(getFilteredGames());

    if (list.length === 0) {
      empty.style.display = 'block';
    } else {
      empty.style.display = 'none';
      list.forEach(game => {
        const card = createCard(game);
        grid.appendChild(card);
        observer.observe(card);
      });
    }

    grid.classList.remove('fading');
  }, 300);
}

function openModal(game) {
  const modal = document.getElementById('modal');

  document.getElementById('modalImg').src = game.image;
  document.getElementById('modalImg').alt = game.title;
  document.getElementById('modalTitle').textContent = game.title;

  const myEl = document.getElementById('modalMyRating');
  myEl.textContent = game.myRating.toFixed(1);
  myEl.style.color = getRatingColor(game.myRating);

  const steamEl = document.getElementById('modalSteamRating');
  steamEl.textContent = game.steamRating.toFixed(1);
  steamEl.style.color = getRatingColor(game.steamRating);

  // Добавляем data-genre для кликабельности в модалке
  document.getElementById('modalGenres').innerHTML =
      game.genres
          .map(
              g => `<span class="genre-chip" data-genre="${g.toLowerCase()}">${
                  translateGenre(g)}</span>`)
          .join('');

  // Обработчик клика по жанру в модалке
  document.querySelectorAll('#modalGenres .genre-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const genreKey = chip.dataset.genre;
      document.querySelectorAll('.filter-chip')
          .forEach(b => b.classList.remove('active'));
      const targetBtn =
          document.querySelector(`.filter-chip[data-filter="${genreKey}"]`);
      if (targetBtn) {
        targetBtn.classList.add('active');
        currentFilter = genreKey;
        renderGames();
        closeModal();
        setTimeout(() => {
          document.querySelector('.controls-section').scrollIntoView({
            behavior: 'smooth'
          });
        }, 300);
      }
    });
  });

  document.getElementById('modalDescription').textContent =
      game.description || '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('closeBtn').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

const dropdown = document.getElementById('sortDropdown');
const trigger = document.getElementById('dropdownTrigger');
const menu = document.getElementById('dropdownMenu');
const items = menu.querySelectorAll('.dropdown-item');

trigger.addEventListener('click', e => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

items.forEach(item => {
  item.addEventListener('click', function() {
    const value = this.dataset.value;
    document.querySelector('.dropdown-text').textContent = this.textContent;
    items.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    dropdown.classList.remove('open');

    if (value === 'default') {
      currentSort = 'default';
      sortDirection = 'desc';
    } else {
      const parts = value.split('-');
      currentSort = parts[0];
      sortDirection = parts[1];
    }
    renderGames();
  });
});

document.addEventListener('click', e => {
  if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
});

document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  updateStats();
  renderGames();
});