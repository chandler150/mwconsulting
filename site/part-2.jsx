// Polished homepage part 2 — Services, About, Results, Testimonial, Process, FooterCTA

// ──────────────────────────────────────────────
//  SERVICES
// ──────────────────────────────────────────────

const Services = () => {
  const items = [
  {
    icon: 'target',
    title: 'Strategic Sales Consulting',
    tag: 'Primary Offer',
    desc: 'Our primary offer includes current state analysis, sales process audits, prospect strategy, pipeline creation, and team coaching.',
    service: 'Strategic Sales Consulting'
  },
  {
    icon: 'handshake',
    title: 'Brand Partnerships',
    tag: 'Add-On',
    desc: 'We help secure sponsorships, build affiliate partnerships, and shape strategic collaborations.',
    service: 'Brand Partnerships'
  },
  {
    icon: 'megaphone',
    title: 'Donor Relations & Fundraising',
    tag: 'For Nonprofits',
    desc: 'We can provide donor outreach strategy, sponsorship packages, campaign messaging, and community engagement.',
    service: 'Donor Relations & Fundraising'
  },
  {
    icon: 'inbox',
    title: 'Done-for-you Outreach',
    tag: 'Execution',
    desc: 'I run the campaigns. Cold email, LinkedIn prospecting, warm introductions, follow-up systems, appointment setting, and running sales cycles.',
    service: 'Done-for-you Outreach'
  }];

  return (
    <Section id="services" bg={C.cream}>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 70px' }}>
        <Kicker>Services to</Kicker>
        <h2 className="mwc-display-lg" style={{
          fontFamily: f.display, fontWeight: 400, fontSize: 64,
          lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink
        }}>
          Elevate Your <em style={{ color: C.accent, fontStyle: 'italic' }}>Sales Strategy</em>
        </h2>
        <GoldRule style={{ margin: '28px auto 0' }} />
        <p style={{ fontFamily: f.body, fontSize: 16, lineHeight: 1.65, color: C.ink2, marginTop: 24 }}>
          One primary offer, three powerful add-ons. Choose the support
          that fits where you are — and where you're going next.
        </p>
      </div>
      <div className="mwc-services" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {items.map((s, i) =>
        <a key={s.title}
        href={`contact.html?service=${encodeURIComponent(s.service)}`}
        className="mwc-service-card"
        style={{
          background: i === 0 ? C.ink : C.paper,
          color: i === 0 ? C.cream : C.ink,
          padding: '44px 38px 38px',
          position: 'relative',
          border: i === 0 ? 'none' : `1px solid ${C.cream2}`,
          textDecoration: 'none', display: 'block',
          transition: 'transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s'
        }}>
            <div style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
            gap: 16, marginBottom: 28
          }}>
              <div style={{
              width: 76, height: 76, borderRadius: '50%',
              background: i === 0 ? 'rgba(184,150,90,0.18)' : C.creamDeep,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${i === 0 ? C.accent : C.cream2}`
            }}>
                {React.cloneElement(<Icon kind={s.icon} size={42} />, {})}
              </div>
              <div style={{
              fontFamily: f.body, fontSize: 10, fontWeight: 600,
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: i === 0 ? C.accentSoft : C.accent,
              padding: '6px 12px', border: `1px solid ${i === 0 ? C.accentSoft : C.accent}`,
              alignSelf: 'flex-start'
            }}>
                {s.tag}
              </div>
            </div>
            <h3 style={{
            fontFamily: f.display, fontWeight: 400, fontSize: 32,
            lineHeight: 1.05, letterSpacing: '-0.005em', margin: 0,
            color: i === 0 ? C.cream : C.ink
          }}>
              {s.title}
            </h3>
            <p style={{
            fontFamily: f.body, fontSize: 15, lineHeight: 1.65,
            color: i === 0 ? 'rgba(250,246,237,0.78)' : C.ink2,
            marginTop: 16, marginBottom: 30
          }}>
              {s.desc}
            </p>
            <span className="mwc-service-cta" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: f.body, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase',
            color: i === 0 ? C.accentSoft : C.accent, fontWeight: 600,
            transition: 'gap .2s'
          }}>
              Learn more
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                <path d="M0 4h20M16 1l5 3-5 3" stroke={i === 0 ? C.accentSoft : C.accent} strokeWidth="1.2" />
              </svg>
            </span>
          </a>
        )}
      </div>
    </Section>);

};

// ──────────────────────────────────────────────
//  ABOUT — "Let's work together"
// ──────────────────────────────────────────────

const About = () =>
<Section id="about" bg={C.cream2} py={130}>
    <div className="mwc-stack" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
      <div>
        <Kicker>Finding a good fit</Kicker>
        <h2 className="mwc-display-md" style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 60,
        lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink
      }}>
          Let's Work <em style={{ color: C.accent, fontStyle: 'italic' }}>Together</em>
        </h2>
        <GoldRule style={{ marginTop: 28, marginBottom: 28 }} />
        <p style={{ fontFamily: f.body, fontSize: 16, lineHeight: 1.75, color: C.ink2, margin: 0 }}>
          Hi, I'm Michelle. I empower mission-driven organizations to
          grow with confidence — through relationships, sales systems,
          and partnerships that actually scale.
        </p>
        <p style={{ fontFamily: f.body, fontSize: 16, lineHeight: 1.75, color: C.ink2, marginTop: 18 }}>
          I spent nine years at Oracle, progressing across six roles
          from BDR to Account Director. I've closed multi-million-dollar
          deals with Gap, Guitar Center, and managed strategic AI
          partnerships with NVIDIA and AMD. Along the way I co-founded
          a community giving organization and learned that the best
          sales aren't sold — they're built, one relationship at a time.
        </p>
        <div style={{ marginTop: 32 }}>
          <Kicker color={C.ink}>Core Values</Kicker>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
          {['Integrity', 'Human Connection', 'Results', 'Innovation', 'Collaboration', 'Impact'].map((v) =>
        <span key={v} style={{
          padding: '8px 16px',
          fontFamily: f.body, fontSize: 11, fontWeight: 500,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: C.ink, border: `1px solid ${C.accent}`,
          background: 'rgba(184,150,90,0.06)'
        }}>{v}</span>
        )}
        </div>
        <div style={{ marginTop: 36 }}>
          <Btn href="contact.html" variant="solid">Book a Discovery Call</Btn>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ width: '100%', aspectRatio: '0.78', overflow: 'hidden' }}>
          <img src="assets/headshot1.png" alt="Michelle Wolff" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%'
        }} />
        </div>
        {/* Decorative outline frame */}
        <div className="mwc-about-photo-frame" style={{
        position: 'absolute', top: 22, left: 22, right: -22, bottom: -22,
        border: `1.5px solid ${C.accent}`,
        zIndex: -1
      }} />
        {/* Logo badge */}
        <div className="mwc-about-logo-badge" style={{
        position: 'absolute', bottom: -32, left: -32,
        width: 96, height: 96, borderRadius: '50%',
        background: C.ink, overflow: 'hidden',
        boxShadow: `0 0 0 3px ${C.accent}, 0 12px 30px rgba(0,0,0,0.18)`
      }}>
          <img src="assets/logo.png" alt="MW" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }} />
          {/* mask white PNG edge pixels */}
        </div>
      </div>
    </div>
  </Section>;


// ──────────────────────────────────────────────
//  RESULTS — proof metrics
// ──────────────────────────────────────────────

const Results = () =>
<Section id="results" bg={C.cream} py={130}>
    <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 70px' }}>
      <Kicker>THE RESULTS</Kicker>
      <h2 className="mwc-display-md" style={{
      fontFamily: f.display, fontWeight: 400, fontSize: 60,
      lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink
    }}>
        Nine years closing deals and growing connections.
      </h2>
      <GoldRule style={{ margin: '28px auto' }} />
      <h2 className="mwc-display-md" style={{
      fontFamily: f.display, fontWeight: 400, fontSize: 60,
      lineHeight: 1, letterSpacing: '-0.012em', margin: 0, color: C.ink
    }}>
        One thesis: <em style={{ color: C.accent, fontStyle: 'italic' }}>relationships compound.</em>
      </h2>
    </div>
    <div className="mwc-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: `1px solid ${C.cream2}`, borderLeft: `1px solid ${C.cream2}` }}>
      {[
    ['225%', 'Peak Quota', 'FY19 Oracle — Cloud 304%, License 209%'],
    ['10×', 'Territory Growth', '$10K MRR → $100K MRR in 24 months'],
    ['2.4M', 'People Reached', 'Awareness lift for Guitar Center Foundation'],
    ['$12K+', 'Community Raised', 'Co-founded JWP giving organization']].
    map(([n, l, sub]) =>
    <div key={l} style={{
      padding: '44px 32px',
      borderRight: `1px solid ${C.cream2}`,
      borderBottom: `1px solid ${C.cream2}`,
      textAlign: 'center'
    }}>
          <div className="mwc-stat-number" style={{
        fontFamily: f.display, fontSize: 72,
        lineHeight: 0.9, letterSpacing: '-0.03em',
        color: C.ink, fontWeight: 400
      }}>{n}</div>
          <div style={{
        fontFamily: f.body, fontSize: 11, fontWeight: 600,
        letterSpacing: '0.32em', textTransform: 'uppercase',
        color: C.accent, marginTop: 18
      }}>{l}</div>
        </div>
    )}
    </div>
  </Section>;


// ──────────────────────────────────────────────
//  TESTIMONIAL — Kind Words
// ──────────────────────────────────────────────

const Testimonial = () =>
<Section id="kindwords" bg={C.creamDeep} py={120}>
    <div style={{ textAlign: 'center', marginBottom: 56 }}>
      <Kicker></Kicker>
      <h2 className="mwc-display-md" style={{
      fontFamily: f.display, fontWeight: 400, fontSize: 56,
      lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink
    }}>
        Testimonials
      </h2>
      <GoldRule style={{ margin: '24px auto 0' }} />
    </div>
    <div className="mwc-stack-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      {[
    {
      quote: "Michelle brings a genuine passion for the Foundation to every conversation. She has the rare ability to quickly connect with people and encourage them to give, all with a poise and presence that made every interaction feel effortless.",
      name: "Myka Miller",
      org: "Guitar Center Music Foundation",
      role: "Executive Director"
    },
    {
      quote: "Michelle consistently demonstrated a genuine investment in our success, approaching every engagement as a true collaborator... Her commitment, responsiveness, and partnership made a meaningful and lasting impact on our team.",
      name: "Rob Sexton",
      org: "GAP, Inc.",
      role: "Director of Infrastructure"
    }].
    map((t, i) =>
    <div key={i} style={{
      background: C.paper, padding: '44px 40px', position: 'relative',
      border: `1px solid ${C.cream2}`
    }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
            {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} />)}
          </div>
          <p style={{
        fontFamily: f.display, fontStyle: 'italic', fontSize: 20,
        lineHeight: 1.5, color: C.ink, margin: 0
      }}>
            "{t.quote}"
          </p>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: C.cream2, border: `1px solid ${C.accent}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: f.display, fontSize: 18, color: C.ink
        }}>
              {t.name.split(' ').map((s) => s[0]).slice(0, 2).join('')}
            </div>
            <div>
              <div style={{ fontFamily: f.display, fontSize: 18, color: C.ink }}>— {t.name}</div>
              <div style={{ fontFamily: f.body, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent, marginTop: 4, fontWeight: 500 }}>{t.role} · {t.org}</div>
            </div>
          </div>
        </div>
    )}
    </div>
  </Section>;


