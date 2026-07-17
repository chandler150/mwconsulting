// Direction 3 — "Personal & Warm"
// Story-first, two-column reads, friendlier, more photos throughout.

const D3_Home = () => {
  const display = '"Cormorant Garamond", "Crimson Pro", Georgia, serif';
  const body = '"Inter", system-ui, sans-serif';
  const mono = 'ui-monospace, monospace';
  const cream = '#f6f1e7';
  const peach = '#e8d3c1';

  return (
    <div style={{ background: cream, color: wfColors.ink, fontFamily: body, paddingBottom: 60 }}>
      {/* NAV */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 48px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={36} />
          <div>
            <div style={{ fontFamily: display, fontSize: 18, lineHeight: 1, fontStyle: 'italic' }}>Michelle Wolff</div>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.22em', color: wfColors.muted, marginTop: 2 }}>CONSULTING</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 13, alignItems: 'center' }}>
          <span>Hi, I'm Michelle</span>
          <span>What I do</span>
          <span>My story</span>
          <span>Wins</span>
          <span style={{
            padding: '10px 18px', background: wfColors.ink, color: cream,
            borderRadius: 999, fontSize: 12, letterSpacing: '0.04em',
          }}>
            Let's chat →
          </span>
        </div>
      </div>

      {/* HERO — warm intro */}
      <div style={{ padding: '40px 48px 80px 48px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 24, color: wfColors.muted, marginBottom: 12 }}>
            Hi there —
          </div>
          <div style={{ fontFamily: display, fontSize: 72, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 400 }}>
            I'm Michelle.<br />
            I help good people<br />
            <span style={{ fontStyle: 'italic', color: wfColors.accent }}>build great pipelines.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 16, lineHeight: 1.6, maxWidth: 480, color: '#3a3530' }}>
            Strategic sales consulting for founders and nonprofits who'd rather
            build real relationships than blast cold emails into the void. Nine
            years at Oracle. Now in your corner.
          </div>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{
              padding: '14px 24px', background: wfColors.ink, color: cream,
              borderRadius: 999, fontSize: 14,
            }}>
              Book a free chat →
            </span>
            <span style={{ fontSize: 13, color: wfColors.muted }}>or just say hi ↓</span>
          </div>
          <Arrow style={{ position: 'absolute', right: -20, bottom: 40 }} w={120} h={80} />
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', zIndex: 2, transform: 'rotate(-2deg)', boxShadow: '6px 6px 0 rgba(0,0,0,0.12)' }}>
            <ImgBox label="Headshot 1 — friendly portrait" h={420} style={{ background: peach, borderColor: wfColors.line }} />
          </div>
          <div style={{ position: 'absolute', top: -20, right: -10, fontFamily: display, fontStyle: 'italic', fontSize: 14, color: wfColors.accent }}>
            ⟶ hi!
          </div>
          <Note style={{ position: 'absolute', bottom: -36, left: 20 }} rotate={-4}>
            ↑ casual tilt — feels like a polaroid
          </Note>
        </div>
      </div>

      {/* WIDE PHOTO BAND */}
      <div style={{ padding: '0 48px', marginBottom: 80 }}>
        <ImgBox label="Lifestyle photo — Michelle at an event, with a client, or speaking" h={260}
          style={{ background: peach }} />
        <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.15em', color: wfColors.muted, marginTop: 8, textTransform: 'uppercase' }}>
          ↑ wide lifestyle band — humanizes things
        </div>
      </div>

      {/* WHAT I DO — friendly cards */}
      <div style={{ padding: '0 48px 80px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.22em', color: wfColors.muted, textTransform: 'uppercase' }}>What I do</div>
          <div style={{ fontFamily: display, fontSize: 52, marginTop: 12, letterSpacing: '-0.015em', lineHeight: 1 }}>
            A little menu of <span style={{ fontStyle: 'italic', color: wfColors.accent }}>how I can help.</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
          {[
            { num: '01', title: 'Strategic Sales Consulting', tag: 'the main thing', body: 'We audit what you have, design what you need, and build pipelines that don\'t depend on luck. Process audits, prospect strategy, scripts, coaching — the works.', featured: true },
            { num: '02', title: 'Brand Partnerships', tag: 'add-on', body: 'Sponsorships, affiliates, strategic collabs, brand identity. I help you land the right rooms and the right relationships.' },
            { num: '03', title: 'Awareness & Fundraising', tag: 'for nonprofits', body: 'Donor outreach, sponsorship packages, campaign messaging, and community engagement that actually moves the needle.' },
            { num: '04', title: 'Done-For-You Outreach', tag: 'I run it', body: 'You\'re busy. I\'ll handle the cold emails, LinkedIn prospecting, warm intros, follow-ups, and appointment setting.' },
          ].map(c => (
            <div key={c.num} style={{
              background: c.featured ? wfColors.ink : wfColors.paper,
              color: c.featured ? cream : wfColors.ink,
              padding: 32, borderRadius: 16,
              border: `1.5px solid ${wfColors.line}`,
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: `1.4px solid ${c.featured ? cream : wfColors.line}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: display, fontStyle: 'italic', fontSize: 16,
                }}>{c.num}</div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.featured ? '#fcd5b6' : wfColors.accent }}>
                  {c.tag}
                </div>
              </div>
              <div style={{ fontFamily: display, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.01em' }}>{c.title}</div>
              <div style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6, color: c.featured ? '#d8d4cc' : '#3a3530' }}>{c.body}</div>
              <div style={{ marginTop: 24, fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: c.featured ? cream : wfColors.ink, display: 'flex', alignItems: 'center', gap: 8 }}>
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROOF / WINS — friendly metric tiles */}
      <div style={{ padding: '64px 48px', background: peach, borderTop: `1px solid ${wfColors.line}`, borderBottom: `1px solid ${wfColors.line}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.22em', color: '#7a6a5a', textTransform: 'uppercase' }}>Wins</div>
            <div style={{ fontFamily: display, fontSize: 44, lineHeight: 1, marginTop: 10, letterSpacing: '-0.01em' }}>
              A few things I'm <span style={{ fontStyle: 'italic' }}>proud of.</span>
            </div>
          </div>
          <Note rotate={3} color={wfColors.accent}>made warm + tactile</Note>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {[
            ['225%', 'of quota at Oracle, FY19'],
            ['10×', 'territory growth, $10K → $100K MRR'],
            ['2.4M', 'reached for Guitar Center Foundation'],
            ['$12K+', 'fundraised through JWP events'],
          ].map(([n, l]) => (
            <div key={n} style={{
              background: cream, border: `1.5px solid ${wfColors.line}`,
              borderRadius: 12, padding: 28,
            }}>
              <div style={{ fontFamily: display, fontSize: 64, lineHeight: 0.9, letterSpacing: '-0.03em' }}>{n}</div>
              <div style={{ fontSize: 13, marginTop: 12, color: '#3a3530', lineHeight: 1.4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MY STORY — long-form with second photo */}
      <div style={{ padding: '80px 48px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 20 }}>
          <div style={{ transform: 'rotate(2deg)', boxShadow: '6px 6px 0 rgba(0,0,0,0.1)' }}>
            <ImgBox label="Headshot 2 — outdoors, candid" h={460} style={{ background: peach }} />
          </div>
          <div style={{ marginTop: 18, fontFamily: display, fontStyle: 'italic', fontSize: 15, color: wfColors.muted, textAlign: 'center' }}>
            "business is, in the end, about people."
          </div>
        </div>
        <div>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.22em', color: wfColors.muted, textTransform: 'uppercase' }}>My story</div>
          <div style={{ fontFamily: display, fontSize: 52, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 14 }}>
            From an opera stage to <span style={{ fontStyle: 'italic', color: wfColors.accent }}>enterprise sales.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 16, lineHeight: 1.75, color: '#2a2520' }}>
            <p style={{ margin: 0 }}>I grew up in Dallas, working in my grandmother's showroom at the Trade Center — booking appointments, building relationships with manufacturers and buyers. I learned early that <em>every</em> deal is a relationship in disguise.</p>
            <p style={{ marginTop: 16 }}>I went to UT Austin on an opera scholarship. Vocal nodules ended that plan; I pivoted into Corporate Communications and discovered I loved selling almost as much as I loved singing.</p>
            <p style={{ marginTop: 16 }}>Then nine years at Oracle. Six roles. President's Club. Two-and-a-quarter times quota. Multi-million-dollar deals with Gap, Guitar Center, NVIDIA, and AMD. Along the way I co-founded a giving organization in San Diego and fundraised $12K+ for community causes.</p>
            <p style={{ marginTop: 16 }}>Now I'm taking everything I learned and bringing it to founders and nonprofits who deserve sales systems that feel <em>genuine</em>.</p>
          </div>
        </div>
      </div>

      {/* VALUES — soft chips */}
      <div style={{ padding: '40px 48px 80px 48px' }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.22em', color: wfColors.muted, textTransform: 'uppercase', marginBottom: 16 }}>What I believe in</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {['Integrity', 'Human Connection', 'Results', 'Innovation', 'Collaboration', 'Impact'].map(v => (
            <div key={v} style={{
              padding: '10px 20px', borderRadius: 999,
              border: `1.4px solid ${wfColors.line}`,
              fontFamily: display, fontStyle: 'italic', fontSize: 18,
            }}>{v}</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ margin: '0 48px', background: wfColors.ink, color: cream, borderRadius: 24, padding: '64px 56px', textAlign: 'center' }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.22em', color: '#fcd5b6' }}>SAY HI</div>
        <div style={{ fontFamily: display, fontSize: 60, marginTop: 14, lineHeight: 1, letterSpacing: '-0.02em' }}>
          Coffee? <span style={{ fontStyle: 'italic', color: peach }}>Or a discovery call.</span>
        </div>
        <div style={{ marginTop: 16, fontSize: 15, color: '#d8d4cc' }}>
          30 min, free, zero pressure. Worst case: we both leave with a new contact.
        </div>
        <div style={{ marginTop: 28 }}>
          <span style={{ padding: '14px 28px', background: cream, color: wfColors.ink, borderRadius: 999, fontSize: 14 }}>
            Book my call →
          </span>
        </div>
      </div>
    </div>
  );
};

const D3_Contact = () => {
  const display = '"Cormorant Garamond", Georgia, serif';
  const body = '"Inter", system-ui, sans-serif';
  const mono = 'ui-monospace, monospace';
  const cream = '#f6f1e7';
  const peach = '#e8d3c1';

  return (
    <div style={{ background: cream, color: wfColors.ink, fontFamily: body, minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoMark size={36} />
          <div>
            <div style={{ fontFamily: display, fontSize: 18, fontStyle: 'italic' }}>Michelle Wolff</div>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.22em', color: wfColors.muted }}>CONSULTING</div>
          </div>
        </div>
        <div style={{ fontSize: 13 }}>← back home</div>
      </div>

      <div style={{ padding: '48px 48px 24px 48px', textAlign: 'center' }}>
        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.22em', color: wfColors.muted, textTransform: 'uppercase' }}>Get in touch</div>
        <div style={{ fontFamily: display, fontSize: 76, lineHeight: 0.98, marginTop: 14, letterSpacing: '-0.02em' }}>
          Let's <span style={{ fontStyle: 'italic', color: wfColors.accent }}>actually talk.</span>
        </div>
        <div style={{ fontSize: 16, marginTop: 18, color: '#3a3530', maxWidth: 560, margin: '18px auto 0' }}>
          Pick a 30-minute slot and tell me a little about what you're working on. I'll come prepared.
        </div>
      </div>

      <div style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40 }}>
        <div style={{ background: wfColors.paper, border: `1.5px solid ${wfColors.line}`, borderRadius: 20, padding: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <div style={{ fontFamily: display, fontSize: 22, fontStyle: 'italic' }}>November 2026</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', border: `1px solid ${wfColors.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', border: `1px solid ${wfColors.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 5, marginBottom: 18 }}>
            {['S','M','T','W','T','F','S'].map((d, i) => (
              <div key={i} style={{ fontSize: 11, color: wfColors.muted, textAlign: 'center', padding: '4px 0' }}>{d}</div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} style={{
                aspectRatio: '1', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13,
                background: [9, 11, 16, 17, 23, 24].includes(i) ? wfColors.ink : 'transparent',
                color: [9, 11, 16, 17, 23, 24].includes(i) ? cream : i === 12 ? wfColors.accent : wfColors.ink,
                border: i === 12 ? `1.4px solid ${wfColors.accent}` : 'none',
                fontWeight: i === 12 ? 600 : 400,
              }}>{i + 1}</div>
            ))}
          </div>
          <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, textTransform: 'uppercase', marginBottom: 10 }}>
            Tue, Nov 17 — available
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
            {['9:00 am', '10:30 am', '12:00 pm', '1:30 pm', '3:00 pm', '4:30 pm'].map((t, i) => (
              <div key={t} style={{
                padding: '10px 12px', borderRadius: 999,
                border: `1.4px solid ${wfColors.line}`,
                fontSize: 12, textAlign: 'center',
                background: i === 3 ? wfColors.accent : 'transparent',
                color: i === 3 ? cream : wfColors.ink,
              }}>{t}</div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: wfColors.paper, border: `1.5px solid ${wfColors.line}`, borderRadius: 20, padding: 28 }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 12 }}>QUICK NOTE</div>
            <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 22, lineHeight: 1.3, color: '#2a2520' }}>
              "Tell me what you're working on, what's stuck, and what 'a great year' looks like to you."
            </div>
            <div style={{ marginTop: 14, fontSize: 13, color: wfColors.muted }}>— Michelle</div>
          </div>
          <div style={{ background: wfColors.paper, border: `1.5px solid ${wfColors.line}`, borderRadius: 20, padding: 28 }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.18em', color: wfColors.muted, marginBottom: 14 }}>OR FILL THIS OUT</div>
            <TextLines lines={1} height={28} color="#e6e0d2" />
            <div style={{ height: 10 }} />
            <TextLines lines={1} height={28} color="#e6e0d2" />
            <div style={{ height: 10 }} />
            <TextLines lines={4} lastWidth="50%" height={9} color="#e6e0d2" />
            <div style={{ marginTop: 16 }}>
              <span style={{ padding: '12px 22px', background: wfColors.ink, color: cream, borderRadius: 999, fontSize: 13 }}>
                Send →
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
            <div style={{ flex: 1, fontFamily: mono, fontSize: 11, letterSpacing: '0.12em', color: wfColors.muted }}>
              EMAIL<br />
              <span style={{ fontFamily: display, fontStyle: 'italic', fontSize: 16, color: wfColors.ink, letterSpacing: 0, textTransform: 'none' }}>michelle.wolff57@gmail.com</span>
            </div>
            <div style={{ flex: 1, fontFamily: mono, fontSize: 11, letterSpacing: '0.12em', color: wfColors.muted }}>
              PHONE<br />
              <span style={{ fontFamily: display, fontStyle: 'italic', fontSize: 16, color: wfColors.ink, letterSpacing: 0, textTransform: 'none' }}>000-000-0000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { D3_Home, D3_Contact });
