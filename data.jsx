// data.jsx — shared app + feature data for Noia Software pages

const SF_SCREENS = 'Stockflowscreens/Simulator Screenshot - iPhone 17 Pro - 2026-06-05 at ';

const APPS = [
  {
    id: 'hushcalc', name: 'HushCalc', abbr: 'HC', category: 'Privacy & Utilities',
    page: 'hushcalc.html',
    tagline: 'A private vault hiding in plain sight',
    desc: 'Keep photos, videos, Live Photos, and files in an encrypted, local-only vault disguised as a working calculator. No account, no ads, and no developer cloud.',
    platforms: ['iOS', 'iPadOS'],
    status: 'In development', featured: true,
    icon: 'assets/apps/hushcalc/icon.png',
    grad: 'linear-gradient(145deg, oklch(34% 0.015 70), oklch(17% 0.01 70))',
    tint: 'oklch(58% 0.08 70 / 0.18)',
    features: [
      { name: 'Calculator Disguise', tagline: 'Private by default', desc: 'HushCalc opens as a fully functional calculator. Enter your secret code and press equals to reveal the vault.', screens: [] },
      { name: 'Encrypted Local Vault', tagline: 'Your files stay yours', desc: 'Vault items are protected with AES-GCM encryption and remain on your device—without an account, analytics, ads, or a developer-operated cloud.', screens: [] },
      { name: 'A Library, Not a Folder', tagline: 'Organize every kind of private media', desc: 'Store photos, videos, Live Photos, and files in searchable albums and nested albums, with favorites and Recently Deleted built in.', screens: [] },
      { name: 'Secure Moves & Backups', tagline: 'Take control of every copy', desc: 'Move selected items directly between nearby Apple devices or create a password-protected encrypted archive you can restore later.', screens: [] },
    ],
  },
  {
    id: 'focusfine', name: 'FocusFine', abbr: 'FF', category: 'Productivity',
    page: 'focusfine.html',
    tagline: 'Block apps. Keep your promise.',
    desc: 'Choose the distractions in your way, decide how long you want to focus, and make a commitment. FocusFine shields selected apps until the timer ends.',
    platforms: ['iOS'],
    status: 'In development', featured: true,
    icon: 'assets/apps/focusfine/icon.png',
    grad: 'linear-gradient(145deg, oklch(91% 0.24 123), oklch(70% 0.25 130))',
    tint: 'oklch(88% 0.22 123 / 0.18)',
    screens: [
      'assets/apps/focusfine/home.png',
      'assets/apps/focusfine/distractions.png',
      'assets/apps/focusfine/active.png',
    ],
    features: [
      { name: 'Choose Your Distractions', tagline: 'Block what gets in the way', desc: 'Start from quick presets or choose exactly which apps should disappear while you focus.', screens: ['assets/apps/focusfine/distractions.png'] },
      { name: 'Set a Finish Line', tagline: 'From a short sprint to deep work', desc: 'Pick a focused session length, see the remaining time at a glance, and let Screen Time keep your selections shielded.', screens: ['assets/apps/focusfine/active.png'] },
      { name: 'Choose Your Commitment', tagline: 'Make quitting a deliberate choice', desc: 'Set an optional early-exit amount before you start. You pay nothing when you complete the session.', screens: [] },
      { name: 'Build Momentum', tagline: 'Your focused time adds up', desc: 'Review completed and interrupted commitments, total focused time, and your current streak—all stored locally on your iPhone.', screens: ['assets/apps/focusfine/home.png'] },
    ],
  },
  {
    id: 'worth-the-hours', name: 'Worth the Hours', abbr: 'WH', category: 'Finance & Lifestyle',
    page: 'worth-the-hours.html',
    tagline: 'See prices in working hours',
    desc: 'Turn any price into hours of your working life, pause impulse purchases, and make the choice with a clearer head.',
    platforms: ['iOS'],
    status: 'In development', featured: true,
    icon: 'assets/apps/worth-the-hours/icon.png',
    grad: 'linear-gradient(145deg, oklch(62% 0.26 300), oklch(44% 0.25 290))',
    tint: 'oklch(62% 0.26 300 / 0.18)',
    screens: [
      'assets/apps/worth-the-hours/price.png',
      'assets/apps/worth-the-hours/result.png',
      'assets/apps/worth-the-hours/parked.png',
    ],
    features: [
      { name: 'Price to Working Time', tagline: 'See the time behind the number', desc: 'Enter a price and instantly see the real working hours and days it represents based on your take-home income and schedule.', screens: ['assets/apps/worth-the-hours/price.png', 'assets/apps/worth-the-hours/result.png'] },
      { name: 'A 24-Hour Pause', tagline: 'Make room for a clearer decision', desc: 'Park a purchase for a cooling-off period and receive an optional local reminder when it is time to choose.', screens: ['assets/apps/worth-the-hours/parked.png'] },
      { name: 'Long-Term Perspective', tagline: 'Recurring costs without the fog', desc: 'See annual, five-year, and ten-year projections in both money and working time before a small subscription becomes a big commitment.', screens: [] },
      { name: 'Private Progress', tagline: 'Reclaim time, not just money', desc: 'Track bought and skipped decisions, reclaimed working hours, streaks, and widgets without linking a bank account or creating an advertising profile.', screens: [] },
    ],
  },
  {
    id: 'lifeingrid', name: 'LifeInGrid', abbr: 'LG', category: 'Social',
    page: 'lifeingrid.html',
    tagline: 'Your family story, connected',
    desc: 'A social network built around family trees. Share moments with relatives, discover your roots, and map the people who shaped you — across generations.',
    platforms: ['iOS', 'Android', 'Web'],
    grad: 'linear-gradient(145deg, oklch(68% 0.18 65), oklch(54% 0.22 44))',
    tint: 'oklch(68% 0.18 65 / 0.18)',
    features: [
      { name: 'Living Family Tree', tagline: 'See how you connect', desc: 'Build an interactive tree that grows with your family. Tap any relative to explore their story and how you are linked.', screens: [] },
      { name: 'Shared Moments', tagline: 'Memories that stay in the family', desc: 'Post photos and updates to a private feed only your relatives can see — no algorithms, no strangers, just family.', screens: [] },
      { name: 'Discover Your Roots', tagline: 'Trace your origins', desc: 'Follow branches back through the generations and uncover the places, names, and stories behind where you come from.', screens: [] },
      { name: 'Private Circles', tagline: 'You control who sees what', desc: 'Group relatives into circles and choose exactly who can view each moment, keeping your family story safe.', screens: [] },
    ],
  },
  {
    id: 'stockflow', name: 'StockFlow', abbr: 'SF', category: 'Business',
    page: 'stockflow.html',
    tagline: 'Inventory made effortless',
    desc: 'Track inventory, manage sales, and get smart insights for your small business. Simple enough to start in minutes, powerful enough to grow with you.',
    platforms: ['Web', 'iOS'],
    comingSoon: ['Android'],
    icon: 'Stockflowscreens/icon-light.png',
    grad: 'linear-gradient(145deg, oklch(52% 0.22 250), oklch(38% 0.26 266))',
    tint: 'oklch(52% 0.22 250 / 0.18)',
    screens: [
      SF_SCREENS + '20.06.36.png',
      SF_SCREENS + '20.06.39.png',
      SF_SCREENS + '20.06.12.png',
      SF_SCREENS + '20.06.17.png',
      SF_SCREENS + '20.06.22.png',
      SF_SCREENS + '20.06.26.png',
    ],
    features: [
      {
        name: 'Dashboard & Insights', tagline: 'Your business at a glance',
        desc: 'See revenue, net profit, inventory value, and unit counts the moment you open the app, with a yearly breakdown and a monthly profit chart that make the numbers obvious.',
        screens: [SF_SCREENS + '20.06.36.png', SF_SCREENS + '20.06.39.png'],
      },
      {
        name: 'Product Catalog', tagline: 'Everything you stock, organized',
        desc: 'Browse every item by name or SKU, group products into categories and subcategories, and find exactly what you need in seconds.',
        screens: [SF_SCREENS + '20.06.12.png'],
      },
      {
        name: 'Purchase Tracking', tagline: 'Know what you bought and when',
        desc: 'Log every purchase order with supplier, date, item count, and total cost so your incoming stock and spending always line up.',
        screens: [SF_SCREENS + '20.06.17.png'],
      },
      {
        name: 'Sales & Channels', tagline: 'Every sale, every channel',
        desc: 'Record sales across in-person, eBay, Shopify, and more — each with customer, date, and revenue — so you always know what is selling and where.',
        screens: [SF_SCREENS + '20.06.22.png'],
      },
      {
        name: 'Expense Management', tagline: 'Track every cost',
        desc: 'Capture marketing, platform fees, packaging, and shipping costs by category, with running totals that feed straight into your profit numbers.',
        screens: [SF_SCREENS + '20.06.26.png'],
      },
    ],
  },
  {
    id: 'vint', name: 'Vint', abbr: 'VT', category: 'Lifestyle',
    page: 'vint.html',
    tagline: 'Your life in media',
    desc: "Track every movie watched, game played, and series finished. Build your personal collection, rate what you love, and never lose track of what to experience next.",
    platforms: ['iOS', 'Android'],
    grad: 'linear-gradient(145deg, oklch(50% 0.22 300), oklch(36% 0.26 318))',
    tint: 'oklch(50% 0.22 300 / 0.18)',
    features: [
      { name: 'Universal Library', tagline: 'One home for all your media', desc: 'Movies, series, and games live side by side in a single collection you can search, filter, and sort however you like.', screens: [] },
      { name: 'Ratings & Reviews', tagline: 'Remember what you loved', desc: 'Rate everything you finish and jot down a quick note, so your taste is captured and easy to look back on.', screens: [] },
      { name: 'Watchlist & Backlog', tagline: 'Never lose track of what is next', desc: 'Queue up what you want to watch or play next and pull from your backlog whenever you have a free evening.', screens: [] },
      { name: 'Stats & Insights', tagline: 'See your year in media', desc: 'Discover how much you have watched and played, your favorite genres, and how your habits change over time.', screens: [] },
    ],
  },
];

const APPS_BY_ID = APPS.reduce((m, a) => (m[a.id] = a, m), {});

// Expose to the global object so other <script type="text/babel"> files can
// reference APPS / APPS_BY_ID by bare name regardless of how Babel scopes const.
window.APPS = APPS;
window.APPS_BY_ID = APPS_BY_ID;