// ──────────────────────────────────────────────
//  PROCESS — 3 steps on dark background
// ──────────────────────────────────────────────

const Process = () =>
<Section id="process" bg={C.ink} color={C.cream} py={130} style={{ position: 'relative', overflow: 'hidden' }}>
    <DiamondFade size={520} color={C.accentSoft} opacity={0.5} style={{
    position: 'absolute', bottom: -120, left: -80, pointerEvents: 'none'
  }} />
    <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 80px', position: 'relative' }}>
      <Kicker color={C.accentSoft}>What to do next</Kicker>
      <h2 className="mwc-display-md" style={{
      fontFamily: f.display, fontWeight: 400, fontSize: 60,
      lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.cream
    }}>
        Three Steps to <em style={{ color: C.accent, fontStyle: 'italic' }}>Get Started</em>
      </h2>
      <GoldRule style={{ margin: '28px auto 0' }} />
    </div>
    <div className="mwc-stack-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, position: 'relative' }}>
      {[
    { n: '01', icon: 'calendar', title: 'Get in Touch', body: "It's simple — describe what you're working on and book a 30-minute, complimentary discovery call." },
    { n: '02', icon: 'map', title: 'Receive a Plan', body: 'After our call, you\'ll get a custom plan with next steps, a review of your goals, and my proposal.' },
    { n: '03', icon: 'spark', title: 'Achieve Results', body: 'We work together to build the pipeline, partnerships, and momentum your organization deserves.' }].
    map((s) =>
    <div key={s.n} style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{
        width: 96, height: 96, borderRadius: '50%',
        background: 'rgba(184,150,90,0.12)',
        border: `1.5px solid ${C.accent}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto'
      }}>
            <svg width="46" height="46" viewBox="0 0 56 56" fill="none" stroke={C.accentSoft} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              {s.icon === 'calendar' && <>
                <rect x="6" y="10" width="44" height="40" rx="3" />
                <path d="M6 22h44" />
                <path d="M18 4v12M38 4v12" />
                <circle cx="28" cy="36" r="4" fill={C.accent} stroke={C.accent} />
              </>}
              {s.icon === 'map' && <>
                <path d="M6 14l14-4 16 4 14-4v32l-14 4-16-4-14 4z" />
                <path d="M20 10v32M36 14v32" />
                <circle cx="28" cy="26" r="3" fill={C.accent} stroke={C.accent} />
              </>}
              {s.icon === 'spark' && <>
                <path d="M28 6l4 16 16 4-16 4-4 16-4-16-16-4 16-4z" />
                <path d="M44 8l1.5 4 4 1.5-4 1.5L44 19l-1.5-4-4-1.5 4-1.5z" stroke={C.accent} />
              </>}
            </svg>
          </div>
          <div style={{
        fontFamily: f.display, fontStyle: 'italic', fontSize: 18,
        color: C.accent, marginTop: 22, letterSpacing: '0.04em'
      }}>
            Step {s.n}
          </div>
          <h3 style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 30,
        lineHeight: 1.1, color: C.cream, margin: '8px 0 0'
      }}>{s.title}</h3>
          <p style={{
        fontFamily: f.body, fontSize: 15, lineHeight: 1.65,
        color: 'rgba(250,246,237,0.72)', marginTop: 14, maxWidth: 280, margin: '14px auto 0'
      }}>{s.body}</p>
        </div>
    )}
    </div>
    <div style={{ textAlign: 'center', marginTop: 70, position: 'relative' }}>
      <Btn href="contact.html" variant="gold" size="lg">Get Started</Btn>
    </div>
  </Section>;


// ──────────────────────────────────────────────
//  FINAL CTA + FOOTER
// ──────────────────────────────────────────────

const FooterCTA = () =>
<section id="book" className="mwc-section" style={{ background: C.cream, padding: '0', position: 'relative', overflow: 'hidden' }}>

    <div style={{ height: 0 }} />
    <GoldBand />

    <div style={{ background: C.ink, color: C.cream, padding: '60px 0 36px' }}>
      <div className="mwc-section-pad mwc-footer" style={{
      maxWidth: 1240, margin: '0 auto', padding: '0 48px',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 48, alignItems: 'start'
    }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src="assets/logo.png" alt="MW" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', display: 'block' }} />
            </div>
            <div>
              <div style={{ fontFamily: f.display, fontSize: 22, lineHeight: 1 }}>Michelle Wolff</div>
              <div style={{ fontFamily: f.body, fontSize: 10, letterSpacing: '0.32em', color: C.accent, marginTop: 4, fontWeight: 600 }}>CONSULTING</div>
            </div>
          </div>
          <p style={{ fontFamily: f.display, fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: 'rgba(250,246,237,0.72)', marginTop: 22, maxWidth: 360 }}>
            Strategic sales consulting designed to turn relationships into measurable growth.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: f.body, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent, fontWeight: 600, marginBottom: 14 }}>Explore</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: f.body, fontSize: 14, color: 'rgba(250,246,237,0.78)' }}>
            <a href="index.html#approach" style={{ color: 'inherit', textDecoration: 'none' }}>Approach</a>
            <a href="index.html#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
            <a href="index.html#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            <a href="index.html#results" style={{ color: 'inherit', textDecoration: 'none' }}>Results</a>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: f.body, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent, fontWeight: 600, marginBottom: 14 }}>Connect</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: f.body, fontSize: 14, color: 'rgba(250,246,237,0.78)' }}>
            <a href="https://www.linkedin.com/in/michelle-wolff/" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <span>Instagram</span>
            <a href="contact.html" style={{ color: 'inherit', textDecoration: 'none' }}>Book a meeting</a>
            <a href="mailto:michellewolffconsulting@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
          </div>
        </div>
      </div>
      <div className="mwc-section-pad" style={{
      maxWidth: 1240, margin: '60px auto 0', padding: '24px 48px 0',
      borderTop: `1px solid rgba(250,246,237,0.12)`,
      display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      fontFamily: f.body, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
      color: 'rgba(250,246,237,0.5)'
    }}>
        <span>© 2026 Michelle Wolff Consulting LLC</span>
        <span>Privacy · Terms</span>
      </div>
    </div>
  </section>;


Object.assign(window, { Services, About, Results, Testimonial, Process, FooterCTA });