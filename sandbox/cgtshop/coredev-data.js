// coredev-data.js

window.CGT_SCENARIOS = window.CGT_SCENARIOS || {};
window.CGT_SCENARIOS.coredev = [

  /* ============================================
     C-B1-0.1 — First commit
  ============================================ */
  {
    subBand: "C-B1-0.1",
    marketCap: "$10 K",
    focus: "First commit",
    context: "Founder writes the first working MVP code — everything rests on them.",
    boldPrompt: "Push untested code live immediately to gain momentum.",
    conservativePrompt: "Keep coding privately, test alone before launch.",
    tone: "risky",

    outcomeA: "Public excitement surges as the code actually runs, inspiring first followers.",
    outcomeB: "A fatal bug wipes progress, shaking early trust.",
    outcomeC: "A small group quietly helps polish the MVP, laying a solid base.",
    outcomeD: "Weeks slip by with no visible progress; early curiosity fades."
  },

  /* ============================================
     C-B1-0.2 — Code or crash
  ============================================ */
  {
    subBand: "C-B1-0.2",
    marketCap: "$25 K",
    focus: "Code or crash",
    context: "First integration issues appear; no team to fix them.",
    boldPrompt: "Rush a patch to push ahead publicly.",
    conservativePrompt: "Pause feature work and fix fundamentals.",
    tone: "risky",

    outcomeA: "The patch holds, earning dev credibility and early praise.",
    outcomeB: "The rushed fix cascades new errors, freezing progress.",
    outcomeC: "The quiet fix stabilises the system unnoticed but solid.",
    outcomeD: "Competitors outpace attention; the project looks stalled."
  },

  /* ============================================
     C-B1-0.3 — Solo scaling
  ============================================ */
  {
    subBand: "C-B1-0.3",
    marketCap: "$50 K",
    focus: "Solo scaling",
    context: "Early testers report bugs and feature gaps.",
    boldPrompt: "Add a major new feature solo to impress.",
    conservativePrompt: "Stabilise existing code quietly.",
    tone: "neutral",

    outcomeA: "The new feature attracts unexpected buzz and new testers.",
    outcomeB: "Code collapses under pressure, forcing rebuild.",
    outcomeC: "System remains smooth and reliable; testers stay loyal.",
    outcomeD: "Public loses interest due to lack of novelty."
  },

  /* ============================================
     C-B1-0.4 — Hackathon vibe
  ============================================ */
  {
    subBand: "C-B1-0.4",
    marketCap: "$100 K",
    focus: "Hackathon vibe",
    context: "Late nights, rapid iteration. A few dev friends start circling.",
    boldPrompt: "Bring someone in to code fast without structure.",
    conservativePrompt: "Stay solo, keep clean repo.",
    tone: "neutral",

    outcomeA: "Pair programming accelerates delivery and morale.",
    outcomeB: "Codebase splinters as mismatched styles collide.",
    outcomeC: "Solo focus yields flawless version 1.1 stability.",
    outcomeD: "Slower progress makes team morale dip."
  },

  /* ============================================
     C-B1-0.5 — First pull request
  ============================================ */
  {
    subBand: "C-B1-0.5",
    marketCap: "$150 K",
    focus: "First pull request",
    context: "A volunteer submits a first contribution.",
    boldPrompt: "Merge fast, push to production.",
    conservativePrompt: "Review carefully, slow rollout.",
    tone: "risky",

    outcomeA: "Merge works perfectly, signalling open-source potential.",
    outcomeB: "Merge breaks live site; panic rollback.",
    outcomeC: "Meticulous review earns respect for discipline.",
    outcomeD: "Volunteer loses enthusiasm waiting for approval."
  },

  /* ============================================
     C-B1-0.6 — Infrastructure wobble
  ============================================ */
  {
    subBand: "C-B1-0.6",
    marketCap: "$250 K",
    focus: "Infrastructure wobble",
    context: "Infrastructure can’t keep up with new traffic.",
    boldPrompt: "Rewrite core modules overnight to scale.",
    conservativePrompt: "Patch and defer big changes.",
    tone: "risky",

    outcomeA: "New architecture handles growth flawlessly, confidence rises.",
    outcomeB: "Overnight rewrite crashes live app for days.",
    outcomeC: "Patches buy stability and give breathing room.",
    outcomeD: "Deferred work piles up, future slowdown inevitable."
  },

  /* ============================================
     C-B1-0.7 — First team or not
  ============================================ */
  {
    subBand: "C-B1-0.7",
    marketCap: "$400 K",
    focus: "First team or not",
    context: "Decision point — remain solo or accept help.",
    boldPrompt: "Recruit devs publicly to accelerate.",
    conservativePrompt: "Keep ownership tight, grow slowly.",
    tone: "neutral",

    outcomeA: "Public recruitment brings diversity and faster output.",
    outcomeB: "Chaos erupts from lack of onboarding process.",
    outcomeC: "Controlled growth keeps repo coherent and efficient.",
    outcomeD: "Momentum plateaus; outsiders label dev layer closed."
  },

  /* ============================================
     C-B1-0.8 — Technical debt surfacing
  ============================================ */
  {
    subBand: "C-B1-0.8",
    marketCap: "$600 K",
    focus: "Technical debt surfacing",
    context: "Rapid growth is straining structure.",
    boldPrompt: "Push a big refactor live during growth.",
    conservativePrompt: "Hold off on changes, let growth settle.",
    tone: "risky",

    outcomeA: "Refactor stabilises everything; ecosystem applauds.",
    outcomeB: "Live refactor breaks APIs; community backlash.",
    outcomeC: "Waiting preserves uptime and user trust.",
    outcomeD: "Debt compounds; scaling later becomes harder."
  },

  /* ============================================
     C-B1-0.9 — Eyes on the repo
  ============================================ */
  {
    subBand: "C-B1-0.9",
    marketCap: "$800 K",
    focus: "Eyes on the repo",
    context: "First external reviewers and investors are peeking at code.",
    boldPrompt: "Showcase unfinished roadmap publicly.",
    conservativePrompt: "Keep things closed until more ready.",
    tone: "risky",

    outcomeA: "Transparency wins new contributors and confidence.",
    outcomeB: "Exposed flaws spark criticism and FUD.",
    outcomeC: "Quiet polish delivers a surprisingly clean reveal.",
    outcomeD: "Silence breeds rumours of stagnation."
  },

  /* ============================================
     C-B1-1.0 — Scaling wall
  ============================================ */
  {
    subBand: "C-B1-1.0",
    marketCap: "$1 M",
    focus: "Scaling wall",
    context: "MVP is at its edge — tech must grow or stall.",
    boldPrompt: "Announce and start a major architecture overhaul.",
    conservativePrompt: "Maintain current build and buy time.",
    tone: "transformative",

    outcomeA: "Overhaul succeeds, ushering new growth wave.",
    outcomeB: "Rebuild drags; ecosystem freezes awaiting release.",
    outcomeC: "Steady ops sustain confidence through transition.",
    outcomeD: "Competitors seize narrative of innovation."
  },

  /* ============================================
     C-B2-0.1 — Foundational Fork
  ============================================ */
  {
    subBand: "C-B2-0.1",
    marketCap: "$1.5 M",
    focus: "Foundational Fork",
    context: "Token trades and halving cycles are live; devs inherit fragile founder-built prototype.",
    boldPrompt: "Tear down the prototype and start core rewrite now.",
    conservativePrompt: "Extend founder build with patches to keep momentum.",
    tone: "risky",

    outcomeA: "Rebuild ships clean, future-proofed system.",
    outcomeB: "Public loses patience mid-rewrite.",
    outcomeC: "Extending code keeps users engaged short-term.",
    outcomeD: "Patches stack, causing critical future bugs."
  },

  /* ============================================
     C-B2-0.2 — Depth vs Breadth Dilemma
  ============================================ */
  {
    subBand: "C-B2-0.2",
    marketCap: "$2.5 M",
    focus: "Depth vs Breadth Dilemma",
    context: "Builders and creators demand access; protocol must balance openness and structure.",
    boldPrompt: "Release SDKs and open APIs early for experimentation.",
    conservativePrompt: "Restrict integrations to vetted partners only.",
    tone: "risky",

    outcomeA: "Ecosystem explodes with creative GQTs.",
    outcomeB: "APIs exploited; downtime spirals.",
    outcomeC: "Vetted builds form stable core network.",
    outcomeD: "Others fork privately, fragmenting ecosystem."
  },

  /* ============================================
     C-B2-0.3 — Feedback Firestorm Fork
  ============================================ */
  {
    subBand: "C-B2-0.3",
    marketCap: "$5 M",
    focus: "Feedback Firestorm Fork",
    context: "Creators demand new features; devs must choose community-first or protocol-first.",
    boldPrompt: "Chase community demands aggressively.",
    conservativePrompt: "Define protocol boundaries and reject out-of-scope features.",
    tone: "risky",

    outcomeA: "Community joy and viral participation.",
    outcomeB: "Burnout and bugs trigger credibility dip.",
    outcomeC: "Protocol identity hardens with stable vision.",
    outcomeD: "Creators revolt over perceived rigidity."
  },

  /* ============================================
     C-B2-0.4 — The Visibility Tension
  ============================================ */
  {
    subBand: "C-B2-0.4",
    marketCap: "$10 M",
    focus: "The Visibility Tension",
    context: "Developer work becomes publicly visible; pressure rises.",
    boldPrompt: "Publish dev updates and roadmap snapshots.",
    conservativePrompt: "Communicate only through releases and changelogs.",
    tone: "risky",

    outcomeA: "Open dev communication builds cult trust.",
    outcomeB: "Public scrutiny distracts from progress.",
    outcomeC: "Quiet consistency earns institutional respect.",
    outcomeD: "Silence fuels outsider speculation."
  },

  /* ============================================
     C-B2-0.5 — The Governance Tension
  ============================================ */
  {
    subBand: "C-B2-0.5",
    marketCap: "$15 M",
    focus: "The Governance Tension",
    context: "Multiple contributors active; devs must decide structure vs agility.",
    boldPrompt: "Formalise contributor councils and structured reviews.",
    conservativePrompt: "Maintain lightweight coordination and rapid iteration.",
    tone: "transformative",

    outcomeA: "Structured process boosts credibility and funding.",
    outcomeB: "Red tape frustrates creative devs.",
    outcomeC: "Agile culture thrives with loose trust.",
    outcomeD: "Lack of standards causes security breach."
  },

  /* ============================================
     C-B2-0.6 — The Scaling Dilemma
  ============================================ */
  {
    subBand: "C-B2-0.6",
    marketCap: "$25 M",
    focus: "The Scaling Dilemma",
    context: "System load rising fast; devs must prioritise scaling or features.",
    boldPrompt: "Refactor core modules for long-term reliability.",
    conservativePrompt: "Keep shipping features to sustain momentum.",
    tone: "risky",

    outcomeA: "Optimised core handles mass growth.",
    outcomeB: "Long rebuild stalls other teams.",
    outcomeC: "Steady updates keep ecosystem energised.",
    outcomeD: "Critical outage reveals tech debt."
  },

  /* ============================================
     C-B2-0.7 — The Discipline Dilemma
  ============================================ */
  {
    subBand: "C-B2-0.7",
    marketCap: "$40 M",
    focus: "The Discipline Dilemma",
    context: "Developer stability now matters ecosystem-wide.",
    boldPrompt: "Introduce full DevOps pipelines, testing, and discipline.",
    conservativePrompt: "Preserve hacker-culture rapid-iteration.",
    tone: "transformative",

    outcomeA: "New reliability standard wins stakeholder trust.",
    outcomeB: "Over-process drains momentum.",
    outcomeC: "Hacker ethos inspires creativity spikes.",
    outcomeD: "Random failures tarnish credibility."
  },

  /* ============================================
     C-B2-0.8 — The Infrastructure Visibility Fork
  ============================================ */
  {
    subBand: "C-B2-0.8",
    marketCap: "$60 M",
    focus: "The Infrastructure Visibility Fork",
    context: "Stakeholders demand infrastructure transparency.",
    boldPrompt: "Publish infrastructure maps and version histories.",
    conservativePrompt: "Keep structure closed, share selective endpoints only.",
    tone: "transformative",

    outcomeA: "Public trust and third-party tools surge.",
    outcomeB: "Locked design slows future iteration.",
    outcomeC: "Controlled release prevents FUD.",
    outcomeD: "Opaque methods spark criticism."
  },

  /* ============================================
     C-B2-0.9 — The First Split in Allegiance
  ============================================ */
  {
    subBand: "C-B2-0.9",
    marketCap: "$80 M",
    focus: "The First Split in Allegiance",
    context: "Creators want speed; Founder wants structure.",
    boldPrompt: "Side with the field: ship rapidly and flexibly.",
    conservativePrompt: "Side with the architect: enforce disciplined releases.",
    tone: "risky",

    outcomeA: "Explosive feature era and creator loyalty.",
    outcomeB: "Protocol fractures from instability.",
    outcomeC: "Architecture earns reliability reputation.",
    outcomeD: "Developers labelled rigid by community."
  },

  /* ============================================
     C-B2-1.0 — Protocol Freeze or Flow
  ============================================ */
  {
    subBand: "C-B2-1.0",
    marketCap: "$100 M",
    focus: "Protocol Freeze or Flow",
    context: "Five domains depend on Dev reliability; structure is strained.",
    boldPrompt: "Declare Protocol vFinal — freeze stack for stability.",
    conservativePrompt: "Keep endpoints fluid and adaptable.",
    tone: "transformative",

    outcomeA: "Stable version becomes industry standard.",
    outcomeB: "Innovation plateaus too soon.",
    outcomeC: "Fluid iteration keeps ecosystem vibrant.",
    outcomeD: "Fork wars erupt from inconsistency."
  },

  /* ============================================
     C-B3-0.1 — Technical Consolidation
  ============================================ */
  {
    subBand: "C-B3-0.1",
    marketCap: "$120 M",
    focus: "Technical Consolidation",
    context: "Post-halving calm; stakeholders rely on stability.",
    boldPrompt: "Freeze new features and focus on load testing.",
    conservativePrompt: "Continue light feature rollouts with background optimisation.",
    tone: "neutral",

    outcomeA: "System reputation for stability rises.",
    outcomeB: "Public boredom reduces buzz.",
    outcomeC: "Continuous updates keep interest alive.",
    outcomeD: "Hidden bugs accumulate quietly."
  },

  /* ============================================
     C-B3-0.2 — Tooling Discipline
  ============================================ */
  {
    subBand: "C-B3-0.2",
    marketCap: "$180 M",
    focus: "Tooling Discipline",
    context: "Developers revisit pipelines and documentation debt.",
    boldPrompt: "Formalise repo standards and enforce PR templates.",
    conservativePrompt: "Keep guidelines informal and trust senior intuition.",
    tone: "neutral",

    outcomeA: "Cross-team clarity and fewer errors.",
    outcomeB: "Extra process annoys veterans.",
    outcomeC: "Flexibility fosters innovation.",
    outcomeD: "Onboarding confusion returns."
  },

  /* ============================================
     C-B3-0.3 — Internal Automation
  ============================================ */
  {
    subBand: "C-B3-0.3",
    marketCap: "$250 M",
    focus: "Internal Automation",
    context: "Repetitive tasks slow iteration.",
    boldPrompt: "Build CI/CD automation for all major repos.",
    conservativePrompt: "Automate only critical paths to retain control.",
    tone: "neutral",

    outcomeA: "Automation unlocks speed next cycle.",
    outcomeB: "Initial pause triggers concern.",
    outcomeC: "Stable manual checks avoid major mistakes.",
    outcomeD: "Human error causes minor incident."
  },

  /* ============================================
     C-B3-0.4 — Security Sweep
  ============================================ */
  {
    subBand: "C-B3-0.4",
    marketCap: "$330 M",
    focus: "Security Sweep",
    context: "Bug bounties appear; stakers want reliability proofs.",
    boldPrompt: "Launch full-stack audit sprint and bounty event.",
    conservativePrompt: "Schedule internal audits without public spotlight.",
    tone: "transformative",

    outcomeA: "Public trust and media coverage surge.",
    outcomeB: "Findings cause temporary panic.",
    outcomeC: "Quiet fixes maintain order.",
    outcomeD: "Missed exploit hurts reputation."
  },

  /* ============================================
     C-B3-0.5 — Inter-Team Sync
  ============================================ */
  {
    subBand: "C-B3-0.5",
    marketCap: "$420 M",
    focus: "Inter-Team Sync",
    context: "Builders depend on predictable API cadence.",
    boldPrompt: "Establish fixed release windows and shared sprints.",
    conservativePrompt: "Maintain ad-hoc updates to stay flexible.",
    tone: "neutral",

    outcomeA: "Stakeholders sync smoothly.",
    outcomeB: "Deadlines missed create bottlenecks.",
    outcomeC: "Flexible updates keep pace high.",
    outcomeD: "Version conflicts confuse others."
  },

  /* ============================================
     C-B3-0.6 — Versioning Standard
  ============================================ */
  {
    subBand: "C-B3-0.6",
    marketCap: "$520 M",
    focus: "Versioning Standard",
    context: "Forks and mismatched APIs cause confusion.",
    boldPrompt: "Publish semantic versioning rules and deprecate old endpoints.",
    conservativePrompt: "Let services evolve naturally with informal coordination.",
    tone: "transformative",

    outcomeA: "Unified versioning boosts harmony.",
    outcomeB: "Rules cause short-term dev friction.",
    outcomeC: "Freedom drives experimentation.",
    outcomeD: "Incompatibility hurts ecosystem."
  },

  /* ============================================
     C-B3-0.7 — Protocol Reliability Push
  ============================================ */
  {
    subBand: "C-B3-0.7",
    marketCap: "$640 M",
    focus: "Protocol Reliability Push",
    context: "Small outages affect games and GQTs.",
    boldPrompt: "Introduce redundancy layers and automated fallbacks.",
    conservativePrompt: "Patch issues manually as they appear.",
    tone: "neutral",

    outcomeA: "Uptime record improves dramatically.",
    outcomeB: "Complex infra costs spike.",
    outcomeC: "Quick fixes work for months.",
    outcomeD: "Future failure window widens."
  },

  /* ============================================
     C-B3-0.8 — Developer Health Balance
  ============================================ */
  {
    subBand: "C-B3-0.8",
    marketCap: "$760 M",
    focus: "Developer Health Balance",
    context: "Burnout risk emerges as sprint pace continues.",
    boldPrompt: "Enforce rest cycles, pairing, and capped commit limits.",
    conservativePrompt: "Keep voluntary flexibility for contributors.",
    tone: "neutral",

    outcomeA: "Team retains focus and longevity.",
    outcomeB: "Output drops short-term.",
    outcomeC: "Freedom keeps morale high.",
    outcomeD: "Burnout wave forces hires."
  },

  /* ============================================
     C-B3-0.9 — Learning Infrastructure
  ============================================ */
  {
    subBand: "C-B3-0.9",
    marketCap: "$880 M",
    focus: "Learning Infrastructure",
    context: "New devs need onboarding clarity.",
    boldPrompt: "Build internal academy with tutorials and mentor rotations.",
    conservativePrompt: "Share docs informally and rely on community guidance.",
    tone: "transformative",

    outcomeA: "Strong pipeline of skilled devs.",
    outcomeB: "Setup cost slows feature work.",
    outcomeC: "Community keeps energy organic.",
    outcomeD: "Knowledge loss accumulates over time."
  },

  /* ============================================
     C-B3-1.0 — Protocol Confidence Peak
  ============================================ */
  {
    subBand: "C-B3-1.0",
    marketCap: "$1 B",
    focus: "Protocol Confidence Peak",
    context: "Network operates reliably; markets stabilise around predictable releases.",
    boldPrompt: "Announce Protocol 1.0 Stable and commit to reliability identity.",
    conservativePrompt: "Let performance speak without labels.",
    tone: "transformative",

    outcomeA: "Recognition and institutional interest grow.",
    outcomeB: "Label invites oversight burden.",
    outcomeC: "Quiet competence builds trust.",
    outcomeD: "Lack of signal hides achievement."
  },

  /* ============================================
     C-B4-0.1 — Cross-Team Expansion
  ============================================ */
  {
    subBand: "C-B4-0.1",
    marketCap: "$1 B",
    focus: "Cross-Team Expansion",
    context: "Multiple dev pods form; coordination complexity rises.",
    boldPrompt: "Merge repos into unified global org with standard pipelines.",
    conservativePrompt: "Keep pods semi-autonomous with weekly sync.",
    tone: "neutral",

    outcomeA: "Centralised coordination boosts velocity.",
    outcomeB: "Merge conflicts cripple workflow.",
    outcomeC: "Semi-autonomy preserves quality.",
    outcomeD: "Sync lags create duplication."
  },

  /* ============================================
     C-B4-0.2 — Open-Source Frontier
  ============================================ */
  {
    subBand: "C-B4-0.2",
    marketCap: "$2 B",
    focus: "Open-Source Frontier",
    context: "Community demands transparent collaboration.",
    boldPrompt: "Fully open repositories and welcome external PRs.",
    conservativePrompt: "Pilot open modules under controlled mentorship.",
    tone: "risky",

    outcomeA: "Explosion of innovation and contributors.",
    outcomeB: "Code sprawl and security breach.",
    outcomeC: "Curated modules earn respect.",
    outcomeD: "Accusations of gatekeeping spread."
  },

  /* ============================================
     C-B4-0.3 — Partner Integrations
  ============================================ */
  {
    subBand: "C-B4-0.3",
    marketCap: "$4 B",
    focus: "Partner Integrations",
    context: "External builders want native SDK hooks.",
    boldPrompt: "Spin up integration labs with Service Providers.",
    conservativePrompt: "Offer only documented endpoints.",
    tone: "transformative",

    outcomeA: "New alliances drive mainstream adoption.",
    outcomeB: "Collaboration fails under time zones.",
    outcomeC: "Clear docs prevent misuse.",
    outcomeD: "Partners lose interest from distance."
  },

  /* ============================================
     C-B4-0.4 — Talent Influx
  ============================================ */
  {
    subBand: "C-B4-0.4",
    marketCap: "$7 B",
    focus: "Talent Influx",
    context: "New senior engineers join with varied toolchains.",
    boldPrompt: "Mandate unified stack instantly.",
    conservativePrompt: "Allow diversity temporarily before consolidating.",
    tone: "neutral",

    outcomeA: "Unified stack streamlines output.",
    outcomeB: "Morale drops after forced switch.",
    outcomeC: "Diverse stacks spark creativity.",
    outcomeD: "Later integration pain surfaces."
  },

  /* ============================================
     C-B4-0.5 — Cross-Protocol Bridges
  ============================================ */
  {
    subBand: "C-B4-0.5",
    marketCap: "$12 B",
    focus: "Cross-Protocol Bridges",
    context: "Builders request data parity with other chains.",
    boldPrompt: "Launch multi-chain API bridge beta.",
    conservativePrompt: "Delay rollout until audits complete.",
    tone: "risky",

    outcomeA: "Cross-chain attention skyrockets.",
    outcomeB: "Exploit reveals flaw mid-launch.",
    outcomeC: "Slow rollout builds trust.",
    outcomeD: "Competitors seize headline."
  },

  /* ============================================
     C-B4-0.6 — Ecosystem Developer Program
  ============================================ */
  {
    subBand: "C-B4-0.6",
    marketCap: "$20 B",
    focus: "Ecosystem Developer Program",
    context: "Mentorship becomes funding flows.",
    boldPrompt: "Formalise grant programs with on-chain tracking.",
    conservativePrompt: "Keep informal bounties and peer votes.",
    tone: "transformative",

    outcomeA: "Structured growth inspires future founders.",
    outcomeB: "Paperwork burnout hits small devs.",
    outcomeC: "Grass-roots energy thrives.",
    outcomeD: "Funding chaos reduces impact."
  },

  /* ============================================
     C-B4-0.7 — Market Data Partnerships
  ============================================ */
  {
    subBand: "C-B4-0.7",
    marketCap: "$35 B",
    focus: "Market Data Partnerships",
    context: "Indexers and analysts want deeper data pipes.",
    boldPrompt: "Publish public analytics schema and dashboards.",
    conservativePrompt: "Offer read-only endpoints under NDA.",
    tone: "neutral",

    outcomeA: "Public praise for transparency.",
    outcomeB: "Data misuse sparks controversy.",
    outcomeC: "Trusted partners validate metrics.",
    outcomeD: "Public questions secrecy."
  },

  /* ============================================
     C-B4-0.8 — DevDAO Prototype
  ============================================ */
  {
    subBand: "C-B4-0.8",
    marketCap: "$50 B",
    focus: "DevDAO Prototype",
    context: "Contributors push for governance over roadmap.",
    boldPrompt: "Launch prototype DevDAO with proposal votes.",
    conservativePrompt: "Keep advisory circles informal.",
    tone: "transformative",

    outcomeA: "DAO pilot energises community.",
    outcomeB: "Voting disputes stall work.",
    outcomeC: "Advisory model keeps focus.",
    outcomeD: "Calls for democracy grow louder."
  },

  /* ============================================
     C-B4-0.9 — Cross-Discipline Collab
  ============================================ */
  {
    subBand: "C-B4-0.9",
    marketCap: "$75 B",
    focus: "Cross-Discipline Collab",
    context: "Marketing, Builders, and Devs coordinate global releases.",
    boldPrompt: "Create Ecosystem Sync Week.",
    conservativePrompt: "Keep async coordination.",
    tone: "neutral",

    outcomeA: "Global event creates historic unity.",
    outcomeB: "Schedule overload causes burnout.",
    outcomeC: "Async flow retains efficiency.",
    outcomeD: "Energy feels fragmented."
  },

  /* ============================================
     C-B4-1.0 — Global Protocol Network
  ============================================ */
  {
    subBand: "C-B4-1.0",
    marketCap: "$100 B",
    focus: "Global Protocol Network",
    context: "CGT infrastructure becomes a public good.",
    boldPrompt: "Announce full global scaling initiative.",
    conservativePrompt: "Expand steadily via selective partnerships.",
    tone: "transformative",

    outcomeA: "Historic recognition and DAO readiness.",
    outcomeB: "Logistical issues delay rollout.",
    outcomeC: "Sustainable growth earns respect.",
    outcomeD: "Perceived as lagging behind innovators."
  },

  /* ============================================
     C-B5-SignOff — DAO Readiness Proof
  ============================================ */
  {
    subBand: "C-B5-SignOff",
    marketCap: "$100 B +",
    focus: "DAO Readiness Proof — Core Developers",
    context: "Core Devs mature from builders to stewards; final step is proving system self-sufficiency.",
    boldPrompt: "Execute full handover of deployment keys and repo governance to DAO controller.",
    conservativePrompt: "Maintain guardian oversight for one final audit cycle.",
    tone: "transformative",

    outcomeA: "DAO activation flawless; global applause.",
    outcomeB: "Minor bug triggers temporary rollback.",
    outcomeC: "Orderly handover earns credibility.",
    outcomeD: "Extended oversight raises centralisation debate."
  }

];
