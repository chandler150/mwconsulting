// Polished homepage components — Rachel Tyler-inspired editorial consulting site
// Cream + ink + champagne-gold. Elegant serif display, clean sans body.

const C = {
  cream: '#faf6ed',
  creamDeep: '#f1ebda',
  cream2: '#ede5d0',
  ink: '#1c1a17',
  ink2: '#3a3530',
  muted: '#7a7268',
  accent: '#b8965a',
  accentDeep: '#9a7c46',
  accentSoft: '#d9b88a',
  paper: '#ffffff'
};

const f = {
  display: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  body: '"Inter", system-ui, -apple-system, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace'
};

// ──────────────────────────────────────────────
//  Tiny primitives
// ──────────────────────────────────────────────

const Kicker = ({ children, color = C.accent, style = {} }) =>
<div style={{
  fontFamily: f.body,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.32em',
  textTransform: 'uppercase',
  color,
  ...style
}}>
    {children}
  </div>;


const GoldRule = ({ width = 60, style = {} }) =>
<div style={{
  width,
  height: 1.5,
  background: C.accent,
  ...style
}} />;


const Btn = ({ children, href = '#', variant = 'solid', size = 'md', style = {} }) => {
  const sizes = {
    sm: { padding: '10px 22px', fontSize: 11 },
    md: { padding: '14px 30px', fontSize: 12 },
    lg: { padding: '18px 36px', fontSize: 13 }
  };
  const v = {
    solid: { background: C.ink, color: C.cream, border: `1.5px solid ${C.ink}` },
    outline: { background: 'transparent', color: C.ink, border: `1.5px solid ${C.ink}` },
    gold: { background: C.accent, color: C.cream, border: `1.5px solid ${C.accent}` },
    ghost: { background: 'transparent', color: C.cream, border: `1.5px solid ${C.cream}` }
  }[variant];
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: f.body, fontWeight: 500,
      letterSpacing: '0.22em', textTransform: 'uppercase',
      textDecoration: 'none', whiteSpace: 'nowrap',
      transition: 'transform .2s, opacity .2s',
      ...sizes[size], ...v, ...style
    }}>
      {children}
    </a>);

};

// Diamond-fade decorative motif (geometric, simple)
const DiamondFade = ({ size = 420, color = C.accent, opacity = 0.5, style = {} }) => {
  const layers = 7;
  return (
    <svg width={size} height={size * 0.85} viewBox="-50 -50 100 85" style={{ overflow: 'visible', ...style }}>
      {Array.from({ length: layers }).map((_, i) => {
        const s = 8 + i * 5.5;
        const o = (1 - i / layers) * opacity;
        return (
          <polygon key={i}
          points={`0,${-s} ${s * 0.7},0 0,${s} ${-s * 0.7},0`}
          fill="none" stroke={color} strokeWidth="0.4" opacity={o} />);

      })}
    </svg>);

};

// Small geometric service icon — drawn fresh per service
const Icon = ({ kind, size = 56 }) => {
  const stroke = C.ink;
  const sw = 1.4;
  const props = { width: size, height: size, viewBox: '0 0 56 56', fill: 'none', stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'target':
      return (
        <svg {...props}>
          <circle cx="28" cy="28" r="20" />
          <circle cx="28" cy="28" r="12" />
          <circle cx="28" cy="28" r="4" fill={C.accent} stroke={C.accent} />
          <path d="M28 4v8 M28 44v8 M4 28h8 M44 28h8" />
        </svg>);

    case 'handshake':
      return (
        <svg {...props}>
          <path d="M6 22l8-6 6 4 8-4 8 4 6-4 8 6v14l-8 6-6-4-8 4-8-4-6 4-8-6z" />
          <path d="M28 20v16" stroke={C.accent} />
          <circle cx="28" cy="28" r="3" fill={C.accent} stroke={C.accent} />
        </svg>);

    case 'megaphone':
      return (
        <svg {...props}>
          <path d="M10 22v12l24 8V14z" />
          <path d="M34 22h8M34 28h10M34 34h8" stroke={C.accent} />
          <circle cx="14" cy="44" r="3" />
        </svg>);

    case 'inbox':
      return (
        <svg {...props}>
          <rect x="6" y="14" width="44" height="32" rx="2" />
          <path d="M6 32h12l4 6h12l4-6h12" />
          <path d="M28 6v14M22 14l6 6 6-6" stroke={C.accent} />
        </svg>);

    case 'calendar':
      return (
        <svg {...props}>
          <rect x="6" y="10" width="44" height="40" rx="3" />
          <path d="M6 22h44" />
          <path d="M18 4v12M38 4v12" />
          <circle cx="28" cy="36" r="4" fill={C.accent} stroke={C.accent} />
        </svg>);

    case 'map':
      return (
        <svg {...props}>
          <path d="M6 14l14-4 16 4 14-4v32l-14 4-16-4-14 4z" />
          <path d="M20 10v32M36 14v32" />
          <circle cx="28" cy="26" r="3" fill={C.accent} stroke={C.accent} />
        </svg>);

    case 'spark':
      return (
        <svg {...props}>
          <path d="M28 6l4 16 16 4-16 4-4 16-4-16-16-4 16-4z" />
          <path d="M44 8l1.5 4 4 1.5-4 1.5L44 19l-1.5-4-4-1.5 4-1.5z" stroke={C.accent} />
        </svg>);

    default:
      return null;
  }
};

