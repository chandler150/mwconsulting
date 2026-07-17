// Contact / Booking — booking widget (calendar + time + summary + form)

const FormField = ({ label, placeholder, type = 'text' }) =>
<div>
    <label style={{
    display: 'block', fontFamily: f.body, fontSize: 11, fontWeight: 600,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 8
  }}>{label}</label>
    <input type={type} placeholder={placeholder} className="mwc-input" style={{
    width: '100%', padding: '12px 14px',
    fontFamily: f.body, fontSize: 14, color: C.ink,
    background: 'transparent', border: 'none',
    borderBottom: `1.5px solid ${C.cream2}`,
    outline: 'none'
  }} />
  </div>;


const FormSelect = ({ label, options, defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue || options[0]);
  React.useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);
  return (
    <div>
      <label style={{
        display: 'block', fontFamily: f.body, fontSize: 11, fontWeight: 600,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 8
      }}>{label}</label>
      <select value={value} onChange={(e) => setValue(e.target.value)} className="mwc-input" style={{
        width: '100%', padding: '12px 32px 12px 14px',
        fontFamily: f.body, fontSize: 14, color: C.ink,
        background: 'transparent', border: 'none',
        borderBottom: `1.5px solid ${C.cream2}`,
        outline: 'none', appearance: 'none', cursor: 'pointer'
      }}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>);

};

const FormTextarea = ({ label, placeholder }) =>
<div>
    <label style={{
    display: 'block', fontFamily: f.body, fontSize: 11, fontWeight: 600,
    letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 8
  }}>{label}</label>
    <textarea placeholder={placeholder} rows={4} className="mwc-input" style={{
    width: '100%', padding: '12px 14px',
    fontFamily: f.body, fontSize: 14, color: C.ink, lineHeight: 1.5,
    background: 'transparent',
    border: `1px solid ${C.cream2}`,
    outline: 'none', resize: 'vertical'
  }} />
  </div>;


