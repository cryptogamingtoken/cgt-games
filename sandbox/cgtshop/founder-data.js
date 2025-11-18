// founder-data.js

window.CGT_SCENARIOS = window.CGT_SCENARIOS || {};
window.CGT_SCENARIOS.founder = [

  /* ============================================
     F-B1-0.1 — First spark
  ============================================ */
  {
    subBand: "F-B1-0.1",
    marketCap: "$10 K",
    focus: "First spark",
    context: "Barely off the ground; prototype exists, but nobody’s watching.",
    boldPrompt: "Launch MVP to public now — even if half-broken.",
    conservativePrompt: "Keep it closed, polish in silence.",
    tone: "risky",

    outcomeA: "Early adopters rally behind the MVP, posting screenshots and feedback that spark a viral micro-wave of credibility.",
    outcomeB: "Launch exposes half-finished systems; bugs and confusion dominate the narrative, causing early trust erosion.",
    outcomeC: "A few testers privately confirm the build’s strength; quiet progress builds word-of-mouth trust.",
    outcomeD: "Delays frustrate insiders who drift away, leaving the project isolated before momentum forms."
  },

  /* ============================================
     F-B1-0.2 — The first post
  ============================================ */
  {
    subBand: "F-B1-0.2",
    marketCap: "$25 K",
    focus: "The first post",
    context: "A few early testers follow progress; energy is fragile but growing.",
    boldPrompt: "Publish a bold “we’re going live” tweet/thread to push visibility.",
    conservativePrompt: "Quietly DM testers and build tighter feedback loops.",
    tone: "risky",

    outcomeA: "The tweet ignites curiosity; small media accounts amplify it, doubling Discord growth overnight.",
    outcomeB: "Tweet timing collides with technical instability, making hype short-lived and credibility shaky.",
    outcomeC: "Private feedback loops create strong internal clarity; early testers refine onboarding scripts.",
    outcomeD: "Quiet updates feel invisible, and outside interest fades as rival projects announce launches."
  },

  /* ============================================
     F-B1-0.3 — First seed
  ============================================ */
  {
    subBand: "F-B1-0.3",
    marketCap: "$50 K",
    focus: "First seed",
    context: "Someone offers to help or contribute; you can’t do everything.",
    boldPrompt: "Accept their help fast, expand roles informally.",
    conservativePrompt: "Wait, define structure before involving others.",
    tone: "neutral",

    outcomeA: "Contributor takes ownership and accelerates prototype features, creating visible progress and morale lift.",
    outcomeB: "Rushed delegation leads to misaligned expectations and abandoned tasks, wasting time.",
    outcomeC: "Structured wait allows clean role definitions and durable long-term reliability.",
    outcomeD: "Delaying collaboration demotivates volunteers who lose interest before roles open."
  },

  /* ============================================
     F-B1-0.4 — Community whisper
  ============================================ */
  {
    subBand: "F-B1-0.4",
    marketCap: "$100 K",
    focus: "Community whisper",
    context: "Small Discord / Telegram starts forming around your vision.",
    boldPrompt: "Announce a small public test or prize pool to attract more eyes.",
    conservativePrompt: "Keep it invite-only and iterate silently.",
    tone: "transformative",

    outcomeA: "Public test builds excitement; users share leaderboard clips, fuelling a small viral ripple.",
    outcomeB: "Public test crashes under load, generating doubt and memes about instability.",
    outcomeC: "Invite-only iteration sharpens quality and yields stable metrics for the later reveal.",
    outcomeD: "Closed testing kills buzz; community assumes the project stagnated."
  },

  /* ============================================
     F-B1-0.5 — Whitepaper clarification moment
  ============================================ */
  {
    subBand: "F-B1-0.5",
    marketCap: "$150 K",
    focus: "Whitepaper Clarification Moment",
    context: "New participants are questioning parts of the whitepaper; clarity is needed.",
    boldPrompt: "Issue public clarifications and updates with a living-version changelog.",
    conservativePrompt: "Privately maintain internal changelog until the next formal release.",
    tone: "risky",

    outcomeA: "Public changelog earns praise for openness, boosting community trust.",
    outcomeB: "Over-communication triggers confusion as multiple versions circulate.",
    outcomeC: "Private revisions strengthen message discipline and legal clarity.",
    outcomeD: "Opacity breeds suspicion and rumours of hidden changes."
  },

  /* ============================================
     F-B1-0.6 — Unexpected attention
  ============================================ */
  {
    subBand: "F-B1-0.6",
    marketCap: "$250 K",
    focus: "Unexpected attention",
    context: "A micro-influencer mentions your project; eyes are on you.",
    boldPrompt: "Double down, open early tournament to capitalise.",
    conservativePrompt: "Quietly handle bugs, stabilise before expanding.",
    tone: "risky",

    outcomeA: "Tournament launch attracts influencer coverage and new entrants, multiplying exposure.",
    outcomeB: "Unpatched bugs cause chaos during tournament, undermining confidence and brand integrity.",
    outcomeC: "Bug-first focus prevents failure loops; launch later earns respect for polish.",
    outcomeD: "Missed momentum window dulls enthusiasm; influencer interest moves elsewhere."
  },

  /* ============================================
     F-B1-0.7 — First real choices
  ============================================ */
  {
    subBand: "F-B1-0.7",
    marketCap: "$400 K",
    focus: "First real choices",
    context: "You now juggle founder, dev, marketing and community hats.",
    boldPrompt: "Go public with a clear launch date — commit hard.",
    conservativePrompt: "Soft launch quietly and let growth remain organic.",
    tone: "risky",

    outcomeA: "Clear public launch date galvanises the community, doubling pre-registrations.",
    outcomeB: "Date lock creates unbearable crunch; missed deadlines erode confidence.",
    outcomeC: "Soft launch yields steady adoption, allowing natural scaling.",
    outcomeD: "Soft approach causes narrative drift; competitors dominate headlines."
  },

  /* ============================================
     F-B1-0.8 — Team formation moment
  ============================================ */
  {
    subBand: "F-B1-0.8",
    marketCap: "$600 K",
    focus: "Team formation moment",
    context: "Demand exceeds what one person can handle.",
    boldPrompt: "Recruit first contributors publicly (volunteers/partners).",
    conservativePrompt: "Keep control tight and delay team growth.",
    tone: "neutral",

    outcomeA: "Public recruitment finds strong talent fast, adding dev and design capacity.",
    outcomeB: "Unvetted recruits cause security and coordination failures that stall velocity.",
    outcomeC: "Tight control maintains high code quality and operational discipline.",
    outcomeD: "Over-control creates burnout; progress stagnates and morale dips."
  },

  /* ============================================
     F-B1-0.9 — External validation
  ============================================ */
  {
    subBand: "F-B1-0.9",
    marketCap: "$800 K",
    focus: "External validation",
    context: "Early investors and partners take notice.",
    boldPrompt: "Announce funding intentions or pitch publicly.",
    conservativePrompt: "Stay quiet, keep building until ready.",
    tone: "risky",

    outcomeA: "Public funding push secures strong partners and boosts legitimacy.",
    outcomeB: "Funding hype misfires, creating backlash and community distrust.",
    outcomeC: "Quiet build proves resilience; later partnership terms improve.",
    outcomeD: "Missed investor window limits expansion; morale dips during liquidity squeeze."
  },

  /* ============================================
     F-B1-1.0 — Press spotlight
  ============================================ */
  {
    subBand: "F-B1-1.0",
    marketCap: "$1 M",
    focus: "Press spotlight",
    context: "Press or KOLs discover the project.",
    boldPrompt: "Lean into hype, do interviews and expand rapidly.",
    conservativePrompt: "Carefully filter exposure, build stable narrative.",
    tone: "transformative",

    outcomeA: "Press interviews attract wide attention; CGT is mentioned as a next-gen experiment.",
    outcomeB: "Media spotlight exposes unfinished systems; reputation strains under scrutiny.",
    outcomeC: "Controlled messaging cements perception of discipline and steady leadership.",
    outcomeD: "Cautious tone appears dull; press loses interest."
  }

];

