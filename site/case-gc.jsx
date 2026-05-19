// GC Foundation — case study body components

const GCHero = () => (
  <section style={{ background: C.cream, padding: '80px 0 80px', position: 'relative', overflow: 'hidden' }}>
    <DiamondFade size={520} opacity={0.28} style={{
      position: 'absolute', top: -40, right: -80, pointerEvents: 'none',
    }} />
    <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
        <span style={{ fontFamily: f.body, fontSize: 12, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.accent }}>
          Case 01
        </span>
      </div>

      <h1 className="mwc-display-hero" style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 76,
        lineHeight: 1, letterSpacing: '-0.018em', margin: 0, color: C.ink,
        maxWidth: 980,
      }}>
        Becoming the <em style={{ color: C.accent, fontStyle: 'italic' }}>strategic bridge</em> between Guitar Center and its Foundation.
      </h1>

      <p style={{
        fontFamily: f.body, fontSize: 19, lineHeight: 1.55, color: C.ink2,
        marginTop: 28, maxWidth: 720,
      }}>
        Four years inside Oracle's Guitar Center account. Then a pivot — same
        relationships, new role — to turn philanthropic moments into a
        professionalized strategy that reaches millions.
      </p>

      <MetaStrip items={[
        ['Client', 'Guitar Center Foundation'],
        ['Engagement', 'Strategic partnership · ongoing'],
        ['Focus', 'Artist & donor relations'],
        ['Year', '2023 — Present'],
      ]} />
    </div>
  </section>
);

// Hero image placeholder
const GCHeroImage = () => (
  <section style={{ background: C.cream, padding: '0 0 60px' }}>
    <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px' }}>
      <div style={{
        width: '100%', aspectRatio: '2.2', overflow: 'hidden',
        background: `linear-gradient(135deg, ${C.cream2}, ${C.creamDeep})`,
        position: 'relative', border: `1px solid ${C.cream2}`,
      }}>
        <Pending label="Awaiting event photo">
          A photo from one of the joint events — 100 Billion Meals, the holiday
          charity at Fab Factory, or the WSJ recognition — would live here.
        </Pending>
      </div>
      <div style={{
        fontFamily: f.body, fontSize: 11, fontWeight: 500,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: C.muted, marginTop: 12, textAlign: 'center',
      }}>
        Fig. 01 · GCF event documentation, 2025
      </div>
    </div>
  </section>
);

const GCBrief = () => (
  <TwoColBlock kicker="The Brief" heading={<>What GCF needed when Michelle joined.</>}>
    <Pending label="Pending Foundation review">
      A short paragraph framing the Foundation's starting point — what felt stuck,
      what was untapped, what success would look like. Drafting from the proposal,
      this likely reads something like: GCF had real philanthropic momentum
      (100 Billion Meals, Support Musicians) but lacked the connective tissue
      between the Foundation's giving and Guitar Center's corporate reach.
    </Pending>
    <div style={{ marginTop: 28, fontFamily: f.body, fontSize: 16, lineHeight: 1.75, color: C.ink2 }}>
      <p style={{ margin: 0 }}>
        What was clear from the start: the Foundation deserved a dedicated
        liaison who understood both sides — the retail brand's operational
        reality and the Foundation's philanthropic ambitions. Michelle had
        spent four years managing the Guitar Center account at Oracle. She
        knew the executives, the systems, and the cultural levers. The pivot
        from technology partner to strategic bridge was the natural next move.
      </p>
    </div>
  </TwoColBlock>
);