// Star (for testimonial)
const Star = ({ size = 16, filled = true }) =>
<svg width={size} height={size} viewBox="0 0 16 16">
    <polygon points="8,1 10,6 15,6 11,9 13,15 8,12 3,15 5,9 1,6 6,6"
  fill={filled ? C.accent : 'none'} stroke={C.accent} strokeWidth="0.6" strokeLinejoin="round" />
  </svg>;


// Section wrapper
const Section = ({ id, children, bg = C.cream, color = C.ink, style = {}, py = 120 }) =>
<section id={id} className="mwc-section" style={{ background: bg, color, padding: `${py}px 0`, ...style }}>
    <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px' }}>
      {children}
    </div>
  </section>;


// ──────────────────────────────────────────────
//  NAV
// ──────────────────────────────────────────────

const Nav = () => {
  // On home page anchors stay relative; on subpages they need to point back home first.
  const isHome = typeof window !== 'undefined' &&
    /\/$|index\.html$/.test(window.location.pathname);
  const homePath = 'index.html';
  const anchorHref = (h) => isHome ? `#${h}` : `${homePath}#${h}`;

  // After React mounts, scroll to the URL hash if present. The browser's native
  // scroll-to-hash runs before React has rendered the target section, so we redo it.
  React.useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: 'start' });
      } else if (attempts++ < 20) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  }, []);

  return (
<nav style={{
  position: 'sticky', top: 0, zIndex: 50,
  background: 'rgba(250,246,237,0.92)',
  backdropFilter: 'blur(8px)',
  borderBottom: `1px solid rgba(0,0,0,0.06)`
}}>
    <div className="mwc-nav" style={{
    maxWidth: 1240, margin: '0 auto',
    padding: '18px 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
  }}>
      <a href={isHome ? '#top' : homePath} style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', flexShrink: 0 }}>
        <img src="assets/logo2.png" alt="MW Consulting" style={{ width: 44, height: 44, flexShrink: 0 }} />
        <div style={{ whiteSpace: 'nowrap' }}>
          <div style={{ fontFamily: f.display, fontSize: 20, color: C.ink, lineHeight: 1, letterSpacing: '0.01em' }}>
            Michelle Wolff
          </div>
          <div style={{ fontFamily: f.body, fontSize: 9, letterSpacing: '0.32em', color: C.accent, marginTop: 4, fontWeight: 600 }}>
            CONSULTING
          </div>
        </div>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {[
            { label: 'Approach', href: anchorHref('approach') },
            { label: 'Services', href: anchorHref('services') },
            { label: 'About',    href: anchorHref('about') },
            { label: 'Results',  href: anchorHref('results') },
          ].map((l) =>
        <a key={l.label} href={l.href} style={{
          fontFamily: f.body, fontSize: 13, color: C.ink2,
          textDecoration: 'none', letterSpacing: '0.04em'
        }}>{l.label}</a>
        )}
        </div>
        <Btn href="contact.html" size="sm">Book a Call</Btn>
      </div>
    </div>
  </nav>);
};


// ──────────────────────────────────────────────
//  HERO
// ──────────────────────────────────────────────

const Hero = () =>
<section id="top" style={{ background: C.cream, padding: '90px 0 110px', position: 'relative', overflow: 'hidden' }}>
    {/* Decorative diamond, faded, top-right */}
    <DiamondFade size={520} opacity={0.35} style={{
    position: 'absolute', top: -40, right: -60, pointerEvents: 'none'
  }} />
    <div className="mwc-section-pad mwc-hero-grid" style={{
    maxWidth: 1240, margin: '0 auto', padding: '0 48px',
    display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 80, alignItems: 'center',
    position: 'relative'
  }}>
      <div>
        <Kicker>Strategic Sales Consulting</Kicker>
        <GoldRule style={{ marginTop: 18, marginBottom: 30 }} />
        <h1 className="mwc-display-hero" style={{
        fontFamily: f.display, fontWeight: 400,
        fontSize: 76, lineHeight: 0.98, letterSpacing: '-0.012em',
        color: C.ink, margin: 0
      }}>
          Turn relationships<br />
          into <em style={{ color: C.accent, fontStyle: 'italic' }}>measurable</em><br />
          revenue.
        </h1>
        <p style={{
        fontFamily: f.body, fontSize: 17, lineHeight: 1.65,
        color: C.ink2, maxWidth: 480, marginTop: 28
      }}>I help mission-driven small businesses and nonprofits build the partnerships, sales systems, and momentum to grow with intention — and to do it with integrity.



      </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 38 }}>
          <Btn href="contact.html" size="lg">Book a Discovery Call</Btn>
          <span style={{ fontFamily: f.body, fontSize: 12, color: C.muted, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Free · 30 min
          </span>
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{
        position: 'absolute', inset: '-8% -8% -8% -8%',
        background: `radial-gradient(ellipse at center, ${C.accentSoft}55, transparent 65%)`,
        pointerEvents: 'none'
      }} />
        <div style={{ position: 'relative', width: '100%', maxWidth: 440, aspectRatio: '0.92', overflow: 'hidden' }}>
          <img src="assets/headshot3.png" alt="Michelle Wolff" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%',
          borderRadius: '50% / 48%',
          filter: 'contrast(1.02)'
        }} />
          {/* Small gold accent line under photo */}
          <GoldRule width={120} style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)' }} />
        </div>
      </div>
    </div>
  </section>;


