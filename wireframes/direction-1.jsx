// Direction 1 — "Editorial Spread"
// Magazine-like asymmetry, numbered features, pull quotes.

const D1_Home = () => {
  const serif = '"Crimson Pro", "Crimson Text", Georgia, serif';
  const mono = 'ui-monospace, monospace';
  return (
    <div style={{ background: wfColors.paper, fontFamily: serif, color: wfColors.ink, paddingBottom: 60 }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 48px', borderBottom: `1px solid ${wfColors.line}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={32} />
          <div style={{ fontFamily: serif, fontSize: 14, letterSpacing: '0.02em' }}>
            Michelle Wolff <span style={{ color: wfColors.muted }}>Consulting</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          <span>Approach</span><span>Services</span><span>About</span><span>Proof</span>
          <span style={{ borderBottom: `1.5px solid ${wfColors.accent}`, paddingBottom: 2 }}>Book a call</span>
        </div>
      </div>

      {/* HERO — editorial split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', borderBottom: `1px solid ${wfColors.line}`, position: 'relative' }}>
        <div style={{ padding: '64px 48px 56px 48px', position: 'relative' }}>
          <Kicker style={{ marginBottom: 26 }}>Issue 01 — Sales Strategy, Reimagined</Kicker>
          <div style={{ fontSize: 56, lineHeight: 0.98, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: 28 }}>
            Relationships<br />
            into <em style={{ fontStyle: 'italic', color: wfColors.accent }}>measurable</em><br />
            momentum.
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.55, color: '#3a3530', maxWidth: 420, marginBottom: 36 }}>
            Strategic sales consulting for mission-driven founders and nonprofits
            tired of inconsistent revenue and disconnected outreach.
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <WfBtn>Book a discovery call</WfBtn>
            <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: wfColors.muted }}>
              30 min · free
            </span>
          </div>
          <Note style={{ position: 'absolute', left: 250, top: 28 }} rotate={-4}>
            ↑ pull-quote feels like a magazine cover line
          </Note>
        </div>
        <div style={{ borderLeft: `1px solid ${wfColors.line}`, padding: 0, position: 'relative' }}>
          <ImgBox label="Headshot 1 — editorial portrait, full bleed" h={460} />
          <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, fontFamily: mono, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: wfColors.paper, mixBlendMode: 'difference' }}>
            Fig. 01 · Michelle Wolff, Founder
          </div>
        </div>
      </div>

      {/* MARQUEE / PROOF STRIP */}
      <div style={{ borderBottom: `1px solid ${wfColors.line}`, padding: '20px 48px', display: 'flex', alignItems: 'center', gap: 40, justifyContent: 'space-between', fontFamily: mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5a5550' }}>
        <span>Featured in the work of</span>
        <span>— Oracle —</span>
        <span>— Guitar Center —</span>
        <span>— Gap Inc. —</span>
        <span>— NVIDIA —</span>
        <span>— AMD —</span>
      </div>

      {/* APPROACH */}
      <div style={{ padding: '72px 48px 56px 48px', borderBottom: `1px solid ${wfColors.line}`, display: 'grid', gridTemplateColumns: '0.5fr 1fr 1fr', gap: 40 }}>
        <div>
          <Kicker>01 — Approach</Kicker>
          <div style={{ fontSize: 30, lineHeight: 1.05, marginTop: 18, fontStyle: 'italic' }}>
            "I don't just build strategy — I open doors, make introductions, and help close the deal."
          </div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, marginBottom: 10, color: wfColors.muted }}>HOW IT WORKS</div>
          <TextLines lines={5} lastWidth="60%" />
          <div style={{ marginTop: 22 }}>
            <TextLines lines={3} lastWidth="80%" />
          </div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, marginBottom: 10, color: wfColors.muted }}>WHAT YOU LEAVE WITH</div>
          <TextLines lines={5} lastWidth="50%" />
          <div style={{ marginTop: 22 }}>
            <TextLines lines={3} lastWidth="65%" />
          </div>
        </div>
      </div>

      {/* SERVICES — numbered features */}
      <div style={{ padding: '72px 48px 0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36 }}>
          <div>
            <Kicker>02 — Services</Kicker>
            <div style={{ fontSize: 44, lineHeight: 1, marginTop: 14, letterSpacing: '-0.02em' }}>
              Four ways to work together.
            </div>
          </div>
          <Note rotate={3}>← one primary offer + 3 add-ons, as numbered features</Note>
        </div>
        {[
          ['01', 'Strategic Sales Consulting', 'Primary offer', 'Sales process audits · prospect strategy · pipeline creation · revenue forecasting · sales scripts · team coaching'],
          ['02', 'Brand Partnerships', 'Add-on', 'Secure sponsorships · brand identity · affiliate partnerships · strategic collaborations · website analysis'],
          ['03', 'Awareness & Fundraising', 'Add-on · nonprofits', 'Donor outreach strategy · sponsorship packages · campaign messaging · community engagement'],
          ['04', 'Done-For-You Outreach', 'Add-on · execution', 'Cold email · LinkedIn prospecting · warm intros · follow-up systems · appointment setting · event planning'],
        ].map(([n, t, tag, body]) => (
          <div key={n} style={{ borderTop: `1px solid ${wfColors.line}`, padding: '28px 0', display: 'grid', gridTemplateColumns: '60px 1fr 1.4fr 30px', gap: 24, alignItems: 'baseline' }}>
            <div style={{ fontFamily: mono, fontSize: 12, color: wfColors.muted }}>{n}</div>
            <div>
              <div style={{ fontSize: 24, lineHeight: 1.1, letterSpacing: '-0.01em' }}>{t}</div>
              <div style={{ fontFamily: mono, fontSize: 10, color: wfColors.accent, marginTop: 6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{tag}</div>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: '#3a3530' }}>{body}</div>
            <div style={{ fontSize: 20, color: wfColors.muted }}>→</div>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${wfColors.line}` }} />
      </div>

      {/* PROOF — editorial pull-quote with metrics */}
      <div style={{ padding: '80px 48px', borderTop: `1px solid ${wfColors.line}`, marginTop: 72, background: '#f3f0e8' }}>
        <Kicker>03 — Proof</Kicker>
        <div style={{ fontSize: 38, lineHeight: 1.1, marginTop: 18, maxWidth: 760, fontStyle: 'italic' }}>
          "Raised awareness for Guitar Center Foundation by reaching over <span style={{ color: wfColors.accent, fontStyle: 'normal' }}>2.4&thinsp;M</span> people."
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 48, borderTop: `1px solid ${wfColors.line}`, paddingTop: 32 }}>
          {[
            ['225%', 'Peak quota attainment'],
            ['10×', 'Territory growth at Oracle'],
            ['2.4M', 'Reach for GC Foundation'],
            ['$12K+', 'Fundraised for community'],
          ].map(([n, l]) => (
            <div key={n}>
              <div style={{ fontSize: 56, lineHeight: 0.9, letterSpacing: '-0.03em' }}>{n}</div>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: wfColors.muted, marginTop: 10 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT spread */}
      <div style={{ padding: '80px 48px', borderTop: `1px solid ${wfColors.line}`, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 48 }}>
        <div>
          <ImgBox label="Headshot 2 — environmental / lifestyle" h={420} />
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: wfColors.muted, marginTop: 10 }}>
            Fig. 02 · Michelle, Los Angeles
          </div>
        </div>
        <div>
          <Kicker>04 — About</Kicker>
          <div style={{ fontSize: 38, lineHeight: 1.05, marginTop: 14, letterSpacing: '-0.02em' }}>
            Eight years of Oracle. A lifetime of relationship-building.
          </div>
          <div style={{ marginTop: 26, fontSize: 15, lineHeight: 1.65, color: '#2a2520', columnCount: 1 }}>
            <p style={{ margin: 0 }}>
              Michelle discovered her passion for sales at her grandmother's
              showroom at the Dallas World Trade Center — booking appointments
              and learning that business is, in the end, about people.
            </p>
            <p style={{ marginTop: 14 }}>
              At Oracle she progressed across six roles in eight years —
              from BDR to enterprise field sales — closing multi-million-dollar
              deals with Gap, Guitar Center, NVIDIA and AMD along the way.
            </p>
            <p style={{ marginTop: 14 }}>
              Today she brings that pedigree to founders and nonprofits who
              want sales systems that feel genuine, partnerships that land,
              and a pipeline that actually scales.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div style={{ padding: '72px 48px 56px 48px', borderTop: `1px solid ${wfColors.line}`, background: wfColors.ink, color: wfColors.paper }}>
        <Kicker style={{ color: '#888' }}>Take the next step</Kicker>
        <div style={{ fontSize: 52, lineHeight: 1, marginTop: 18, letterSpacing: '-0.02em', maxWidth: 720 }}>
          Let's see if we're a fit. <em style={{ fontStyle: 'italic', color: wfColors.accent }}>Book a free 30-minute call.</em>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 28 }}>
          <WfBtn filled={false} style={{ background: wfColors.paper, color: wfColors.ink }}>Book a call</WfBtn>
          <span style={{ fontFamily: mono, fontSize: 11, color: '#aaa', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            or email michelle.wolff57@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

const D1_Contact = () => {
  const serif = '"Crimson Pro", Georgia, serif';
  const mono = 'ui-monospace, monospace';
  return (
    <div style={{ background: wfColors.paper, fontFamily: serif, color: wfColors.ink, minHeight: '100%' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 48px', borderBottom: `1px solid ${wfColors.line}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={32} />
          <div style={{ fontSize: 14 }}>Michelle Wolff <span style={{ color: wfColors.muted }}>Consulting</span></div>
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          ← Back to home
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 720 }}>
        <div style={{ padding: '64px 48px', borderRight: `1px solid ${wfColors.line}` }}>
          <Kicker>Issue 01 — Get in touch</Kicker>
          <div style={{ fontSize: 52, lineHeight: 1, marginTop: 18, letterSpacing: '-0.02em' }}>
            Book your discovery call.
          </div>
          <div style={{ marginTop: 22, fontSize: 15, lineHeight: 1.6, color: '#3a3530', maxWidth: 380 }}>
            A free 30-minute conversation. We'll talk through your goals,
            current outreach, and whether working together makes sense.
          </div>

          <div style={{ marginTop: 40, borderTop: `1px solid ${wfColors.line}`, paddingTop: 24 }}>
            <Kicker>Direct</Kicker>
            <div style={{ fontSize: 18, marginTop: 10 }}>michelle.wolff57@gmail.com</div>
            <div style={{ fontSize: 18, marginTop: 4 }}>000-000-0000</div>
            <div style={{ fontSize: 15, marginTop: 12, color: '#3a3530' }}>Los Angeles, CA</div>
          </div>

          <div style={{ marginTop: 40, borderTop: `1px solid ${wfColors.line}`, paddingTop: 24 }}>
            <Kicker>What happens next</Kicker>
            <ol style={{ paddingLeft: 18, marginTop: 12, fontSize: 14, lineHeight: 1.8, color: '#2a2520' }}>
              <li>Pick a time that works for you</li>
              <li>30 min intro call — no pitch</li>
              <li>You get a follow-up note with next steps</li>
            </ol>
          </div>
        </div>

        <div style={{ padding: '64px 48px', background: '#f3f0e8', position: 'relative' }}>
          <Kicker>Booking</Kicker>
          <div style={{ marginTop: 18, border: `1.5px dashed ${wfColors.line}`, borderRadius: 4, padding: 22, background: wfColors.paper }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 16 }}>
              [ EMBED · CALENDLY / SAVVYCAL ]
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4, marginBottom: 16 }}>
              {['M','T','W','T','F','S','S'].map((d, i) => (
                <div key={i} style={{ fontFamily: mono, fontSize: 9, textAlign: 'center', color: wfColors.muted, padding: '4px 0' }}>{d}</div>
              ))}
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={i} style={{
                  aspectRatio: '1', border: `1px solid ${wfColors.line}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: mono, fontSize: 11,
                  background: [3, 5, 10, 11, 17, 18, 24].includes(i) ? wfColors.accent : wfColors.paper,
                  color: [3, 5, 10, 11, 17, 18, 24].includes(i) ? wfColors.paper : wfColors.ink,
                }}>
                  {i + 1}
                </div>
              ))}
            </div>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.12em', color: wfColors.muted, marginBottom: 10 }}>AVAILABLE TIMES</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map((t, i) => (
                <div key={t} style={{
                  padding: '8px 14px', border: `1px solid ${wfColors.line}`,
                  fontFamily: mono, fontSize: 11,
                  background: i === 1 ? wfColors.ink : 'transparent',
                  color: i === 1 ? wfColors.paper : wfColors.ink,
                }}>{t}</div>
              ))}
            </div>
          </div>
          <Note style={{ marginTop: 16 }} rotate={-3}>
            ↑ embed calendly here — or build a custom inquiry form
          </Note>

          <div style={{ marginTop: 36, fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, textTransform: 'uppercase' }}>
            Prefer to write? ↓
          </div>
          <div style={{ marginTop: 14, border: `1.5px dashed ${wfColors.line}`, padding: 18, background: wfColors.paper }}>
            <TextLines lines={2} height={9} color="#d6d2c8" />
            <div style={{ height: 12 }} />
            <TextLines lines={4} lastWidth="40%" height={9} color="#d6d2c8" />
            <div style={{ marginTop: 14 }}>
              <WfBtn>Send</WfBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { D1_Home, D1_Contact });