const GCApproach = () => (
  <TwoColBlock bg={C.creamDeep} kicker="The Approach" heading={<>Three pillars to drive measurable impact.</>}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {[
        {
          n: '01',
          title: 'Revenue Generation & Fundraising',
          body: "Build publicity through the Foundation's acts of giving — leveraging stories like 100 Billion Meals and Support Musicians merchandise to convert public attention into donor revenue.",
        },
        {
          n: '02',
          title: 'Awareness & Donor Relations',
          body: 'Execute presence at NAMM and high-profile social events to position the Foundation as a premier industry non-profit — and to systematically convert visibility into long-term donor relationships.',
        },
        {
          n: '03',
          title: 'Corporate Synergy',
          body: "Use deep institutional knowledge of Guitar Center's internal operations to marry the retail brand with the Foundation's mission, increasing awareness, collaboration, and aligned giving.",
        },
      ].map((p) => (
        <div key={p.n} style={{
          padding: '24px 28px',
          background: C.paper,
          border: `1px solid ${C.cream2}`,
          borderLeft: `3px solid ${C.accent}`,
        }}>
          <div style={{
            fontFamily: f.display, fontStyle: 'italic', fontSize: 18,
            color: C.accent, marginBottom: 4,
          }}>
            Pillar {p.n}
          </div>
          <div style={{
            fontFamily: f.display, fontSize: 24, color: C.ink, lineHeight: 1.2,
            letterSpacing: '-0.005em', marginBottom: 12,
          }}>
            {p.title}
          </div>
          <div style={{ fontFamily: f.body, fontSize: 14, lineHeight: 1.65, color: C.ink2 }}>
            {p.body}
          </div>
        </div>
      ))}
    </div>
  </TwoColBlock>
);

const GCHighlights = () => (
  <TwoColBlock kicker="Highlights" heading={<>Wins from <em style={{ color: C.accent, fontStyle: 'italic' }}>year one.</em></>}>
    <HighlightsList items={[
      {
        title: 'Facilitated the 100 Billion Meals collaboration',
        body: 'Including a signed Gibson Guitar auction valued at $100,000 — a high-visibility centerpiece for the Foundation\'s most ambitious campaign.',
      },
      {
        title: 'Secured key silent auction sponsors',
        body: 'L.A. Sculpt and In Good Taste came in as silent auction sponsors at Foundation events through direct relationship-building.',
      },
      {
        title: 'Brokered the Koola Creative partnership',
        body: 'Connected GCF with Ally Archer at Koola Creative — now leading the Foundation\'s social-media strategy and content engine.',
      },
      {
        title: 'Built the Fab Factory Studios relationship',
        body: 'Fostered a partnership with Fab Factory Studios to co-execute a joint holiday charity event — a model now repeatable in future cycles.',
      },
      {
        title: 'Orchestrated WSJ recognition',
        body: 'Organized and facilitated the joint Oracle & Guitar Center Wall Street Journal recognition — a brand moment for both sides.',
      },
      {
        title: 'Spearheaded the Oracle Cloud implementation',
        body: 'Guitar Center\'s Website & Order Management System now runs on Oracle Cloud — operational synergy that opened the door for the Foundation work.',
      },
    ]} />
  </TwoColBlock>
);

const GCRoadmap = () => (
  <Section bg={C.cream} py={120}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
      <Kicker>2026 Roadmap</Kicker>
      <h2 className="mwc-display-sm" style={{
        fontFamily: f.display, fontWeight: 400, fontSize: 40,
        lineHeight: 1, letterSpacing: '-0.012em', margin: 0, color: C.ink,
      }}>
        Where the next chapter <em style={{ color: C.accent, fontStyle: 'italic' }}>scales.</em>
      </h2>
      <div style={{ flex: 1, borderBottom: `1px solid ${C.cream2}`, marginBottom: 8, minWidth: 80 }} />
    </div>
    <RoadmapTable rows={[
      ['Artist Relations', 'Launch a Young Professional Board to bring a fresh perspective; spin up an Artist Ambassador Program connecting influencers and artists (e.g. Laszewo, Bryce Vine) for merchandise promotions and content.'],
      ['Community Impact', 'Coordinate school and hospital donation drops with artists and camera crews to generate high-quality content and grow awareness of the Foundation.'],
      ['Donor Connections', 'Provide introductions to potential donors and sponsors while maintaining long-term relationships with future donors.'],
      ['Strategic Events', 'Continue 100 Billion Meals collaboration. Evaluate partnership opportunities with events like the Boys & Girls Club Youth of the Year and the Elizabeth Taylor Ball to End AIDS.'],
      ['Retail ROI', "Promote the Support Musicians totes at Guitar Centers' front desks; improve existing in-store displays to drive both awareness of the Foundation and incremental retail sales."],
      ['Operational Support', 'Dedicated partnership support — bridging the Executive Team and the day-to-day Foundation work.'],
    ]} />
  </Section>
);

Object.assign(window, { GCHero, GCHeroImage, GCBrief, GCApproach, GCHighlights, GCRoadmap });
