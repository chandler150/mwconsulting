// Contact / Booking — alt-contact cards, FAQ, footer

const AltContact = () => (
  <section style={{ background: C.cream2, padding: '110px 0 100px' }}>
    <div className="mwc-section-pad" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Kicker>Or reach me directly</Kicker>
        <h2 className="mwc-display-sm" style={{
          fontFamily: f.display, fontWeight: 400, fontSize: 52,
          lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink,
        }}>
          Not quite ready for the <em style={{ color: C.accent, fontStyle: 'italic' }}>calendar?</em>
        </h2>
        <GoldRule style={{ margin: '28px auto 0' }} />
        <p style={{ fontFamily: f.body, fontSize: 16, color: C.ink2, maxWidth: 540, margin: '24px auto 0' }}>
          That's okay. Reach out however feels right — I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="mwc-stack-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 760, margin: '0 auto' }}>
        {[
          { icon: 'mail', label: 'Email', value: 'michellewolffconsulting@gmail.com', sub: "I'll write back within a day.", href: 'mailto:michellewolffconsulting@gmail.com' },
          { icon: 'linkedin', label: 'LinkedIn', value: 'in/michellewolff', sub: 'Connect or DM directly.', href: '#' },
        ].map(c => (
          <a key={c.label} href={c.href} className="mwc-contact-card" style={{
            background: C.paper, padding: 32, textDecoration: 'none',
            color: C.ink, display: 'block',
            border: `1px solid ${C.cream2}`,
            transition: 'transform .2s, box-shadow .2s',
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: C.creamDeep, border: `1px solid ${C.accent}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 22,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {c.icon === 'mail' && (<>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </>)}
                {c.icon === 'phone' && (
                  <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                )}
                {c.icon === 'linkedin' && (<>
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v8M8 7v.01M12 18v-5a3 3 0 016 0v5" />
                </>)}
              </svg>
            </div>
            <div style={{ fontFamily: f.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent }}>
              {c.label}
            </div>
            <div style={{ fontFamily: f.display, fontSize: 24, marginTop: 6, color: C.ink, lineHeight: 1.2, letterSpacing: '-0.005em' }}>
              {c.value}
            </div>
            <div style={{ fontFamily: f.body, fontSize: 13, color: C.muted, marginTop: 10 }}>
              {c.sub}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: f.body, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: C.accent, fontWeight: 600, marginTop: 22 }}>
              Open
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                <path d="M0 4h20M16 1l5 3-5 3" stroke={C.accent} strokeWidth="1.2" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const ContactFAQ = () => {
  const faqs = [
    {
      q: "What happens on a discovery call?",
      a: "A 30-minute Zoom or Google Meet conversation. Together, we will discuss your goals, your current sales motion, and what's not working. I'll ask sharp questions and share first thoughts on where I'd start. "
    },
    {
      q: "Who's the right fit for working with you?",
      a: "Mission-driven founders and nonprofits with a real product or program who want to grow revenue with intention. If you're stuck on inconsistent outreach, undefined pipeline, or partnerships that aren't landing; that's exactly where I can help."
    },
    {
      q: "Do you take on retainer or project-based work?",
      a: "Both. Most engagements start with a 90-day strategic sprint. Some clients continue on retainer, others book targeted projects (audits, sponsorship packages, outreach campaigns) as needed."
    },
    {
      q: "How quickly will I hear back after booking?",
      a: "You'll get an automated confirmation within minutes. I personally read every booking note and will send a short, real reply before our call — usually within 24 hours."
    },
  ];

  return (
    <section style={{ background: C.cream, padding: '110px 0' }}>
      <div className="mwc-section-pad" style={{ maxWidth: 880, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <Kicker>Common questions</Kicker>
          <h2 className="mwc-display-sm" style={{
            fontFamily: f.display, fontWeight: 400, fontSize: 48,
            lineHeight: 1, letterSpacing: '-0.012em', margin: '18px 0 0', color: C.ink,
          }}>
            Before you <em style={{ color: C.accent, fontStyle: 'italic' }}>book.</em>
          </h2>
          <GoldRule style={{ margin: '28px auto 0' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((f_, i) => (
            <FAQItem key={i} q={f_.q} a={f_.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ q, a, defaultOpen }) => {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${C.cream2}` }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', background: 'transparent', border: 'none',
        padding: '24px 0', cursor: 'pointer', textAlign: 'left',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <span className="mwc-faq-q" style={{
          fontFamily: f.display, fontSize: 24, color: C.ink,
          lineHeight: 1.2, letterSpacing: '-0.005em',
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
          border: `1px solid ${C.accent}`, color: C.accent,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform .25s',
          fontSize: 18, lineHeight: 1, fontWeight: 300,
        }}>+</span>
      </button>
      {open && (
        <div style={{
          fontFamily: f.body, fontSize: 15, color: C.ink2,
          lineHeight: 1.7, paddingBottom: 28, maxWidth: 720,
        }}>
          {a}
        </div>
      )}
    </div>
  );
};

const ContactFooterShort = () => (
  <div>
    <GoldBand />
    <div style={{ background: C.ink, color: C.cream, padding: '50px 0 36px' }}>
      <div className="mwc-section-pad" style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: C.cream, padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="assets/logo2.png" alt="MW" style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <div style={{ fontFamily: f.display, fontSize: 22, lineHeight: 1 }}>Michelle Wolff</div>
            <div style={{ fontFamily: f.body, fontSize: 10, letterSpacing: '0.32em', color: C.accent, marginTop: 4, fontWeight: 600 }}>CONSULTING</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 36, fontFamily: f.body, fontSize: 13, color: 'rgba(250,246,237,0.78)' }}>
          <a href="index.html#approach" style={{ color: 'inherit', textDecoration: 'none' }}>Approach</a>
          <a href="index.html#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
          <a href="index.html#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a href="index.html#results" style={{ color: 'inherit', textDecoration: 'none' }}>Results</a>
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
        <span>michelle.wolff57@gmail.com · Los Angeles, CA</span>
      </div>
    </div>
  </div>
);

Object.assign(window, { AltContact, ContactFAQ, FAQItem, ContactFooterShort });
