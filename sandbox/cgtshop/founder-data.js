// founder-data.js

window.CGT_SCENARIOS = window.CGT_SCENARIOS || {};

window.CGT_SCENARIOS.founder = [
  {
    subBand: "F-B1-0.1",
    marketCap: "$10 K",
    focus: "First spark",
    context: "Barely off the ground; prototype exists, but nobody’s watching.",
    boldPrompt: "Launch MVP to public now — even if half-broken.",
    conservativePrompt: "Keep it closed, polish in silence.",
    marketImpact: "Bold → sudden small hype wave but fragile trust; Conservative → slower start but stable baseline.",
    tone: "risky",
    outcomeA: "Early adopters rally behind the MVP, posting screenshots and feedback that spark a viral micro-wave of credibility.",
    outcomeB: "Launch exposes half-finished systems; bugs and confusion dominate the narrative, causing early trust erosion.",
    outcomeC: "A few testers privately confirm the build’s strength; quiet progress builds word-of-mouth trust.",
    outcomeD: "Delays frustrate insiders who drift away, leaving the project isolated before momentum forms."
  },
  {
    subBand: "F-B1-0.2",
    marketCap: "$25 K",
    focus: "The first post",
    context: "A few early testers follow progress; energy is fragile but growing.",
    boldPrompt: "Publish a bold “we’re going live” tweet/thread to push visibility.",
    conservativePrompt: "Quietly DM testers and build tighter feedback loops.",
    marketImpact: "Bold → bump in community size but tech debt rises; Conservative → stronger foundation, slower growth.",
    tone: "risky",
    outcomeA: "The tweet ignites curiosity; small media accounts amplify it, doubling Discord growth overnight.",
    outcomeB: "Tweet timing collides with technical instability, making hype short-lived and credibility shaky.",
    outcomeC: "Private feedback loops create strong internal clarity; early testers refine onboarding scripts.",
    outcomeD: "Quiet updates feel invisible, and outside interest fades as rival projects announce launches."
  },
  {
    subBand: "F-B1-0.3",
    marketCap: "$50 K",
    focus: "First seed",
    context: "Someone offers to help or contribute; you can’t do everything.",
    boldPrompt: "Accept their help fast, expand roles informally.",
    conservativePrompt: "Wait, define structure before involving others.",
    marketImpact: "Bold → fast progress but higher chaos; Conservative → delayed scale but cleaner ops.",
    tone: "neutral",
    outcomeA: "Contributor takes ownership and accelerates prototype features, creating visible progress and morale lift.",
    outcomeB: "Rushed delegation leads to misaligned expectations and abandoned tasks, wasting time.",
    outcomeC: "Structured wait allows clean role definitions and durable long-term reliability.",
    outcomeD: "Delaying collaboration demotivates volunteers who lose interest before roles open."
  },
  {
    subBand: "F-B1-0.4",
    marketCap: "$100 K",
    focus: "Community whisper",
    context: "Small Discord / Telegram starts forming around your vision.",
    boldPrompt: "Announce a small public test or prize pool to attract more eyes.",
    conservativePrompt: "Keep it invite-only and iterate silently.",
    marketImpact: "Bold → potential mini-viral spike; Conservative → measured signal building.",
    tone: "transformative",
    outcomeA: "Public test builds excitement; users share leaderboard clips, fuelling a small viral ripple.",
    outcomeB: "Public test crashes under load, generating doubt and memes about instability.",
    outcomeC: "Invite-only iteration sharpens quality and yields stable metrics for the later reveal.",
    outcomeD: "Closed testing kills buzz; community assumes the project stagnated."
  },
  {
    subBand: "F-B1-0.5",
    marketCap: "$150 K",
    focus: "Whitepaper Clarification Moment",
    context: "The whitepaper has been live since launch, but new participants—players, organisers, and service providers—are questioning parts of it. There’s mounting pressure to clarify what’s current and what’s still evolving.",
    boldPrompt: "Issue public clarifications and updates to the whitepaper, directly addressing community questions and publishing a “living version” log to show transparency and responsiveness.",
    conservativePrompt: "Privately maintain an internal changelog, keeping revisions and clarifications within the core team until the next formal release to preserve authority and consistency.",
    marketImpact: "Bold → accelerates trust and transparency but risks fragmenting narrative or over-promising revisions. Conservative → maintains message discipline and legal clarity but appears opaque or slow to react.",
    tone: "risky",
    outcomeA: "The public changelog earns praise for openness, boosting community trust and transparency.",
    outcomeB: "Over-communication triggers confusion as multiple versions circulate and contradict one another.",
    outcomeC: "Private revisions strengthen message discipline, keeping legal clarity intact.",
    outcomeD: "Opacity breeds suspicion and rumours of “hidden changes,” lowering credibility."
  },
  {
    subBand: "F-B1-0.6",
    marketCap: "$250 K",
    focus: "Unexpected attention",
    context: "A micro-influencer mentions your project; eyes are on you.",
    boldPrompt: "Double down, open early tournament to capitalise.",
    conservativePrompt: "Quietly handle bugs, stabilise before expanding.",
    marketImpact: "Bold → hype surge but stability risk; Conservative → slower but more reliable scaling.",
    tone: "risky",
    outcomeA: "Tournament launch attracts influencer coverage and new entrants, multiplying exposure.",
    outcomeB: "Unpatched bugs cause chaos during tournament, undermining confidence and brand integrity.",
    outcomeC: "Bug-first focus prevents failure loops; launch later earns respect for polish.",
    outcomeD: "Missed momentum window dulls enthusiasm; influencer interest moves elsewhere."
  },
  {
    subBand: "F-B1-0.7",
    marketCap: "$400 K",
    focus: "First real choices",
    context: "You now juggle founder, dev, marketing and community hats.",
    boldPrompt: "Go public with a clear launch date — commit hard.",
    conservativePrompt: "Soft launch quietly and let growth remain organic.",
    marketImpact: "Bold → forces acceleration and visibility; Conservative → sustainable pace.",
    tone: "risky",
    outcomeA: "Clear public launch date galvanises the community, doubling pre-registrations and morale.",
    outcomeB: "Date lock creates unbearable crunch; missed deadlines erode confidence.",
    outcomeC: "Soft launch yields steady adoption, allowing natural scaling.",
    outcomeD: "Soft approach causes narrative drift; competitors dominate headlines."
  },
  {
    subBand: "F-B1-0.8",
    marketCap: "$600 K",
    focus: "Team formation moment",
    context: "Demand exceeds what one person can handle.",
    boldPrompt: "Recruit first contributors publicly (volunteers/partners).",
    conservativePrompt: "Keep control tight and delay team growth.",
    marketImpact: "Bold → faster scaling but coordination risk; Conservative → less growth but safer structure.",
    tone: "neutral",
    outcomeA: "Public recruitment finds strong talent fast, adding new dev and design capacity.",
    outcomeB: "Unvetted recruits cause security and coordination failures that stall velocity.",
    outcomeC: "Tight control maintains high code quality and operational discipline.",
    outcomeD: "Over-control creates burnout; progress stagnates and morale dips."
  },
  {
    subBand: "F-B1-0.9",
    marketCap: "$800 K",
    focus: "External validation",
    context: "Early investors / partners take notice.",
    boldPrompt: "Announce funding intentions or pitch publicly.",
    conservativePrompt: "Stay quiet, keep building until ready.",
    marketImpact: "Bold → funding hype but big expectations; Conservative → slower path but less risk of over-promising.",
    tone: "risky",
    outcomeA: "Public funding push secures valuable partners and validation, raising brand legitimacy.",
    outcomeB: "Funding hype misfires as investors over-promise, generating backlash and community distrust.",
    outcomeC: "Quiet build proves resilience; later partnership terms improve substantially.",
    outcomeD: "Missed investor window limits expansion; morale dips during liquidity squeeze."
  },
  {
    subBand: "F-B1-1.0",
    marketCap: "$1 M",
    focus: "Press spotlight",
    context: "Press or KOLs discover the project.",
    boldPrompt: "Lean into hype, do interviews and expand rapidly.",
    conservativePrompt: "Carefully filter exposure, build stable narrative.",
    marketImpact: "Bold → explosive end-of-band momentum but fragile under pressure; Conservative → sustainable growth.",
    tone: "transformative",
    outcomeA: "Press interviews attract wide attention; major media mention CGT as “next-gen experiment.”",
    outcomeB: "Media spotlight exposes unfinished systems; reputation strains under scrutiny.",
    outcomeC: "Controlled messaging cements perception of discipline and steady leadership.",
    outcomeD: "Cautious tone appears dull; press loses interest."
  }
];

window.FOUNDER_SCENES = window.CGT_SCENARIOS.founder;

// visible debug confirmation
document.body.insertAdjacentHTML(
  "beforeend",
  '<div style="color:#0f0;font-size:14px;margin-top:10px;">✅ founder-data.js executed</div>'
);