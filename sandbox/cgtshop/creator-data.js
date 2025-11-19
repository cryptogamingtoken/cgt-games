// creator-data.js

window.CGT_SCENARIOS = window.CGT_SCENARIOS || {};
window.CGT_SCENARIOS.creator = [

  /* ============================================
     Crt-B1-0.1 — First mock creator
  ============================================ */
  {
    subBand: "Crt-B1-0.1",
    marketCap: "$10 K",
    focus: "First mock creator",
    context: "The founder steps into the role of the first third-party creator to prove the concept.",
    boldPrompt: "Publish a full mock GQT under a creator alias as if external.",
    conservativePrompt: "Ship a tiny private demo to 3 trusted testers under the alias, nothing public.",
    tone: "risky",

    outcomeA: "Publishing the mock GQT proves outsiders can build and attracts first testers.",
    outcomeB: "Public bug reports expose fragile systems and erode confidence early.",
    outcomeC: "The quiet demo refines mechanics safely for later release.",
    outcomeD: "The silence leaves no visible sign of creator progress."
  },

  /* ============================================
     Crt-B1-0.2 — Early co-creator
  ============================================ */
  {
    subBand: "Crt-B1-0.2",
    marketCap: "$25 K",
    focus: "Early co-creator",
    context: "A close collaborator claims creator identity.",
    boldPrompt: "Drop their own public build thread and scoreboards.",
    conservativePrompt: "Share a single clip or screenshot in DMs only; no build access.",
    tone: "risky",

    outcomeA: "Public co-creator threads inspire imitators and spark the first creator mini-scene.",
    outcomeB: "Uncoordinated posts cause confusion and code clashes.",
    outcomeC: "Private collaboration polishes tools efficiently behind the scenes.",
    outcomeD: "Discretion kills excitement and delays wider creator momentum."
  },

  /* ============================================
     Crt-B1-0.3 — Closed circle
  ============================================ */
  {
    subBand: "Crt-B1-0.3",
    marketCap: "$50 K",
    focus: "Closed circle",
    context: "A handful of insiders start parallel creator experiments.",
    boldPrompt: "Coordinate openly as “first wave” with public WIPs.",
    conservativePrompt: "Each keeps to a tiny sandbox, sharing only one short test each.",
    tone: "neutral",

    outcomeA: "Open coordination builds a shared learning culture and faster standards.",
    outcomeB: "Public friction between early creators damages morale.",
    outcomeC: "Tight sandboxing avoids conflict and improves reliability.",
    outcomeD: "Isolated work slows discovery and breeds rival micro-groups."
  },

  /* ============================================
     Crt-B1-0.4 — First breach
  ============================================ */
  {
    subBand: "Crt-B1-0.4",
    marketCap: "$100 K",
    focus: "First breach",
    context: "A creator project escapes the bubble.",
    boldPrompt: "Claim it: post builds, name the team, invite eyes.",
    conservativePrompt: "Post a brief “work paused” note and go quiet; keep assets offline.",
    tone: "transformative",

    outcomeA: "Owning the escaped project transforms it into the first community success story.",
    outcomeB: "Claiming credit too late lets outsiders seize narrative control.",
    outcomeC: "Quietly pausing shields the team from failure publicity.",
    outcomeD: "Going dark makes the community think the project collapsed."
  },

  /* ============================================
     Crt-B1-0.5 — First knock
  ============================================ */
  {
    subBand: "Crt-B1-0.5",
    marketCap: "$150 K",
    focus: "First knock",
    context: "A true outsider arrives with a concept.",
    boldPrompt: "Announce their concept publicly with a rough prototype link.",
    conservativePrompt: "Share a one-pager privately; no prototype, no dates.",
    tone: "risky",

    outcomeA: "Announcing the outsider concept rallies builders and media coverage.",
    outcomeB: "Premature reveal exposes half-finished systems and invites criticism.",
    outcomeC: "Private briefing nurtures trust with partners and smooth future onboarding.",
    outcomeD: "Total secrecy causes the outsider to lose interest and leave."
  },

  /* ============================================
     Crt-B1-0.6 — Waiting lobby
  ============================================ */
  {
    subBand: "Crt-B1-0.6",
    marketCap: "$250 K",
    focus: "Waiting lobby",
    context: "Multiple would-be creators orbit.",
    boldPrompt: "Post a public “creator roll-call” thread and showcase micro-demos.",
    conservativePrompt: "Quietly form a tiny group chat; swap a single minimal artifact each.",
    tone: "risky",

    outcomeA: "Public creator roll-call fills servers with fresh prototypes and momentum.",
    outcomeB: "Open chaos crashes builds and overextends infra.",
    outcomeC: "Private group chat keeps progress tidy and controlled.",
    outcomeD: "Low visibility fragments interest and slows community cohesion."
  },

  /* ============================================
     Crt-B1-0.7 — Shadow watchers
  ============================================ */
  {
    subBand: "Crt-B1-0.7",
    marketCap: "$400 K",
    focus: "Shadow watchers",
    context: "Creators study player meta, timing their entry.",
    boldPrompt: "Soft-launch around live player events with public mini-rulesets.",
    conservativePrompt: "Run one private scrim mirroring the meta; no public trace.",
    tone: "risky",

    outcomeA: "Timed public mini-events sync perfectly with player hype and grow the meta.",
    outcomeB: "Soft-launch errors ruin player trust and timing advantage.",
    outcomeC: "Private testing around live events captures learnings calmly.",
    outcomeD: "Over-caution misses the hype window and loses visibility."
  },

  /* ============================================
     Crt-B1-0.8 — Tooling grab
  ============================================ */
  {
    subBand: "Crt-B1-0.8",
    marketCap: "$600 K",
    focus: "Tooling grab",
    context: "Early tool access surfaces.",
    boldPrompt: "Build openly on half-finished tools; post repo/screens daily.",
    conservativePrompt: "Tinker offline with a tiny mock; share one redacted screenshot only.",
    tone: "neutral",

    outcomeA: "Building openly on early tools spawns the first creator boom.",
    outcomeB: "Unstable repos break and demotivate contributors.",
    outcomeC: "Offline tinkering yields stable frameworks for next wave.",
    outcomeD: "Quiet development leaves narrative vacuum filled by outsiders."
  },

  /* ============================================
     Crt-B1-0.9 — First creator tournament
  ============================================ */
  {
    subBand: "Crt-B1-0.9",
    marketCap: "$800 K",
    focus: "First creator tournament",
    context: "External creators move.",
    boldPrompt: "Launch GQTs at scale; multiple brackets, public payouts.",
    conservativePrompt: "Run a single invite-only pilot with minimal visibility.",
    tone: "risky",

    outcomeA: "Launching large-scale GQTs ignites competitive culture and drives token use.",
    outcomeB: "System overload leads to payout issues and public backlash.",
    outcomeC: "Private pilots finish cleanly and guide later stable launches.",
    outcomeD: "Low activity makes creators appear disengaged from growth."
  },

  /* ============================================
     Crt-B1-1.0 — Pioneers emerge
  ============================================ */
  {
    subBand: "Crt-B1-1.0",
    marketCap: "$1 M",
    focus: "Pioneers emerge",
    context: "Ecosystem attention shifts outward. Creator momentum shapes early norms.",
    boldPrompt: "Rally the creator layer. Launch a coordinated wave of GQTs to define the meta.",
    conservativePrompt: "Limit creator activity. Keep launches quiet and fragmented to avoid escalation.",
    tone: "transformative",

    outcomeA: "Coordinated creator wave defines the meta and cements ecosystem culture.",
    outcomeB: "Overstretch drains resources and burns out teams.",
    outcomeC: "Controlled, selective launches preserve quality and steady growth.",
    outcomeD: "Excess caution lets rival ecosystems dominate attention."
  },

  /* ============================================
     Crt-B2-0.1 — First Open Creator Wave
  ============================================ */
  {
    subBand: "Crt-B2-0.1",
    marketCap: "$1.5 M",
    focus: "First Open Creator Wave",
    context: "(v3) Former testers publish their first public GQTs, stress-testing live tools under lingering instability.",
    boldPrompt: "Launch multiple public GQTs simultaneously to prove confidence and attract early trust.",
    conservativePrompt: "Stage limited pilots and gather bug data privately before mass publishing.",
    tone: "risky",

    outcomeA: "First public GQTs succeed under live stress, proving tool reliability.",
    outcomeB: "Instability breaks sessions and delays reward payouts.",
    outcomeC: "Gradual releases strengthen trust and consistent engagement.",
    outcomeD: "Over-filtering stifles open creativity and slows adoption."
  },

  /* ============================================
     Crt-B2-0.2 — Tutorial Collaborations
  ============================================ */
  {
    subBand: "Crt-B2-0.2",
    marketCap: "$2.5 M",
    focus: "Tutorial Collaborations",
    context: "(v1) Creators partner with Service Providers to design Learn-to-Play GQTs blending onboarding content.",
    boldPrompt: "Publish joint tutorial events with on-chain rewards and visible creator–SP credit sharing.",
    conservativePrompt: "Keep pilot tutorials internal until formats are refined.",
    tone: "neutral",

    outcomeA: "Tutorial collaborations onboard thousands smoothly.",
    outcomeB: "Over-complex tutorials overwhelm users.",
    outcomeC: "Private pilot lessons refine best practices.",
    outcomeD: "No collaboration leaves onboarding gap unfilled."
  },

  /* ============================================
     Crt-B2-0.3 — Fair-Config Adoption
  ============================================ */
  {
    subBand: "Crt-B2-0.3",
    marketCap: "$5 M",
    focus: "Fair-Config Adoption",
    context: "(v1) Creators embrace Fair-Play presets to win trust.",
    boldPrompt: "Promote 'Fair-Verified' badges publicly and challenge peers.",
    conservativePrompt: "Adopt presets quietly and let players discover quality.",
    tone: "transformative",

    outcomeA: "Fair-Config rollout standardises quality and boosts trust.",
    outcomeB: "Early preset bugs cause fairness disputes.",
    outcomeC: "Voluntary adoption spreads organically.",
    outcomeD: "Delayed rollout keeps inconsistency and confusion high."
  },

  /* ============================================
     Crt-B2-0.4 — Educational Expansion Wave
  ============================================ */
  {
    subBand: "Crt-B2-0.4",
    marketCap: "$10 M",
    focus: "Educational Expansion Wave",
    context: "(v3) Creators branch into subject-based GQTs where experimentation meets instruction.",
    boldPrompt: "Launch subject-league campaigns with educators and DAO literacy groups.",
    conservativePrompt: "Limit educational GQTs to informal beta programs.",
    tone: "neutral",

    outcomeA: "Educational GQTs gain praise and draw institutional attention.",
    outcomeB: "Overextension spreads creators too thin.",
    outcomeC: "Careful pilots mature steadily.",
    outcomeD: "Competitors seize education narrative first."
  },

  /* ============================================
     Crt-B2-0.5 — Quality Benchmarking
  ============================================ */
  {
    subBand: "Crt-B2-0.5",
    marketCap: "$15 M",
    focus: "Quality Benchmarking",
    context: "(v2) Community dashboards rank GQTs; verified creators emerge.",
    boldPrompt: "Embrace ranking dashboards and publish metrics publicly.",
    conservativePrompt: "Participate quietly while refining internal standards.",
    tone: "transformative",

    outcomeA: "Benchmark dashboards reward high-quality creators.",
    outcomeB: "Public ranking errors trigger backlash.",
    outcomeC: "Internal scoring builds discipline quietly.",
    outcomeD: "Opaque ratings fuel scepticism toward standards."
  },

  /* ============================================
     Crt-B2-0.6 — Creator Ecosystem Maturity
  ============================================ */
  {
    subBand: "Crt-B2-0.6",
    marketCap: "$25 M",
    focus: "Creator Ecosystem Maturity",
    context: "(v2) Collaboration networks form; creators share modules and analytics.",
    boldPrompt: "Create a shared 'Creator Commons' for modules and playbooks.",
    conservativePrompt: "Keep module sharing invite-only.",
    tone: "risky",

    outcomeA: "Open collaboration networks raise output and identity.",
    outcomeB: "Data leaks expose unfinished projects.",
    outcomeC: "Private exchanges foster disciplined growth.",
    outcomeD: "Isolated silos repeat mistakes."
  },

  /* ============================================
     Crt-B2-0.7 — Mentor Series & Brand Formats
  ============================================ */
  {
    subBand: "Crt-B2-0.7",
    marketCap: "$40 M",
    focus: "Mentor Series & Brand Formats",
    context: "(v3) Creators partner with top players to host mentor GQTs.",
    boldPrompt: "Host 'Mentor Series' livestreams with co-branded leaderboards.",
    conservativePrompt: "Keep mentor collaborations small-scale and curated.",
    tone: "transformative",

    outcomeA: "Mentor GQTs trend and professionalise creator reputations.",
    outcomeB: "Personality clashes damage credibility.",
    outcomeC: "Selective mentoring keeps stable training.",
    outcomeD: "Closed approach misses viral opportunity."
  },

  /* ============================================
     Crt-B2-0.8 — Reputation-Driven Access
  ============================================ */
  {
    subBand: "Crt-B2-0.8",
    marketCap: "$60 M",
    focus: "Reputation-Driven Access",
    context: "(v1) High-rated creators introduce verification-gated entry.",
    boldPrompt: "Launch 'Verified Access Leagues' promoting qualification-based entry.",
    conservativePrompt: "Keep entry open but tagged to verified fairness.",
    tone: "risky",

    outcomeA: "Reputation-gated GQTs create prestige and retain top players.",
    outcomeB: "Exclusivity perception causes backlash.",
    outcomeC: "Open but verified access balances inclusivity.",
    outcomeD: "Lax gating invites spam and distrust."
  },

  /* ============================================
     Crt-B2-0.9 — Sponsorship Interest
  ============================================ */
  {
    subBand: "Crt-B2-0.9",
    marketCap: "$80 M",
    focus: "Sponsorship Interest",
    context: "(v1) Organisers and brands court successful creators.",
    boldPrompt: "Accept sponsor deals publicly and reinvest into larger prize pools.",
    conservativePrompt: "Negotiate discreetly and test brand alignment privately.",
    tone: "neutral",

    outcomeA: "Sponsorships elevate creator professionalism.",
    outcomeB: "Brand overreach sparks sell-out accusations.",
    outcomeC: "Private deals ensure sustainable growth.",
    outcomeD: "Over-restraint wastes brand attention."
  },

  /* ============================================
     Crt-B2-1.0 — Sustainable Creator Models
  ============================================ */
  {
    subBand: "Crt-B2-1.0",
    marketCap: "$100 M",
    focus: "Sustainable Creator Models",
    context: "(v2 modified) Veteran creators launch independent micro-studios.",
    boldPrompt: "Register micro-studios and announce guild partnerships.",
    conservativePrompt: "Expand micro-studios quietly until revenue stabilises.",
    tone: "transformative",

    outcomeA: "Independent studios sustain themselves, proving economy viability.",
    outcomeB: "Mismanagement collapses early studios.",
    outcomeC: "Cautious expansion yields long-term income.",
    outcomeD: "Conservatism pushes top talent toward rivals."
  },

  /* ============================================
     Crt-B3-0.1 — Creator Certification Launch
  ============================================ */
  {
    subBand: "Crt-B3-0.1",
    marketCap: "$120 M",
    focus: "Creator Certification Launch",
    context: "Independent creators seek legitimacy to access institutional partnerships.",
    boldPrompt: "Publish an on-chain “Verified Creator Badge” standard.",
    conservativePrompt: "Keep informal vetting until DAO audit framework arrives.",
    tone: "neutral",

    outcomeA: "Verified badges attract institutional partnerships.",
    outcomeB: "Fake badges damage trust.",
    outcomeC: "Informal vetting builds a good-faith internal network.",
    outcomeD: "Slow progress keeps institutions hesitant."
  },

  /* ============================================
     Crt-B3-0.2 — Institutional Pilots
  ============================================ */
  {
    subBand: "Crt-B3-0.2",
    marketCap: "$180 M",
    focus: "Institutional Pilots",
    context: "Education and HR firms test GQTs as assessment tools.",
    boldPrompt: "Open a 'Corporate Pilot Gateway' with stipends and KPIs.",
    conservativePrompt: "Limit pilots to existing partners until scaling.",
    tone: "neutral",

    outcomeA: "Corporate gateway wins headlines and contracts.",
    outcomeB: "Admin load strains small teams.",
    outcomeC: "Limited pilots maintain quality with waitlist demand.",
    outcomeD: "Closed policy makes firms lose interest."
  },

  /* ============================================
     Crt-B3-0.3 — Content Standardisation
  ============================================ */
  {
    subBand: "Crt-B3-0.3",
    marketCap: "$250 M",
    focus: "Content Standardisation",
    context: "Creator quality varies wildly across sectors.",
    boldPrompt: "Draft 'GQT Content Standard v1' covering fairness, UX, accreditation.",
    conservativePrompt: "Encourage voluntary self-policing until DAO templates exist.",
    tone: "transformative",

    outcomeA: "Content standard v1 lifts quality and unifies sectors.",
    outcomeB: "Backlash forms against perceived bureaucracy.",
    outcomeC: "Self-policing keeps diversity with alignment.",
    outcomeD: "Lack of standard breeds chaotic inconsistencies."
  },

  /* ============================================
     Crt-B3-0.4 — Creator Analytics
  ============================================ */
  {
    subBand: "Crt-B3-0.4",
    marketCap: "$330 M",
    focus: "Creator Analytics",
    context: "Institutions demand proof of impact and completion rates.",
    boldPrompt: "Deploy public Creator Analytics dashboards.",
    conservativePrompt: "Provide aggregate reports privately first.",
    tone: "neutral",

    outcomeA: "Analytics dashboards raise transparency and efficiency.",
    outcomeB: "Data leaks briefly harm creator privacy.",
    outcomeC: "Private reports strengthen institutional confidence.",
    outcomeD: "Lack of data proof limits renewals."
  },

  /* ============================================
     Crt-B3-0.5 — Credential Partnerships
  ============================================ */
  {
    subBand: "Crt-B3-0.5",
    marketCap: "$420 M",
    focus: "Credential Partnerships",
    context: "Colleges and brands offer co-branded GQTs.",
    boldPrompt: "Sign open licensing agreements for GQT credentials.",
    conservativePrompt: "Maintain manual approvals per partner.",
    tone: "neutral",

    outcomeA: "Open licensing multiplies co-branded GQTs worldwide.",
    outcomeB: "Trademark misuse causes PR scandal.",
    outcomeC: "Manual approvals keep reputations intact.",
    outcomeD: "Bottleneck frustrates partner enthusiasm."
  },

  /* ============================================
     Crt-B3-0.6 — Studio Formation
  ============================================ */
  {
    subBand: "Crt-B3-0.6",
    marketCap: "$520 M",
    focus: "Studio Formation",
    context: "Top creators form micro-studios.",
    boldPrompt: "Launch 'Creator Studio Grants' to accelerate growth.",
    conservativePrompt: "Observe organic formation and support later.",
    tone: "neutral",

    outcomeA: "Grants generate job creation and excitement.",
    outcomeB: "Abuse scandals trigger DAO scrutiny.",
    outcomeC: "Organic studios scale gradually with trust.",
    outcomeD: "No support leads to talent drain."
  },

  /* ============================================
     Crt-B3-0.7 — Inter-Creator Collaboration
  ============================================ */
  {
    subBand: "Crt-B3-0.7",
    marketCap: "$640 M",
    focus: "Inter-Creator Collaboration",
    context: "Studios cross-produce multi-discipline GQTs.",
    boldPrompt: "Host 'Creator Collab Week' with shared rewards.",
    conservativePrompt: "Keep collabs unstructured for creativity.",
    tone: "transformative",

    outcomeA: "Collab Week breaks audience records and unites studios.",
    outcomeB: "Coordination errors waste budgets.",
    outcomeC: "Loose cooperation keeps creativity healthy.",
    outcomeD: "Over-informality prevents stronger identity."
  },

  /* ============================================
     Crt-B3-0.8 — Accreditation Bridges
  ============================================ */
  {
    subBand: "Crt-B3-0.8",
    marketCap: "$760 M",
    focus: "Accreditation Bridges",
    context: "External credential bodies request API integration.",
    boldPrompt: "Publish the 'Credential Bridge API'.",
    conservativePrompt: "Limit bridges to pilot programs for QA.",
    tone: "neutral",

    outcomeA: "Credential API brings validation and media praise.",
    outcomeB: "Data mismatch causes certification confusion.",
    outcomeC: "Pilot integrations succeed with small partners.",
    outcomeD: "Excess caution limits adoption."
  },

  /* ============================================
     Crt-B3-0.9 — Licensing Economy
  ============================================ */
  {
    subBand: "Crt-B3-0.9",
    marketCap: "$880 M",
    focus: "Licensing Economy",
    context: "Creators begin licensing modules.",
    boldPrompt: "Enable on-chain royalty tracking.",
    conservativePrompt: "Keep licensing manual until tested.",
    tone: "risky",

    outcomeA: "Royalty contracts fuel the first licensing boom.",
    outcomeB: "Exploits force DAO intervention.",
    outcomeC: "Manual licensing maintains stability.",
    outcomeD: "Slow revenue growth frustrates top creators."
  },

  /* ============================================
     Crt-B3-1.0 — Professional Gateway Maturity
  ============================================ */
  {
    subBand: "Crt-B3-1.0",
    marketCap: "$1 B",
    focus: "Professional Gateway Maturity",
    context: "Creator ecosystem becomes trusted pipeline for corporate skills.",
    boldPrompt: "Announce “Creator Gateway Network v1”.",
    conservativePrompt: "Maintain selective onboarding until DAO layer finalises.",
    tone: "transformative",

    outcomeA: "Gateway Network becomes a global qualification rail.",
    outcomeB: "Regulatory pushback pauses some regions.",
    outcomeC: "Selective onboarding keeps momentum.",
    outcomeD: "Over-control loses public excitement."
  },

  /* ============================================
     Crt-B4-0.1 — AI Co-Creation Frontier
  ============================================ */
  {
    subBand: "Crt-B4-0.1",
    marketCap: "$1 B",
    focus: "AI Co-Creation Frontier",
    context: "Creators experiment with AI-generated content.",
    boldPrompt: "Publish open AI toolkit repos for GQT generation.",
    conservativePrompt: "Keep AI assistance internal until guidelines finalise.",
    tone: "neutral",

    outcomeA: "AI toolkit release triples creation rate.",
    outcomeB: "Low-quality AI content floods feeds.",
    outcomeC: "Private AI use improves precision.",
    outcomeD: "Over-restraint causes stagnation."
  },

  /* ============================================
     Crt-B4-0.2 — AR Immersion Shift
  ============================================ */
  {
    subBand: "Crt-B4-0.2",
    marketCap: "$2 B",
    focus: "AR Immersion Shift",
    context: "Hardware firms court creators for AR learning.",
    boldPrompt: "Partner on 'AR GQT Pilot Series'.",
    conservativePrompt: "Limit to select demo events first.",
    tone: "transformative",

    outcomeA: "AR pilots earn global media attention.",
    outcomeB: "Hardware limits break events.",
    outcomeC: "Selective demos refine AR UX.",
    outcomeD: "Slow scaling loses partner excitement."
  },

  /* ============================================
     Crt-B4-0.3 — Multi-Studio Federation
  ============================================ */
  {
    subBand: "Crt-B4-0.3",
    marketCap: "$4 B",
    focus: "Multi-Studio Federation",
    context: "Regional creator studios link into federations.",
    boldPrompt: "Formalise cross-studio governance with shared treasuries.",
    conservativePrompt: "Keep federations informal until DAO templates exist.",
    tone: "neutral",

    outcomeA: "Federated studios coordinate major events.",
    outcomeB: "Internal politics fracture early.",
    outcomeC: "Loose cooperation keeps peace.",
    outcomeD: "No framework leads to duplication."
  },

  /* ============================================
     Crt-B4-0.4 — Dynamic Royalty Markets
  ============================================ */
  {
    subBand: "Crt-B4-0.4",
    marketCap: "$7 B",
    focus: "Dynamic Royalty Markets",
    context: "Secondary sales of creator modules explode.",
    boldPrompt: "Launch on-chain royalty exchange.",
    conservativePrompt: "Maintain peer-to-peer trading only.",
    tone: "risky",

    outcomeA: "Royalty exchange brings liquidity and income.",
    outcomeB: "Speculation triggers volatility backlash.",
    outcomeC: "Peer-to-peer growth remains stable.",
    outcomeD: "Lack of exchange keeps illiquidity complaints high."
  },

  /* ============================================
     Crt-B4-0.5 — Brand Partnership Era
  ============================================ */
  {
    subBand: "Crt-B4-0.5",
    marketCap: "$12 B",
    focus: "Brand Partnership Era",
    context: "Major companies seek custom GQTs.",
    boldPrompt: "Approve co-branded creator franchises.",
    conservativePrompt: "Keep enterprise work off-chain under NDAs.",
    tone: "transformative",

    outcomeA: "Branded creator franchises redefine training worldwide.",
    outcomeB: "Corporate misuse scandal sparks debate.",
    outcomeC: "Private deals ensure reliable outcomes.",
    outcomeD: "Refusing brand work slows global reach."
  },

  /* ============================================
     Crt-B4-0.6 — Creator AI DAOs
  ============================================ */
  {
    subBand: "Crt-B4-0.6",
    marketCap: "$20 B",
    focus: "Creator AI DAOs",
    context: "AI assistants trained on creator styles emerge.",
    boldPrompt: "Register AI co-authors as DAO sub-entities.",
    conservativePrompt: "Restrict AI credits to metadata tags.",
    tone: "neutral",

    outcomeA: "AI sub-DAOs attract major tech investment.",
    outcomeB: "Unethical outputs trigger crisis.",
    outcomeC: "Metadata tagging keeps AI transparent.",
    outcomeD: "Over-delay loses edge to rivals."
  },

  /* ============================================
     Crt-B4-0.7 — Educational Systems Fusion
  ============================================ */
  {
    subBand: "Crt-B4-0.7",
    marketCap: "$35 B",
    focus: "Educational Systems Fusion",
    context: "Governments adopt GQTs for certification.",
    boldPrompt: "Release 'Public Education GQT Framework'.",
    conservativePrompt: "Pilot privately in select regions first.",
    tone: "transformative",

    outcomeA: "Education Framework standardises learning worldwide.",
    outcomeB: "Implementation errors spark backlash.",
    outcomeC: "Pilot regions prove the model safely.",
    outcomeD: "Over-caution slows reform momentum."
  },

  /* ============================================
     Crt-B4-0.8 — Cross-Protocol Integration
  ============================================ */
  {
    subBand: "Crt-B4-0.8",
    marketCap: "$50 B",
    focus: "Cross-Protocol Integration",
    context: "Creator economies span multiple chains.",
    boldPrompt: "Publish cross-chain Creator Registry via Wormhole.",
    conservativePrompt: "Keep registries off-chain until governance is tested.",
    tone: "neutral",

    outcomeA: "Registry achieves global interoperability.",
    outcomeB: "Bridge bug halts sync temporarily.",
    outcomeC: "Off-chain registry ensures integrity.",
    outcomeD: "No bridge adoption limits exposure."
  },

  /* ============================================
     Crt-B4-0.9 — Media Metaverse Expansion
  ============================================ */
  {
    subBand: "Crt-B4-0.9",
    marketCap: "$75 B",
    focus: "Media Metaverse Expansion",
    context: "Creators build mixed-media competitions.",
    boldPrompt: "Launch DAO-sponsored Metaverse Festival.",
    conservativePrompt: "Support independent events quietly.",
    tone: "risky",

    outcomeA: "Metaverse Festival becomes cultural landmark.",
    outcomeB: "Server strain disrupts final rounds.",
    outcomeC: "Independent events run flawlessly.",
    outcomeD: "DAO silence leaves creators unsupported."
  },

  /* ============================================
     Crt-B4-1.0 — Creator Infrastructure Maturity
  ============================================ */
  {
    subBand: "Crt-B4-1.0",
    marketCap: "$100 B",
    focus: "Creator Infrastructure Maturity",
    context: "Creator DAOs anchor CGT as global creative infrastructure.",
    boldPrompt: "Announce “Creator Federation Network v1”.",
    conservativePrompt: "Maintain manual sync until DAO audits.",
    tone: "transformative",

    outcomeA: "Federation Network marks full creative sovereignty.",
    outcomeB: "Governance delay frustrates studios.",
    outcomeC: "Manual sync keeps systems stable.",
    outcomeD: "Prolonged audit slows momentum."
  },

  /* ============================================
     Crt-B5-SignOff — DAO Readiness Proof
  ============================================ */
  {
    subBand: "Crt-B5-SignOff",
    marketCap: "$100 B +",
    focus: "DAO Readiness Proof — Third-Party Creators",
    context: "The creator layer spans education, work, entertainment. Final proof: creators must self-govern.",
    boldPrompt: "Federate all Creator DAOs into the DAO’s Creative Council with full on-chain governance.",
    conservativePrompt: "Maintain interim federation while audits complete.",
    tone: "transformative",

    outcomeA: "DAO Creative Council immortalises creators as co-owners.",
    outcomeB: "Smart-contract oversight flaw delays merge.",
    outcomeC: "Interim audits validate readiness.",
    outcomeD: "Compliance delays slow symbolic closure."
  }

];
