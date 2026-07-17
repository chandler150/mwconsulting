// Work index page — grid of case-study cards

const WorkHero = () => (
  <section style={{ background: C.cream, padding: '90px 0 70px', position: 'relative', overflow: 'hidden' }}>
    <DiamondFade size={520} opacity={0.3} style={{
      position: 'absolute', top: -60, right: -80, pointerEvents: 'none',
    }} />
    <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px', position: 'relative' }}>
      <Kicker>Selected Work</Kicker>
      <h1 className="mwc-display-hero" style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 84,
        lineHeight: 0.98, letterSpacing: '-0.018em', margin: '24px 0 0', color: C.ink,
        maxWidth: 1000,
      }}>
        Relationships, <em style={{ color: C.accent, fontStyle: 'italic' }}>made into outcomes.</em>
      </h1>
      <p style={{
        fontFamily: f.body, fontSize: 18, lineHeight: 1.6, color: C.ink2,
        marginTop: 28, maxWidth: 640,
      }}>
        A small, growing collection of engagements — each one a partnership
        more than a project. Click any case to see the full story.
      </p>
    </div>
  </section>
);

// Featured (current) case
const FeaturedCase = () => (
  <Section bg={C.cream} py={40}>
    <a href="work-gc-foundation.html" className="mwc-feature-card" style={{
      display: 'block', textDecoration: 'none', color: 'inherit',
      background: C.paper, border: `1px solid ${C.cream2}`,
      transition: 'transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s',
    }}>
      <div className="mwc-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', minHeight: 460 }}>
        <div style={{
          background: `linear-gradient(135deg, ${C.creamDeep}, ${C.cream2})`,
          position: 'relative', overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <DiamondFade size={420} color={C.accent} opacity={0.6} />
          <div style={{
            position: 'absolute', bottom: 24, left: 24,
            fontFamily: f.body, fontSize: 10, fontWeight: 600,
            letterSpacing: '0.32em', textTransform: 'uppercase', color: C.muted,
          }}>
            Fig. 01 · Image awaited
          </div>
        </div>
        <div style={{ padding: 'clamp(36px, 5vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <span style={{
                fontFamily: f.body, fontSize: 10, fontWeight: 600,
                letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent,
              }}>Case 01 · Featured</span>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.accent }} />
              <span style={{
                fontFamily: f.body, fontSize: 10, fontWeight: 600,
                letterSpacing: '0.32em', textTransform: 'uppercase', color: C.muted,
              }}>2023 — Present</span>
            </div>
            <div style={{
              fontFamily: f.body, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: C.ink2, marginBottom: 14, fontWeight: 500,
            }}>
              Guitar Center Foundation
            </div>
            <h2 className="mwc-display-lg" style={{
              fontFamily: f.display, fontWeight: 400, fontSize: 52,
              lineHeight: 1.02, letterSpacing: '-0.012em', color: C.ink,
            }}>
              The strategic bridge between Guitar Center <em style={{ color: C.accent, fontStyle: 'italic' }}>and its Foundation.</em>
            </h2>
            <p style={{
              fontFamily: f.body, fontSize: 16, lineHeight: 1.65, color: C.ink2, marginTop: 22,
            }}>
              From facilitating the $100K Gibson Guitar auction in the 100 Billion
              Meals campaign to brokering the Foundation's social-media partnership —
              relationships turned into real philanthropic momentum.
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 24 }}>
              <div>
                <div style={{ fontFamily: f.display, fontSize: 36, lineHeight: 1, color: C.ink }}>2.4M+</div>
                <div style={{ fontFamily: f.body, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginTop: 6 }}>Reached</div>
              </div>
              <div>
                <div style={{ fontFamily: f.display, fontSize: 36, lineHeight: 1, color: C.ink }}>$100K</div>
                <div style={{ fontFamily: f.body, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginTop: 6 }}>Auction Valued</div>
              </div>
              <div>
                <div style={{ fontFamily: f.display, fontSize: 36, lineHeight: 1, color: C.ink }}>6+</div>
                <div style={{ fontFamily: f.body, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginTop: 6 }}>Major Wins</div>
              </div>
            </div>
            <span className="mwc-feature-cta" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: f.body, fontSize: 11, fontWeight: 600,
              letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent,
              transition: 'gap .2s',
            }}>
              Read the full case
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                <path d="M0 4h20M16 1l5 3-5 3" stroke={C.accent} strokeWidth="1.2" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  </Section>
);

// Upcoming cases — placeholder "more coming" cards
const ComingCases = () => (
  <Section bg={C.creamDeep} py={110}>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36, gap: 24, flexWrap: 'wrap' }}>
      <div>
        <Kicker>More work</Kicker>
        <h2 className="mwc-display-sm" style={{
          fontFamily: f.display, fontWeight: 400, fontSize: 44,
          lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink,
        }}>
          Engagements <em style={{ color: C.accent, fontStyle: 'italic' }}>in motion.</em>
        </h2>
      </div>
      <div style={{ fontFamily: f.body, fontSize: 13, color: C.muted, maxWidth: 360, lineHeight: 1.55 }}>
        Two additional engagements are wrapping up this quarter — full case
        studies coming soon.
      </div>
    </div>
    <div className="mwc-services" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
      {[
        {
          n: '02',
          title: 'Small Business Sales Audit',
          desc: 'A 90-day sales-process audit for a Los Angeles-based founder — rebuilding pipeline, scripts, and forecasting from the ground up.',
          tag: 'In progress · case study coming',
        },
        {
          n: '03',
          title: 'Community Giving · JWP',
          desc: 'Co-founded and operates JWP — producing curated community events (50–100 people) that have fundraised $12K+ for Magen David Adom.',
          tag: 'Ongoing · case study coming',
        },
      ].map(c => (
        <div key={c.n} style={{
          background: C.cream, border: `1px dashed ${C.cream2}`,
          padding: 36, position: 'relative',
        }}>
          <div style={{
            fontFamily: f.body, fontSize: 10, fontWeight: 600,
            letterSpacing: '0.32em', textTransform: 'uppercase', color: C.muted, marginBottom: 12,
          }}>
            Case {c.n} · {c.tag}
          </div>
          <h3 style={{
            fontFamily: f.display, fontWeight: 400, fontSize: 28,
            lineHeight: 1.1, letterSpacing: '-0.005em', color: C.ink,
          }}>
            {c.title}
          </h3>
          <p style={{ fontFamily: f.body, fontSize: 15, lineHeight: 1.65, color: C.ink2, marginTop: 14 }}>
            {c.desc}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

Object.assign(window, { WorkHero, FeaturedCase, ComingCases });
