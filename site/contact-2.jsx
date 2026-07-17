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


// Michelle's Calendly scheduling page. To change it (or after she creates her
// account), update this one URL — everything else adapts automatically.
// Availability is managed in Calendly (calendly.com → Availability), which
// syncs with her Apple/iCloud calendar; bookings email both parties and land
// on her calendar.
const CALENDLY_URL = 'https://calendly.com/michellewolffconsulting/30min';

const Booking = () => {
  const widgetRef = React.useRef(null);
  // ?service=... from the Home service cards prefills Calendly's first custom
  // question ("What would you like to talk about?") via the a1 param.
  const presetService = React.useMemo(() => {
    try { return new URLSearchParams(window.location.search).get('service') || ''; }
    catch { return ''; }
  }, []);
  const styledUrl =
    CALENDLY_URL +
    '?hide_gdpr_banner=1' +
    '&background_color=ffffff' +
    '&text_color=' + C.ink.slice(1) +
    '&primary_color=' + C.accent.slice(1) +
    (presetService ? '&a1=' + encodeURIComponent(presetService) : '');

  React.useEffect(() => {
    const init = () => {
      if (window.Calendly && widgetRef.current && !widgetRef.current.hasChildNodes()) {
        window.Calendly.initInlineWidget({ url: styledUrl, parentElement: widgetRef.current });
      }
    };
    if (window.Calendly) { init(); return; }
    const existing = document.querySelector('script[src*="assets.calendly.com"]');
    if (existing) { existing.addEventListener('load', init); return; }
    const s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    s.onload = init;
    document.body.appendChild(s);
  }, []);

  return (
    <section style={{ background: C.cream, padding: '0 0 100px' }}>
      <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px' }}>
        <div className="mwc-booking-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 32, alignItems: 'start' }}>

          {/* Live scheduler */}
          <div className="mwc-card" style={{ background: C.paper, padding: 16, border: `1px solid ${C.cream2}` }}>
            <div style={{ padding: '24px 24px 0' }}>
              <Kicker style={{ fontSize: 11 }}>Pick a day &amp; time</Kicker>
            </div>
            <div ref={widgetRef} style={{ minWidth: 300, height: 760 }} />
          </div>

          {/* What-to-expect card */}
          <div className="mwc-card" style={{ background: C.paper, padding: 36, border: `1px solid ${C.cream2}`, position: 'relative', overflow: 'hidden' }}>
            <DiamondFade size={300} color={C.accentSoft} opacity={0.45} style={{
              position: 'absolute', bottom: -90, right: -70, pointerEvents: 'none'
            }} />
            <Kicker color={C.accentSoft} style={{ fontSize: 11 }}>Your appointment</Kicker>
            <div style={{ fontFamily: f.display, fontSize: 36, lineHeight: 1, marginTop: 14, letterSpacing: '-0.01em', position: 'relative' }}>
              <em style={{ color: C.accent, fontStyle: 'italic' }}>Discovery Call</em>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26, position: 'relative' }}>
              {[
              ['clock', '30 minutes, free'],
              ['video', 'Video call · link emailed after booking'],
              ['cal', 'Times shown in your own time zone'],
              ['pin', 'Based in Los Angeles (Pacific Time)']].
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
            <div style={{ fontFamily: f.body, fontSize: 13, color: C.muted, lineHeight: 1.7, marginTop: 26, paddingTop: 22, borderTop: `1px solid ${C.cream2}`, position: 'relative' }}>
              Bring your goals, your current outreach, your questions. You'll get a
              confirmation email the moment you book, and a personal note from
              Michelle before the call.
            </div>
          </div>

        </div>
      </div>
    </section>);

};

Object.assign(window, { FormField, FormSelect, FormTextarea, Booking });