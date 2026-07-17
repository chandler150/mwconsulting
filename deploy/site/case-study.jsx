// Case-study primitives — used by work.html (index) and individual case pages.
// Inherits the C/f tokens and shared components (Kicker, GoldRule, Btn, Section,
// GoldBand, DiamondFade) from site/part-1.jsx.

// Visual marker for content awaiting Michelle's review — dashed border,
// editorial note styling, doesn't look like a TODO comment.
const Pending = ({ label = 'Pending Foundation review', children }) => (
  <div style={{
    border: `1.2px dashed ${C.accent}`,
    padding: '18px 22px',
    background: `linear-gradient(180deg, transparent, rgba(184,150,90,0.04))`,
    position: 'relative',
    fontFamily: f.body, fontSize: 11, fontWeight: 500,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: C.accent,
  }}>
    <span style={{ position: 'absolute', top: -10, left: 16, background: C.cream, padding: '0 8px', fontSize: 9 }}>
      {label}
    </span>
    <div style={{
      fontFamily: f.display, fontSize: 22, lineHeight: 1.4,
      color: C.ink2, letterSpacing: 0, textTransform: 'none', fontStyle: 'italic',
      marginTop: 6, fontWeight: 400,
    }}>
      {children}
    </div>
  </div>
);

// Meta strip: 4-col data table sitting under hero title
const MetaStrip = ({ items }) => (
  <div className="mwc-stats" style={{
    display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`,
    borderTop: `1px solid ${C.cream2}`, borderBottom: `1px solid ${C.cream2}`,
    marginTop: 56,
  }}>
    {items.map(([k, v], i) => (
      <div key={k} style={{
        padding: '22px 24px',
        borderRight: i < items.length - 1 ? `1px solid ${C.cream2}` : 'none',
      }}>
        <div style={{
          fontFamily: f.body, fontSize: 10, fontWeight: 600,
          letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent,
        }}>{k}</div>
        <div style={{
          fontFamily: f.display, fontSize: 18, marginTop: 8, color: C.ink, lineHeight: 1.3,
        }}>{v}</div>
      </div>
    ))}
  </div>
);

// Two-column body block with kicker + heading on left, content on right
const TwoColBlock = ({ kicker, heading, children, py = 110, bg = C.cream }) => (
  <Section bg={bg} py={py}>
    <div className="mwc-stack" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 64, alignItems: 'start' }}>
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 className="mwc-display-md" style={{
          fontFamily: f.display, fontWeight: 400, fontSize: 48,
          lineHeight: 1.05, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink,
        }}>
          {heading}
        </h2>
        <GoldRule style={{ marginTop: 24 }} />
      </div>
      <div>{children}</div>
    </div>
  </Section>
);

// Highlights — checkmark list of wins
const HighlightsList = ({ items }) => (
  <ul style={{
    listStyle: 'none', padding: 0, margin: 0,
    display: 'flex', flexDirection: 'column', gap: 24,
  }}>
    {items.map((h, i) => (
      <li key={i} style={{
        display: 'grid', gridTemplateColumns: '48px 1fr',
        gap: 18, alignItems: 'start',
        borderBottom: i < items.length - 1 ? `1px solid ${C.cream2}` : 'none',
        paddingBottom: i < items.length - 1 ? 24 : 0,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          border: `1.4px solid ${C.accent}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: f.body, fontSize: 12, fontWeight: 600, color: C.accent,
        }}>
          {String(i + 1).padStart(2, '0')}
        </div>
        <div>
          <div style={{
            fontFamily: f.display, fontSize: 22, lineHeight: 1.25,
            color: C.ink, letterSpacing: '-0.005em',
          }}>
            {h.title}
          </div>
          <div style={{
            fontFamily: f.body, fontSize: 14, lineHeight: 1.6,
            color: C.ink2, marginTop: 6,
          }}>
            {h.body}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

// Big stat moment — full-bleed accent block
const BigStatMoment = ({ stat, label, sub }) => (
  <section style={{ background: C.accent, color: C.cream, padding: 'clamp(64px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}>
    <DiamondFade size={620} color={C.cream} opacity={0.16} style={{
      position: 'absolute', top: '50%', right: '-6%', transform: 'translateY(-50%)', pointerEvents: 'none',
    }} />
    <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px', textAlign: 'center', position: 'relative' }}>
      <div style={{
        fontFamily: f.body, fontSize: 12, fontWeight: 500, letterSpacing: '0.32em',
        textTransform: 'uppercase', color: 'rgba(250,246,237,0.78)',
      }}>{label}</div>
      <div style={{
        fontFamily: f.display, fontWeight: 300, fontSize: 'clamp(72px, 16vw, 200px)',
        lineHeight: 0.88, letterSpacing: '-0.04em', margin: '24px 0 0',
      }}>
        {stat}
      </div>
      {sub && (
        <div style={{
          fontFamily: f.display, fontStyle: 'italic',
          fontSize: 'clamp(18px, 2.4vw, 26px)', lineHeight: 1.4,
          color: 'rgba(250,246,237,0.85)', marginTop: 28, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto',
        }}>
          {sub}
        </div>
      )}
    </div>
  </section>
);

// Pull quote — large italic with attribution
const CasePullQuote = ({ quote, name, role, pending = false }) => (
  <Section bg={C.creamDeep} py={120}>
    <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
      <Kicker>In their words</Kicker>
      <div style={{ marginTop: 32 }}>
        {pending ? (
          <Pending label="Awaiting client quote">
            A short, signed quote from the Foundation will appear here once approved —
            ideally one or two sentences on how Michelle changed the trajectory of GCF's
            partnerships and donor outreach.
          </Pending>
        ) : (
          <>
            <p style={{
              fontFamily: f.display, fontStyle: 'italic',
              fontSize: 'clamp(24px, 3.2vw, 36px)', lineHeight: 1.35,
              color: C.ink, margin: 0, letterSpacing: '-0.005em',
            }}>
              "{quote}"
            </p>
            <GoldRule style={{ margin: '36px auto 0' }} />
            <div style={{ marginTop: 18, fontFamily: f.display, fontSize: 20, color: C.ink }}>— {name}</div>
            <div style={{ fontFamily: f.body, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent, marginTop: 6, fontWeight: 600 }}>
              {role}
            </div>
          </>
        )}
      </div>
    </div>
  </Section>
);

// Roadmap table — focus areas (used to show '2026 Roadmap' from proposal)
const RoadmapTable = ({ rows }) => (
  <div style={{ borderTop: `1px solid ${C.cream2}` }}>
    {rows.map(([area, initiatives], i) => (
      <div key={i} className="mwc-stack-2-thin" style={{
        display: 'grid', gridTemplateColumns: '0.55fr 1.45fr', gap: 32,
        padding: '28px 0', borderBottom: `1px solid ${C.cream2}`,
      }}>
        <div>
          <div style={{
            fontFamily: f.body, fontSize: 10, fontWeight: 600, letterSpacing: '0.32em',
            textTransform: 'uppercase', color: C.accent, marginBottom: 6,
          }}>
            Focus 0{i + 1}
          </div>
          <div style={{ fontFamily: f.display, fontSize: 26, color: C.ink, lineHeight: 1.15 }}>
            {area}
          </div>
        </div>
        <div style={{ fontFamily: f.body, fontSize: 15, lineHeight: 1.7, color: C.ink2 }}>
          {initiatives}
        </div>
      </div>
    ))}
  </div>
);

// CTA at end of case study
const CaseStudyCTA = ({ headline = "Got a similar challenge?", subhead = "Book a free 30-minute discovery call — bring your goals, current outreach, and questions." }) => (
  <section style={{ background: C.cream, padding: 'clamp(80px, 10vw, 130px) 0 60px', position: 'relative', overflow: 'hidden' }}>
    <DiamondFade size={520} opacity={0.32} style={{ position: 'absolute', bottom: -80, left: '-6%', pointerEvents: 'none' }} />
    <div className="mwc-section-pad" style={{ maxWidth: 920, margin: '0 auto', padding: '0 48px', textAlign: 'center', position: 'relative' }}>
      <Kicker>Next chapter</Kicker>
      <h2 className="mwc-display-md" style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 60,
        lineHeight: 1.05, letterSpacing: '-0.018em', margin: '22px 0 0', color: C.ink,
      }}>
        {headline.includes('?')
          ? <>{headline.split('?')[0]}<em style={{ color: C.accent, fontStyle: 'italic' }}>?</em></>
          : headline}
      </h2>
      <p style={{
        fontFamily: f.body, fontSize: 17, lineHeight: 1.65,
        color: C.ink2, maxWidth: 540, margin: '24px auto 0',
      }}>
        {subhead}
      </p>
      <div className="mwc-form-actions" style={{ marginTop: 36, display: 'inline-flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Btn href="contact.html" size="lg">Book a Discovery Call</Btn>
        <Btn href="work.html" variant="outline" size="lg">More work →</Btn>
      </div>
    </div>
  </section>
);

// Compact footer (works on subpages)
const SubpageFooter = () => (
  <div>
    <GoldBand />
    <div style={{ background: C.ink, color: C.cream, padding: '50px 0 36px' }}>
      <div className="mwc-section-pad" style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
      }}>
        <a href="Michelle Wolff Consulting.html" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: C.cream }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src="assets/logo.png" alt="MW" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }} />
          </div>
          <div>
            <div style={{ fontFamily: f.display, fontSize: 22, lineHeight: 1 }}>Michelle Wolff</div>
            <div style={{ fontFamily: f.body, fontSize: 10, letterSpacing: '0.32em', color: C.accent, marginTop: 4, fontWeight: 600 }}>CONSULTING</div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: 32, fontFamily: f.body, fontSize: 13, color: 'rgba(250,246,237,0.78)', flexWrap: 'wrap' }}>
          <a href="Michelle Wolff Consulting.html#approach" style={{ color: 'inherit', textDecoration: 'none' }}>Approach</a>
          <a href="Michelle Wolff Consulting.html#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
          <a href="work.html" style={{ color: 'inherit', textDecoration: 'none' }}>Work</a>
          <a href="Michelle Wolff Consulting.html#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a href="contact.html" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
      <div className="mwc-section-pad" style={{
        maxWidth: 1240, margin: '36px auto 0', padding: '24px 48px 0',
        borderTop: `1px solid rgba(250,246,237,0.12)`,
        display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
        fontFamily: f.body, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(250,246,237,0.5)',
      }}>
        <span>© 2026 Michelle Wolff Consulting LLC</span>
        <span>michelle.wolff57@gmail.com · 000-000-0000 · Los Angeles, CA</span>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  Pending, MetaStrip, TwoColBlock, HighlightsList, BigStatMoment,
  CasePullQuote, RoadmapTable, CaseStudyCTA, SubpageFooter,
});