// ──────────────────────────────────────────────
//  Gold separator band
// ──────────────────────────────────────────────

const GoldBand = () =>
<div style={{
  background: `linear-gradient(90deg, ${C.accentDeep}, ${C.accent} 35%, ${C.accentSoft} 55%, ${C.accent} 75%, ${C.accentDeep})`,
  height: 6
}} />;


// ──────────────────────────────────────────────
//  Trust strip — past companies
// ──────────────────────────────────────────────

const TrustStrip = () =>
<Section bg={C.creamDeep} py={36}>
    <div className="mwc-trust-strip" style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: 48, flexWrap: 'wrap'
  }}>
      {['Oracle', 'Guitar Center', 'Gap Inc.', 'NVIDIA', 'AMD', 'Nordstrom'].map((c) =>
    <div key={c} style={{
      fontFamily: f.display, fontSize: 22, color: C.ink, letterSpacing: '0.01em',
      whiteSpace: 'nowrap'
    }}>{c}</div>
    )}
    </div>
  </Section>;


// ──────────────────────────────────────────────
//  PAIN — "Feeling stuck?"
// ──────────────────────────────────────────────

const Pain = () =>
<Section id="approach">
    <div className="mwc-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}>
      <div className="mwc-pain-photo" style={{ position: 'relative' }}>
        <div style={{ width: '100%', aspectRatio: '0.88', overflow: 'hidden', background: C.cream2 }}>
          <img src="assets/headshot2.jpg" alt="Michelle Wolff" style={{
          width: '100%', height: '100%', objectFit: 'cover'
        }} />
        </div>
        <div className="mwc-pain-photo-badge" style={{
        position: 'absolute', bottom: -28, right: -28,
        background: C.accent, color: C.cream, padding: '22px 28px',
        maxWidth: 250
      }}>
          <div style={{ fontFamily: f.display, fontSize: 30, lineHeight: 1, fontStyle: 'italic' }}>9 years</div>
          <div style={{ fontFamily: f.body, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 6, opacity: 0.92 }}>
            Closing & growing relationships
          </div>
        </div>
      </div>
      <div>
        <Kicker>For founders & nonprofits</Kicker>
        <GoldRule style={{ marginTop: 18, marginBottom: 26 }} />
        <h2 className="mwc-display-md" style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 56,
        lineHeight: 1.02, letterSpacing: '-0.012em', margin: 0, color: C.ink
      }}>
          Feeling stuck<br />
          with <em style={{ color: C.accent, fontStyle: 'italic' }}>inconsistent revenue?</em>
        </h2>
        <p style={{ fontFamily: f.body, fontSize: 16, lineHeight: 1.65, color: C.ink2, marginTop: 26, maxWidth: 520 }}>
          When your sales motion lacks clarity, it can feel like every
          quarter starts from zero. You might be...
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
        'Closing deals based on luck instead of a repeatable system',
        'Struggling to land sponsorships or strategic partnerships',
        'Watching outreach that feels generic — and converts that way',
        'Sitting on a network you don\'t know how to activate'].
        map((item) =>
        <li key={item} style={{
          display: 'flex', alignItems: 'flex-start', gap: 14,
          fontFamily: f.body, fontSize: 15, color: C.ink, lineHeight: 1.5
        }}>
              <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 5 }}>
                <polygon points="7,0 9,5 14,7 9,9 7,14 5,9 0,7 5,5" fill={C.accent} />
              </svg>
              {item}
            </li>
        )}
        </ul>
        <p style={{ fontFamily: f.display, fontStyle: 'italic', fontSize: 22, color: C.ink, marginTop: 32, lineHeight: 1.4 }}>
          You don't have to settle for stuck — that's exactly why I'm here.
        </p>
      </div>
    </div>
  </Section>;


Object.assign(window, { C, f, Kicker, GoldRule, Btn, DiamondFade, Icon, Star, Section, Nav, Hero, GoldBand, TrustStrip, Pain });