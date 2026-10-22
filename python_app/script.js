// Foxico Travel Destination Carousel - Pure JavaScript
const destinations = [
  {
    id: 'gembu-highland',
    index: '01',
    name: 'GEMBU TEA',
    cardTitle: 'Highland Tea Estate, Gembu',
    location: 'MAMBILLA PLATEAU',
    subtitle: 'Nigeria’s Highest Mountain Tea Sanctuary',
    description: 'Perched over 1,800 meters above sea level on the Mambilla Plateau, Highland Tea in Gembu unfurls across endless undulating emerald hills, blessed with crisp temperate breezes, volcanic highland soil, and morning mist that nurtures Nigeria’s finest organic tea leaves.',
    nextName: 'Kakara',
    image: 'images/gembu_tea_highland_hero.jpg',
    rating: '5.0 ★ (4,890 reviews)',
    weather: '19°C · Cool Mist',
    bestSeason: 'Sept – April',
    currency: 'NGN (Naira)',
    highlights: [
      { name: 'Kakara Tea Estate', desc: 'Over 1,200 hectares of manicured emerald tea terraces on high altitude slopes.' },
      { name: 'Mambilla Escarpment', desc: 'Dramatic volcanic escarpment ridges with sweeping vistas toward Cameroon.' },
      { name: 'Highland CTC Tea Factory', desc: 'Historic factory processing fresh green flushes into rich aromatic highland black tea.' },
      { name: 'Alpine Montane Climate', desc: 'Rare cool temperate microclimate with morning fog and rolling green hills.' }
    ]
  },
  {
    id: 'kakara-terraces',
    index: '02',
    name: 'KAKARA',
    cardTitle: 'Kakara Tea Terraces, Gembu',
    location: 'GEMBU HIGHLANDS',
    subtitle: 'The Emerald Heart of Highland Tea',
    description: 'Kakara features breathtaking sculptured green contours descending into mist-covered river valleys, where generations of skilled tea farmers cultivate pristine mountain slopes under crisp alpine sunshine and gentle rainfall.',
    nextName: 'Harvest',
    image: 'images/gembu_kakara_terraces.jpg',
    rating: '5.0 ★ (5,120 reviews)',
    weather: '18°C · Alpine Breeze',
    bestSeason: 'Oct – May',
    currency: 'NGN (Naira)',
    highlights: [
      { name: 'Contour Tea Bush Trails', desc: 'Winding footpaths navigating through geometric rows of lush green tea.' },
      { name: 'Eucalyptus Windbreaks', desc: 'Soaring fragrant eucalyptus corridors protecting fragile highland crops.' },
      { name: 'Dawn Cloud Oceans', desc: 'Pillowy white sea of clouds blanketing the valley below at sunrise.' }
    ]
  },
  {
    id: 'tea-harvest',
    index: '03',
    name: 'TEA HARVEST',
    cardTitle: 'Morning Tea Harvest, Gembu',
    location: 'HIGHLAND TEA FARMS',
    subtitle: 'Artisanal Two-Leaves-and-a-Bud Plucking',
    description: 'At dawn as the dew evaporates, hand-pluckers with woven bamboo baskets deftly harvest the tender two-leaves-and-a-bud flush, preserving the rich antioxidants, delicate floral aroma, and golden amber liquor of authentic Highland Tea.',
    nextName: 'Misty Ridge',
    image: 'images/gembu_tea_harvest.jpg',
    rating: '4.9 ★ (3,740 reviews)',
    weather: '20°C · Mild Sun',
    bestSeason: 'Year-Round Harvest',
    currency: 'NGN (Naira)',
    highlights: [
      { name: 'Hand-Plucking Mastery', desc: 'Skilled artisanal selective plucking of the freshest tender tea tips.' },
      { name: 'Valley Weighing Stations', desc: 'Scenic mountain collection hubs where fresh leaves begin processing.' },
      { name: 'Highland Tea Cupping', desc: 'Sensory cupping sessions of vibrant, brisk green and black brews.' }
    ]
  },
  {
    id: 'misty-ridge',
    index: '04',
    name: 'MAMBILLA RIDGE',
    cardTitle: 'Misty Ridge Road, Gembu',
    location: 'MAMBILLA HEIGHTS',
    subtitle: 'Winding Scenic Mountain Passes',
    description: 'Serpentine paved roads trace the spine of the plateau through lush tea plantations, eucalyptus groves, and pastoral cattle hills on the highest motorable road in Nigeria, immersed in peaceful mountain tranquility.',
    nextName: 'Barup Falls',
    image: 'images/gembu_misty_ridge.jpg',
    rating: '4.9 ★ (4,230 reviews)',
    weather: '16°C · Mountain Fog',
    bestSeason: 'Nov – March',
    currency: 'NGN (Naira)',
    highlights: [
      { name: 'Scenic Mountain Drive', desc: 'Dramatic hairpin turns with views stretching to Chappal Waddi peak.' },
      { name: 'Highland Cattle Pastures', desc: 'Picturesque herds grazing peacefully across rolling green knolls.' },
      { name: 'Montane Bird Sanctuary', desc: 'Home to rare endemic montane birds and pristine mountain ecology.' }
    ]
  },
  {
    id: 'barup-valley',
    index: '05',
    name: 'BARUP FALLS',
    cardTitle: 'Barup Falls & Tea Valley',
    location: 'GEMBU WATERWAYS',
    subtitle: 'Cascades Through Emerald Slopes',
    description: 'Thundering highland cascades plunge through rugged granite gorges bordered by terraced tea estates and wild mountain vegetation, providing the crisp glacial headwaters of the Donga River that nourish the entire plateau.',
    nextName: 'Gembu Tea',
    image: 'images/gembu_waterfall_valley.jpg',
    rating: '5.0 ★ (5,820 reviews)',
    weather: '21°C · Fresh Spray',
    bestSeason: 'May – Nov',
    currency: 'NGN (Naira)',
    highlights: [
      { name: 'Barup Waterfalls', desc: 'Multi-tiered waterfall crashing into a secluded emerald basin.' },
      { name: 'Donga River Headwaters', desc: 'Icy cold mountain streams weaving through tea plantations.' },
      { name: 'Riverside Tea Picnics', desc: 'Tranquil spots with views of misty waterfalls and tea terraces.' }
    ]
  }
];

