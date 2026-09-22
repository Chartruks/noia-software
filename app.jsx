// app.jsx — Noia Software landing page (home)
// Shared data lives in data.jsx; shared components in shared.jsx; both load first.

function Hero({ layout }) {
  const isSplit = layout === 'split';
  const featuredApps = APPS.filter(app => app.featured);
  const copy = (
    <React.Fragment>
      <div className="hero-eyebrow"><span className="eyebrow-dot"></span> Independent software studio</div>
      <h1 className="hero-title">Thoughtful apps<br />for real life.</h1>
      <p className="hero-sub">Private, focused, and useful by design. Noia Software makes small apps that help you protect what matters, keep your promises, and make clearer choices.</p>
      <div className="hero-ctas">
        <a href="#showcase" className="btn btn-primary">Meet the apps</a>
        <a href="#support" className="btn btn-outline">Get Support</a>
      </div>
    </React.Fragment>
  );

  if (isSplit) {
    return (
      <section id="top" className="hero">
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-split-grid">
            <div>{copy}</div>
            <div className="hero-split-icons">
              {featuredApps.map(app => (
                app.icon
                  ? <a key={app.id} href={`#${app.id}`} className="hero-split-icon hero-icon-img"><img src={encodeURI(app.icon)} alt={app.name} /></a>
                  : <a key={app.id} href={`#${app.id}`} className="hero-split-icon" style={{ background: app.grad }}>{app.abbr}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="top" className="hero">
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-centered">
          {copy}
          <div className="hero-icons">
            {featuredApps.map(app => (
              <a key={app.id} href={`#${app.id}`} className="hero-icon-wrap">
                {app.icon
                  ? <div className="hero-icon hero-icon-img"><img src={encodeURI(app.icon)} alt={app.name} /></div>
                  : <div className="hero-icon" style={{ background: app.grad }}>{app.abbr}</div>}
                <span className="hero-icon-label">{app.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseRow({ app, flip }) {
  const [ref, vis] = useReveal(0.1);
  return (
    <div id={app.id} ref={ref} className={`showcase-row${flip ? ' flip' : ''} reveal${vis ? ' in' : ''}`}>
      <div className="showcase-phone"><PhoneCarousel app={app} /></div>
      <div className="showcase-copy">
        <p className="section-eyebrow">{app.category}</p>
        <h3 className="showcase-title">{app.name}</h3>
        <p className="showcase-tagline">{app.tagline}</p>
        <p className="showcase-desc">{app.desc}</p>
        <div className="showcase-badges"><PlatformBadges app={app} /></div>
        <StoreLinks app={app} />
        <div style={{ marginTop: 18 }}>
          <a href={app.page} className="back-link" style={{ flexDirection: 'row-reverse' }}>Explore {app.name} ›</a>
        </div>
      </div>
    </div>
  );
}

function AppShowcase() {
  const featuredApps = APPS.filter(app => app.featured);
  const moreApps = APPS.filter(app => !app.featured);
  return (
    <section id="showcase" className="section showcase-section">
      <div className="container">
        <div className="section-header showcase-header">
          <p className="section-eyebrow">From Noia Software</p>
          <h2 className="section-title">Four apps. One point of view.</h2>
          <p className="section-sub">HushCalc, Paper Quest, and Worth the Hours are available now on the App Store. FocusFine is on the way.</p>
        </div>
        {featuredApps.map((app, i) => <ShowcaseRow key={app.id} app={app} flip={i % 2 !== 0} />)}
        {moreApps.length > 0 && <div className="more-apps">
          <div className="section-header more-apps-header">
            <p className="section-eyebrow">More from Noia</p>
            <h2 className="section-title">The wider portfolio.</h2>
          </div>
          <div className="apps-grid">
            {moreApps.map(app => (
              <a className="app-card" href={app.page} key={app.id}>
                <div className="app-card-visual" style={{ background: app.grad }}>
                  {app.icon
                    ? <img className="app-card-icon app-card-icon-img" src={encodeURI(app.icon)} alt="" />
                    : <div className="app-card-icon">{app.abbr}</div>}
                </div>
                <div className="app-card-body">
                  <p className="app-card-cat">{app.category}</p>
                  <h3 className="app-card-name">{app.name}</h3>
                  <p className="app-card-tag">{app.tagline}</p>
                  <PlatformBadges app={app} />
                </div>
              </a>
            ))}
          </div>
        </div>}
      </div>
    </section>
  );
}

const DEFAULTS = /*EDITMODE-BEGIN*/{ "theme": "pearl", "heroLayout": "centered" }/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
  }, [t.theme]);

  return (
    <React.Fragment>
      <Nav />
      <Hero layout={t.heroLayout} />
      <AppShowcase />
      <Support />
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio label="Style" value={t.theme} options={['pearl', 'obsidian', 'sand']} onChange={v => setTweak('theme', v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Hero" value={t.heroLayout} options={['centered', 'split']} onChange={v => setTweak('heroLayout', v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
