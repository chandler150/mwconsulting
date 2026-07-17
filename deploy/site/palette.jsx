// Shared palette system — supports two independent dimensions:
//   1) Accent palette (accent, accent-deep, accent-soft + matching ink)
//   2) Background tone (cream, cream-deep, cream-2)
// Both persist to localStorage so they carry between Home and Contact.

const ACCENTS = {
  gold: {
    label: 'Champagne Gold',
    swatch: ['#b8965a', '#1c1a17', '#d9b88a'],
    colors: { accent: '#b8965a', accentDeep: '#9a7c46', accentSoft: '#d9b88a', ink: '#1c1a17', ink2: '#3a3530' },
  },
  terracotta: {
    label: 'Warm Terracotta',
    swatch: ['#b8633e', '#1f1714', '#d9987a'],
    colors: { accent: '#b8633e', accentDeep: '#964823', accentSoft: '#d9987a', ink: '#1f1714', ink2: '#3a2e28' },
  },
  navy: {
    label: 'Deep Navy',
    swatch: ['#1f4a82', '#0e1d36', '#7e9cc4'],
    colors: { accent: '#1f4a82', accentDeep: '#0e3164', accentSoft: '#7e9cc4', ink: '#0e1d36', ink2: '#1f3354' },
  },
  red: {
    label: 'Crimson',
    swatch: ['#a13838', '#1f1212', '#d8847e'],
    colors: { accent: '#a13838', accentDeep: '#7f2424', accentSoft: '#d8847e', ink: '#1f1212', ink2: '#3a2424' },
  },
};

const BACKGROUNDS = {
  cream: {
    label: 'Warm Cream',
    swatch: ['#faf6ed', '#f1ebda', '#ede5d0'],
    colors: { cream: '#faf6ed', creamDeep: '#f1ebda', cream2: '#ede5d0', muted: '#7a7268' },
  },
  ivory: {
    label: 'Bright Ivory',
    swatch: ['#fbf9f4', '#f3eee5', '#e8e0d0'],
    colors: { cream: '#fbf9f4', creamDeep: '#f3eee5', cream2: '#e8e0d0', muted: '#787068' },
  },
  oat: {
    label: 'Soft Oat',
    swatch: ['#f3efe6', '#e8e2d2', '#d9d2bf'],
    colors: { cream: '#f3efe6', creamDeep: '#e8e2d2', cream2: '#d9d2bf', muted: '#76705f' },
  },
  blush: {
    label: 'Blush',
    swatch: ['#faf2ec', '#f0e0d8', '#e4cec4'],
    colors: { cream: '#faf2ec', creamDeep: '#f0e0d8', cream2: '#e4cec4', muted: '#7e6863' },
  },
  sage: {
    label: 'Sage Mist',
    swatch: ['#f1f2ed', '#e2e6dd', '#cdd3c5'],
    colors: { cream: '#f1f2ed', creamDeep: '#e2e6dd', cream2: '#cdd3c5', muted: '#6e7466' },
  },
  dusk: {
    label: 'Warm Dusk',
    swatch: ['#ede5d6', '#dfd4be', '#cbbf9f'],
    colors: { cream: '#ede5d6', creamDeep: '#dfd4be', cream2: '#cbbf9f', muted: '#7a6e54' },
  },
};

const ACCENT_KEY = 'mwc-palette';
const BG_KEY = 'mwc-bg';

function getStoredAccent() {
  try { const v = localStorage.getItem(ACCENT_KEY); return ACCENTS[v] ? v : 'gold'; } catch { return 'gold'; }
}
function getStoredBg() {
  try { const v = localStorage.getItem(BG_KEY); return BACKGROUNDS[v] ? v : 'cream'; } catch { return 'cream'; }
}

// Apply both into global C (mutated in place) + CSS vars + body bg.
function applyPalette(accentName = getStoredAccent(), bgName = getStoredBg()) {
  const a = ACCENTS[accentName] || ACCENTS.gold;
  const b = BACKGROUNDS[bgName] || BACKGROUNDS.cream;
  const merged = { ...a.colors, ...b.colors, paper: '#ffffff' };
  if (typeof C !== 'undefined') Object.assign(C, merged);
  try {
    localStorage.setItem(ACCENT_KEY, accentName);
    localStorage.setItem(BG_KEY, bgName);
  } catch {}
  if (document?.documentElement) {
    Object.entries(merged).forEach(([k, v]) => {
      document.documentElement.style.setProperty(`--c-${k}`, v);
    });
    document.body.style.background = merged.cream;
  }
}

const PALETTE_EVENT = 'mwc-palette-change';
function broadcastPalette(accentName, bgName) {
  applyPalette(accentName, bgName);
  window.dispatchEvent(new CustomEvent(PALETTE_EVENT, { detail: { accentName, bgName } }));
}

function usePalette() {
  const [accent, setAccent] = React.useState(() => getStoredAccent());
  const [bg, setBg] = React.useState(() => getStoredBg());
  React.useEffect(() => {
    applyPalette(accent, bg);
    const h = (e) => {
      if (e.detail.accentName) setAccent(e.detail.accentName);
      if (e.detail.bgName) setBg(e.detail.bgName);
    };
    window.addEventListener(PALETTE_EVENT, h);
    const sh = (e) => {
      if (e.key === ACCENT_KEY && e.newValue) setAccent(e.newValue);
      if (e.key === BG_KEY && e.newValue) setBg(e.newValue);
    };
    window.addEventListener('storage', sh);
    return () => {
      window.removeEventListener(PALETTE_EVENT, h);
      window.removeEventListener('storage', sh);
    };
  }, [accent, bg]);
  return {
    accent, bg,
    setAccent: (n) => broadcastPalette(n, bg),
    setBg: (n) => broadcastPalette(accent, n),
  };
}

// Apply ASAP (before React mounts) so initial paint is correct.
if (typeof window !== 'undefined') applyPalette(getStoredAccent(), getStoredBg());

Object.assign(window, {
  ACCENTS, BACKGROUNDS, applyPalette, getStoredAccent, getStoredBg,
  usePalette, broadcastPalette, PALETTE_EVENT,
});
