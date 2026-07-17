// Direction 2 — "The Statement"
// Manifesto/type-led, massive metrics as display elements, sparse imagery.

const D2_Home = () => {
  const display = '"Fraunces", "Crimson Pro", Georgia, serif';
  const body = '"Inter Tight", "Inter", system-ui, sans-serif';
  const mono = 'ui-monospace, monospace';

  return (
    <div style={{ background: wfColors.ink, color: wfColors.paper, fontFamily: body, paddingBottom: 60 }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 56px', borderBottom: `1px solid #2a2a2a`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={32} inverted={true} />
          <div style={{ fontFamily: display, fontSize: 14, letterSpacing: '0.04em' }}>
            MICHELLE&nbsp;WOLFF
          </div>
        </div>
        <div style={{ display: 'flex', gap: 22, fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#bbb' }}>
          <span>Manifesto</span><span>Services</span><span>Results</span><span>About</span>
          <span style={{ background: wfColors.paper, color: wfColors.ink, padding: '6px 14px' }}>Book → </span>
        </div>
      </div>

      {/* HERO — manifesto statement */}
      <div style={{ padding: '120px 56px 100px 56px', position: 'relative', borderBottom: `1px solid #2a2a2a` }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: '#888', marginBottom: 32 }}>
          POSITIONING / 2026
        </div>
        <div style={{ fontFamily: display, fontSize: 92, lineHeight: 0.95, letterSpacing: '-0.035em', fontWeight: 300, maxWidth: 1100 }}>
          I help mission-driven founders<br />
          <span style={{ color: '#666' }}>and nonprofits</span> who are tired of<br />
          <span style={{ fontStyle: 'italic', color: wfColors.accent }}>inconsistent revenue</span><br />
          build partnerships, sales systems,<br />
          and momentum that <em>actually&nbsp;scales.</em>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 26px', background: wfColors.paper, color: wfColors.ink,
            fontFamily: body, fontSize: 14, fontWeight: 500,
          }}>
            Book a discovery call <span>→</span>
          </span>
          <span style={{ fontFamily: mono, fontSize: 11, color: '#888', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Free · 30 min · zero pitch
          </span>
        </div>
        <Note style={{ position: 'absolute', right: 56, top: 80, color: '#ffd2a8' }} rotate={4}>
          ← massive type IS<br />the hero. portrait<br />intentionally minimal.
        </Note>
      </div>

      {/* INSET HEADSHOT BAND */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.4fr 1fr 0.4fr', borderBottom: `1px solid #2a2a2a` }}>
        <div style={{ borderRight: `1px solid #2a2a2a`, padding: 40, display: 'flex', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: '#888' }}>FOUNDER</div>
            <div style={{ fontFamily: display, fontSize: 22, marginTop: 8 }}>Michelle Wolff</div>
            <div style={{ fontSize: 13, color: '#aaa', marginTop: 6 }}>Los Angeles · ex-Oracle</div>
          </div>
        </div>
        <div>
          <ImgBox dark label="Headshot 1 — wide crop, editorial" h={320} />
        </div>
        <div style={{ borderLeft: `1px solid #2a2a2a`, padding: 40, display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: '#888' }}>
            FIG. 01 / 2026
          </div>
        </div>
      </div>

      {/* METRICS — massive display numbers */}
      <div style={{ padding: '100px 0 60px 0', borderBottom: `1px solid #2a2a2a` }}>
        <div style={{ padding: '0 56px', marginBottom: 56 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: '#888' }}>THE RECEIPTS</div>
          <div style={{ fontFamily: display, fontSize: 36, marginTop: 12, fontStyle: 'italic', color: '#ccc' }}>
            Eight years. Six promotions. One thesis: relationships compound.
          </div>
        </div>
        {[
          ['225%', 'peak quota attainment', 'FY19 at Oracle — Cloud 304%, License 209%'],
          ['10×', 'territory growth', '$10K MRR to $100K MRR over 24 months'],
          ['2.4M', 'people reached', 'awareness lift for Guitar Center Foundation'],
          ['$12K+', 'community fundraised', 'co-founded giving organization JWP'],
        ].map(([n, l, sub], i) => (
          <div key={n} style={{
            borderTop: i === 0 ? `1px solid #2a2a2a` : 'none',
            borderBottom: `1px solid #2a2a2a`,
            display: 'grid', gridTemplateColumns: '0.5fr 1fr 1fr', alignItems: 'center',
            padding: '36px 56px',
          }}>
            <div style={{ fontFamily: mono, fontSize: 11, color: '#666', letterSpacing: '0.18em' }}>0{i+1}</div>
            <div style={{ fontFamily: display, fontSize: 120, lineHeight: 0.85, letterSpacing: '-0.04em', fontWeight: 300 }}>{n}</div>
            <div>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ccc' }}>{l}</div>
              <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* SERVICES — single column list, type-led */}
      <div style={{ padding: '100px 56px 80px 56px' }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: '#888', marginBottom: 18 }}>
          WHAT I DO / SERVICES
        </div>
        <div style={{ fontFamily: display, fontSize: 64, lineHeight: 1, letterSpacing: '-0.025em', marginBottom: 56, fontWeight: 300 }}>
          One offer. Three<br />
          extensions. <em style={{ color: wfColors.accent }}>Pick your fit.</em>
        </div>
        {[
          ['Strategic Sales Consulting', 'PRIMARY', 'The foundation. Audits, prospect strategy, pipeline, forecasting, scripts, team coaching.'],
          ['+ Brand Partnerships', 'ADD-ON', 'Sponsorships, brand identity, affiliates, strategic collaborations, corporate relationships.'],
          ['+ Awareness & Fundraising', 'ADD-ON · NONPROFITS', 'Donor outreach, sponsorship packages, campaign messaging, community engagement.'],
          ['+ Done-For-You Outreach', 'ADD-ON · EXECUTION', 'I run the campaigns. Cold email, LinkedIn, warm intros, follow-up systems, appointment setting.'],
        ].map(([t, tag, body]) => (
          <div key={t} style={{
            borderTop: `1px solid #2a2a2a`,
            padding: '32px 0',
            display: 'grid', gridTemplateColumns: '1.4fr 0.4fr 1fr 40px',
            gap: 28, alignItems: 'baseline',
          }}>
            <div style={{ fontFamily: display, fontSize: 36, letterSpacing: '-0.015em', lineHeight: 1.05 }}>{t}</div>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.accent }}>{tag}</div>
            <div style={{ fontSize: 14, color: '#bbb', lineHeight: 1.55 }}>{body}</div>
            <div style={{ fontSize: 24, color: '#666', textAlign: 'right' }}>→</div>
          </div>
        ))}
        <div style={{ borderTop: `1px solid #2a2a2a` }} />
      </div>

      {/* PULL QUOTE */}
      <div style={{ padding: '120px 56px', borderTop: `1px solid #2a2a2a`, borderBottom: `1px solid #2a2a2a`, background: '#0e0e0e' }}>
        <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 56, lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: 1000, fontWeight: 300 }}>
          "I don't just build strategy — <span style={{ color: wfColors.accent }}>I open doors, make introductions, and help close the deal.</span>"
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#888', marginTop: 28 }}>
          — Michelle Wolff
        </div>
      </div>

      {/* ABOUT — single column long-form */}
      <div style={{ padding: '100px 56px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: '#888', marginBottom: 18 }}>
            ABOUT
          </div>
          <div style={{ fontFamily: display, fontSize: 64, lineHeight: 0.98, letterSpacing: '-0.025em', fontWeight: 300 }}>
            Built in the field. Sharpened at Oracle.
          </div>
        </div>
        <div style={{ fontSize: 17, lineHeight: 1.7, color: '#d8d4cc' }}>
          <p style={{ margin: 0 }}>Michelle discovered her passion for sales at her grandmother's showroom at the Dallas World Trade Center — booking appointments, building relationships, and learning that business is, in the end, about people.</p>
          <p style={{ marginTop: 18 }}>At Oracle she progressed from BDR to Account Director across six roles in eight years, achieving 225% of quota and earning President's Club. She closed multi-million-dollar deals with Gap, Guitar Center, and managed strategic AI partnerships with NVIDIA and AMD.</p>
          <p style={{ marginTop: 18 }}>Today she brings that pedigree to founders and nonprofits who want sales systems that feel genuine and partnerships that compound over years, not quarters.</p>
        </div>
      </div>

      {/* CTA FOOTER — massive */}
      <div style={{ padding: '140px 56px 80px 56px', borderTop: `1px solid #2a2a2a`, background: wfColors.accent, color: wfColors.ink }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', marginBottom: 24 }}>
          BOOK A CALL
        </div>
        <div style={{ fontFamily: display, fontSize: 120, lineHeight: 0.88, letterSpacing: '-0.045em', fontWeight: 300 }}>
          Let's <em>build</em><br />
          something <br />
          worth selling.
        </div>
        <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ padding: '14px 26px', background: wfColors.ink, color: wfColors.paper, fontSize: 14 }}>
            Book a 30-min discovery call →
          </span>
          <span style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.16em' }}>
            michelle.wolff57@gmail.com · 000-000-0000
          </span>
        </div>
      </div>
    </div>
  );
};

const D2_Contact = () => {
  const display = '"Fraunces", Georgia, serif';
  const body = '"Inter Tight", "Inter", system-ui, sans-serif';
  const mono = 'ui-monospace, monospace';

  return (
    <div style={{ background: wfColors.ink, color: wfColors.paper, fontFamily: body, minHeight: '100%' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 56px', borderBottom: `1px solid #2a2a2a`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={32} inverted={true} />
          <div style={{ fontFamily: display, fontSize: 14, letterSpacing: '0.04em' }}>MICHELLE WOLFF</div>
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#bbb' }}>
          ← back
        </div>
      </div>

      <div style={{ padding: '80px 56px 40px 56px' }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.3em', color: '#888', marginBottom: 24 }}>
          CONTACT / BOOKING
        </div>
        <div style={{ fontFamily: display, fontSize: 96, lineHeight: 0.92, letterSpacing: '-0.035em', fontWeight: 300, maxWidth: 1100 }}>
          Pick a time.<br />
          <em style={{ color: wfColors.accent }}>I'll see you there.</em>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: `1px solid #2a2a2a`, minHeight: 540 }}>
        <div style={{ padding: '48px 56px', borderRight: `1px solid #2a2a2a` }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', color: '#888' }}>STEP 01 — PICK A TIME</div>
          <div style={{ marginTop: 22, border: `1.5px dashed #555`, padding: 22 }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: '#666', marginBottom: 16 }}>
              [ EMBED · CALENDLY ]
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 5 }}>
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} style={{
                  aspectRatio: '1', border: `1px solid #333`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: mono, fontSize: 11,
                  background: [10, 12, 18, 19, 24, 25, 31].includes(i) ? wfColors.accent : 'transparent',
                  color: [10, 12, 18, 19, 24, 25, 31].includes(i) ? wfColors.ink : '#aaa',
                }}>
                  {i + 1 < 32 ? i + 1 : ''}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: '#888' }}>TIMES — TUE NOV 19</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
              {['9:00', '10:30', '1:00', '2:30', '4:00'].map((t, i) => (
                <div key={t} style={{
                  padding: '10px 16px', border: `1px solid #444`,
                  fontFamily: mono, fontSize: 12,
                  background: i === 2 ? wfColors.paper : 'transparent',
                  color: i === 2 ? wfColors.ink : '#ddd',
                }}>{t} PM</div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: '48px 56px' }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.18em', color: '#888' }}>STEP 02 — CONTEXT</div>
          <div style={{ fontFamily: display, fontSize: 26, marginTop: 14, color: '#ddd', maxWidth: 380 }}>
            Help me prep. Three quick fields.
          </div>
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['Your name', '__________'],
              ['Email', '__________@__________'],
              ['What are you trying to fix?', '(2–3 sentences)'],
            ].map(([label, placeholder], i) => (
              <div key={label}>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: '#888', marginBottom: 6, textTransform: 'uppercase' }}>{label}</div>
                <div style={{
                  border: `1px solid #444`, padding: '12px 14px',
                  fontFamily: body, fontSize: 13, color: '#666',
                  minHeight: i === 2 ? 80 : 'auto',
                }}>
                  {placeholder}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}>
            <span style={{ padding: '14px 26px', background: wfColors.paper, color: wfColors.ink, fontSize: 14 }}>
              Confirm booking →
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: '60px 56px', borderTop: `1px solid #2a2a2a`, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
        {[
          ['Email', 'michelle.wolff57@gmail.com'],
          ['Phone', '000-000-0000'],
          ['Location', 'Los Angeles, CA'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: '#888' }}>{k.toUpperCase()}</div>
            <div style={{ fontFamily: display, fontSize: 22, marginTop: 8 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { D2_Home, D2_Contact });
