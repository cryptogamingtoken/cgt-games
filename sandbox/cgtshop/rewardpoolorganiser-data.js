// rewardpoolorganiser-data.js

window.CGT_SCENARIOS = window.CGT_SCENARIOS || {};
window.CGT_SCENARIOS.rewardPoolOrganiser = [

  /* ============================================
     RPO-B1-0.1 — First symbolic stake
  ============================================ */
  {
    subBand: "RPO-B1-0.1",
    marketCap: "$10 K",
    focus: "First symbolic stake",
    context: "The founder imagines the first reward pool as a statement of belief rather than infrastructure.",
    boldPrompt: "Put real tokens aside publicly — a symbolic “pool” to prove there will be rewards.",
    conservativePrompt: "Keep the pool invisible and off-chain — personal commitment only, no signal.",
    tone: "risky",

    outcomeA: "Early public commitment draws quick trust and sparks the first player sign-ups.",
    outcomeB: "The exposed wallet shows its emptiness when claims fail, shaking belief in the project’s reward logic.",
    outcomeC: "The quiet private fund matures safely and converts smoothly into the first working pool.",
    outcomeD: "The secrecy fuels rumours of fake rewards and erodes the founder’s credibility."
  },

  /* ============================================
     RPO-B1-0.2 — Whisper of the pool
  ============================================ */
  {
    subBand: "RPO-B1-0.2",
    marketCap: "$25 K",
    focus: "Whisper of the pool",
    context: "The concept of staking reward pools circulates among the founder’s closest contacts.",
    boldPrompt: "Publicly tease the pool and timeline, tying it to the project narrative.",
    conservativePrompt: "Deliberately keep the concept off-stage, consolidating control internally.",
    tone: "risky",

    outcomeA: "Buzz spreads fast as early announcements trend through socials and forums.",
    outcomeB: "Public hype collapses when the timeline slips and no pool appears.",
    outcomeC: "Internal control keeps the roadmap steady and avoids speculation crashes.",
    outcomeD: "The lack of visible action kills momentum and fragments early organiser energy."
  },

  /* ============================================
     RPO-B1-0.3 — First dry-run
  ============================================ */
  {
    subBand: "RPO-B1-0.3",
    marketCap: "$50 K",
    focus: "First dry-run",
    context: "The founder runs an internal mock pool.",
    boldPrompt: "Reveal the dry-run publicly as proof-of-concept.",
    conservativePrompt: "Run the dry-run in total secrecy to test mechanics without signalling.",
    tone: "neutral",

    outcomeA: "Publishing the dry-run footage convinces creators and attracts testers overnight.",
    outcomeB: "The public demo fails under load, exposing technical immaturity.",
    outcomeC: "The hidden test completes smoothly and improves payout logic for the real launch.",
    outcomeD: "The secrecy leaves volunteers uncertain whether the pool even exists."
  },

  /* ============================================
     RPO-B1-0.4 — Echo of stakes
  ============================================ */
  {
    subBand: "RPO-B1-0.4",
    marketCap: "$100 K",
    focus: "Echo of stakes",
    context: "Inner circle becomes aware of the pool’s existence.",
    boldPrompt: "Signal publicly to friends and insiders to build “whisper hype.”",
    conservativePrompt: "Concentrate control entirely on founder’s side, no external involvement.",
    tone: "transformative",

    outcomeA: "Friends join publicly, forming the first organiser circle and creating real buzz.",
    outcomeB: "Over-eager leaks cause wallet spam and confusion across groups.",
    outcomeC: "The founder’s quiet curation builds a small trusted organiser nucleus.",
    outcomeD: "The over-controlled approach leaves community members excluded and restless."
  },

  /* ============================================
     RPO-B1-0.5 — First organiser shadow
  ============================================ */
  {
    subBand: "RPO-B1-0.5",
    marketCap: "$150 K",
    focus: "First organiser shadow",
    context: "Early would-be organisers surface asking to get involved.",
    boldPrompt: "Invite them into an early pool coordination openly.",
    conservativePrompt: "Delay their involvement and keep coordination centralised.",
    tone: "risky",

    outcomeA: "Inviting organisers openly builds early governance trust and coordination between teams.",
    outcomeB: "Public onboarding chaos overwhelms management and crashes the first test pool.",
    outcomeC: "The selective internal coordination keeps prize flow stable and repeatable.",
    outcomeD: "Delayed inclusion kills volunteer motivation and stunts early decentralisation."
  },

  /* ============================================
     RPO-B1-0.6 — Stirring undercurrent
  ============================================ */
  {
    subBand: "RPO-B1-0.6",
    marketCap: "$250 K",
    focus: "Stirring undercurrent",
    context: "Multiple proto-organisers hover.",
    boldPrompt: "Turn proto-interest into public coordination signals.",
    conservativePrompt: "Lock the pool layer entirely, enforcing a single-gatekeeper stance.",
    tone: "risky",

    outcomeA: "Turning interest into open coordination produces a viral organiser sprint.",
    outcomeB: "The uncontrolled surge causes prize misallocations and refund chaos.",
    outcomeC: "The single-gatekeeper model preserves reliability through the stress window.",
    outcomeD: "Excess control suffocates enthusiasm and forces organisers to fork their own test pools."
  },

  /* ============================================
     RPO-B1-0.7 — Tipping point
  ============================================ */
  {
    subBand: "RPO-B1-0.7",
    marketCap: "$400 K",
    focus: "Tipping point",
    context: "Players enter and expect structure. First organiser decision becomes unavoidable.",
    boldPrompt: "Announce and publish the first formal pool publicly.",
    conservativePrompt: "Keep the organiser layer invisible, consolidating prize control under founder.",
    tone: "risky",

    outcomeA: "Publishing the first formal pool ignites participation and media coverage.",
    outcomeB: "Public errors in payout calculations trigger community doubt.",
    outcomeC: "Holding control internally keeps distribution accurate and on-schedule.",
    outcomeD: "Total opacity drives speculation that no real pools exist."
  },

  /* ============================================
     RPO-B1-0.8 — First organiser pools
  ============================================ */
  {
    subBand: "RPO-B1-0.8",
    marketCap: "$600 K",
    focus: "First organiser pools",
    context: "A stable nucleus of founders, devs, players, and marketers is now active.",
    boldPrompt: "Activate early organisers. Launch small prize pools publicly to signal stakes and test distribution.",
    conservativePrompt: "Run one invisible pilot pool with no public visibility to stress-test flows quietly.",
    tone: "neutral",

    outcomeA: "Launching small visible prize pools boosts trust and validates emissions flow.",
    outcomeB: "Over-exposed pilot bugs halt claims and burn credibility early.",
    outcomeC: "Quiet internal testing avoids breakages and ensures clean rollout later.",
    outcomeD: "The absence of visible progress convinces newcomers CGT is stagnant."
  },

  /* ============================================
     RPO-B1-0.9 — Trust through stakes
  ============================================ */
  {
    subBand: "RPO-B1-0.9",
    marketCap: "$800 K",
    focus: "Trust through stakes",
    context: "Creator and player energy builds. RPOs can solidify ecosystem trust by expanding their prize presence.",
    boldPrompt: "Expand organiser activity. Scale up pool numbers and make prize visibility part of the player narrative.",
    conservativePrompt: "Run minimal, closed pools and keep organiser layer low-profile.",
    tone: "risky",

    outcomeA: "Expanding organiser activity doubles user inflow and strengthens liquidity culture.",
    outcomeB: "Rapid scaling causes conflicting rules and unclaimed rewards.",
    outcomeC: "Minimal expansion preserves financial control and keeps payouts consistent.",
    outcomeD: "The slow pace makes the organiser layer appear lifeless and closed."
  },

  /* ============================================
     RPO-B1-1.0 — Organiser spotlight
  ============================================ */
  {
    subBand: "RPO-B1-1.0",
    marketCap: "$1 M",
    focus: "Organiser spotlight",
    context: "External attention is growing. RPO behaviour sets the tone for how trust and competition will scale.",
    boldPrompt: "Push organiser networks. Launch coordinated public prize events to anchor community trust.",
    conservativePrompt: "Hold the network at current scale, focusing only on fulfilling existing prize commitments.",
    tone: "transformative",

    outcomeA: "Coordinated public prize events create global attention and strong early brand trust.",
    outcomeB: "Operational overload leads to late rewards and refund disputes.",
    outcomeC: "Fulfilling limited commitments builds reputation for precision and fairness.",
    outcomeD: "The conservative stagnation allows rival ecosystems to steal players."
  },

  /* ============================================
     RPO-B2-0.1 — First Funded Pools
  ============================================ */
  {
    subBand: "RPO-B2-0.1",
    marketCap: "$1.5 M",
    focus: "First Funded Pools",
    context: "Token emissions stabilise; community demand for real rewards spikes.",
    boldPrompt: "Launch first treasury-backed public tournaments with transparent prize splits.",
    conservativePrompt: "Continue running symbolic pools until payout automation passes tests.",
    tone: "risky",

    outcomeA: "Treasury-backed tournaments run flawlessly, drawing creators and investors in.",
    outcomeB: "Automation glitches in public payouts damage organiser reputation.",
    outcomeC: "Private symbolic runs complete quietly with zero errors.",
    outcomeD: "Over-caution leaves players doubting real payout readiness."
  },

  /* ============================================
     RPO-B2-0.2 — Organiser Wave One
  ============================================ */
  {
    subBand: "RPO-B2-0.2",
    marketCap: "$2.5 M",
    focus: "Organiser Wave One",
    context: "Dozens of volunteers apply to host prize events.",
    boldPrompt: "Approve open organiser applications and publish host guidelines.",
    conservativePrompt: "Limit organiser slots to vetted insiders.",
    tone: "neutral",

    outcomeA: "Open organiser calls deliver dozens of high-quality pilot events.",
    outcomeB: "Too many inexperienced hosts cause logistical meltdowns.",
    outcomeC: "Vetted organiser rollout ensures consistent standards and reliability.",
    outcomeD: "The closed approach alienates skilled volunteers who build competing leagues."
  },

  /* ============================================
     RPO-B2-0.3 — Cross-Domain Expansion
  ============================================ */
  {
    subBand: "RPO-B2-0.3",
    marketCap: "$5 M",
    focus: "Cross-Domain Expansion",
    context: "New GQTs appear in learning and finance sectors.",
    boldPrompt: "Announce “Cross-Domain Pool Series v1.”",
    conservativePrompt: "Keep experimentation siloed by category until data analysed.",
    tone: "transformative",

    outcomeA: "Cross-domain pools succeed, proving CGT’s adaptability beyond gaming.",
    outcomeB: "Uncoordinated experiments cause cross-ledger payout conflicts.",
    outcomeC: "Gradual silo testing yields dependable data and safer expansion later.",
    outcomeD: "The narrow focus stalls ecosystem diversity and media interest."
  },

  /* ============================================
     RPO-B2-0.4 — Fairness Frameworks
  ============================================ */
  {
    subBand: "RPO-B2-0.4",
    marketCap: "$10 M",
    focus: "Fairness Frameworks",
    context: "Accusations of imbalance appear as prizes rise.",
    boldPrompt: "Launch public “Fair-Pool Registry” logging config and payout data.",
    conservativePrompt: "Maintain private audits until standard finalised.",
    tone: "neutral",

    outcomeA: "Public Fair-Pool Registry gains praise for transparency and investor confidence.",
    outcomeB: "Disclosed payout bugs spark backlash from losing teams.",
    outcomeC: "Private audits finish without controversy and guide policy refinement.",
    outcomeD: "Lack of public proof sustains scepticism about fairness claims."
  },

  /* ============================================
     RPO-B2-0.5 — Sponsorship Entry
  ============================================ */
  {
    subBand: "RPO-B2-0.5",
    marketCap: "$15 M",
    focus: "Sponsorship Entry",
    context: "External brands offer prize contributions.",
    boldPrompt: "Accept co-funded pools under shared-wallet agreements.",
    conservativePrompt: "Restrict sponsorship to pilot events only.",
    tone: "risky",

    outcomeA: "Brand partnerships triple liquidity and media coverage instantly.",
    outcomeB: "Unvetted sponsors trigger scandal and funding freeze.",
    outcomeC: "Pilot-only sponsorships secure small wins with controlled exposure.",
    outcomeD: "Over-selectivity causes brands to withdraw and slows external growth."
  },

  /* ============================================
     RPO-B2-0.6 — Yield Balancing
  ============================================ */
  {
    subBand: "RPO-B2-0.6",
    marketCap: "$25 M",
    focus: "Yield Balancing",
    context: "Pools compete for liquidity and APY visibility.",
    boldPrompt: "Publish unified “Pool APY Dashboard” with live yields.",
    conservativePrompt: "Keep data internal until models verified.",
    tone: "neutral",

    outcomeA: "Unified APY Dashboard standardises competition data and attracts analysts.",
    outcomeB: "Inaccurate live feeds create panic and temporary liquidity drain.",
    outcomeC: "Internal models prove solid and inspire later open version.",
    outcomeD: "Opacity keeps traders guessing and limits trust in reward stability."
  },

  /* ============================================
     RPO-B2-0.7 — Stakeholder Sync
  ============================================ */
  {
    subBand: "RPO-B2-0.7",
    marketCap: "$40 M",
    focus: "Stakeholder Sync",
    context: "Developers and Marketers rely on organiser schedules.",
    boldPrompt: "Form “Sync Council v1” aligning pool calendars with releases.",
    conservativePrompt: "Maintain informal coordination chats only.",
    tone: "transformative",

    outcomeA: "Cross-stakeholder council syncs calendars, boosting efficiency and morale.",
    outcomeB: "Coordination fatigue triggers missed events and duplicated prizes.",
    outcomeC: "Informal chats maintain relaxed autonomy without serious clashes.",
    outcomeD: "Lack of structure breeds chronic scheduling chaos."
  },

  /* ============================================
     RPO-B2-0.8 — Visibility Boom
  ============================================ */
  {
    subBand: "RPO-B2-0.8",
    marketCap: "$60 M",
    focus: "Visibility Boom",
    context: "Influencers track pool results; analytics become news.",
    boldPrompt: "Stream live prize draws and leaderboard closures publicly.",
    conservativePrompt: "Post weekly summaries without livestreams.",
    tone: "risky",

    outcomeA: "Live-streamed prize finals become viral spectacles, boosting token volume.",
    outcomeB: "Technical stream errors or wrong winners spark controversy.",
    outcomeC: "Weekly summaries sustain credibility and consistent engagement.",
    outcomeD: "Absence of live energy makes events feel corporate and dull."
  },

  /* ============================================
     RPO-B2-0.9 — Treasury Audits
  ============================================ */
  {
    subBand: "RPO-B2-0.9",
    marketCap: "$80 M",
    focus: "Treasury Audits",
    context: "Treasury and organiser data start merging.",
    boldPrompt: "Conduct public multi-sig audits and publish reports.",
    conservativePrompt: "Keep audits internal pending DAO readiness.",
    tone: "neutral",

    outcomeA: "Public treasury audits reassure investors and attract institutional observers.",
    outcomeB: "Discrepancies in on-chain logs trigger public alarm and price dips.",
    outcomeC: "Internal audits confirm health and steady rewards continuation.",
    outcomeD: "Opacity drives conspiracy narratives and user withdrawal."
  },

  /* ============================================
     RPO-B2-1.0 — Reliability Proof
  ============================================ */
  {
    subBand: "RPO-B2-1.0",
    marketCap: "$100 M",
    focus: "Reliability Proof",
    context: "Pools have run for months; emissions winding down.",
    boldPrompt: "Announce “Reward Integrity Proof v1” documenting all payouts and yields.",
    conservativePrompt: "Wait for DAO audit approval before public release.",
    tone: "transformative",

    outcomeA: "Publishing the full Reward Integrity Proof cements CGT’s reputation.",
    outcomeB: "Data inconsistencies cause heated governance debate.",
    outcomeC: "DAO-approved report validates months of smooth operation.",
    outcomeD: "The delay breeds doubts about honesty and timeliness."
  },

  /* ============================================
     RPO-B3-0.1 — Cross-Domain Liquidity Bridge
  ============================================ */
  {
    subBand: "RPO-B3-0.1",
    marketCap: "$120 M",
    focus: "Cross-Domain Liquidity Bridge",
    context: "Prize pools now span gaming, learning, and work sectors; capital routing becomes complex.",
    boldPrompt: "Launch unified liquidity router smart-contract handling multi-domain inflows.",
    conservativePrompt: "Keep manual routing and verify safety before merging contracts.",
    tone: "neutral",

    outcomeA: "Unified liquidity router proves seamless cross-domain flow.",
    outcomeB: "Smart-contract bug halts transfers and freezes rewards.",
    outcomeC: "Manual routing continues safely with minor delays.",
    outcomeD: "Over-manual handling causes inefficiency and missed payouts."
  },

  /* ============================================
     RPO-B3-0.2 — Professional Event Adoption
  ============================================ */
  {
    subBand: "RPO-B3-0.2",
    marketCap: "$180 M",
    focus: "Professional Event Adoption",
    context: "Universities and firms begin sponsoring recurring GQTs.",
    boldPrompt: "Formalise “Institutional Pool Framework” with co-funding rules.",
    conservativePrompt: "Continue ad-hoc partnerships until DAO standards release.",
    tone: "neutral",

    outcomeA: "Institutional Pool Framework signs five universities in first month.",
    outcomeB: "Co-funding disputes sour first corporate partnerships.",
    outcomeC: "Ad-hoc deals nurture trust without friction.",
    outcomeD: "Lack of structure slows large-scale onboarding."
  },

  /* ============================================
     RPO-B3-0.3 — Automation vs Oversight
  ============================================ */
  {
    subBand: "RPO-B3-0.3",
    marketCap: "$250 M",
    focus: "Automation vs Oversight",
    context: "Organisers debate full automation vs manual curation of prize cycles.",
    boldPrompt: "Deploy auto-rebalance smart-contracts for pools > $1 M.",
    conservativePrompt: "Maintain hybrid manual/auto operation until audits complete.",
    tone: "risky",

    outcomeA: "Auto-rebalance contracts cut organiser workload and stabilise flows.",
    outcomeB: "Code flaw misroutes funds and sparks crisis.",
    outcomeC: "Hybrid oversight keeps pools balanced without drama.",
    outcomeD: "Delay frustrates organisers who seek scalability."
  },

  /* ============================================
     RPO-B3-0.4 — Regulatory Attention
  ============================================ */
  {
    subBand: "RPO-B3-0.4",
    marketCap: "$330 M",
    focus: "Regulatory Attention",
    context: "Media and policy bodies question fairness of high-value events.",
    boldPrompt: "Publish compliance framework and open-source audit scripts.",
    conservativePrompt: "Work through industry associations quietly.",
    tone: "transformative",

    outcomeA: "Compliance publication earns headlines and regulatory goodwill.",
    outcomeB: "Excess exposure invites scrutiny and legal stress.",
    outcomeC: "Quiet negotiations resolve concerns discreetly.",
    outcomeD: "Silence fuels rumours of non-compliance."
  },

  /* ============================================
     RPO-B3-0.5 — Multi-Pool Analytics
  ============================================ */
  {
    subBand: "RPO-B3-0.5",
    marketCap: "$420 M",
    focus: "Multi-Pool Analytics",
    context: "Dozens of live pools require performance tracking.",
    boldPrompt: "Deploy “Reward Pulse Dashboard” for real-time yield and participation metrics.",
    conservativePrompt: "Release quarterly reports instead of live feeds.",
    tone: "neutral",

    outcomeA: "Reward Pulse Dashboard becomes analysts’ favourite data source.",
    outcomeB: "Server lag causes misinformation and panic selling.",
    outcomeC: "Quarterly reports ensure steady understanding and calm markets.",
    outcomeD: "The slow format bores users and loses attention."
  },

  /* ============================================
     RPO-B3-0.6 — Reputation-Weighted Staking
  ============================================ */
  {
    subBand: "RPO-B3-0.6",
    marketCap: "$520 M",
    focus: "Reputation-Weighted Staking",
    context: "Organisers’ credibility begins affecting deposit weight.",
    boldPrompt: "Integrate organiser-score weighting into pool contracts.",
    conservativePrompt: "Continue flat stake weights until system stress-tested.",
    tone: "neutral",

    outcomeA: "Score-weighted contracts reward trusted organisers and improve fairness.",
    outcomeB: "Misweighted logic punishes small teams and sparks outrage.",
    outcomeC: "Flat weights keep peace among organisers.",
    outcomeD: "Perceived stagnation invites accusations of elitism."
  },

  /* ============================================
     RPO-B3-0.7 — Treasury Fusion
  ============================================ */
  {
    subBand: "RPO-B3-0.7",
    marketCap: "$640 M",
    focus: "Treasury Fusion",
    context: "DAO treasury prepares for shared liquidity channels.",
    boldPrompt: "Merge RPO wallet feeds with treasury smart-router prototype.",
    conservativePrompt: "Keep funds segmented until DAO compliance audit.",
    tone: "transformative",

    outcomeA: "Treasury merge succeeds, proving unified ecosystem finance.",
    outcomeB: "Code error during merge temporarily locks liquidity.",
    outcomeC: "Segregated funds remain stable and auditable.",
    outcomeD: "Delay slows DAO treasury launch timeline."
  },

  /* ============================================
     RPO-B3-0.8 — Data-Backed Trust
  ============================================ */
  {
    subBand: "RPO-B3-0.8",
    marketCap: "$760 M",
    focus: "Data-Backed Trust",
    context: "Players and stakers demand proof of historical payouts.",
    boldPrompt: "Publish “Reward Ledger Explorer” showing verified distribution history.",
    conservativePrompt: "Keep data behind API gates until privacy rules clarify.",
    tone: "neutral",

    outcomeA: "Reward Ledger Explorer gains viral traction as users verify payouts.",
    outcomeB: "Data leak exposes private info and triggers backlash.",
    outcomeC: "Gated data policy avoids PR risk and keeps control.",
    outcomeD: "Opacity fuels suspicion among analysts."
  },

  /* ============================================
     RPO-B3-0.9 — Inter-Organiser Federation
  ============================================ */
  {
    subBand: "RPO-B3-0.9",
    marketCap: "$880 M",
    focus: "Inter-Organiser Federation",
    context: "Independent pools begin sharing liquidity and rulesets.",
    boldPrompt: "Formalise “Organiser Federation v1” with shared treasury governance.",
    conservativePrompt: "Encourage informal alliances only until DAO phase.",
    tone: "risky",

    outcomeA: "Organiser Federation standard unifies rewards and increases efficiency.",
    outcomeB: "Power imbalance splits federation into rival factions.",
    outcomeC: "Informal alliances maintain harmony across domains.",
    outcomeD: "Loose coordination leads to liquidity duplication issues."
  },

  /* ============================================
     RPO-B3-1.0 — Cross-Sector Maturity
  ============================================ */
  {
    subBand: "RPO-B3-1.0",
    marketCap: "$1 B",
    focus: "Cross-Sector Maturity",
    context: "RPO ecosystem functions as a cross-domain economic rail for CGT.",
    boldPrompt: "Announce “Reward Protocol v1” whitepaper and DAO-ready integration plan.",
    conservativePrompt: "Keep documentation internal until final audit sign-off.",
    tone: "transformative",

    outcomeA: "Reward Protocol v1 release legitimises organisers as system backbone.",
    outcomeB: "Unvetted code exposes vulnerabilities post-launch.",
    outcomeC: "Internal draft completes with stable operations.",
    outcomeD: "Over-caution leaves DAO momentum lagging."
  },

  /* ============================================
     RPO-B4-0.1 — Institutional Onboarding
  ============================================ */
  {
    subBand: "RPO-B4-0.1",
    marketCap: "$1 B",
    focus: "Institutional Onboarding",
    context: "Major universities and leagues approach CGT to adopt its pool standards.",
    boldPrompt: "Publish “Reward Institution Kit v1” for trusted partners.",
    conservativePrompt: "Run private pilots with non-disclosure agreements first.",
    tone: "neutral",

    outcomeA: "Institution Kit rollout drives major partnerships within weeks.",
    outcomeB: "Premature release leads to misused contracts and PR loss.",
    outcomeC: "Private pilots close successfully and prepare cleaner expansion.",
    outcomeD: "Delays cost prime partnership opportunities."
  },

  /* ============================================
     RPO-B4-0.2 — Endowment Era
  ============================================ */
  {
    subBand: "RPO-B4-0.2",
    marketCap: "$2 B",
    focus: "Endowment Era",
    context: "Long-term funds seek yield and social impact.",
    boldPrompt: "Open Endowment Pool Class with multi-year lock options.",
    conservativePrompt: "Keep standard liquidity windows to avoid capital concentration.",
    tone: "neutral",

    outcomeA: "Endowment Pool Class attracts deep long-term capital.",
    outcomeB: "Locked capital causes liquidity crunch for short-term pools.",
    outcomeC: "Standard pools maintain healthy turnover.",
    outcomeD: "Lack of innovation keeps major funds out."
  },

  /* ============================================
     RPO-B4-0.3 — Governance Layering
  ============================================ */
  {
    subBand: "RPO-B4-0.3",
    marketCap: "$4 B",
    focus: "Governance Layering",
    context: "Organiser federations demand representation in DAO draft councils.",
    boldPrompt: "Create “Pool Governance Seat Map” assigning votes by performance.",
    conservativePrompt: "Keep representation off-chain until DAO ratifies rules.",
    tone: "transformative",

    outcomeA: "Governance Seat Map passes and formalises organiser representation.",
    outcomeB: "Disputes over vote weight trigger media tension.",
    outcomeC: "Off-chain representation works quietly and builds trust.",
    outcomeD: "Exclusion from DAO drafts sparks resentment."
  },

  /* ============================================
     RPO-B4-0.4 — Cross-Sector Audits
  ============================================ */
  {
    subBand: "RPO-B4-0.4",
    marketCap: "$7 B",
    focus: "Cross-Sector Audits",
    context: "Regulators and auditors request transparency standards.",
    boldPrompt: "Publish global audit template and external review schedule.",
    conservativePrompt: "Continue internal audits pending DAO legal advice.",
    tone: "neutral",

    outcomeA: "Global audit template earns institutional adoption and coverage.",
    outcomeB: "External reviewers find flaws and dent credibility.",
    outcomeC: "Internal audits maintain trust quietly.",
    outcomeD: "Opacity stalls regulatory partnerships."
  },

  /* ============================================
     RPO-B4-0.5 — Derivative Markets
  ============================================ */
  {
    subBand: "RPO-B4-0.5",
    marketCap: "$12 B",
    focus: "Derivative Markets",
    context: "Analysts begin speculating on pool futures.",
    boldPrompt: "List non-custodial “Pool Futures” on approved DEXs.",
    conservativePrompt: "Discourage derivatives until DAO risk policy exists.",
    tone: "risky",

    outcomeA: "Pool Futures launch boosts speculative volume and visibility.",
    outcomeB: "Derivative losses cause media outrage and oversight pressure.",
    outcomeC: "No-futures policy keeps market calm and credible.",
    outcomeD: "Missed innovation costs market share."
  },

  /* ============================================
     RPO-B4-0.6 — Public Sector Partnerships
  ============================================ */
  {
    subBand: "RPO-B4-0.6",
    marketCap: "$20 B",
    focus: "Public Sector Partnerships",
    context: "Governments use reward pools for education and innovation grants.",
    boldPrompt: "Launch “Public Pool Program” with on-chain reporting.",
    conservativePrompt: "Run pilot grants through trusted NGOs first.",
    tone: "transformative",

    outcomeA: "Public Pool Program showcases civic use cases and inspires goodwill.",
    outcomeB: "Bureaucratic friction delays payout cycles.",
    outcomeC: "NGO pilots deliver clean success and positive publicity.",
    outcomeD: "Limited reach mutes social-impact narrative."
  },

  /* ============================================
     RPO-B4-0.7 — Legacy Leagues Integration
  ============================================ */
  {
    subBand: "RPO-B4-0.7",
    marketCap: "$35 B",
    focus: "Legacy Leagues Integration",
    context: "Historic esports and academic competitions convert to CGT payouts.",
    boldPrompt: "Offer conversion tooling and royalty matching grants.",
    conservativePrompt: "Support legacy events without requiring conversion.",
    tone: "neutral",

    outcomeA: "Legacy Leagues convert smoothly, drawing global audiences.",
    outcomeB: "Conversion bugs delay payouts for classic partners.",
    outcomeC: "Support-only path preserves goodwill and avoids friction.",
    outcomeD: "Slow transition leaves cultural gap unfilled."
  },

  /* ============================================
     RPO-B4-0.8 — Insurance and Stability
  ============================================ */
  {
    subBand: "RPO-B4-0.8",
    marketCap: "$50 B",
    focus: "Insurance and Stability",
    context: "Pools become too large to fail. Insurance mechanisms needed.",
    boldPrompt: "Deploy “Prize Protection Fund” smart contract covering defaults.",
    conservativePrompt: "Maintain manual reserve policy until tested.",
    tone: "neutral",

    outcomeA: "Prize Protection Fund prevents first major default loss.",
    outcomeB: "Exploit drains coverage fund and sparks reforms.",
    outcomeC: "Manual reserves keep payouts flowing safely.",
    outcomeD: "No safety net amplifies fear during outages."
  },

  /* ============================================
     RPO-B4-0.9 — Cross-DAO Liquidity
  ============================================ */
  {
    subBand: "RPO-B4-0.9",
    marketCap: "$75 B",
    focus: "Cross-DAO Liquidity",
    context: "Other DAOs request access to CGT pools.",
    boldPrompt: "Create multi-DAO liquidity bridge protocol.",
    conservativePrompt: "Limit access to bilateral agreements.",
    tone: "risky",

    outcomeA: "Cross-DAO Bridge attracts five major ecosystems in days.",
    outcomeB: "Breach exploit triggers temporary halt across DAOs.",
    outcomeC: "Bilateral deals sustain safe limited sharing.",
    outcomeD: "Over-caution isolates CGT from network effects."
  },

  /* ============================================
     RPO-B4-1.0 — Institutional Maturity
  ============================================ */
  {
    subBand: "RPO-B4-1.0",
    marketCap: "$100 B",
    focus: "Institutional Maturity",
    context: "Reward pools become global economic fixtures.",
    boldPrompt: "Announce “Reward Infrastructure v1” integration with DAO economic council.",
    conservativePrompt: "Maintain guardian oversight pending final audit.",
    tone: "transformative",

    outcomeA: "Reward Infrastructure v1 announcement cements economic integration.",
    outcomeB: "DAO merge timing misfires, pausing all payouts.",
    outcomeC: "Guardian-led rollout ensures stable transition.",
    outcomeD: "Extended testing frustrates markets awaiting DAO maturity."
  },

  /* ============================================
     RPO-B5-SignOff — DAO Readiness Proof
  ============================================ */
  {
    subBand: "RPO-B5-SignOff",
    marketCap: "$100 B +",
    focus: "DAO Readiness Proof — Reward Pool Organisers",
    context: "The organiser layer now sustains global liquidity across gaming, education, and professional sectors.",
    boldPrompt: "Transfer control of all treasury routers, pool registries, and audit dashboards to the DAO’s Economic Council.",
    conservativePrompt: "Maintain guardian oversight through one final audit cycle, validating pool invariants and insurance coverage before total hand-off.",
    tone: "transformative",

    outcomeA: "DAO handover completes; organisers fully autonomous with zero downtime.",
    outcomeB: "Data-governance records prove smooth transition.",
    outcomeC: "Missed validator update causes brief reward desync.",
    outcomeD: "Guardian oversight audit validates resilience.",
  }

];
