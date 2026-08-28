// product.jsx — per-product page. Set window.PRODUCT_ID before loading this file.
// Mirrors the home page structure, but each showcase row is a FEATURE of the app.

function ProductHero({ app }) {
  return (
    <section id="top" className="hero product-hero">
      <div className="container" style={{ width: '100%' }}>
        <div className="product-hero-grid">
          <div className="product-hero-copy">
            <div className="product-mark">
              {app.icon
                ? <img src={encodeURI(app.icon)} alt="" />
                : <span style={{ background: app.grad }}>{app.abbr}</span>}
              <small>{app.category}</small>
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>{app.name}</h1>
            <p className="showcase-tagline" style={{ fontSize: 18, marginBottom: 18 }}>{app.tagline}</p>
            <p className="hero-sub" style={{ marginBottom: 32 }}>{app.desc}</p>
            <div className="showcase-badges"><PlatformBadges app={app} /></div>
            <div style={{ marginTop: 22 }}><StoreLinks app={app} /></div>
            <div style={{ marginTop: 18, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              {app.privacy && <a className="back-link" href={app.privacy}>Privacy Policy</a>}
              <a className="back-link" href="terms.html">Terms of Use</a>
            </div>
          </div>
          <div className="product-hero-visual">
            <PhoneCarousel app={app} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ app, feature, index }) {
  const [ref, vis] = useReveal(0.1);
  const wide = index === 0 || index === 3;
  return (
    <article
      ref={ref}
      className={`feature-card${wide ? ' feature-card-wide' : ''} reveal${vis ? ' in' : ''}`}
      style={{ '--feature-tint': app.tint }}
    >
      <div className="feature-visual">
        <PhoneCarousel app={app} screens={[feature.screen]} auto={false} />
        <span className="feature-number">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="feature-copy">
        <p className="feature-index">{feature.kicker}</p>
        <h3 className="feature-title">{feature.name}</h3>
        <p className="feature-desc">{feature.desc}</p>
        {feature.points && (
          <ul className="feature-points">
            {feature.points.map(point => <li key={point}>{point}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}

function Features({ app }) {
  const [ref, vis] = useReveal(0.08);
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div ref={ref} className={`section-header reveal${vis ? ' in' : ''}`}>
          <p className="section-eyebrow">Features</p>
          <h2 className="section-title">Six reasons<br />{app.name} stands apart.</h2>
          <p className="section-sub">The defining product ideas, shown through the real interface and the choices behind it.</p>
        </div>
        <div className="feature-grid">
          {app.features.map((f, i) => (
            <FeatureCard key={f.name} app={app} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPage({ app }) {
  React.useEffect(() => { document.title = `${app.name} — Noia Software`; }, [app]);
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: 'index.html', label: 'All Apps' },
    { href: '#support', label: 'Get Support', cta: true },
  ];
  return (
    <React.Fragment>
      <Nav links={navLinks} />
      <ProductHero app={app} />
      <Features app={app} />
      <Support defaultApp={app.id} />
      <Footer />
    </React.Fragment>
  );
}

const PRODUCT_APP = APPS_BY_ID[window.PRODUCT_ID];
ReactDOM.createRoot(document.getElementById('root')).render(
  PRODUCT_APP
    ? <ProductPage app={PRODUCT_APP} />
    : <div style={{ padding: 80, textAlign: 'center' }}>Unknown product.</div>
);