const Booking = () => {
  const [activeDay, setActiveDay] = React.useState(12);
  const [activeTime, setActiveTime] = React.useState('10:30 AM');
  // Read ?service=... so the dropdown lands on the service the user clicked from Home.
  const presetService = React.useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('service') || '';
    } catch {return '';}
  }, []);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const availableDays = [3, 5, 9, 10, 12, 16, 17, 19, 23, 24, 26];
  const times = ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM'];

  return (
    <section style={{ background: C.cream, padding: '0 0 100px' }}>
      <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px' }}>
        <div className="mwc-booking-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 32, alignItems: 'start' }}>

          {/* Calendar card */}
          <div className="mwc-card" style={{ background: C.paper, padding: 40, border: `1px solid ${C.cream2}` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div>
                <Kicker style={{ fontSize: 11 }}>Step 01 · Choose a day</Kicker>
                <div style={{ fontFamily: f.display, fontSize: 32, marginTop: 10, color: C.ink, letterSpacing: '-0.01em' }}>
                  November <em style={{ fontStyle: 'italic', color: C.accent }}>2026</em>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button aria-label="Previous month" style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: `1px solid ${C.cream2}`, background: 'transparent',
                  cursor: 'pointer', fontSize: 16, color: C.ink
                }}>‹</button>
                <button aria-label="Next month" style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border: `1px solid ${C.cream2}`, background: 'transparent',
                  cursor: 'pointer', fontSize: 16, color: C.ink
                }}>›</button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, marginBottom: 6 }}>
              {days.map((d, i) =>
              <div key={i} style={{
                fontFamily: f.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: C.muted, textAlign: 'center', padding: '8px 0'
              }}>{d}</div>
              )}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
              {Array.from({ length: 30 }).map((_, i) => {
                const d = i + 1;
                const isAvailable = availableDays.includes(d);
                const isActive = activeDay === d;
                return (
                  <button key={i}
                  disabled={!isAvailable}
                  onClick={() => isAvailable && setActiveDay(d)}
                  style={{
                    aspectRatio: '1', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: f.body, fontSize: 14,
                    cursor: isAvailable ? 'pointer' : 'default',
                    background: isActive ? C.ink : 'transparent',
                    color: isActive ? C.cream : isAvailable ? C.ink : 'rgba(120,114,104,0.35)',
                    border: isAvailable && !isActive ? `1px solid ${C.cream2}` : '1px solid transparent',
                    position: 'relative', padding: 0,
                    transition: 'all .15s'
                  }}>
                    {d}
                    {isAvailable && !isActive &&
                    <span style={{
                      position: 'absolute', bottom: 5, width: 4, height: 4, borderRadius: '50%',
                      background: C.accent
                    }} />
                    }
                  </button>);

              })}
            </div>

            <div style={{ marginTop: 36, paddingTop: 28, borderTop: `1px solid ${C.cream2}` }}>
              <Kicker style={{ fontSize: 11 }}>Step 02 · Pick a time</Kicker>
              <div style={{ fontFamily: f.display, fontSize: 20, marginTop: 10, color: C.ink2, fontStyle: 'italic' }}>
                Thursday, November {activeDay} · Pacific Time
              </div>
              <div className="mwc-time-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 18 }}>
                {times.map((t) => {
                  const isActive = activeTime === t;
                  return (
                    <button key={t} onClick={() => setActiveTime(t)}
                    style={{
                      padding: '14px 12px', textAlign: 'center',
                      fontFamily: f.body, fontSize: 13, fontWeight: 500,
                      background: isActive ? C.accent : 'transparent',
                      color: isActive ? C.cream : C.ink,
                      border: `1px solid ${isActive ? C.accent : C.cream2}`,
                      cursor: 'pointer', transition: 'all .15s'
                    }}>
                      {t}
                    </button>);

                })}
              </div>
            </div>
          </div>

          {/* Summary + Form column */}
          <div>
            <div className="mwc-card" style={{ ...{ background: C.ink, color: C.cream, padding: 36, position: 'relative', overflow: 'hidden' }, background: "rgb(255, 255, 255)" }}>
              <DiamondFade size={300} color={C.accentSoft} opacity={0.45} style={{
                position: 'absolute', bottom: -90, right: -70, pointerEvents: 'none'
              }} />
              <Kicker color={C.accentSoft} style={{ fontSize: 11 }}>Your appointment</Kicker>
              <div style={{ fontFamily: f.display, fontSize: 36, lineHeight: 1, marginTop: 14, letterSpacing: '-0.01em', position: 'relative' }}>
                <em style={{ color: C.accent, fontStyle: 'italic' }}>Discovery Call</em>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, position: 'relative' }}>
                {[
                ['cal', `Thursday, November ${activeDay}, 2026`],
                ['clock', `${activeTime} · 30 minutes`],
                ['video', 'Google Meet · link emailed'],
                ['pin', 'Pacific Time (Los Angeles)']].
                map(([k, v]) =>
                <div key={k} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.accentSoft} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      {k === 'cal' && <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>}
                      {k === 'clock' && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
                      {k === 'video' && <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 10l6-3v10l-6-3" /></>}
                      {k === 'pin' && <><path d="M12 21s-7-6-7-12a7 7 0 1114 0c0 6-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>}
                    </svg>
                    <div style={{ fontFamily: f.body, fontSize: 15, color: "rgb(58, 36, 36)" }}>{v}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="mwc-card" style={{ background: C.paper, padding: 32, border: `1px solid ${C.cream2}`, marginTop: 16 }}>
              <Kicker style={{ fontSize: 11 }}>Step 03 · A little context</Kicker>
              <div style={{ fontFamily: f.display, fontSize: 22, marginTop: 10, color: C.ink, lineHeight: 1.25 }}>
                Tell me what you're <em style={{ color: C.accent, fontStyle: 'italic' }}>working on.</em>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24 }}>
                <FormField label="Your name" placeholder="First and last" />
                <FormField label="Email" placeholder="you@company.com" type="email" />
                <FormField label="Organization" placeholder="Company / nonprofit / project" />
                <FormSelect label="I'd like to talk about" defaultValue={presetService} options={['Strategic Sales Consulting', 'Brand Partnerships', 'Donor Relations & Fundraising', 'Done-for-you Outreach', "I'm not sure yet"]} />
                <FormTextarea label="What's on your mind?" placeholder="A couple sentences on what you're trying to solve, change, or grow." />
              </div>
              <div className="mwc-form-actions" style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
                <Btn href="#confirm" size="md">Confirm booking →</Btn>
                <span style={{ fontFamily: f.body, fontSize: 12, color: C.muted, letterSpacing: '0.04em' }}>
                  Confirmation arrives in your inbox.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>);

};

Object.assign(window, { FormField, FormSelect, FormTextarea, Booking });