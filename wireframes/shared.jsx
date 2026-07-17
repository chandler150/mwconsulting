// Shared wireframe primitives — sketchy/lo-fi style
// b&w with thin black strokes, dashed image placeholders, handwritten annotations.

const wfColors = {
  ink: '#1a1a1a',
  paper: '#fbfaf6',
  muted: '#9a9590',
  line: '#2a2a2a',
  accent: '#c96442',   // warm terracotta — used sparingly
  noteYellow: '#fff3a8',
};

// ---------- Placeholder image ----------
const ImgBox = ({ label = 'image', w = '100%', h = 200, style = {}, dark = false }) => (
  <div style={{
    width: w, height: h,
    border: `1.5px dashed ${wfColors.line}`,
    background: dark
      ? 'repeating-linear-gradient(135deg,#222 0 8px,#1a1a1a 8px 16px)'
      : 'repeating-linear-gradient(135deg,#f0ede5 0 8px,#e9e5db 8px 16px)',
    color: dark ? '#888' : '#6e6862',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
    fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
    position: 'relative',
    ...style,
  }}>
    <span style={{ background: dark ? '#1a1a1a' : '#fbfaf6', padding: '2px 8px' }}>
      [ {label} ]
    </span>
  </div>
);

// ---------- Sketchy line of body text (text placeholder bars) ----------
const TextLines = ({ lines = 3, lastWidth = '70%', gap = 8, color = '#bbb6ae', height = 7 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap }}>
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} style={{
        height,
        background: color,
        width: i === lines - 1 ? lastWidth : '100%',
        borderRadius: 1,
      }} />
    ))}
  </div>
);

// ---------- Handwritten annotation note ----------
const Note = ({ children, style = {}, rotate = -2, color = wfColors.accent }) => (
  <div style={{
    fontFamily: '"Caveat", "Bradley Hand", cursive',
    fontSize: 18, color,
    transform: `rotate(${rotate}deg)`,
    lineHeight: 1.1,
    display: 'inline-block',
    ...style,
  }}>
    {children}
  </div>
);

// ---------- Arrow (drawn with SVG, sketchy) ----------
const Arrow = ({ d = 'M0,0 C20,20 40,40 80,30', style = {}, w = 100, h = 60, flip = false }) => (
  <svg width={w} height={h} style={{ overflow: 'visible', ...style }}>
    <path d={d} fill="none" stroke={wfColors.accent} strokeWidth="1.6" strokeLinecap="round"
      strokeDasharray="0" style={{ transform: flip ? 'scaleX(-1)' : 'none', transformOrigin: 'center' }} />
    <path d="M-6,-4 L0,0 L-4,6" fill="none" stroke={wfColors.accent} strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round"
      transform={`translate(80,30) rotate(20)`} />
  </svg>
);

// ---------- Browser chrome (simple) ----------
const Browser = ({ children, height = 'auto', label = 'michellewolffconsulting.com' }) => (
  <div style={{
    background: wfColors.paper,
    border: `1.5px solid ${wfColors.line}`,
    borderRadius: 6,
    height,
    overflow: 'hidden',
    boxShadow: '4px 4px 0 rgba(0,0,0,0.08)',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      height: 28,
      borderBottom: `1px solid ${wfColors.line}`,
      display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6,
      background: '#f3f0e8',
    }}>
      <div style={{ width: 9, height: 9, borderRadius: '50%', border: `1px solid ${wfColors.line}` }} />
      <div style={{ width: 9, height: 9, borderRadius: '50%', border: `1px solid ${wfColors.line}` }} />
      <div style={{ width: 9, height: 9, borderRadius: '50%', border: `1px solid ${wfColors.line}` }} />
      <div style={{
        flex: 1, marginLeft: 14, height: 16, borderRadius: 3,
        border: `1px solid ${wfColors.line}`, background: wfColors.paper,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'ui-monospace, monospace', fontSize: 9, color: '#666',
      }}>
        {label}
      </div>
    </div>
    <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
      {children}
    </div>
  </div>
);

// ---------- Logo placeholder (the MW circle) ----------
const LogoMark = ({ size = 36, inverted = false }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    background: inverted ? wfColors.paper : wfColors.ink,
    color: inverted ? wfColors.ink : wfColors.paper,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: size * 0.36,
    letterSpacing: '-0.04em',
    border: inverted ? `1.2px solid ${wfColors.line}` : 'none',
  }}>
    MW
  </div>
);

// ---------- Button ----------
const WfBtn = ({ children, filled = true, style = {} }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '10px 18px',
    border: `1.4px solid ${wfColors.line}`,
    background: filled ? wfColors.ink : 'transparent',
    color: filled ? wfColors.paper : wfColors.ink,
    fontFamily: 'Georgia, serif', fontSize: 13, letterSpacing: '0.04em',
    cursor: 'pointer',
    ...style,
  }}>
    {children} <span style={{ fontSize: 14 }}>→</span>
  </span>
);

// ---------- Section label (the "01 — APPROACH" kicker) ----------
const Kicker = ({ children, style = {} }) => (
  <div style={{
    fontFamily: 'ui-monospace, monospace',
    fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: wfColors.muted,
    ...style,
  }}>
    {children}
  </div>
);

// Expose globally
Object.assign(window, { wfColors, ImgBox, TextLines, Note, Arrow, Browser, LogoMark, WfBtn, Kicker });
