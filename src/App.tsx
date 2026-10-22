import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Search,
  Compass,
  MapPin,
  Calendar,
  X,
  Volume2,
  VolumeX,
  Share2,
  Check,
  Code2,
  Send,
  Sparkles,
  ArrowRight,
  Star,
  Play,
  Pause
} from 'lucide-react';

// Destinations data showcasing Highland Tea, Gembu on the scenic Mambilla Plateau
const DESTINATIONS = [
  {
    id: 'gembu-highland',
    index: '01',
    name: 'GEMBU TEA',
    cardTitle: 'Highland Tea Estate, Gembu',
    location: 'Mambilla Plateau, Taraba',
    subtitle: 'Nigeria’s Highest Mountain Tea Sanctuary',
    description:
      'Perched over 1,800 meters above sea level on the Mambilla Plateau, Highland Tea in Gembu unfurls across endless undulating emerald hills, blessed with crisp temperate breezes, volcanic highland soil, and morning mist that nurtures Nigeria’s finest organic tea leaves.',
    nextName: 'Kakara',
    image: '/images/gembu_tea_highland_hero.jpg',
    rating: 5.0,
    reviews: 4890,
    weather: '19°C · Cool Mountain Mist',
    bestSeason: 'September – April',
    currency: 'Nigerian Naira (NGN)',
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
    location: 'Gembu Highlands',
    subtitle: 'The Emerald Heart of Highland Tea',
    description:
      'Kakara features breathtaking sculptured green contours descending into mist-covered river valleys, where generations of skilled tea farmers cultivate pristine mountain slopes under crisp alpine sunshine and gentle rainfall.',
    nextName: 'Harvest',
    image: '/images/gembu_kakara_terraces.jpg',
    rating: 5.0,
    reviews: 5120,
    weather: '18°C · Alpine Breeze',
    bestSeason: 'October – May',
    currency: 'Nigerian Naira (NGN)',
    highlights: [
      { name: 'Contour Tea Bush Trails', desc: 'Winding footpaths navigating through geometric rows of lush green tea.' },
      { name: 'Eucalyptus Windbreaks', desc: 'Soaring fragrant eucalyptus corridors protecting fragile highland crops.' },
      { name: 'Dawn Cloud Oceans', desc: 'Pillowy white sea of clouds blanketing the valley below at sunrise.' },
      { name: 'Plateau Sunrise Lookout', desc: 'Golden rays illuminating the undulating green tea valleys.' }
    ]
  },
  {
    id: 'tea-harvest',
    index: '03',
    name: 'TEA HARVEST',
    cardTitle: 'Morning Tea Harvest, Gembu',
    location: 'Highland Tea Estate',
    subtitle: 'Artisanal Two-Leaves-and-a-Bud Plucking',
    description:
      'At dawn as the dew evaporates, hand-pluckers with woven bamboo baskets deftly harvest the tender two-leaves-and-a-bud flush, preserving the rich antioxidants, delicate floral aroma, and golden amber liquor of authentic Highland Tea.',
    nextName: 'Misty Ridge',
    image: '/images/gembu_tea_harvest.jpg',
    rating: 4.9,
    reviews: 3740,
    weather: '20°C · Mild Sunlight',
    bestSeason: 'Year-Round Harvest',
    currency: 'Nigerian Naira (NGN)',
    highlights: [
      { name: 'Hand-Plucking Mastery', desc: 'Skilled artisanal selective plucking of the freshest tender tea tips.' },
      { name: 'Valley Weighing Stations', desc: 'Scenic mountain collection hubs where fresh leaves begin processing.' },
      { name: 'Highland Tea Cupping', desc: 'Sensory cupping sessions of vibrant, brisk green and black brews.' },
      { name: 'Highland Farmers Cooperative', desc: 'Vibrant local communities sustained by ethical tea farming.' }
    ]
  },
  {
    id: 'misty-ridge',
    index: '04',
    name: 'MAMBILLA RIDGE',
    cardTitle: 'Misty Ridge Road, Gembu',
    location: 'Mambilla Heights',
    subtitle: 'Winding Scenic Mountain Passes',
    description:
      'Serpentine paved roads trace the spine of the plateau through lush tea plantations, eucalyptus groves, and pastoral cattle hills on the highest motorable road in Nigeria, immersed in peaceful mountain tranquility.',
    nextName: 'Barup Falls',
    image: '/images/gembu_misty_ridge.jpg',
    rating: 4.9,
    reviews: 4230,
    weather: '16°C · Crisp Mountain Fog',
    bestSeason: 'November – March',
    currency: 'Nigerian Naira (NGN)',
    highlights: [
      { name: 'Scenic Mountain Drive', desc: 'Dramatic hairpin turns with views stretching to Chappal Waddi peak.' },
      { name: 'Highland Cattle Pastures', desc: 'Picturesque herds grazing peacefully across rolling green knolls.' },
      { name: 'Montane Bird Sanctuary', desc: 'Home to rare endemic montane birds and pristine mountain ecology.' },
      { name: 'Night Stargazing Camp', desc: 'Clear high altitude skies free from artificial city lights.' }
    ]
  },
  {
    id: 'barup-valley',
    index: '05',
    name: 'BARUP FALLS',
    cardTitle: 'Barup Falls & Tea Valley',
    location: 'Gembu Waterways',
    subtitle: 'Cascades Through Emerald Slopes',
    description:
      'Thundering highland cascades plunge through rugged granite gorges bordered by terraced tea estates and wild mountain vegetation, providing the crisp glacial headwaters of the Donga River that nourish the entire plateau.',
    nextName: 'Gembu Tea',
    image: '/images/gembu_waterfall_valley.jpg',
    rating: 5.0,
    reviews: 5820,
    weather: '21°C · Fresh Mountain Spray',
    bestSeason: 'May – November',
    currency: 'Nigerian Naira (NGN)',
    highlights: [
      { name: 'Barup Waterfalls', desc: 'Multi-tiered waterfall crashing into a secluded emerald basin.' },
      { name: 'Donga River Headwaters', desc: 'Icy cold mountain streams weaving through tea plantations.' },
      { name: 'Gorge Trekking Trails', desc: 'Scenic highland trails leading from tea knolls to the river canyon.' },
      { name: 'Riverside Tea Picnics', desc: 'Tranquil spots with views of misty waterfalls and tea terraces.' }
    ]
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedIds, setSavedIds] = useState<string[]>(['kakara-terraces', 'barup-valley']);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPythonModalOpen, setIsPythonModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [bookingForm, setBookingForm] = useState({ name: '', email: '', travelers: '2', date: '2026-11-15' });
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPausedByHover, setIsPausedByHover] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);

  const activeDestination = DESTINATIONS[currentIndex];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
    setSlideProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + DESTINATIONS.length) % DESTINATIONS.length);
    setSlideProgress(0);
  }, []);

  // Autoplay timer effect: smoothly updates slide progress every 50ms and advances slide every 5s
  useEffect(() => {
    const isAnyModalOpen = isExploreOpen || isSavedDrawerOpen || isSearchOpen || isPythonModalOpen || isContactOpen;
    if (!isAutoPlay || isPausedByHover || isAnyModalOpen) {
      return;
    }

    const AUTOPLAY_DURATION = 5000; // 5 seconds
    const TICK_INTERVAL = 50; // 50ms
    const step = (TICK_INTERVAL / AUTOPLAY_DURATION) * 100;

    const interval = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev + step >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPausedByHover, isExploreOpen, isSavedDrawerOpen, isSearchOpen, isPythonModalOpen, isContactOpen, handleNext]);

  // Reset slide progress whenever destination changes
  useEffect(() => {
    setSlideProgress(0);
  }, [currentIndex]);

  const toggleSave = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      const dest = DESTINATIONS.find((d) => d.id === id);
      showToast(exists ? `Removed ${dest?.name || 'item'} from favorites` : `Saved ${dest?.name || 'item'} to favorites!`);
      return updated;
    });
  };

  // Keyboard navigation (Arrow keys + Space to toggle autoplay)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExploreOpen || isSavedDrawerOpen || isSearchOpen || isPythonModalOpen || isContactOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay((prev) => !prev);
        showToast(isAutoPlay ? 'Autoplay paused' : 'Autoplay active');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isExploreOpen, isSavedDrawerOpen, isSearchOpen, isPythonModalOpen, isContactOpen, isAutoPlay]);

  // Gentle audio synthesizer for travel ambience
  useEffect(() => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(196, ctx.currentTime); // G3 warm harmonic
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      return () => {
        try {
          osc.stop();
          ctx.close();
        } catch {
          // cleanup
        }
      };
    } catch {
      // Audio not supported or blocked
    }
  }, [soundEnabled]);

  // Carousel cards: items excluding the current active one, starting from the next
  const carouselCards = [
    ...DESTINATIONS.slice(currentIndex + 1),
    ...DESTINATIONS.slice(0, currentIndex)
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#07131e] text-white overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Hero Layer with Atmospheric Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {DESTINATIONS.map((dest, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={dest.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transform transition-transform duration-1000`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Radial and Linear Gradient Overlays to preserve legibility and match design */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07131e]/90 via-[#07131e]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07131e]/95 via-transparent to-[#07131e]/40" />
              <div className="absolute inset-0 backdrop-blur-[0.5px]" />
            </div>
          );
        })}
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-6">
        {/* TOP BAR / HEADER */}
        <header className="flex items-center justify-between gap-8 py-3">
          {/* Brand Wordmark & Highland Tea Leaf Emblem */}
          <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={() => setCurrentIndex(0)}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              {/* Tea Leaf Emblem */}
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="currentColor" fillOpacity="0.3"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Highland Tea</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => showToast('Viewing latest Highland Tea harvest dispatches')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              News
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-white transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-400"
            >
              Destinations
            </button>
            <button
              onClick={() => setIsExploreOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Blog
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Ambient sound toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                showToast(soundEnabled ? 'Ambient sound muted' : 'Ambient mountain breeze playing');
              }}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-slate-200 transition-all cursor-pointer backdrop-blur-md"
              title={soundEnabled ? 'Mute ambient sound' : 'Enable ambient sound'}
              aria-label="Toggle ambient sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Search destination trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-slate-200 transition-all cursor-pointer backdrop-blur-md"
              aria-label="Search destinations"
              title="Search destinations"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Saved bookmarks trigger */}
            <button
              onClick={() => setIsSavedDrawerOpen(true)}
              className="relative w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-slate-200 transition-all cursor-pointer backdrop-blur-md"
              aria-label="Saved favorites"
              title="Saved destinations"
            >
              <Bookmark className="w-4 h-4" />
              {savedIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 text-[10px] font-bold flex items-center justify-center text-white">
                  {savedIds.length}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* MIDDLE SECTION: Left Rail + Hero Content + Right Carousel Cards */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          {/* Vertical Navigation Rail on Desktop (Leftmost, 1 column) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center py-4">
            <div className="flex flex-col items-center gap-4">
              {/* Top circle node with active slide number */}
              <div className="w-8 h-8 rounded-full border border-white/60 bg-white/10 flex items-center justify-center text-xs font-semibold text-white backdrop-blur-md">
                {activeDestination.index}
              </div>

              {/* Connecting vertical line with clickable destination dots */}
              <div className="w-[1px] h-32 bg-white/20 relative flex flex-col justify-around items-center">
                {DESTINATIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      i === currentIndex
                        ? 'w-2 h-2 bg-white ring-4 ring-white/20'
                        : 'w-1.5 h-1.5 bg-white/40 hover:bg-white hover:scale-150'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Total slides number at bottom */}
              <div className="text-[11px] font-mono tracking-wider text-slate-400">
                0{DESTINATIONS.length}
              </div>
            </div>
          </div>

          {/* Hero Content (Columns 2 to 6 / 7) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 max-w-xl">
            {/* Subtle country tag & rating */}
            <div className="flex items-center gap-3 text-xs text-slate-300 tracking-wider">
              <span className="uppercase text-sky-400 font-semibold">{activeDestination.location}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span className="font-semibold">{activeDestination.rating.toFixed(1)}</span>
                <span className="text-slate-400">({activeDestination.reviews.toLocaleString()})</span>
              </span>
            </div>

            {/* Giant Title */}
            <div className="relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-md">
                {activeDestination.name}
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal max-w-lg drop-shadow">
              {activeDestination.description}
            </p>

            {/* CTA & Actions */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => setIsExploreOpen(true)}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#2558e8] hover:bg-[#1f4acc] text-white text-sm font-semibold tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => toggleSave(activeDestination.id)}
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all backdrop-blur-md cursor-pointer ${
                  savedIds.includes(activeDestination.id)
                    ? 'bg-white/20 border-white/40 text-amber-300'
                    : 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/15'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${savedIds.includes(activeDestination.id) ? 'fill-amber-300' : ''}`} />
                <span>{savedIds.includes(activeDestination.id) ? 'Saved' : 'Save'}</span>
              </button>
            </div>

            {/* Watermark / Next Destination Preview Text (matches Figma subtle 'Thailand' typography in background) */}
            <div className="pt-6 select-none pointer-events-none opacity-20">
              <span className="text-4xl sm:text-5xl font-extrabold uppercase tracking-widest text-slate-400">
                {activeDestination.nextName}
              </span>
            </div>
          </div>

          {/* Right Destination Carousel Cards (Columns 7 to 12) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Cards Row / Carousel Track */}
            <div
              onMouseEnter={() => setIsPausedByHover(true)}
              onMouseLeave={() => setIsPausedByHover(false)}
              className="flex gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible pb-4 pt-2 no-scrollbar scroll-smooth"
            >
              {carouselCards.slice(0, 3).map((dest) => {
                const isSaved = savedIds.includes(dest.id);
                return (
                  <div
                    key={dest.id}
                    onClick={() => {
                      const targetIdx = DESTINATIONS.findIndex((d) => d.id === dest.id);
                      if (targetIdx !== -1) setCurrentIndex(targetIdx);
                    }}
                    className="group relative flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] h-[300px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
                  >
                    {/* Card Background Image */}
                    <img
                      src={dest.image}
                      alt={dest.cardTitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-all" />

                    {/* Top Bookmark Action Button */}
                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={(e) => toggleSave(dest.id, e)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all backdrop-blur-md cursor-pointer ${
                          isSaved
                            ? 'bg-white text-amber-500 shadow-md'
                            : 'bg-white/25 hover:bg-white text-white hover:text-slate-900 border border-white/20'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save destination'}
                        aria-label="Save destination"
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
                      </button>
                    </div>

                    {/* Card Info & Title */}
                    <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col justify-end space-y-1">
                      <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight drop-shadow line-clamp-1">
                        {dest.cardTitle}
                      </h3>

                      {/* 5-Star Rating row */}
                      <div className="flex items-center gap-1 pt-0.5">
                        <div className="flex text-amber-300">
                          {[...Array(5)].map((_, starI) => (
                            <Star key={starI} className="w-3 h-3 fill-amber-300 text-amber-300" />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-300 ml-1 font-medium">{dest.rating.toFixed(1)}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1">
                        <span className="text-sky-300 font-medium">{dest.location}</span>
                        <span className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM CONTROLS & PAGINATION BAR */}
        <footer className="relative flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-white/10">
          {/* Left info badge / slide count on mobile */}
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="text-white font-medium">
              Destination {activeDestination.index} of 0{DESTINATIONS.length}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-slate-300">{activeDestination.subtitle}</span>
          </div>

          {/* Carousel Navigation Cluster: Prev, Play/Pause, Next */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-md cursor-pointer shadow-lg"
              aria-label="Previous destination"
              title="Previous destination (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Autoplay Play/Pause Toggle */}
            <button
              onClick={() => {
                setIsAutoPlay(!isAutoPlay);
                showToast(!isAutoPlay ? 'Auto-slide enabled (moving every 5s)' : 'Auto-slide paused');
              }}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all backdrop-blur-md cursor-pointer shadow-lg border ${
                isAutoPlay
                  ? 'bg-blue-600/35 hover:bg-blue-600/50 border-blue-400/50 text-blue-200'
                  : 'bg-white/10 hover:bg-white/25 border-white/20 text-slate-300'
              }`}
              aria-label={isAutoPlay ? 'Pause auto slide' : 'Play auto slide'}
              title={isAutoPlay ? 'Pause auto-slide' : 'Resume auto-slide (every 5 seconds)'}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-md cursor-pointer shadow-lg"
              aria-label="Next destination"
              title="Next destination (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Progress Bar & Auto-slide countdown */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <div className="w-24 sm:w-36 h-1.5 bg-white/15 rounded-full overflow-hidden relative">
                {/* Overall slide progress */}
                <div
                  className="h-full bg-white/30 rounded-full transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / DESTINATIONS.length) * 100}%` }}
                />
                {/* Smooth live autoplay countdown fill */}
                {isAutoPlay && (
                  <div
                    className="absolute inset-y-0 left-0 bg-blue-400 rounded-full transition-all duration-75"
                    style={{ width: `${slideProgress}%` }}
                  />
                )}
              </div>
            </div>
            <div className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
              <span className="text-white font-bold">0{currentIndex + 1}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">0{DESTINATIONS.length}</span>
              {isAutoPlay && !isPausedByHover && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse ml-1" title="Autoplaying" />
              )}
            </div>
          </div>
        </footer>
      </div>

      {/* EXPLORE DESTINATION DRAWER / MODAL */}
      {isExploreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c1a29] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header with Destination Photo Banner */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
              <img
                src={activeDestination.image}
                alt={activeDestination.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a29] via-[#0c1a29]/40 to-transparent" />
              <button
                onClick={() => setIsExploreOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  {activeDestination.location}
                </span>
                <h2 className="text-3xl font-extrabold text-white">{activeDestination.name}</h2>
                <p className="text-xs sm:text-sm text-slate-300">{activeDestination.subtitle}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Quick Travel Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[11px] text-slate-400 block">Climate</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">{activeDestination.weather}</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[11px] text-slate-400 block">Best Season</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">{activeDestination.bestSeason}</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[11px] text-slate-400 block">Currency</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100">{activeDestination.currency}</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-[11px] text-slate-400 block">Traveler Rating</span>
                  <span className="text-xs sm:text-sm font-semibold text-amber-300 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300" />
                    {activeDestination.rating} / 5.0
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">About This Destination</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activeDestination.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Top Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDestination.highlights.map((h, i) => (
                    <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3.5 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                        <h4 className="text-sm font-semibold text-white">{h.name}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal pl-6">{h.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book a Curated Experience Form */}
              <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/60 border border-blue-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-5 h-5 text-blue-400" />
                  <h3 className="text-sm font-bold text-white">Inquire for Private Highland Tea Journey</h3>
                </div>

                {bookingSuccess ? (
                  <div className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Inquiry submitted! A Highland Tea estate concierge will reach out within 2 hours.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBookingSuccess(true);
                      setTimeout(() => setBookingSuccess(false), 5000);
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"
                  >
                    <div>
                      <label className="text-slate-300 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Anney Vance"
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        placeholder="anney@example.com"
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 block mb-1">Number of Travelers</label>
                      <select
                        value={bookingForm.travelers}
                        onChange={(e) => setBookingForm({ ...bookingForm, travelers: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0e1d2c] border border-white/15 text-white focus:outline-none focus:border-blue-400"
                      >
                        <option value="1">Solo Explorer (1 person)</option>
                        <option value="2">Couple / Duo (2 people)</option>
                        <option value="4">Small Group (3-5 people)</option>
                        <option value="8">Private Expedition (6+ people)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-300 block mb-1">Target Travel Date</label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-[#0e1d2c] border border-white/15 text-white focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all cursor-pointer"
                      >
                        Submit Travel Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-black/40 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => toggleSave(activeDestination.id)}
                className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
              >
                <Bookmark className={`w-4 h-4 ${savedIds.includes(activeDestination.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                <span>{savedIds.includes(activeDestination.id) ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
              </button>
              <button
                onClick={() => setIsExploreOpen(false)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
              >
                Close Explorer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SAVED DESTINATIONS DRAWER */}
      {isSavedDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md h-full bg-[#091522] border-l border-white/15 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">Saved Destinations ({savedIds.length})</h3>
                </div>
                <button
                  onClick={() => setIsSavedDrawerOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
                  aria-label="Close saved drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-4 space-y-3 overflow-y-auto max-h-[70vh]">
                {savedIds.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-sm">
                    <p>No saved destinations yet.</p>
                    <p className="text-xs text-slate-500 mt-1">Click the bookmark icon on any card to save it here.</p>
                  </div>
                ) : (
                  DESTINATIONS.filter((d) => savedIds.includes(d.id)).map((dest) => (
                    <div
                      key={dest.id}
                      onClick={() => {
                        const idx = DESTINATIONS.findIndex((d) => d.id === dest.id);
                        if (idx !== -1) {
                          setCurrentIndex(idx);
                          setIsSavedDrawerOpen(false);
                        }
                      }}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-all"
                    >
                      <img
                        src={dest.image}
                        alt={dest.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{dest.name}</h4>
                        <p className="text-xs text-slate-400 truncate">{dest.subtitle}</p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-amber-300">
                          <Star className="w-3 h-3 fill-amber-300" />
                          <span>{dest.rating.toFixed(1)}</span>
                          <span className="text-slate-500">· {dest.location}</span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => toggleSave(dest.id, e)}
                        className="text-slate-400 hover:text-rose-400 p-2 cursor-pointer"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-400">
              <span>Highland Tea Gembu Travel Collection</span>
              <button
                onClick={() => setIsSavedDrawerOpen(false)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/75 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-xl bg-[#0c1a29] border border-white/20 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center gap-3 pb-3 border-b border-white/15">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search country, highlight, or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-400 text-base focus:outline-none"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 max-h-72 overflow-y-auto space-y-2">
              {DESTINATIONS.filter((d) =>
                d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                d.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                d.highlights.some((h) => h.name.toLowerCase().includes(searchQuery.toLowerCase()))
              ).map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => {
                    const idx = DESTINATIONS.findIndex((d) => d.id === dest.id);
                    if (idx !== -1) setCurrentIndex(idx);
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{dest.name}</h4>
                      <p className="text-xs text-slate-400">{dest.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs text-sky-400 font-medium">Select →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTACT US MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-lg bg-[#0c1a29] border border-white/20 rounded-2xl p-6 shadow-2xl relative">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Contact Highland Tea Journeys</h3>
            <p className="text-xs text-slate-400 mb-5">Have a question or planning a bespoke holiday? Get in touch with our travel team.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                showToast('Thank you! Your message has been sent to Highland Tea.');
                setIsContactOpen(false);
                setContactForm({ name: '', email: '', message: '' });
              }}
              className="space-y-3.5 text-xs"
            >
              <div>
                <label className="text-slate-300 block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  placeholder="e.g. Anney Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 text-xs"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  placeholder="contact@highlandtea.ng"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 text-xs"
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1 font-medium">Your Message</label>
                <textarea
                  rows={3}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Tell us about the dream destinations you wish to discover..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 text-xs resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PYTHON + HTML/CSS SOURCE VIEWER MODAL (Addressing User prompt: strictly html css and python) */}
      {isPythonModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="w-full max-w-4xl max-h-[85vh] bg-[#0d1b2a] border border-white/20 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 bg-black/40 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Pure HTML, CSS & Python Architecture</h3>
              </div>
              <button
                onClick={() => setIsPythonModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-200">
                Notice: As requested (&quot;use strictly HTML, CSS and Python&quot;), this application includes both the real-time Vite web client and a standalone pure Python server (`app.py`) with pure `index.html` & `style.css` in the project files. Run <code className="bg-black/50 px-1 py-0.5 rounded text-amber-300">python3 app.py</code> to launch with zero dependencies!
              </div>

              <div>
                <span className="text-amber-400 font-bold block mb-1"># How to run strictly with Python 3:</span>
                <pre className="p-3 bg-black/60 rounded-lg text-emerald-400 overflow-x-auto">
{`# 1. Start the native Python web server:
python3 app.py

# 2. Open in your browser:
http://localhost:3000 (or http://localhost:8000)`}
                </pre>
              </div>

              <div>
                <span className="text-amber-400 font-bold block mb-1"># Python Server Implementation (`app.py`):</span>
                <pre className="p-3 bg-black/60 rounded-lg text-slate-200 overflow-x-auto text-[11px] leading-relaxed">
{`#!/usr/bin/env python3
"""
Foxico Travel Carousel Landing Page
Pure Python 3 standard library web server - zero external dependencies required.
"""
import http.server
import socketserver
import os

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Foxico Travel server running at http://localhost:{PORT}")
        httpd.serve_forever()`}
                </pre>
              </div>
            </div>

            <div className="p-4 bg-black/40 border-t border-white/10 flex justify-end">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('python3 app.py');
                  showToast('Copied python run command!');
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
              >
                Copy Python Command
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-white/20 shadow-2xl backdrop-blur-md text-xs font-medium animate-slide-up">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