let currentIndex = 0;
let savedIds = ['kakara-terraces', 'barup-valley'];

function showToast(text) {
  const toast = document.getElementById('toast');
  toast.innerText = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function updateView() {
  const current = destinations[currentIndex];

  // Update background image
  document.getElementById('heroBg').style.backgroundImage = `url('${current.image}')`;

  // Update hero texts
  document.getElementById('destLocation').innerText = `${current.location} · ${current.rating}`;
  document.getElementById('heroTitle').innerText = current.name;
  document.getElementById('heroDesc').innerText = current.description;
  document.getElementById('watermark').innerText = current.nextName;
  document.getElementById('footerSubtitle').innerText = `Destination ${current.index} of 05 · ${current.subtitle}`;

  // Update rail
  document.getElementById('railCurrentIndex').innerText = current.index;
  const dots = document.querySelectorAll('.rail-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });

  // Update progress
  const progressPercent = ((currentIndex + 1) / destinations.length) * 100;
  document.getElementById('progressBar').style.width = `${progressPercent}%`;
  document.getElementById('progressText').innerText = `0${currentIndex + 1} / 05`;

  // Update Hero Save button
  const isSaved = savedIds.includes(current.id);
  document.getElementById('saveHeroBtnText').innerText = isSaved ? 'Saved' : 'Save';

  // Render carousel cards for remaining items
  renderCards();
}

function renderCards() {
  const track = document.getElementById('cardsTrack');
  track.innerHTML = '';

  const queue = [
    ...destinations.slice(currentIndex + 1),
    ...destinations.slice(0, currentIndex)
  ].slice(0, 3);

  queue.forEach((dest) => {
    const isSaved = savedIds.includes(dest.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.cardTitle}" class="card-img">
      <div class="card-overlay"></div>
      <button class="card-bookmark ${isSaved ? 'saved' : ''}" data-id="${dest.id}" title="Save">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
        </svg>
      </button>
      <div class="card-info">
        <div class="card-title">${dest.cardTitle}</div>
        <div class="card-rating">★★★★★ <span>5.0</span></div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-bookmark')) return;
      const targetIdx = destinations.findIndex(d => d.id === dest.id);
      if (targetIdx !== -1) {
        currentIndex = targetIdx;
        updateView();
      }
    });

    const bookmarkBtn = card.querySelector('.card-bookmark');
    bookmarkBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSave(dest.id);
    });

    track.appendChild(card);
  });
}

