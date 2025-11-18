/* ===========================================================
   CGTShop Tuning File — v1.0
   All balancing values in one place.
   =========================================================== */

window.CGT_TUNING = {

  /* ------------------------------------------
     Conservative Jackpot System (v1)
     ------------------------------------------ */

  conservativeJackpot: {
    // Slice-based trigger chance (C1 → C8)
    triggerPercents: [25, 22, 20, 18, 17, 16, 15, 14],

    // Tier distribution (total 100%)
    tiers: [
      { tier: 25, weight: 10 },   // 10%
      { tier: 10, weight: 20 },   // next 20%
      { tier: 5,  weight: 30 },   // next 30%
      { tier: 2,  weight: 40 }    // last 40%
    ]
  },

  /* ------------------------------------------
     Conservative Probability Curve (8 slices)
     0.10–0.80 → 85% → 65%
     ------------------------------------------ */

  conservativeProbabilities: {
    slices: 8,
    percents: [85, 82, 79, 76, 73, 70, 68, 65]  // MUST match slices
  },

  /* ------------------------------------------
     Bold Probability Curve (39 slices)
     1.1–5.0 → 80% → 50% linearly
     ------------------------------------------ */

  boldProbabilities: {
    slices: 39,
    start: 80,
    end: 50
  },

  /* ------------------------------------------
     Slider ranges (global)
     ------------------------------------------ */

  sliders: {
    conservative: {
      min: 0.10,
      max: 0.80,
      step: 0.01
    },
    bold: {
      min: 1.1,
      step: 0.1
    }
  },

  /* ------------------------------------------
     Band-based max multipliers for Bold
     (This replaces all magic numbers)
     ------------------------------------------ */

  boldBandCaps: {
    "B1": 5.0,   // $10k–$1M
    "B2": 4.0,
    "B3": 3.0,
    "B4": 2.0,
    "B5": 1.0
  },

  /* ------------------------------------------
     Bold loss model
     1.1–1.9 → symmetrical (mult - 1)
     2.0–5.0 → linear wipeout curve
     ------------------------------------------ */

  boldLoss: {
    symmetricalEnd: 2.0,   // below this → symmetrical losses
    wipeoutStartLoss: 0.80,  // 80% loss at 2.0
    wipeoutEndLoss: 1.00,    // 100% loss at 5.0
    wipeoutEndMult: 5.0
  },

  /* ------------------------------------------
     Conservative loss model (symmetrical)
     ------------------------------------------ */

  conservativeLoss: {
    mode: "symmetrical"   // (mult - 1) % loss
  }

};
