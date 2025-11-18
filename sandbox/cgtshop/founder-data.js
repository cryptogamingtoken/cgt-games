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
  /* ============================================
     F-B2-0.2 — Marketing Trust Fork
  ============================================ */
  {
    subBand: "F-B2-0.2",
    marketCap: "$2.5 M",
    focus: "Marketing Trust Fork",
    context: "With the Marketing & Ops wallet active, the Founder faces a new pressure—should treasury use be codified or remain guided by instinct? The community now equates transparency with legitimacy.",
    boldPrompt: "Formalise rules. Publish a mini “Marketing Charter” detailing spend categories and reporting cadence.",
    conservativePrompt: "Keep discretion. Approve each spend manually to maintain flexibility and creative control.",
    tone: "risky",

    outcomeA: "The Marketing Charter wins community praise and becomes a model for transparent governance.",
    outcomeB: "New bureaucracy slows every initiative; frustration mounts among agile teams.",
    outcomeC: "Manual discretion keeps spending nimble and responsive.",
    outcomeD: "Lack of clarity fuels rumours of misuse, eroding early trust."
  },

  /* ============================================
     F-B2-0.3 — Delegation Friction
  ============================================ */
  {
    subBand: "F-B2-0.3",
    marketCap: "$5 M",
    focus: "Delegation Friction",
    context: "First hires or volunteers begin arguing over scope and priorities.",
    boldPrompt: "Empower them publicly — let early leads own visible outcomes even if imperfect.",
    conservativePrompt: "Re-centralise decisions until clearer frameworks exist.",
    tone: "risky",

    outcomeA: "Empowered leads deliver visible wins that attract new contributors.",
    outcomeB: "Uncoordinated autonomy causes overlapping efforts and missed deadlines.",
    outcomeC: "Centralised control keeps milestones on schedule.",
    outcomeD: "Morale drops as creative leads feel stifled and drift away."
  },

  /* ============================================
     F-B2-0.4 — Structure Moment
  ============================================ */
  {
    subBand: "F-B2-0.4",
    marketCap: "$10 M",
    focus: "Structure Moment",
    context: "Too many voices, few rules.",
    boldPrompt: "Formalise core teams and roles through public charter.",
    conservativePrompt: "Keep titles fluid and resolve conflicts ad-hoc.",
    tone: "neutral",

    outcomeA: "Public charter defines structure and strengthens accountability.",
    outcomeB: "Over-formalisation sparks politics and slows decisions.",
    outcomeC: "Fluid roles sustain flexibility through quick pivots.",
    outcomeD: "Role confusion triggers repeated conflicts and lost productivity."
  },

  /* ============================================
     F-B2-0.5 — Communication Split
  ============================================ */
  {
    subBand: "F-B2-0.5",
    marketCap: "$15 M",
    focus: "Communication Split",
    context: "Marketing wants visibility; Devs want silence.",
    boldPrompt: "Publish roadmap and stand by transparency.",
    conservativePrompt: "Quietly coordinate internally to avoid public pressure.",
    tone: "risky",

    outcomeA: "Public roadmap rallies players and investors, boosting confidence.",
    outcomeB: "Over-promised features create backlash when delays occur.",
    outcomeC: "Quiet coordination protects credibility through solid delivery.",
    outcomeD: "Silence breeds speculation and loss of community energy."
  },

  /* ============================================
     F-B2-0.6 — Power Transfer Test
  ============================================ */
  {
    subBand: "F-B2-0.6",
    marketCap: "$25 M",
    focus: "Power Transfer Test",
    context: "An early team launches its own initiative without approval.",
    boldPrompt: "Celebrate autonomy and amplify their success.",
    conservativePrompt: "Pull them back under central coordination.",
    tone: "risky",

    outcomeA: "Independent team’s success energises ecosystem and multiplies participation.",
    outcomeB: "Unapproved initiative fractures messaging and creates internal rivalry.",
    outcomeC: "Reasserted control restores order and predictability.",
    outcomeD: "Heavy-handed recall drives key talent away permanently."
  },

  /* ============================================
     F-B2-0.7 — Crisis of Trust
  ============================================ */
  {
    subBand: "F-B2-0.7",
    marketCap: "$40 M",
    focus: "Crisis of Trust",
    context: "A bug or wallet error erupts.",
    boldPrompt: "Go live immediately, address community directly.",
    conservativePrompt: "Handle privately with controlled post-mortem later.",
    tone: "risky",

    outcomeA: "Immediate public response turns crisis into proof of integrity; trust rebounds.",
    outcomeB: "Hasty transparency reveals flaws that worsen panic and sell pressure.",
    outcomeC: "Private containment avoids market panic and preserves stability.",
    outcomeD: "Perceived cover-up fuels conspiracy talk and lasting distrust."
  },

  /* ============================================
     F-B2-0.8 — Delegation Deepening
  ============================================ */
  {
    subBand: "F-B2-0.8",
    marketCap: "$60 M",
    focus: "Delegation Deepening",
    context: "Multiple sub-leaders now operate semi-independently.",
    boldPrompt: "Empower them to create autonomous workstreams.",
    conservativePrompt: "Merge workstreams back under weekly founder oversight.",
    tone: "neutral",

    outcomeA: "Autonomous workstreams innovate rapidly and ship new prototypes.",
    outcomeB: "Fragmented directions produce duplicated tools and conflicting UX.",
    outcomeC: "Founder oversight maintains cohesion and brand consistency.",
    outcomeD: "Central oversight bottlenecks delivery and frustrates teams."
  },

  /* ============================================
     F-B2-0.9 — First Outside Audit
  ============================================ */
  {
    subBand: "F-B2-0.9",
    marketCap: "$80 M",
    focus: "First Outside Audit",
    context: "Investors or community inspect wallets and decisions.",
    boldPrompt: "Invite external review openly and embrace feedback.",
    conservativePrompt: "Privately fix issues before publishing anything.",
    tone: "risky",

    outcomeA: "Open audit confirms good practices and boosts investor confidence.",
    outcomeB: "External review uncovers embarrassing gaps, shaking faith.",
    outcomeC: "Quiet fixes pre-empt problems before exposure.",
    outcomeD: "Secrecy breeds suspicion that damages long-term credibility."
  },

  /* ============================================
     F-B2-1.0 — Founder Fork of Identity
  ============================================ */
  {
    subBand: "F-B2-1.0",
    marketCap: "$100 M",
    focus: "Founder Fork of Identity",
    context: "The project now lives beyond the Founder’s hands.",
    boldPrompt: "Step back publicly, naming the first official team leads.",
    conservativePrompt: "Stay as visible figurehead and delay handover until next phase.",
    tone: "transformative",

    outcomeA: "Public leadership handover inspires culture of shared ownership.",
    outcomeB: "Early withdrawal leaves teams disoriented without direction.",
    outcomeC: "Visible continuity ensures calm transition to next era.",
    outcomeD: "Founder dependency slows true decentralisation and future growth."
  },
    /* ============================================
     F-B3-0.1 — Refocus Fork
  ============================================ */
  {
    subBand: "F-B3-0.1",
    marketCap: "$120 M",
    focus: "Refocus Fork",
    context: "Daily ops now autonomous; founder must decide focus.",
    boldPrompt: "Pivot to narrative + ecosystem coherence only.",
    conservativePrompt: "Stay hands-on with core technical delivery.",
    tone: "neutral",

    outcomeA: "Strategic refocus unifies vision and accelerates ecosystem growth.",
    outcomeB: "Founder detachment leaves teams adrift without narrative anchor.",
    outcomeC: "Hands-on delivery keeps precision and credibility.",
    outcomeD: "Over-involvement stalls delegation and innovation."
  },

  /* ============================================
     F-B3-0.2 — Governance Preview
  ============================================ */
  {
    subBand: "F-B3-0.2",
    marketCap: "$180 M",
    focus: "Governance Preview",
    context: "DAO concept surfaces publicly.",
    boldPrompt: "Join discussion as moderator and educator.",
    conservativePrompt: "Stay silent and let teams debate structure.",
    tone: "neutral",

    outcomeA: "Public moderation earns trust and frames healthy DAO debate.",
    outcomeB: "Participation sparks bias accusations and factional tension.",
    outcomeC: "Silence reinforces team independence and maturity.",
    outcomeD: "Absence creates confusion and direction vacuum."
  },

  /* ============================================
     F-B3-0.3 — Public Custodian Moment
  ============================================ */
  {
    subBand: "F-B3-0.3",
    marketCap: "$250 M",
    focus: "Public Custodian Moment",
    context: "Media frames you as symbol of trust.",
    boldPrompt: "Rebrand your role as custodian not CEO.",
    conservativePrompt: "Downplay titles but keep authority quietly.",
    tone: "risky",

    outcomeA: "Custodian rebrand strengthens legitimacy and broadens media appeal.",
    outcomeB: "Shift perceived as abdication; confidence dips.",
    outcomeC: "Quiet continuity maintains stability and investor comfort.",
    outcomeD: "Lack of clarity fuels rumours about control struggle."
  },

  /* ============================================
     F-B3-0.4 — Cultural Fusion
  ============================================ */
  {
    subBand: "F-B3-0.4",
    marketCap: "$330 M",
    focus: "Cultural Fusion",
    context: "Teams across time-zones and disciplines collide.",
    boldPrompt: "Host cross-stakeholder summits to align values.",
    conservativePrompt: "Let organic forums emerge without direction.",
    tone: "risky",

    outcomeA: "Cross-stakeholder summits forge shared culture and long-term trust.",
    outcomeB: "Forced alignment wastes momentum and drains morale.",
    outcomeC: "Organic discussion produces authentic bottom-up cohesion.",
    outcomeD: "Unguided debates fracture culture into rival tribes."
  },

  /* ============================================
     F-B3-0.5 — Protocol Legitimacy Fork
  ============================================ */
  {
    subBand: "F-B3-0.5",
    marketCap: "$420 M",
    focus: "Protocol Legitimacy Fork",
    context: "Auditors + partners demand clarity on control.",
    boldPrompt: "Publish multi-sig scheme and disclose permissions.",
    conservativePrompt: "Keep internal control until DAO readiness.",
    tone: "risky",

    outcomeA: "Transparent multi-sig scheme becomes benchmark for integrity.",
    outcomeB: "Disclosure sparks over-analysis and speculative panic.",
    outcomeC: "Internal control preserves security and uptime confidence.",
    outcomeD: "Opacity breeds conspiracy and damages trust."
  },

  /* ============================================
     F-B3-0.6 — Founder Fatigue Window
  ============================================ */
  {
    subBand: "F-B3-0.6",
    marketCap: "$520 M",
    focus: "Founder Fatigue Window",
    context: "Pressure peaks.",
    boldPrompt: "Delegate publicly to a COO / protocol manager.",
    conservativePrompt: "Quietly reduce hours without announcement.",
    tone: "neutral",

    outcomeA: "Public delegation stabilises operations and renews momentum.",
    outcomeB: "Symbolic appointment triggers rivalry or loss of clarity.",
    outcomeC: "Quiet workload taper avoids disruption and keeps rhythm steady.",
    outcomeD: "Secret withdrawal creates gossip and morale drag."
  },

  /* ============================================
     F-B3-0.7 — Cultural Icon Fork
  ============================================ */
  {
    subBand: "F-B3-0.7",
    marketCap: "$640 M",
    focus: "Cultural Icon Fork",
    context: "Memes + narratives form around the Founder.",
    boldPrompt: "Lean in and use image for education / ethos.",
    conservativePrompt: "Discourage idolisation and redirect attention to DAO idea.",
    tone: "risky",

    outcomeA: "Founder ethos becomes educational symbol inspiring next generation.",
    outcomeB: "Meme culture hijacks image and distorts mission.",
    outcomeC: "DAO-first messaging keeps humility narrative alive.",
    outcomeD: "Low visibility erodes enthusiasm and historical context."
  },

  /* ============================================
     F-B3-0.8 — Final Operational Handover
  ============================================ */
  {
    subBand: "F-B3-0.8",
    marketCap: "$760 M",
    focus: "Final Operational Handover",
    context: "All core teams independent.",
    boldPrompt: "Relinquish deployment + signing rights to Dev multisig.",
    conservativePrompt: "Keep emergency override for stability.",
    tone: "transformative",

    outcomeA: "Full handover marks milestone in decentralisation story.",
    outcomeB: "Too-early release causes coordination breakdown.",
    outcomeC: "Time-locked override reassures stakeholders of safety.",
    outcomeD: "Delay perceived as resistance to DAO transition."
  },

  /* ============================================
     F-B3-0.9 — Symbolic Presence Only
  ============================================ */
  {
    subBand: "F-B3-0.9",
    marketCap: "$880 M",
    focus: "Symbolic Presence Only",
    context: "Founder voice shifts to observer / storyteller.",
    boldPrompt: "Host retrospective threads and teachings.",
    conservativePrompt: "Withdraw to internal advisor role only.",
    tone: "neutral",

    outcomeA: "Retrospective storytelling cements cultural memory and trust.",
    outcomeB: "Overexposure creates fatigue and “founder cult” backlash.",
    outcomeC: "Quiet advisor role preserves legacy without distraction.",
    outcomeD: "Disengagement misread as loss of faith."
  },

  /* ============================================
     F-B3-1.0 — Custodian Completion Fork
  ============================================ */
  {
    subBand: "F-B3-1.0",
    marketCap: "$1 B",
    focus: "Custodian Completion Fork",
    context: "Ecosystem runs without you for first time.",
    boldPrompt: "Announce “Founder no longer central” milestone.",
    conservativePrompt: "Allow DAO Mirror to record milestone silently.",
    tone: "transformative",

    outcomeA: "“Founder no longer central” announcement galvanises confidence in independence.",
    outcomeB: "Public fatigue turns milestone into PR noise.",
    outcomeC: "Silent logging by DAO Mirror underscores natural closure.",
    outcomeD: "Unspoken shift causes lingering uncertainty about leadership."
  },
    /* ============================================
     F-B4-0.1 — Transition Guardianship
  ============================================ */
  {
    subBand: "F-B4-0.1",
    marketCap: "$1 B",
    focus: "Transition Guardianship",
    context: "All stakeholders maturing; founder acts as bridge.",
    boldPrompt: "Publicly state DAO criteria + handover timeline.",
    conservativePrompt: "Privately coordinate with stake leads only.",
    tone: "neutral",

    outcomeA: "DAO timeline declaration rallies community and synchronises readiness.",
    outcomeB: "Excessive visibility exposes friction and delays.",
    outcomeC: "Private coordination keeps handover clean and disciplined.",
    outcomeD: "Opacity interpreted as stalling or power retention."
  },

  /* ============================================
     F-B4-0.2 — Protocol Integrity Audit
  ============================================ */
  {
    subBand: "F-B4-0.2",
    marketCap: "$2 B",
    focus: "Protocol Integrity Audit",
    context: "DAO mirror records readiness.",
    boldPrompt: "Commission independent audit + publish results.",
    conservativePrompt: "Conduct internal review only.",
    tone: "risky",

    outcomeA: "Independent audit validates transparency and accelerates confidence wave.",
    outcomeB: "Audit discovers inconsistencies that trigger temporary sell-off.",
    outcomeC: "Internal review protects control and quick fixes.",
    outcomeD: "Lack of public proof undermines credibility with partners."
  },

  /* ============================================
     F-B4-0.3 — Cultural Alignment
  ============================================ */
  {
    subBand: "F-B4-0.3",
    marketCap: "$4 B",
    focus: "Cultural Alignment",
    context: "Marketing and Builders diverge in messaging.",
    boldPrompt: "Host cross-stakeholder alignment summit.",
    conservativePrompt: "Allow DAO mirror to log differences without intervention.",
    tone: "risky",

    outcomeA: "Alignment summit renews unity and strengthens shared mission.",
    outcomeB: "Public debate reveals tensions and draws negative attention.",
    outcomeC: "Silent observation lets stakeholders self-correct.",
    outcomeD: "Unmoderated divergence becomes entrenched and costly."
  },

  /* ============================================
     F-B4-0.4 — Founder Redundancy Test
  ============================================ */
  {
    subBand: "F-B4-0.4",
    marketCap: "$7 B",
    focus: "Founder Redundancy Test",
    context: "Teams run without input for 30 days.",
    boldPrompt: "Announce publicly and observe.",
    conservativePrompt: "Run quiet shadow support in background.",
    tone: "neutral",

    outcomeA: "Public redundancy trial showcases system resilience and maturity.",
    outcomeB: "Small outage during test shakes faith in DAO readiness.",
    outcomeC: "Quiet shadow support guarantees continuity and safety.",
    outcomeD: "Secret intervention later leaks and fuels controversy."
  },

  /* ============================================
     F-B4-0.5 — DAO Bridge Handshake
  ============================================ */
  {
    subBand: "F-B4-0.5",
    marketCap: "$12 B",
    focus: "DAO Bridge Handshake",
    context: "Mirror confirms readiness threshold close.",
    boldPrompt: "Transfer meta-data keys to DAO custody smart-contract.",
    conservativePrompt: "Maintain time-locked control until activation.",
    tone: "transformative",

    outcomeA: "On-chain key transfer becomes celebrated proof-of-trust event.",
    outcomeB: "Technical glitch delays DAO custody and sparks confusion.",
    outcomeC: "Time-locked handover ensures seamless finalisation.",
    outcomeD: "Extended lock interpreted as lack of confidence."
  },

  /* ============================================
     F-B4-0.6 — Silence Period Fork
  ============================================ */
  {
    subBand: "F-B4-0.6",
    marketCap: "$20 B",
    focus: "Silence Period Fork",
    context: "Public expects DAO go-live.",
    boldPrompt: "Announce “Founder Silence Week.”",
    conservativePrompt: "Quietly withdraw without notice.",
    tone: "neutral",

    outcomeA: "Founder Silence Week becomes cultural ritual marking independence.",
    outcomeB: "Public silence misread as project collapse.",
    outcomeC: "Unannounced retreat creates mystique and quiet awe.",
    outcomeD: "Absence leaves leadership vacuum narrative."
  },

  /* ============================================
     F-B4-0.7 — Succession Verification
  ============================================ */
  {
    subBand: "F-B4-0.7",
    marketCap: "$35 B",
    focus: "Succession Verification",
    context: "DAO Mirror requests confirmation from all teams.",
    boldPrompt: "Publish final sign-offs from each stakeholder head.",
    conservativePrompt: "Let DAO record internally without publicity.",
    tone: "neutral",

    outcomeA: "Public sign-offs reinforce accountability across every domain.",
    outcomeB: "Publication of sign-offs reveals internal misalignment.",
    outcomeC: "Private confirmations build steady confidence without spectacle.",
    outcomeD: "Lack of visible proof prolongs speculation of unreadiness."
  },

  /* ============================================
     F-B4-0.8 — Symbolic Erasure Ritual
  ============================================ */
  {
    subBand: "F-B4-0.8",
    marketCap: "$50 B",
    focus: "Symbolic Erasure Ritual",
    context: "Community calls for “founder farewell.”",
    boldPrompt: "Host public AMA + archive legacy statements.",
    conservativePrompt: "Let community organise its own farewell.",
    tone: "transformative",

    outcomeA: "Farewell AMA unites community and immortalises legacy moment.",
    outcomeB: "Live Q&A sparks divisive nostalgia and argument.",
    outcomeC: "Community-run farewell grows grassroots myth organically.",
    outcomeD: "No closure event leads to slow emotional drift."
  },

  /* ============================================
     F-B4-0.9 — DAO Readiness Proof
  ============================================ */
  {
    subBand: "F-B4-0.9",
    marketCap: "$75 B",
    focus: "DAO Readiness Proof",
    context: "DAO ready to decide activation.",
    boldPrompt: "Reaffirm founder non-intervention.",
    conservativePrompt: "Privately ensure all conditions met.",
    tone: "neutral",

    outcomeA: "Public reaffirmation signals final maturity and closure.",
    outcomeB: "Over-the-top gesture appears performative or forced.",
    outcomeC: "Private confirmation ensures integrity of activation data.",
    outcomeD: "Silence mistaken for indecision about readiness."
  },

  /* ============================================
     F-B4-1.0 — Founder Bridge Complete
  ============================================ */
  {
    subBand: "F-B4-1.0",
    marketCap: "$100 B",
    focus: "Founder Bridge Complete",
    context: "System operates independent of human coordination.",
    boldPrompt: "Announce bridge success + DAO free to act.",
    conservativePrompt: "Allow DAO to activate without comment.",
    tone: "transformative",

    outcomeA: "Founder bridge celebration inspires ecosystem-wide confidence.",
    outcomeB: "Public hype overshadows DAO’s quiet competence.",
    outcomeC: "Silent autonomy proves the system’s true independence.",
    outcomeD: "Unacknowledged milestone leaves confusion about completion."
  },
    /* ============================================
     F-B5-SignOff — DAO Supersession – Founder Sign-Off
  ============================================ */
  {
    subBand: "F-B5-SignOff",
    marketCap: "$100 B +",
    focus: "DAO Supersession – Founder Sign-Off",
    context: "Every stakeholder now functions autonomously. The DAO’s activation protocol is armed, and ecosystem health no longer depends on any single person. The Founder’s final act is to prove self-erasure — ensuring that coordination, legitimacy, and continuity live entirely in the network.",
    boldPrompt: "Hold a public “Final Commit” ceremony: archive all founder channels, publish closing statements, and hand every remaining governance, treasury, and media key to DAO custody on-chain — complete symbolic visibility and finality.",
    conservativePrompt: "Withdraw silently. Allow the DAO Mirror to record completion automatically once verification of full decentralisation is confirmed, leaving no central announcement — only absence as proof.",
    tone: "transformative",

    outcomeA: "Public “Final Commit” becomes unifying cultural finale and proof of closure.",
    outcomeB: "Grand ceremony draws critics claiming self-promotion.",
    outcomeC: "Silent disappearance demonstrates seamless continuity and decentralised maturity.",
    outcomeD: "Unannounced exit causes temporary uncertainty and narrative vacuum."
  }
];

