// Direction 4 — "Index / Directory"
// Archival/portfolio-style with sticky side nav, heavy grid lines,
// structured tables. Sophisticated and information-dense.

const D4_Home = () => {
  const serif = '"EB Garamond", "Crimson Pro", Georgia, serif';
  const body = '"Inter", system-ui, sans-serif';
  const mono = '"JetBrains Mono", ui-monospace, monospace';
  const off = '#f4f1ea';

  const Rule = ({ children, ...p }) => (
    <div style={{ borderTop: `1px solid ${wfColors.line}`, ...p.style }}>{children}</div>
  );

  return (
    <div style={{ background: off, color: wfColors.ink, fontFamily: body, position: 'relative', paddingBottom: 60 }}>
      {/* TOP RULE BAR */}
      <div style={{
        display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr 180px',
        borderBottom: `1px solid ${wfColors.line}`,
        fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: wfColors.muted,
      }}>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>MWC / 2026</div>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>Los Angeles, CA</div>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>Strategic Sales · Brand Partnerships</div>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>Est. 2023</div>
        <div style={{ padding: '14px 20px', textAlign: 'right' }}>v1.0</div>
      </div>

      {/* MAIN GRID — sidebar + content */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr' }}>
        {/* STICKY SIDEBAR INDEX */}
        <div style={{
          borderRight: `1px solid ${wfColors.line}`,
          padding: '24px 20px',
          position: 'sticky', top: 0, alignSelf: 'start',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <LogoMark size={28} />
            <div style={{ fontFamily: serif, fontSize: 13, lineHeight: 1.1 }}>
              Michelle<br/>Wolff
            </div>
          </div>

          <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.22em', color: wfColors.muted, marginBottom: 12 }}>INDEX</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: mono, fontSize: 11, letterSpacing: '0.04em' }}>
            {[
              ['00', 'Cover', true],
              ['01', 'Practice'],
              ['02', 'Services'],
              ['03', 'Method'],
              ['04', 'Record'],
              ['05', 'Biography'],
              ['06', 'Contact'],
            ].map(([n, label, active]) => (
              <div key={n} style={{
                display: 'flex', gap: 10,
                color: active ? wfColors.ink : wfColors.muted,
                borderLeft: active ? `2px solid ${wfColors.accent}` : `2px solid transparent`,
                paddingLeft: 10,
              }}>
                <span>{n}</span>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em' }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, fontFamily: mono, fontSize: 9, letterSpacing: '0.22em', color: wfColors.muted, marginBottom: 12 }}>CONTACT</div>
          <div style={{ fontSize: 11, lineHeight: 1.6, color: '#3a3530', fontFamily: mono }}>
            michelle.wolff57<br/>@gmail.com<br/><br/>
            000-000-0000<br/>
            Los Angeles, CA
          </div>

          <div style={{
            marginTop: 28, padding: '10px 12px',
            border: `1.4px solid ${wfColors.ink}`,
            background: wfColors.ink, color: off,
            fontFamily: mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
            textAlign: 'center',
          }}>
            Book a call →
          </div>
        </div>

        {/* CONTENT COLUMN */}
        <div>
          {/* 00 — COVER */}
          <div style={{ padding: '56px 48px', borderBottom: `1px solid ${wfColors.line}`, position: 'relative' }}>
            <div style={{ display: 'flex', gap: 16, fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted, marginBottom: 24 }}>
              <span>§ 00</span>
              <span>COVER</span>
              <span style={{ flex: 1, borderBottom: `1px solid ${wfColors.line}`, alignSelf: 'flex-end', marginBottom: 6 }} />
              <span>1 / 6</span>
            </div>
            <div style={{
              fontFamily: serif, fontSize: 84, lineHeight: 0.95,
              letterSpacing: '-0.025em', fontWeight: 400,
              maxWidth: 880,
            }}>
              A consulting practice<br/>
              for <em style={{ color: wfColors.accent }}>relationship-driven</em><br/>
              revenue.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginTop: 56, borderTop: `1px solid ${wfColors.line}`, paddingTop: 28 }}>
              <div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 8 }}>FOR</div>
                <div style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.4 }}>
                  Mission-driven founders & nonprofits ready to scale.
                </div>
              </div>
              <div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 8 }}>FOUNDER</div>
                <div style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.4 }}>
                  Michelle Wolff, ex-Oracle Account Director.
                </div>
              </div>
              <div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 8 }}>BASED</div>
                <div style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.4 }}>
                  Los Angeles, CA. Working internationally.
                </div>
              </div>
            </div>
            <Note style={{ position: 'absolute', right: 48, top: 24 }} rotate={2}>
              ↓ archival/library feel —<br/>like a portfolio monograph
            </Note>
          </div>

          {/* 01 — PRACTICE */}
          <div style={{ padding: '64px 48px', borderBottom: `1px solid ${wfColors.line}`, display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: 40 }}>
            <div>
              <div style={{ display: 'flex', gap: 16, fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted, marginBottom: 8 }}>
                <span>§ 01</span>
              </div>
              <div style={{ fontFamily: serif, fontSize: 36, lineHeight: 1, letterSpacing: '-0.015em' }}>Practice</div>
            </div>
            <div>
              <div style={{ fontFamily: serif, fontSize: 28, lineHeight: 1.25, color: '#2a2520' }}>
                Michelle Wolff Consulting helps purpose-driven organizations
                build revenue, partnerships, and visibility through strategic
                sales consulting and authentic relationship building.
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 36, borderTop: `1px solid ${wfColors.line}`, paddingTop: 18 }}>
                {['Integrity', 'Human Connection', 'Results', 'Innovation', 'Collaboration', 'Impact'].map(v => (
                  <div key={v} style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', borderLeft: `2px solid ${wfColors.accent}`, paddingLeft: 10 }}>{v}</div>
                ))}
              </div>
            </div>
          </div>

          {/* 02 — SERVICES (as a table) */}
          <div style={{ padding: '64px 48px 24px 48px', borderBottom: `1px solid ${wfColors.line}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted }}>§ 02</div>
              <div style={{ fontFamily: serif, fontSize: 36, letterSpacing: '-0.015em' }}>Services</div>
              <div style={{ flex: 1, borderBottom: `1px solid ${wfColors.line}`, marginBottom: 8 }} />
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted }}>4 OFFERINGS</div>
            </div>

            {/* Table header */}
            <div style={{
              display: 'grid', gridTemplateColumns: '60px 1.2fr 0.6fr 2fr 60px',
              gap: 16, padding: '10px 0',
              fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: wfColors.muted,
              borderTop: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}`,
            }}>
              <div>No.</div>
              <div>Offering</div>
              <div>Type</div>
              <div>Includes</div>
              <div></div>
            </div>
            {[
              ['001', 'Strategic Sales Consulting', 'Primary', 'Sales process audit · prospect strategy · pipeline · revenue forecasting · scripts · team coaching'],
              ['002', 'Brand Partnerships', 'Add-on', 'Sponsorships · brand identity · affiliate partnerships · strategic collaborations · website analysis'],
              ['003', 'Awareness & Fundraising', 'Add-on / NP', 'Donor outreach · sponsorship packages · campaign messaging · community engagement'],
              ['004', 'Done-For-You Outreach', 'Add-on / Exec', 'Cold email · LinkedIn prospecting · warm introductions · follow-up systems · appointment setting'],
            ].map(([n, name, type, includes]) => (
              <div key={n} style={{
                display: 'grid', gridTemplateColumns: '60px 1.2fr 0.6fr 2fr 60px',
                gap: 16, padding: '22px 0',
                borderBottom: `1px solid ${wfColors.line}`,
                alignItems: 'baseline',
              }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: wfColors.muted }}>{n}</div>
                <div style={{ fontFamily: serif, fontSize: 22, lineHeight: 1.1 }}>{name}</div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: wfColors.accent }}>{type}</div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: '#2a2520' }}>{includes}</div>
                <div style={{ fontFamily: mono, fontSize: 13, color: wfColors.ink, textAlign: 'right' }}>→</div>
              </div>
            ))}
          </div>

          {/* 03 — METHOD (process diagram) */}
          <div style={{ padding: '64px 48px', borderBottom: `1px solid ${wfColors.line}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted }}>§ 03</div>
              <div style={{ fontFamily: serif, fontSize: 36, letterSpacing: '-0.015em' }}>Method</div>
              <div style={{ flex: 1, borderBottom: `1px solid ${wfColors.line}`, marginBottom: 8 }} />
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted }}>90-DAY ENGAGEMENT</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: `1px solid ${wfColors.line}`, borderLeft: `1px solid ${wfColors.line}` }}>
              {[
                ['I.', 'Discover', 'Audit current sales motion, pipeline gaps, brand alignment.'],
                ['II.', 'Design', 'Build strategy, scripts, prospect lists, partnership map.'],
                ['III.', 'Deploy', 'Run outreach. Open doors. Make warm intros.'],
                ['IV.', 'Decide', 'Quarterly review. Evolve scope based on outcomes.'],
              ].map(([num, title, desc]) => (
                <div key={num} style={{
                  borderRight: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}`,
                  padding: 22, minHeight: 180, position: 'relative',
                }}>
                  <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 18, color: wfColors.accent }}>{num}</div>
                  <div style={{ fontFamily: serif, fontSize: 24, marginTop: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: '#3a3530', marginTop: 12 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 04 — RECORD (metrics + clients) */}
          <div style={{ padding: '64px 48px', borderBottom: `1px solid ${wfColors.line}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted }}>§ 04</div>
              <div style={{ fontFamily: serif, fontSize: 36, letterSpacing: '-0.015em' }}>Record</div>
              <div style={{ flex: 1, borderBottom: `1px solid ${wfColors.line}`, marginBottom: 8 }} />
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted }}>2017—2026</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, borderLeft: `1px solid ${wfColors.line}`, borderTop: `1px solid ${wfColors.line}` }}>
              {[
                ['225%', 'PEAK QUOTA — FY19', 'Cloud 304% · License 209%'],
                ['10×', 'TERRITORY GROWTH', '$10K → $100K MRR'],
                ['2.4M', 'PEOPLE REACHED', 'GC Foundation awareness'],
                ['$12K+', 'FUNDRAISED', 'JWP community giving'],
              ].map(([n, l, sub]) => (
                <div key={l} style={{ padding: 24, borderRight: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}` }}>
                  <div style={{ fontFamily: serif, fontSize: 56, lineHeight: 0.9, letterSpacing: '-0.03em' }}>{n}</div>
                  <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.accent, marginTop: 12 }}>{l}</div>
                  <div style={{ fontSize: 12, color: wfColors.muted, marginTop: 4 }}>{sub}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted, marginBottom: 14 }}>SELECTED ACCOUNTS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, borderTop: `1px solid ${wfColors.line}`, borderLeft: `1px solid ${wfColors.line}` }}>
              {['Oracle', 'Guitar Center', 'Gap Inc.', 'NVIDIA', 'AMD', 'Google', 'Dell', 'Micron'].map(c => (
                <div key={c} style={{
                  flex: '1 0 25%', padding: '24px 16px',
                  borderRight: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}`,
                  fontFamily: serif, fontSize: 18, textAlign: 'center',
                }}>{c}</div>
              ))}
            </div>
          </div>

          {/* 05 — BIOGRAPHY (with portrait) */}
          <div style={{ padding: '64px 48px', borderBottom: `1px solid ${wfColors.line}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted }}>§ 05</div>
              <div style={{ fontFamily: serif, fontSize: 36, letterSpacing: '-0.015em' }}>Biography</div>
              <div style={{ flex: 1, borderBottom: `1px solid ${wfColors.line}`, marginBottom: 8 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1fr', gap: 40, alignItems: 'start' }}>
              <div>
                <ImgBox label="Headshot 1 · plate I" h={380} />
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.15em', color: wfColors.muted, marginTop: 10, textTransform: 'uppercase' }}>
                  Plate I — Michelle Wolff, 2026
                </div>
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.75, color: '#2a2520' }}>
                <p style={{ margin: 0 }}>Michelle Wolff is the founder of Michelle Wolff Consulting, a Los Angeles-based practice helping mission-driven organizations grow revenue through strategic sales and relationship-led partnerships.</p>
                <p style={{ marginTop: 14 }}>Prior to founding the practice she spent eight years at Oracle, progressing across six roles from Business Development Representative to Account Director on the AI & OCI Infrastructure team. She closed multi-million-dollar deals across Gap Inc., Guitar Center, and managed strategic AI partnerships with NVIDIA and AMD.</p>
                <p style={{ marginTop: 14 }}>She holds a B.S. in Corporate Communication from The University of Texas at Austin, where she also studied Music and McCombs Business Foundations. She co-founded JWP, a community giving organization, and serves on the Designing Dreams Committee in San Diego.</p>
              </div>
            </div>
          </div>

          {/* CTA / 06 */}
          <div style={{ padding: '80px 48px', background: wfColors.ink, color: off }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: '#888' }}>§ 06</div>
              <div style={{ fontFamily: serif, fontSize: 36, letterSpacing: '-0.015em' }}>Contact</div>
              <div style={{ flex: 1, borderBottom: `1px solid #444`, marginBottom: 8 }} />
            </div>
            <div style={{ fontFamily: serif, fontSize: 72, lineHeight: 0.95, letterSpacing: '-0.025em', maxWidth: 760 }}>
              Begin with a <em style={{ color: wfColors.accent }}>30-minute conversation.</em>
            </div>
            <div style={{ marginTop: 36, display: 'flex', gap: 16, alignItems: 'center' }}>
              <span style={{ padding: '14px 24px', background: off, color: wfColors.ink, fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Book a call →
              </span>
              <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.15em', color: '#aaa', textTransform: 'uppercase' }}>
                michelle.wolff57@gmail.com · 000-000-0000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const D4_Contact = () => {
  const serif = '"EB Garamond", Georgia, serif';
  const body = '"Inter", system-ui, sans-serif';
  const mono = '"JetBrains Mono", ui-monospace, monospace';
  const off = '#f4f1ea';

  return (
    <div style={{ background: off, color: wfColors.ink, fontFamily: body, minHeight: '100%' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr 180px',
        borderBottom: `1px solid ${wfColors.line}`,
        fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: wfColors.muted,
      }}>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>MWC / 2026</div>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>§ 06 — Contact</div>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>Form + Calendar</div>
        <div style={{ padding: '14px 20px', borderRight: `1px solid ${wfColors.line}` }}>Response &lt; 24h</div>
        <div style={{ padding: '14px 20px', textAlign: 'right' }}>← Index</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr' }}>
        <div style={{ borderRight: `1px solid ${wfColors.line}`, padding: '24px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <LogoMark size={28} />
            <div style={{ fontFamily: serif, fontSize: 13, lineHeight: 1.1 }}>Michelle<br/>Wolff</div>
          </div>
          <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.22em', color: wfColors.muted, marginBottom: 12 }}>INDEX</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: mono, fontSize: 11 }}>
            {[['00','Cover'],['01','Practice'],['02','Services'],['03','Method'],['04','Record'],['05','Biography'],['06','Contact', true]].map(([n,l,a]) => (
              <div key={n} style={{
                display: 'flex', gap: 10, color: a ? wfColors.ink : wfColors.muted,
                borderLeft: a ? `2px solid ${wfColors.accent}` : `2px solid transparent`,
                paddingLeft: 10,
              }}><span>{n}</span><span style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>{l}</span></div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ padding: '48px 48px 24px 48px', borderBottom: `1px solid ${wfColors.line}` }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.22em', color: wfColors.muted, marginBottom: 14 }}>§ 06 · CONTACT</div>
            <div style={{ fontFamily: serif, fontSize: 84, lineHeight: 0.92, letterSpacing: '-0.025em', maxWidth: 900 }}>
              Schedule a <em style={{ color: wfColors.accent }}>conversation.</em>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${wfColors.line}` }}>
            {/* Calendar */}
            <div style={{ borderRight: `1px solid ${wfColors.line}`, padding: 36 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 18 }}>FIG. A — AVAILABILITY</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontFamily: serif, fontSize: 22 }}>
                <span>November 2026</span>
                <span style={{ fontFamily: mono, fontSize: 11, color: wfColors.muted }}>‹ →</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', borderTop: `1px solid ${wfColors.line}`, borderLeft: `1px solid ${wfColors.line}` }}>
                {['S','M','T','W','T','F','S'].map((d, i) => (
                  <div key={i} style={{ fontFamily: mono, fontSize: 9, color: wfColors.muted, textAlign: 'center', padding: '8px 0', borderRight: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}` }}>{d}</div>
                ))}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} style={{
                    aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: mono, fontSize: 11,
                    borderRight: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}`,
                    background: [9, 11, 16, 17, 23, 24].includes(i) ? wfColors.accent : 'transparent',
                    color: [9, 11, 16, 17, 23, 24].includes(i) ? off : wfColors.ink,
                    fontWeight: i === 11 ? 700 : 400,
                  }}>{i + 1}</div>
                ))}
              </div>
              <div style={{ marginTop: 24, fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 10 }}>TIMES · TUE NOV 12</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: `1px solid ${wfColors.line}`, borderLeft: `1px solid ${wfColors.line}` }}>
                {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:00 PM'].map((t, i) => (
                  <div key={t} style={{
                    padding: '14px 10px', textAlign: 'center',
                    fontFamily: mono, fontSize: 11,
                    borderRight: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}`,
                    background: i === 1 ? wfColors.ink : 'transparent',
                    color: i === 1 ? off : wfColors.ink,
                  }}>{t}</div>
                ))}
              </div>
            </div>

            {/* Inquiry form */}
            <div style={{ padding: 36 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 18 }}>FIG. B — INQUIRY</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {[
                  ['Name', '________________________'],
                  ['Organization', '________________________'],
                  ['Email', '________@________'],
                  ['Type', '◯ Business    ◯ Nonprofit    ◯ Other'],
                  ['Stage', '◯ Audit    ◯ Strategy    ◯ Execution'],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 14, alignItems: 'baseline', borderBottom: `1px solid ${wfColors.line}`, paddingBottom: 8 }}>
                    <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, textTransform: 'uppercase' }}>{l}</div>
                    <div style={{ fontFamily: mono, fontSize: 12, color: '#888' }}>{v}</div>
                  </div>
                ))}
                <div style={{ borderBottom: `1px solid ${wfColors.line}`, paddingBottom: 14 }}>
                  <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, textTransform: 'uppercase', marginBottom: 10 }}>Brief Description</div>
                  <TextLines lines={4} lastWidth="50%" height={6} color="#d6d2c8" />
                </div>
              </div>
              <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
                <span style={{ padding: '12px 22px', background: wfColors.ink, color: off, fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Submit →
                </span>
                <span style={{ padding: '12px 22px', border: `1.4px solid ${wfColors.line}`, fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Email instead
                </span>
              </div>
            </div>
          </div>

          {/* Colophon */}
          <div style={{ padding: '36px 48px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, fontFamily: mono, fontSize: 10, letterSpacing: '0.16em', color: wfColors.muted, textTransform: 'uppercase' }}>
            <div>
              EMAIL<br/>
              <span style={{ fontFamily: serif, fontSize: 15, color: wfColors.ink, letterSpacing: 0, textTransform: 'none' }}>michelle.wolff57@gmail.com</span>
            </div>
            <div>
              PHONE<br/>
              <span style={{ fontFamily: serif, fontSize: 15, color: wfColors.ink, letterSpacing: 0, textTransform: 'none' }}>000-000-0000</span>
            </div>
            <div>
              LOCATION<br/>
              <span style={{ fontFamily: serif, fontSize: 15, color: wfColors.ink, letterSpacing: 0, textTransform: 'none' }}>Los Angeles, CA</span>
            </div>
            <div>
              RESPONSE<br/>
              <span style={{ fontFamily: serif, fontSize: 15, color: wfColors.ink, letterSpacing: 0, textTransform: 'none' }}>&lt; 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { D4_Home, D4_Contact });
