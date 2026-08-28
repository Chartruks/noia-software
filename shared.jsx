// shared.jsx — components shared across the Noia Software landing & product pages

function useReveal(threshold = 0.14) {
  const ref = React.useRef(null);
  const [vis, setVis] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

function Logo({ size = 30 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: Math.round(size * 0.24),
      background: 'var(--accent)', color: 'white', fontFamily: 'var(--font)',
      fontWeight: 800, fontSize: Math.round(size * 0.52), letterSpacing: '-0.04em',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, userSelect: 'none',
    }}>N</div>
  );
}

function Nav({ links }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const items = links || [
    { href: '#showcase', label: 'Apps' },
    { href: '#support', label: 'Get Support', cta: true },
  ];
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href={links ? 'index.html' : '#top'} className="nav-logo">
          <Logo size={34} />
          <span className="nav-logo-name">Noia Software</span>
        </a>
        <div className="nav-links">
          {items.map(it => (
            <a key={it.label} href={it.href} className={`nav-link${it.cta ? ' nav-cta' : ''}`}>{it.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function screenshotSrc(path) {
  const encoded = encodeURI(path);
  return `${encoded}${encoded.includes('?') ? '&' : '?'}v=20260828-hush`;
}

// Cyclable phone mockup. Auto-advances through screens; dots + arrows for manual control.
function PhoneCarousel({ app, screens, auto = true }) {
  const imgs = (screens || app.screens || []).filter(Boolean);
  const [idx, setIdx] = React.useState(0);
  const go = React.useCallback((next) => {
    setIdx(i => ((next % imgs.length) + imgs.length) % imgs.length);
  }, [imgs.length]);

  React.useEffect(() => { if (idx >= imgs.length) setIdx(0); }, [imgs.length]);
  React.useEffect(() => {
    if (!auto || imgs.length < 2) return;
    const t = setInterval(() => setIdx(i => (i + 1) % imgs.length), 3600);
    return () => clearInterval(t);
  }, [auto, imgs.length]);

  const hasImgs = imgs.length > 0;
  const multi = imgs.length > 1;

  return (
    <div className="phone-carousel">
      <div className="phone">
        <div className="phone-screen">
          {hasImgs ? (
            <div className="phone-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
              {imgs.map((s, i) => (
                <img key={i} className="phone-img" src={screenshotSrc(s)} alt={`${app.name} screenshot ${i + 1}`} />
              ))}
            </div>
          ) : (
            <div className="phone-empty" style={{ background: `linear-gradient(160deg, ${app.tint} 0%, var(--bg-alt) 72%)` }}>
              <div className="phone-empty-orb" style={{ background: app.grad }}></div>
              {app.icon
                ? <img className="phone-app-icon" src={encodeURI(app.icon)} alt={`${app.name} app icon`} />
                : <div className="phone-app-monogram" style={{ background: app.grad }}>{app.abbr}</div>}
              <p className="phone-empty-name">{app.name}</p>
              <p className="phone-empty-tagline">{app.tagline}</p>
              <span className="phone-empty-status">{app.status || 'Product preview'}</span>
              <div className="phone-home-indicator"></div>
            </div>
          )}
        </div>
      </div>
      {multi && (
        <div className="phone-nav">
          <button className="phone-arrow" onClick={() => go(idx - 1)} aria-label="Previous screenshot">‹</button>
          <div className="phone-dots">
            {imgs.map((_, i) => (
              <button key={i} className={`phone-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={`Screenshot ${i + 1}`} />
            ))}
          </div>
          <button className="phone-arrow" onClick={() => go(idx + 1)} aria-label="Next screenshot">›</button>
        </div>
      )}
    </div>
  );
}

function PlatformBadges({ app }) {
  return (
    <div className="badges">
      {app.platforms.map(p => <span key={p} className="badge">{p}</span>)}
      {(app.comingSoon || []).map(p => <span key={p} className="badge badge-soon">{p} · Soon</span>)}
    </div>
  );
}

function StoreLinks({ app }) {
  if (!app.links) {
    return (
      <div className="store-links">
        <span className="store-btn store-btn-soon">{app.status || 'Coming soon'}</span>
      </div>
    );
  }
  return (
    <div className="store-links">
      {app.links.ios     && <a href={app.links.ios} className="store-btn">App Store</a>}
      {app.links.android && <a href={app.links.android} className="store-btn">Google Play</a>}
      {app.links.web     && <a href={app.links.web} className="store-btn">Web App</a>}
      {(app.comingSoon || []).includes('Android') && <span className="store-btn store-btn-soon">Google Play · Coming Soon</span>}
    </div>
  );
}

function Support({ apps, defaultApp }) {
  const [ref, vis] = useReveal(0.08);
  const [form, setForm] = React.useState({ name: '', email: '', app: defaultApp || '', message: '' });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const send = e => {
    e.preventDefault();
    const appName = (apps || APPS).find(app => app.id === form.app)?.name || 'General';
    const subject = encodeURIComponent(`${appName} support request from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.name} <${form.email}>`);
    window.location.href = `mailto:support@noiasoftware.org?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="support" className="support-section">
      <div className="container">
        <div ref={ref} className={`support-layout reveal${vis ? ' in' : ''}`}>
          <div className="support-aside">
            <p className="section-eyebrow">Support</p>
            <h2 className="section-title">I'm here<br />to help.</h2>
            <p className="section-sub">Have a question or issue? Send me a message and I'll get back within 24 hours.</p>
            <div className="support-meta">
              <div className="support-meta-item">
                <div className="meta-icon">✉</div>
                <span>support@noiasoftware.org</span>
              </div>
              <div className="support-meta-item">
                <div className="meta-icon">24h</div>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
          <div className="form-card">
            {sent ? (
              <div className="form-success">
                <div className="success-check">✓</div>
                <h3>Your email draft is ready.</h3>
                <p>Send it from your email app and I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={send}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fn">Name</label>
                    <input id="fn" className="form-control" type="text" placeholder="Your name" value={form.name} onChange={set('name')} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fe">Email</label>
                    <input id="fe" className="form-control" type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="fa">App</label>
                  <select id="fa" className="form-control" value={form.app} onChange={set('app')} required>
                    <option value="">Select an app…</option>
                    {(apps || APPS).map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                    <option value="other">Other / General</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fm">Message</label>
                  <textarea id="fm" className="form-control" placeholder="Describe your question or issue…" value={form.message} onChange={set('message')} rows="5" required></textarea>
                </div>
                <div className="form-submit">
                  <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-brand">
            <Logo size={26} />
            <span className="footer-brand-name">Noia Software</span>
          </div>
          <nav className="footer-nav">
            <a href="index.html#showcase">Apps</a>
            <a href="index.html#support">Support</a>
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
            <a href="mailto:support@noiasoftware.org">Contact</a>
          </nav>
          <p className="footer-copy">© 2026 Noia Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
