// players-data.js

window.CGT_SCENARIOS = window.CGT_SCENARIOS || {};
window.CGT_SCENARIOS.players = [

  /* ============================================
     P-B1-0.1 — Founder’s First Game
  ============================================ */
  {
    subBand: "P-B1-0.1",
    marketCap: "$10 K",
    focus: "Founder’s First Game",
    context: "The founder is the only player. Every click either hardens or cracks the foundation.",
    boldPrompt: "Play hard and talk loud. Stress-test the game like a competitor and brag about milestones.",
    conservativePrompt: "Play minimally; focus on building instead of playtesting.",
    tone: "risky",

    outcomeA: "Early play reveals hidden bugs that get fixed fast, proving resilience.",
    outcomeB: "Prototype crashes mid-test, undermining faith in the concept.",
    outcomeC: "Quiet iteration keeps build velocity high and trust internal.",
    outcomeD: "Early flaw passes unseen, causing later public failure."
  },

  /* ============================================
     P-B1-0.2 — Family Spark
  ============================================ */
  {
    subBand: "P-B1-0.2",
    marketCap: "$25 K",
    focus: "Family Spark",
    context: "A close family member becomes the second player; their reaction carries emotional weight.",
    boldPrompt: "Give them the raw prototype with zero framing and treat their reaction as the story.",
    conservativePrompt: "Show a polished slice of gameplay with guided flow.",
    tone: "risky",

    outcomeA: "Family tester reaction sparks genuine early-adopter myth.",
    outcomeB: "Family feedback goes viral as ridicule, damaging morale.",
    outcomeC: "Controlled demo earns early trust.",
    outcomeD: "Over-staged test feels fake and chills enthusiasm."
  },

  /* ============================================
     P-B1-0.3 — Investor Dip
  ============================================ */
  {
    subBand: "P-B1-0.3",
    marketCap: "$50 K",
    focus: "Investor Dip",
    context: "An early believer steps in; their perception shapes credibility.",
    boldPrompt: "Spotlight their play as a symbolic endorsement.",
    conservativePrompt: "Give private access under discretion for timing advantages.",
    tone: "neutral",

    outcomeA: "Investor’s first play becomes symbolic success story.",
    outcomeB: "Investor leaks critical flaw, cooling excitement.",
    outcomeC: "Private feedback shapes sharp next reveal.",
    outcomeD: "Investor disengages from lack of public energy."
  },

  /* ============================================
     P-B1-0.4 — Friend Circle Run
  ============================================ */
  {
    subBand: "P-B1-0.4",
    marketCap: "$100 K",
    focus: "Friend Circle Run",
    context: "Friends arrive as the first informal player group.",
    boldPrompt: "Run a messy, open leaderboard sprint — real scores, real noise.",
    conservativePrompt: "Run a controlled, closed match with staged flow.",
    tone: "transformative",

    outcomeA: "Open run forms first tribe; screenshots spread virally.",
    outcomeB: "Server instability causes public embarrassment.",
    outcomeC: "Closed match produces clean data and cohesion.",
    outcomeD: "Muted rollout kills early myth momentum."
  },

  /* ============================================
     P-B1-0.5 — Proto-Community Signal
  ============================================ */
  {
    subBand: "P-B1-0.5",
    marketCap: "$150 K",
    focus: "Proto-Community Signal",
    context: "A tiny Discord/chat forms around ‘being early.’",
    boldPrompt: "Step in and spotlight them as the ‘first wave.’",
    conservativePrompt: "Keep them invisible and protect focus.",
    tone: "risky",

    outcomeA: "Proto-community adopts ‘first-wave’ identity and spreads lore.",
    outcomeB: "Foundation wobbles under visibility; group fractures.",
    outcomeC: "Private circle stabilises messaging.",
    outcomeD: "Early believers drift away feeling ignored."
  },

  /* ============================================
     P-B1-0.6 — The Waiting Room
  ============================================ */
  {
    subBand: "P-B1-0.6",
    marketCap: "$250 K",
    focus: "The Waiting Room",
    context: "Influencers and early watchers declare they’re ‘ready.’",
    boldPrompt: "Publicly signal readiness and ignite anticipation.",
    conservativePrompt: "Keep comms sealed and control timing tightly.",
    tone: "risky",

    outcomeA: "Anticipation campaign doubles interest overnight.",
    outcomeB: "Over-hype triggers disappointment at launch bugs.",
    outcomeC: "Tight timing maintains control.",
    outcomeD: "External chatter steals narrative control."
  },

  /* ============================================
     P-B1-0.7 — First game moment
  ============================================ */
  {
    subBand: "P-B1-0.7",
    marketCap: "$400 K",
    focus: "First game moment",
    context: "The first wave of players hits a fragile platform.",
    boldPrompt: "Rally early players and ignite leaderboards.",
    conservativePrompt: "Let the game stabilize before pushing engagement.",
    tone: "risky",

    outcomeA: "Leaderboard sprint births first mini-legends.",
    outcomeB: "Instability wipes scores, killing trust.",
    outcomeC: "Slow launch earns credibility.",
    outcomeD: "Sluggish pace breeds boredom."
  },

  /* ============================================
     P-B1-0.8 — Early stakes
  ============================================ */
  {
    subBand: "P-B1-0.8",
    marketCap: "$600 K",
    focus: "Early stakes",
    context: "Competitions gain real reward weight.",
    boldPrompt: "Encourage larger stakes and intense participation.",
    conservativePrompt: "Let tournaments grow gradually.",
    tone: "neutral",

    outcomeA: "High-stakes play drives a new surge.",
    outcomeB: "System overload causes payout delay.",
    outcomeC: "Gradual growth builds trust.",
    outcomeD: "Slow curve lets momentum decay."
  },

  /* ============================================
     P-B1-0.9 — External buzz
  ============================================ */
  {
    subBand: "P-B1-0.9",
    marketCap: "$800 K",
    focus: "External buzz",
    context: "Creators, organisers, and stakers orbit early culture.",
    boldPrompt: "Amplify hype and social energy.",
    conservativePrompt: "Keep player layer quiet to retain stability.",
    tone: "risky",

    outcomeA: "Player-led memes lift morale ecosystem-wide.",
    outcomeB: "Unmoderated hype sparks misinformation loops.",
    outcomeC: "Quiet strength deepens trust.",
    outcomeD: "Muted presence erodes cultural pull."
  },

  /* ============================================
     P-B1-1.0 — The proving ground
  ============================================ */
  {
    subBand: "P-B1-1.0",
    marketCap: "$1 M",
    focus: "The proving ground",
    context: "First leaderboard era concludes; legends may form.",
    boldPrompt: "Push players to go all-in and shape the meta.",
    conservativePrompt: "Keep participation steady and protect structure.",
    tone: "transformative",

    outcomeA: "Endgame surge creates historic ‘Era One Legends.’",
    outcomeB: "Server fragility causes chaos during finale.",
    outcomeC: "Steady close preserves trust.",
    outcomeD: "Flat finish weakens myth power."
  },

  /* ============================================
     P-B2-0.1 — First Open GQT Access
  ============================================ */
  {
    subBand: "P-B2-0.1",
    marketCap: "$1.5 M",
    focus: "First Open GQT Access",
    context: "First public tournaments go live; fairness stress-tested.",
    boldPrompt: "Open leaderboards to everyone immediately.",
    conservativePrompt: "Run a limited-slot controlled pilot.",
    tone: "risky",

    outcomeA: "Open access ignites transparency pride.",
    outcomeB: "Public bugs trigger trust crash.",
    outcomeC: "Pilot delivers polished trust curve.",
    outcomeD: "Public sees gating as elitism."
  },

  /* ============================================
     P-B2-0.2 — Tutorial Era
  ============================================ */
  {
    subBand: "P-B2-0.2",
    marketCap: "$2.5 M",
    focus: "Tutorial Era",
    context: "Tutorial GQTs blend education and competition.",
    boldPrompt: "Run Play-to-Learn Week and push mass onboarding.",
    conservativePrompt: "Keep tutorials targeted and low-visibility.",
    tone: "neutral",

    outcomeA: "Play-to-Learn week trends across socials.",
    outcomeB: "Over-teaching drains competitive excitement.",
    outcomeC: "Focused rollout teaches efficiently.",
    outcomeD: "Low visibility stalls educational momentum."
  },

  /* ============================================
     P-B2-0.3 — Fair-Configuration Standardisation
  ============================================ */
  {
    subBand: "P-B2-0.3",
    marketCap: "$5 M",
    focus: "Fair-Configuration Standardisation",
    context: "Fairness becomes cultural; transparency replaces trust.",
    boldPrompt: "Publish Fair-Play Charter and encourage player audits.",
    conservativePrompt: "Limit fairness rollout to verified GQTs first.",
    tone: "transformative",

    outcomeA: "Fair-Play Charter sparks global trust moment.",
    outcomeB: "Players over-interpret data, causing disputes.",
    outcomeC: "Verified rollout ensures clarity.",
    outcomeD: "Slow expansion misses cultural flashpoint."
  },

  /* ============================================
     P-B2-0.4 — Learning Momentum
  ============================================ */
  {
    subBand: "P-B2-0.4",
    marketCap: "$10 M",
    focus: "Learning Momentum",
    context: "Play-to-Learn becomes social status.",
    boldPrompt: "Launch curriculum leagues and public knowledge leaderboards.",
    conservativePrompt: "Keep learning tracks private until polished.",
    tone: "neutral",

    outcomeA: "Curriculum leagues make learning aspirational.",
    outcomeB: "Academic fatigue lowers fun.",
    outcomeC: "Private leagues maintain focus.",
    outcomeD: "Public perceives stagnation."
  },

  /* ============================================
     P-B2-0.5 — Fair-Play Demands
  ============================================ */
  {
    subBand: "P-B2-0.5",
    marketCap: "$15 M",
    focus: "Fair-Play Demands",
    context: "Players expect ethical standards and rule proofs.",
    boldPrompt: "Let players publicly debate fairness policies.",
    conservativePrompt: "Keep rule revisions internal during growth.",
    tone: "risky",

    outcomeA: "Open fairness debate strengthens ethical culture.",
    outcomeB: "Opinion wars divide community.",
    outcomeC: "Internal process maintains order.",
    outcomeD: "Players call leadership opaque."
  },

  /* ============================================
     P-B2-0.6 — Yield Culture Emergence
  ============================================ */
  {
    subBand: "P-B2-0.6",
    marketCap: "$25 M",
    focus: "Yield Culture Emergence",
    context: "Grinders dominate; ROI dashboards reshape culture.",
    boldPrompt: "Launch Velocity League with live yield races.",
    conservativePrompt: "Throttle visibility until systems stabilise.",
    tone: "risky",

    outcomeA: "Velocity League attracts record participation.",
    outcomeB: "Yield obsession burns out grinders.",
    outcomeC: "Integrity focus sustains system health.",
    outcomeD: "Community labels play ‘boring.’"
  },

  /* ============================================
     P-B2-0.7 — Streamer & Mentor Rise
  ============================================ */
  {
    subBand: "P-B2-0.7",
    marketCap: "$40 M",
    focus: "Streamer & Mentor Rise",
    context: "Teaching replaces grinding; social capital rises.",
    boldPrompt: "Support mentor-led tournaments and reward streamers.",
    conservativePrompt: "Avoid rewarding visibility to preserve purity.",
    tone: "transformative",

    outcomeA: "Mentor-stream events boost visibility.",
    outcomeB: "Entertainment overtakes skill, causing rifts.",
    outcomeC: "Informal education preserves competitive purity.",
    outcomeD: "Creator-player synergy never forms."
  },

  /* ============================================
     P-B2-0.8 — Reputation Era
  ============================================ */
  {
    subBand: "P-B2-0.8",
    marketCap: "$60 M",
    focus: "Reputation Era",
    context: "Visibility becomes currency.",
    boldPrompt: "Launch Reputation Ranks mixing performance and social metrics.",
    conservativePrompt: "Restrict visibility to leaderboard-only.",
    tone: "neutral",

    outcomeA: "Reputation ranks boost loyalty and contribution.",
    outcomeB: "Hierarchy hardens, discouraging newcomers.",
    outcomeC: "Simple leaderboards preserve fairness.",
    outcomeD: "Culture stagnates without new incentives."
  },

  /* ============================================
     P-B2-0.9 — Creator-Player Convergence
  ============================================ */
  {
    subBand: "P-B2-0.9",
    marketCap: "$80 M",
    focus: "Creator-Player Convergence",
    context: "Veterans upgrade GQTs; play merges with creation.",
    boldPrompt: "Invite top players to co-design Fair-Config v2 GQTs.",
    conservativePrompt: "Keep creative control with current creators.",
    tone: "transformative",

    outcomeA: "Co-designed GQTs redefine synergy.",
    outcomeB: "Unbalanced configs spark controversy.",
    outcomeC: "Controlled rollout ensures balance.",
    outcomeD: "Innovation momentum fades."
  },

  /* ============================================
     P-B2-1.0 — Professional Era (Sustainability Proof)
  ============================================ */
  {
    subBand: "P-B2-1.0",
    marketCap: "$100 M",
    focus: "Professional Era (Sustainability Proof)",
    context: "Emissions end; play becomes vocation; contribution becomes civic proof.",
    boldPrompt: "Frame the cycle’s close as ‘Play Becomes Profession.’",
    conservativePrompt: "Transition quietly and let sustainability speak.",
    tone: "transformative",

    outcomeA: "‘Play Becomes Profession’ story legitimises CGT globally.",
    outcomeB: "Rushed framing triggers hype backlash.",
    outcomeC: "Quiet transition maintains credibility.",
    outcomeD: "Missed storytelling weakens milestone memory."
  },

  /* ============================================
     P-B3-0.1 — Career Play Begins
  ============================================ */
  {
    subBand: "P-B3-0.1",
    marketCap: "$120 M",
    focus: "Career Play Begins",
    context: "Leaderboards gain reputation weight; sponsorship talk begins.",
    boldPrompt: "Launch verified Pro-Player ID NFTs linking wallets to stats.",
    conservativePrompt: "Keep recognition informal until audits finish.",
    tone: "neutral",

    outcomeA: "Pro-Player IDs attract sponsors and coverage.",
    outcomeB: "Exploit leaks damage credential trust.",
    outcomeC: "Delayed IDs vetted perfectly.",
    outcomeD: "Momentum slows for pros."
  },

  /* ============================================
     P-B3-0.2 — Institutional Entry
  ============================================ */
  {
    subBand: "P-B3-0.2",
    marketCap: "$180 M",
    focus: "Institutional Entry",
    context: "Universities and brands explore partnerships.",
    boldPrompt: "Open corporate and educational tournaments publicly.",
    conservativePrompt: "Pilot private programs first.",
    tone: "neutral",

    outcomeA: "Corporate tournaments drive headlines and funding.",
    outcomeB: "Public bugs embarrass institutions.",
    outcomeC: "Private pilots impress partners quietly.",
    outcomeD: "Public unaware of early wins."
  },

  /* ============================================
     P-B3-0.3 — Player Contracts
  ============================================ */
  {
    subBand: "P-B3-0.3",
    marketCap: "$250 M",
    focus: "Player Contracts",
    context: "Top players negotiate tokens and revenue shares.",
    boldPrompt: "Publish standardised smart-contract deal templates.",
    conservativePrompt: "Leave contracts to organisers individually.",
    tone: "transformative",

    outcomeA: "Standardised contracts normalise transparency.",
    outcomeB: "Misused template sparks disputes.",
    outcomeC: "Private contracts preserve flexibility.",
    outcomeD: "Inconsistency breeds mistrust."
  },

  /* ============================================
     P-B3-0.4 — Integrity Audits
  ============================================ */
  {
    subBand: "P-B3-0.4",
    marketCap: "$330 M",
    focus: "Integrity Audits",
    context: "Match-fixing rumours surface at higher stakes.",
    boldPrompt: "Launch public Fair-Play Audit Program.",
    conservativePrompt: "Review data internally and release summaries later.",
    tone: "neutral",

    outcomeA: "Audit program earns mainstream praise.",
    outcomeB: "Public errors found in audit data.",
    outcomeC: "Internal reviews reassure partners.",
    outcomeD: "Perception of secrecy grows."
  },

  /* ============================================
     P-B3-0.5 — Team Era
  ============================================ */
  {
    subBand: "P-B3-0.5",
    marketCap: "$420 M",
    focus: "Team Era",
    context: "Squads form to compete in leagues.",
    boldPrompt: "Introduce Team Tokens with shared payout logic.",
    conservativePrompt: "Leave team management off-chain.",
    tone: "neutral",

    outcomeA: "Team Tokens spark fandom surge.",
    outcomeB: "Team scandals hurt integrity.",
    outcomeC: "Off-chain model avoids chaos.",
    outcomeD: "Team scene feels underdeveloped."
  },

  /* ============================================
     P-B3-0.6 — Coaching & Analytics
  ============================================ */
  {
    subBand: "P-B3-0.6",
    marketCap: "$520 M",
    focus: "Coaching & Analytics",
    context: "Coaches enter using on-chain stats.",
    boldPrompt: "Fund PlayLab grants for analytics research.",
    conservativePrompt: "Let third-parties offer services organically.",
    tone: "neutral",

    outcomeA: "PlayLab grants spawn analytical breakthroughs.",
    outcomeB: "Grant misuse scandal harms credibility.",
    outcomeC: "Organic coaching thrives naturally.",
    outcomeD: "Uneven results hurt perception."
  },

  /* ============================================
     P-B3-0.7 — Cross-Ecosystem Players
  ============================================ */
  {
    subBand: "P-B3-0.7",
    marketCap: "$640 M",
    focus: "Cross-Ecosystem Players",
    context: "Players represent CGT in other protocols’ events.",
    boldPrompt: "Sponsor ambassador slots with token stipends.",
    conservativePrompt: "Allow independent representation only.",
    tone: "transformative",

    outcomeA: "Ambassadors amplify CGT worldwide.",
    outcomeB: "Bad actors damage reputation.",
    outcomeC: "Independent players retain authenticity.",
    outcomeD: "Global reach plateaus."
  },

  /* ============================================
     P-B3-0.8 — Player Governance
  ============================================ */
  {
    subBand: "P-B3-0.8",
    marketCap: "$760 M",
    focus: "Player Governance",
    context: "Players request rule/reward input.",
    boldPrompt: "Establish Player Council 1.0 for proposals.",
    conservativePrompt: "Keep governance informal through polls.",
    tone: "neutral",

    outcomeA: "Council shapes policy with legitimacy.",
    outcomeB: "Internal conflict stalls decisions.",
    outcomeC: "Informal polls preserve harmony.",
    outcomeD: "Lack of structure frustrates pros."
  },

  /* ============================================
     P-B3-0.9 — Cross-Reward Liquidity
  ============================================ */
  {
    subBand: "P-B3-0.9",
    marketCap: "$880 M",
    focus: "Cross-Reward Liquidity",
    context: "Players trade reward tokens across games.",
    boldPrompt: "Enable cross-GQT reward pools and instant swap options.",
    conservativePrompt: "Keep rewards non-transferable until regulation clears.",
    tone: "risky",

    outcomeA: "Cross-GQT swaps create fluid economy.",
    outcomeB: "Exploit bug drains liquidity pool.",
    outcomeC: "Non-transferable model protects trust.",
    outcomeD: "Players feel locked out of innovation."
  },

  /* ============================================
     P-B3-1.0 — Professional Ecosystem Maturity
  ============================================ */
  {
    subBand: "P-B3-1.0",
    marketCap: "$1 B",
    focus: "Professional Ecosystem Maturity",
    context: "CGT becomes first on-chain competitive economy at scale.",
    boldPrompt: "Announce CGT Pro League v1 with DAO-ready governance.",
    conservativePrompt: "Maintain closed-beta until DAO audits complete.",
    tone: "transformative",

    outcomeA: "Pro League announcement draws institutional eyes.",
    outcomeB: "Launch bugs mar credibility.",
    outcomeC: "Closed-beta perfects stability.",
    outcomeD: "Public hype momentum fades."
  },

  /* ============================================
     P-B4-0.1 — International Season Launch
  ============================================ */
  {
    subBand: "P-B4-0.1",
    marketCap: "$1 B",
    focus: "International Season Launch",
    context: "Official CGT leagues emerge across regions.",
    boldPrompt: "Synchronise a global season calendar.",
    conservativePrompt: "Let regions run independently.",
    tone: "neutral",

    outcomeA: "Global season unifies fans.",
    outcomeB: "Logistics chaos disrupts schedules.",
    outcomeC: "Regional diversity nurtures growth.",
    outcomeD: "Brand coherence weakens."
  },

  /* ============================================
     P-B4-0.2 — Player Sponsorship Boom
  ============================================ */
  {
    subBand: "P-B4-0.2",
    marketCap: "$2 B",
    focus: "Player Sponsorship Boom",
    context: "Brands compete to sign players and teams.",
    boldPrompt: "Allow on-chain sponsorship contracts with royalties.",
    conservativePrompt: "Keep deals private and off-chain.",
    tone: "transformative",

    outcomeA: "Transparency delights fans and boosts legitimacy.",
    outcomeB: "Contract exploit leaks payouts.",
    outcomeC: "Private deals preserve flexibility.",
    outcomeD: "Fans question opacity."
  },

  /* ============================================
     P-B4-0.3 — Education Crossover
  ============================================ */
  {
    subBand: "P-B4-0.3",
    marketCap: "$4 B",
    focus: "Education Crossover",
    context: "Schools adopt GQTs for skill assessment.",
    boldPrompt: "Launch Scholastic League with curriculum integration.",
    conservativePrompt: "Pilot small-scale partnerships first.",
    tone: "neutral",

    outcomeA: "Scholastic League earns mainstream coverage.",
    outcomeB: "Curriculum backlash over gamified exams.",
    outcomeC: "Pilot partnerships prove safe.",
    outcomeD: "Media ignores early trials."
  },

  /* ============================================
     P-B4-0.4 — Cultural Mainstreaming
  ============================================ */
  {
    subBand: "P-B4-0.4",
    marketCap: "$7 B",
    focus: "Cultural Mainstreaming",
    context: "Celebrity players dominate media.",
    boldPrompt: "Fund documentaries and public events.",
    conservativePrompt: "Rely on organic press coverage.",
    tone: "transformative",

    outcomeA: "Documentaries crown CGT cultural milestone.",
    outcomeB: "Overexposure causes fatigue.",
    outcomeC: "Organic press ensures longevity.",
    outcomeD: "Culture grows slowly."
  },

  /* ============================================
     P-B4-0.5 — League Federations
  ============================================ */
  {
    subBand: "P-B4-0.5",
    marketCap: "$12 B",
    focus: "League Federations",
    context: "Regions debate rule differences.",
    boldPrompt: "Convene World Fair-Play Summit to standardise rules.",
    conservativePrompt: "Allow regional autonomy.",
    tone: "neutral",

    outcomeA: "Summit standardises global governance.",
    outcomeB: "Political rifts delay adoption.",
    outcomeC: "Autonomy preserves diversity.",
    outcomeD: "Rule conflicts persist."
  },

  /* ============================================
     P-B4-0.6 — Spectator Economy
  ============================================ */
  {
    subBand: "P-B4-0.6",
    marketCap: "$20 B",
    focus: "Spectator Economy",
    context: "Millions watch GQTs live.",
    boldPrompt: "Tokenise viewership rewards via CGT tickets.",
    conservativePrompt: "Keep fan engagement non-tokenised.",
    tone: "neutral",

    outcomeA: "Tokenised viewership revolutionises fan economy.",
    outcomeB: "Speculative trading harms trust.",
    outcomeC: "Non-token model ensures stability.",
    outcomeD: "Engagement rates drop."
  },

  /* ============================================
     P-B4-0.7 — Cross-Chain Tournaments
  ============================================ */
  {
    subBand: "P-B4-0.7",
    marketCap: "$35 B",
    focus: "Cross-Chain Tournaments",
    context: "Other chains host mirrored events.",
    boldPrompt: "Create inter-chain leaderboards with shared rewards.",
    conservativePrompt: "Expand only to trusted partner chains.",
    tone: "transformative",

    outcomeA: "Cross-chain tournaments explode visibility.",
    outcomeB: "Exploit drains rewards.",
    outcomeC: "Controlled expansion ensures safety.",
    outcomeD: "Missed liquidity boom."
  },

  /* ============================================
     P-B4-0.8 — Regulatory Spotlight
  ============================================ */
  {
    subBand: "P-B4-0.8",
    marketCap: "$50 B",
    focus: "Regulatory Spotlight",
    context: "Governments study CGT as a new economic sector.",
    boldPrompt: "Form Player Union DAO to represent rights.",
    conservativePrompt: "Coordinate quietly with policy groups.",
    tone: "risky",

    outcomeA: "Union DAO wins global legitimacy.",
    outcomeB: "Union disputes stall play.",
    outcomeC: "Quiet coordination keeps peace.",
    outcomeD: "Gov-relations lag."
  },

  /* ============================================
     P-B4-0.9 — Generational Continuity
  ============================================ */
  {
    subBand: "P-B4-0.9",
    marketCap: "$75 B",
    focus: "Generational Continuity",
    context: "Families and schools play together over years.",
    boldPrompt: "Introduce family and legacy leaderboards.",
    conservativePrompt: "Keep records individual-only.",
    tone: "neutral",

    outcomeA: "Family leaderboards deepen emotional bond.",
    outcomeB: "Privacy concerns arise.",
    outcomeC: "Individual focus preserves clarity.",
    outcomeD: "Missed cultural warmth."
  },

  /* ============================================
     P-B4-1.0 — Global Cultural Legitimacy
  ============================================ */
  {
    subBand: "P-B4-1.0",
    marketCap: "$100 B",
    focus: "Global Cultural Legitimacy",
    context: "CGT becomes universal arena of skill and status.",
    boldPrompt: "Formalise World CGT Federation and publish DAO constitution.",
    conservativePrompt: "Delay formalisation until stakeholder sync.",
    tone: "transformative",

    outcomeA: "Federation announcement cements legacy.",
    outcomeB: "DAO timing misalignment confuses public.",
    outcomeC: "Delayed reveal ensures orderly transition.",
    outcomeD: "History loses iconic moment."
  },

  /* ============================================
     P-B5-SignOff — DAO Readiness Proof — Players
  ============================================ */
  {
    subBand: "P-B5-SignOff",
    marketCap: "$100 B +",
    focus: "DAO Readiness Proof — Players",
    context: "Players evolve into a global professional community with governance expectations.",
    boldPrompt: "Activate on-chain Fair-Play governance and transfer leaderboard validation to DAO.",
    conservativePrompt: "Maintain guardian oversight during final audits.",
    tone: "transformative",

    outcomeA: "DAO Fair-Play modules activate flawlessly; global applause.",
    outcomeB: "Minor reward-calculation bug undermines confidence.",
    outcomeC: "Guardian audit smooths transition.",
    outcomeD: "DAO activation is seen as anticlimactic."
  }

];