function toggleSave(id) {
  if (savedIds.includes(id)) {
    savedIds = savedIds.filter(item => item !== id);
    showToast('Removed from saved list');
  } else {
    savedIds.push(id);
    showToast('Saved to your favorites!');
  }
  document.getElementById('savedCount').innerText = savedIds.length;
  updateView();
}

// Next / Previous Navigation
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % destinations.length;
  updateView();
  resetAutoPlay();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
  updateView();
  resetAutoPlay();
});

// Autoplay Timer (moves on its own every 5 seconds)
let isAutoPlaying = true;
let autoPlayTimer = null;
const AUTOPLAY_INTERVAL = 5000;

function startAutoPlay() {
  stopAutoPlay();
  autoPlayTimer = setInterval(() => {
    if (!modal.classList.contains('open')) {
      currentIndex = (currentIndex + 1) % destinations.length;
      updateView();
    }
  }, AUTOPLAY_INTERVAL);
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}

function resetAutoPlay() {
  if (isAutoPlaying) {
    startAutoPlay();
  }
}

// Play / Pause Button
const playPauseBtn = document.getElementById('playPauseBtn');
if (playPauseBtn) {
  playPauseBtn.addEventListener('click', () => {
    isAutoPlaying = !isAutoPlaying;
    if (isAutoPlaying) {
      startAutoPlay();
      playPauseBtn.title = 'Pause auto-slide';
      document.getElementById('playPauseIcon').innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
      showToast('Auto-slide resumed (5s interval)');
    } else {
      stopAutoPlay();
      playPauseBtn.title = 'Resume auto-slide';
      document.getElementById('playPauseIcon').innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      showToast('Auto-slide paused');
    }
  });
}

// Pause autoplay on mouse hover over the cards track
const trackEl = document.getElementById('cardsTrack');
if (trackEl) {
  trackEl.addEventListener('mouseenter', () => stopAutoPlay());
  trackEl.addEventListener('mouseleave', () => {
    if (isAutoPlaying) startAutoPlay();
  });
}

// Dot click in rail
document.querySelectorAll('.rail-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'), 10);
    updateView();
    resetAutoPlay();
  });
});

// Save hero button
document.getElementById('saveHeroBtn').addEventListener('click', () => {
  toggleSave(destinations[currentIndex].id);
});

// Modal Logic
const modal = document.getElementById('exploreModal');
document.getElementById('exploreBtn').addEventListener('click', () => {
  const current = destinations[currentIndex];
  document.getElementById('modalBanner').style.backgroundImage = `url('${current.image}')`;
  document.getElementById('modalRegion').innerText = current.location;
  document.getElementById('modalTitle').innerText = current.name;
  document.getElementById('modalSub').innerText = current.subtitle;
  document.getElementById('modalWeather').innerText = current.weather;
  document.getElementById('modalSeason').innerText = current.bestSeason;
  document.getElementById('modalCurrency').innerText = current.currency;
  document.getElementById('modalRating').innerText = current.rating;

  const hlContainer = document.getElementById('modalHighlights');
  hlContainer.innerHTML = '';
  current.highlights.forEach(h => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${h.name}</strong><span>${h.desc}</span>`;
    hlContainer.appendChild(li);
  });

  modal.classList.add('open');
});

document.getElementById('closeModalBtn').addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

// Keyboard Left/Right Navigation & Space to pause/play
window.addEventListener('keydown', (e) => {
  if (modal.classList.contains('open')) return;
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % destinations.length;
    updateView();
    resetAutoPlay();
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
    updateView();
    resetAutoPlay();
  } else if (e.key === ' ') {
    e.preventDefault();
    if (playPauseBtn) playPauseBtn.click();
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateView();
  startAutoPlay();
});
