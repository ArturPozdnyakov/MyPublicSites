const
    genreConfig =
        {
          'rpg': {
            name: 'РПГ',
            icon:
                '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32l28-28L80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z"></path></svg>'
          },
          'action': {
            name: 'Экшен',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>'
          },
          'adventure': {
            name: 'Приключения',
            icon:
                '<svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l18.74,31.8,0,0L154,192Zm150.57,0-16.66-28.28L186.55,112,234,192Z"></path></svg>'
          },
          'shooter': {
            name: 'Шутер',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
          },
          'horror': {
            name: 'Хоррор',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M12 3a7 7 0 0 1 7 7v1l1 0a2 2 0 1 1 0 4l-1 0v3l2 3h-10a6 6 0 0 1 -6 -5.775l0 -.226l-1 0a2 2 0 0 1 0 -4l1 0v-1a7 7 0 0 1 7 -7l0 .001"/><path d="M11 14h2a1 1 0 0 0 -2 0"/></svg>'
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
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"/></svg>'
          },
          'souls-like': {
            name: 'Souls-like',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/><path d="M12 3v18"/><path d="M3.5 12h17"/></svg>'
          },
          'racing': {
            name: 'Гонки',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>'
          },
          'slasher': {
            name: 'Слэшер',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"/></svg>'
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
          },
          'survival': {
            name: 'Выживание',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 9a10 10 0 1 0 20 0"/><path d="M12 19a10 10 0 0 1 10 -10"/><path d="M2 9a10 10 0 0 1 10 10"/><path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"/><path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"/></svg>'
          },
          'sandbox': {
            name: 'Песочница',
            icon:
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25l4 2.25"/><path d="M12 12l4 -2.25l4 -2.25"/><path d="M12 12l0 9"/><path d="M12 12l-4 -2.25l-4 -2.25"/><path d="M20 12l-4 2v4.75"/><path d="M4 12l4 2l0 4.75"/><path d="M8 5.25l4 2.25l4 -2.25"/></svg>'
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
      genreCount[genre.toLowerCase()] =
          (genreCount[genre.toLowerCase()] || 0) + 1;
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
    svgString = svgString.replace('width="16"', 'width="24"')
                    .replace('height="16"', 'height="24"');
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