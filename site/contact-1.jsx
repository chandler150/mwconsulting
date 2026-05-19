// Contact / Booking page — header + hero
// Uses same C palette and f fonts from part-1.jsx (loaded first).

const ContactNav = () => (
  <nav style={{
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(250,246,237,0.92)',
    backdropFilter: 'blur(8px)',
    borderBottom: `1px solid rgba(0,0,0,0.06)`,
  }}>
    <div className="mwc-section-pad" style={{
      maxWidth: 1240, margin: '0 auto',
      padding: '18px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="Michelle Wolff Consulting.html" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', flexShrink: 0 }}>
        <img src="assets/logo.png" alt="MW Consulting" style={{ width: 44, height: 44, borderRadius: '50%' }} />
        <div style={{ whiteSpace: 'nowrap' }}>
          <div style={{ fontFamily: f.display, fontSize: 20, color: C.ink, lineHeight: 1, letterSpacing: '0.01em' }}>
            Michelle Wolff
          </div>
          <div style={{ fontFamily: f.body, fontSize: 9, letterSpacing: '0.32em', color: C.accent, marginTop: 4, fontWeight: 600 }}>
            CONSULTING
          </div>
        </div>
      </a>
      <a href="Michelle Wolff Consulting.html" style={{
        fontFamily: f.body, fontSize: 13, color: C.ink2,
        textDecoration: 'none', letterSpacing: '0.04em',
        display: 'inline-flex', alignItems: 'center', gap: 8,
      }}>
        <span>←</span> Back to home
      </a>
    </div>
  </nav>
);

const ContactHero = () => (
  <section style={{ background: C.cream, padding: '90px 0 60px', position: 'relative', overflow: 'hidden' }}>
    <DiamondFade size={520} opacity={0.32} style={{
      position: 'absolute', top: -60, right: -80, pointerEvents: 'none',
    }} />
    <DiamondFade size={360} opacity={0.18} style={{
      position: 'absolute', bottom: -100, left: -60, pointerEvents: 'none',
    }} />
    <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px', textAlign: 'center', position: 'relative' }}>
      <Kicker>Get in touch</Kicker>
      <h1 className="mwc-display-xl" style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 88,
        lineHeight: 0.96, letterSpacing: '-0.018em', margin: '24px 0 0', color: C.ink,
      }}>
        Let's start with a<br/>
        <em style={{ color: C.accent, fontStyle: 'italic' }}>conversation.</em>
      </h1>
      <GoldRule style={{ margin: '36px auto 0' }} />
      <p style={{ fontFamily: f.body, fontSize: 17, lineHeight: 1.65, color: C.ink2, maxWidth: 600, margin: '32px auto 0' }}>
        Book a free 30-minute discovery call. No pitch — just a real conversation
        about your goals, your current outreach, and whether we'd be a good fit.
      </p>
    </div>
  </section>
);

Object.assign(window, { ContactNav, ContactHero });
