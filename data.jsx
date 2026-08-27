// data.jsx — shared app + feature data for Noia Software pages

const APPS = [
  {
    id: 'hushcalc', name: 'HushCalc', abbr: 'HC', category: 'Privacy & Utilities',
    page: 'hushcalc.html',
    tagline: 'A private vault hiding in plain sight',
    desc: 'Keep photos, videos, Live Photos, and files in an encrypted, local-only vault disguised as a working calculator. No account, no ads, and no developer cloud.',
    platforms: ['iOS', 'iPadOS'],
    status: 'In development', featured: true,
    icon: 'assets/apps/hushcalc/icon.png',
    privacy: 'privacy/hushcalc.html',
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
    privacy: 'privacy/focusfine.html',
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
    privacy: 'privacy/worth-the-hours.html',
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
    id: 'readium', name: 'Readium', abbr: 'RD', category: 'Books & Reference',
    page: 'readium.html',
    tagline: 'Turn reading into momentum',
    desc: 'An ebook reader that turns minutes and finished chapters into visible progress, helping you build a steady reading habit without losing the joy of the book.',
    platforms: ['iOS', 'iPadOS'],
    status: 'In development', featured: true,
    grad: 'linear-gradient(145deg, oklch(68% 0.18 154), oklch(57% 0.21 37))',
    tint: 'oklch(72% 0.16 75 / 0.18)',
    privacy: 'privacy/readium.html',
    features: [
      { name: 'A Reader Built In', tagline: 'Stay inside the story', desc: 'Import your books, read in a calm, adjustable view, and keep your place without bouncing between a reader and a separate habit tracker.', screens: [] },
      { name: 'Live Reading Sessions', tagline: 'Every focused minute counts', desc: 'A lightweight session timer follows your reading time and pages, then turns each session into clear progress toward your daily goal.', screens: [] },
      { name: 'Streaks With Perspective', tagline: 'Consistency without the pressure', desc: 'See your weekly rhythm, protect momentum with flexible goals, and celebrate chapters finished instead of chasing an empty number.', screens: [] },
      { name: 'Your Reading Story', tagline: 'Books, milestones, and pace', desc: 'Keep a personal shelf, collect milestones, and understand your reading pace with private stats that stay tied to your own library.', screens: [] },
    ],
  },
];

const APPS_BY_ID = APPS.reduce((m, a) => (m[a.id] = a, m), {});

// Expose to the global object so other <script type="text/babel"> files can
// reference APPS / APPS_BY_ID by bare name regardless of how Babel scopes const.
window.APPS = APPS;
window.APPS_BY_ID = APPS_BY_ID;
