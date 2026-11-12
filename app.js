// STRIKE//OS — Dutch MMA, Kickboxing & Boxing Heavy Bag Timer + Voice Caller + Polar BLE HR & Calorie Engine
(() => {
  "use strict";

  // ---------------------------------------------------------------------------
  // 1. EXPANDED STRICT ALTERNATING (L <-> R) DUTCH MMA, KICKBOXING & BOXING ARSENAL
  // Every strike in these combinations strictly alternates Lead (L) and Rear (R)
  // across 3-, 4-, 5-, 6-, and 8-strike chains.
  // ---------------------------------------------------------------------------
  const COMBO_LIBRARY = {
    "dutch-mma": [
      // 3-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "body-L", tag: "LIVER L" }
      ],
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Lead Teep", num: "Lead Teep", side: "L", zone: "body-L", tag: "CORE L" },
        { name: "Rear Overhand", num: "Overhand", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Switch Knee", num: "Switch Knee", side: "L", zone: "body-L", tag: "SOLAR L" }
      ],
      // 4-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "body-L", tag: "LIVER L" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Overhand", num: "Overhand", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Knee", num: "Switch Knee", side: "L", zone: "body-L", tag: "BODY L" },
        { name: "Rear Elbow", num: "Rear Elbow", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      [
        { name: "Lead Teep", num: "Lead Teep", side: "L", zone: "body-L", tag: "CORE L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "3 Body", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear High Kick", num: "Rear High Kick", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      // 5-Strike Chains
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Uppercut", num: "5", side: "L", zone: "head-L", tag: "CHIN L" },
        { name: "Rear Elbow", num: "Rear Elbow", side: "R", zone: "head-R", tag: "TEMPLE R" },
        { name: "Lead Switch Knee", num: "Switch Knee", side: "L", zone: "body-L", tag: "SOLAR L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "CALF R" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "body-L", tag: "BODY L" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Sprawl Lead Frame", num: "Sprawl", side: "L", zone: "body-L", tag: "HIP L" },
        { name: "Rear Knee", num: "Rear Knee", side: "R", zone: "body-R", tag: "BODY R" },
        { name: "Lead Elbow", num: "Lead Elbow", side: "L", zone: "head-L", tag: "HEAD L" }
      ],
      // 6-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Sprawl Lead Frame", num: "Sprawl", side: "L", zone: "body-L", tag: "HIP L" },
        { name: "Rear Knee", num: "Rear Knee", side: "R", zone: "body-R", tag: "BODY R" },
        { name: "Lead Elbow", num: "Lead Elbow", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Shot", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Switch Knee", num: "Switch Knee", side: "L", zone: "body-L", tag: "CORE L" },
        { name: "Rear High Kick", num: "Rear High Kick", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      [
        { name: "Lead Inside Low Kick", num: "Inside Low", side: "L", zone: "low-L", tag: "CALF L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Elbow", num: "Rear Elbow", side: "R", zone: "head-R", tag: "TEMPLE R" },
        { name: "Lead Knee", num: "Lead Knee", side: "L", zone: "body-L", tag: "BODY L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      // 8-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" },
        { name: "Lead Teep", num: "Lead Teep", side: "L", zone: "body-L", tag: "CORE L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Switch Knee", num: "Switch Knee", side: "L", zone: "body-L", tag: "BODY L" },
        { name: "Rear Elbow", num: "Rear Elbow", side: "R", zone: "head-R", tag: "HEAD R" }
      ]
    ],

    "dutch-kickboxing": [
      // 3-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "body-L", tag: "LIVER L" }
      ],
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      // 4-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      [
        { name: "Lead Inside Low Kick", num: "Inside Low Kick", side: "L", zone: "low-L", tag: "CALF L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Body Kick", num: "Rear Body Kick", side: "R", zone: "body-R", tag: "RIBS R" }
      ],
      [
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Hook", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      // 5-Strike Chains
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Shot", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross Body", num: "2 Body", side: "R", zone: "body-R", tag: "SOLAR R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Knee", num: "Rear Knee", side: "R", zone: "body-R", tag: "BODY R" },
        { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "head-L", tag: "HEAD L" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Uppercut", num: "5", side: "L", zone: "head-L", tag: "CHIN L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "body-L", tag: "LIVER L" }
      ],
      // 6-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "3 Body", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Lead Inside Low Kick", num: "Inside Low", side: "L", zone: "low-L", tag: "CALF L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear High Kick", num: "Rear High Kick", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      // 8-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Shot", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Body Kick", num: "Rear Body Kick", side: "R", zone: "body-R", tag: "RIBS R" }
      ]
    ],

    "boxing": [
      // 3-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" }
      ],
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      // 4-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "3 Body", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Body Cross", num: "2 Body", side: "R", zone: "body-R", tag: "BODY R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Overhand", num: "Overhand", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      // 5-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Uppercut", num: "5", side: "L", zone: "head-L", tag: "CHIN L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" }
      ],
      [
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Roll", num: "Roll Under", side: "L", zone: "body-L", tag: "DEFENSE L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Shot", side: "L", zone: "body-L", tag: "LIVER L" }
      ],
      // 6-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Slip", num: "Slip Outside", side: "L", zone: "head-L", tag: "EVADE L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Shot", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Overhand", num: "Overhand", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      // 8-Strike Chains
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "3 Body", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" }
      ]
    ]
  };

  // Pools for Procedural Strict Alternating L <-> R Generator
  const PROCEDURAL_POOLS = {
    L: [
      { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
      { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
      { name: "Lead Body Hook", num: "Liver Hook", side: "L", zone: "body-L", tag: "LIVER L" },
      { name: "Lead Uppercut", num: "5", side: "L", zone: "head-L", tag: "CHIN L" },
      { name: "Lead Teep", num: "Teep", side: "L", zone: "body-L", tag: "CORE L" },
      { name: "Lead Inside Low Kick", num: "Inside Low", side: "L", zone: "low-L", tag: "CALF L" },
      { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "body-L", tag: "BODY L" },
      { name: "Lead Switch Knee", num: "Switch Knee", side: "L", zone: "body-L", tag: "SOLAR L" }
    ],
    R: [
      { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
      { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
      { name: "Rear Overhand", num: "Overhand", side: "R", zone: "head-R", tag: "HEAD R" },
      { name: "Rear Body Cross", num: "2 Body", side: "R", zone: "body-R", tag: "SOLAR R" },
      { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" },
      { name: "Rear Body Kick", num: "Rear Body Kick", side: "R", zone: "body-R", tag: "RIBS R" },
      { name: "Rear High Kick", num: "Rear High Kick", side: "R", zone: "head-R", tag: "HEAD R" },
      { name: "Rear Knee", num: "Rear Knee", side: "R", zone: "body-R", tag: "BODY R" },
      { name: "Rear Elbow", num: "Rear Elbow", side: "R", zone: "head-R", tag: "TEMPLE R" }
    ]
  };

  const BOXING_POOLS = {
    L: [
      { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
      { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
      { name: "Lead Body Hook", num: "3 Body", side: "L", zone: "body-L", tag: "LIVER L" },
      { name: "Lead Uppercut", num: "5", side: "L", zone: "head-L", tag: "CHIN L" },
      { name: "Lead Slip", num: "Slip Outside", side: "L", zone: "head-L", tag: "EVADE L" }
    ],
    R: [
      { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
      { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
      { name: "Rear Overhand", num: "Overhand", side: "R", zone: "head-R", tag: "HEAD R" },
      { name: "Rear Body Cross", num: "2 Body", side: "R", zone: "body-R", tag: "SOLAR R" }
    ]
  };

  const PRESETS = {
    "dutch-5x3":   { rounds: 5,  work: 180, rest: 60, prep: 10, warn: 10, mode: "dutch-kickboxing" },
    "mma-3x5":     { rounds: 3,  work: 300, rest: 60, prep: 10, warn: 10, mode: "dutch-mma" },
    "champ-5x5":   { rounds: 5,  work: 300, rest: 60, prep: 10, warn: 10, mode: "dutch-mma" },
    "boxing-10x3": { rounds: 10, work: 180, rest: 60, prep: 10, warn: 10, mode: "boxing" },
    "tabata-8x1":  { rounds: 8,  work: 60,  rest: 20, prep: 5,  warn: 10, mode: "procedural" }
  };

  const VOICE_PERSONAS = {
    coach:      { rate: 1.12, pitch: 0.92 },
    announcer:  { rate: 0.96, pitch: 0.72 },
    padholder:  { rate: 1.32, pitch: 1.02 },
    crisp:      { rate: 1.06, pitch: 1.12 }
  };

  // ---------------------------------------------------------------------------
  // 2. STATE & DOM REFERENCES
  // ---------------------------------------------------------------------------
  const state = {
    phase: "idle", // idle | prep | work | warning | rest | done
    isRunning: false,
    currentRound: 1,
    totalRounds: 5,
    workSec: 180,
    restSec: 60,
    prepSec: 10,
    warnSec: 10,
    maxHr: 190,
    weightLbs: 180,
    comboLengthMode: "mix", // "mix" | "3" | "4" | "5" | "6" | "8"
    remainingMs: 180000,
    phaseDurationMs: 180000,
    lastTickTs: 0,
    rafId: null,
    combosCalled: 0,
    totalWorkElapsedMs: 0,
    nextComboAtMs: 0,
    currentCombo: COMBO_LIBRARY["dutch-mma"][3],
    customCombos: [
      "Jab, Cross, Lead Hook, Rear Low Kick",
      "Cross, Lead Body Hook, Cross, Lead Switch Kick"
    ],
    voices: [],
    selectedVoiceURI: "",
    speechUnlocked: false,
    zoneAnimTimers: [],
    wakeLock: null,

    // Polar BLE Heart Rate & Calorie State
    polarDevice: null,
    polarConnected: false,
    polarSimulated: false,
    polarSimTimer: null,
    currentBpm: 0,
    peakBpm: 0,
    roundEndBpm: 0,
    lastRecoveryDrop: null,
    bpmHistory: [],
    totalCaloriesKcal: 0,
    currentKcalPerMin: 0
  };

  const el = {
    body: document.body,
    phaseLabel: document.getElementById("phase-label"),
    roundCounter: document.getElementById("round-counter"),
    roundPips: document.getElementById("round-pips"),
    dialProgress: document.getElementById("dial-progress"),
    disciplineBadge: document.getElementById("discipline-badge"),
    timeDisplay: document.getElementById("time-display"),
    statCombos: document.getElementById("stat-combos"),
    statCalories: document.getElementById("stat-calories"),
    statPeakHr: document.getElementById("stat-peak-hr"),
    statWorkTime: document.getElementById("stat-work-time"),
    bagSwingWrapper: document.getElementById("bag-swing-wrapper"),
    bagActiveCallout: document.getElementById("bag-active-callout"),
    comboDisplay: document.getElementById("combo-display"),
    comboBreakdown: document.getElementById("combo-breakdown"),
    altProofBadge: document.getElementById("alternating-proof-badge"),
    startPauseBtn: document.getElementById("start-pause-btn"),
    startPauseIcon: document.getElementById("start-pause-icon"),
    startPauseLabel: document.getElementById("start-pause-label"),
    skipPhaseBtn: document.getElementById("skip-phase-btn"),
    resetBtn: document.getElementById("reset-btn"),
    triggerComboBtn: document.getElementById("trigger-combo-btn"),
    prevComboBtn: document.getElementById("prev-combo-btn"),
    soundBellTestBtn: document.getElementById("sound-bell-test-btn"),
    fullscreenBtn: document.getElementById("fullscreen-btn"),

    // Polar BLE & Calorie DOM elements
    polarConnectBtn: document.getElementById("polar-connect-btn"),
    polarBtnLabel: document.getElementById("polar-btn-label"),
    polarStrip: document.getElementById("polar-strip"),
    bpmHeartAnim: document.getElementById("bpm-heart-anim"),
    bpmValue: document.getElementById("bpm-value"),
    hrPctMax: document.getElementById("hr-pct-max"),
    polarStatusText: document.getElementById("polar-status-text"),
    polarZonePill: document.getElementById("polar-zone-pill"),
    hrZoneMarker: document.getElementById("hr-zone-marker"),
    hrSparkline: document.getElementById("hr-sparkline"),
    statKcalRate: document.getElementById("stat-kcal-rate"),
    statHrr: document.getElementById("stat-hrr"),
    polarScanAllBtn: document.getElementById("polar-scan-all-btn"),
    polarSimBtn: document.getElementById("polar-sim-btn"),

    roundsInput: document.getElementById("rounds-input"),
    workSecInput: document.getElementById("work-sec-input"),
    restSecInput: document.getElementById("rest-sec-input"),
    prepSecInput: document.getElementById("prep-sec-input"),
    warnSecInput: document.getElementById("warn-sec-input"),
    maxHrInput: document.getElementById("max-hr-input"),
    weightLbsInput: document.getElementById("weight-lbs-input"),

    roundsFormatted: document.getElementById("rounds-formatted"),
    workFormatted: document.getElementById("work-formatted"),
    restFormatted: document.getElementById("rest-formatted"),
    prepFormatted: document.getElementById("prep-formatted"),
    warnFormatted: document.getElementById("warn-formatted"),
    maxHrFormatted: document.getElementById("max-hr-formatted"),
    weightFormatted: document.getElementById("weight-formatted"),

    comboEnabledToggle: document.getElementById("combo-enabled-toggle"),
    comboStyleSelect: document.getElementById("combo-style-select"),
    comboLengthSelect: document.getElementById("combo-length-select"),
    calloutModeSelect: document.getElementById("callout-mode-select"),
    comboPaceSelect: document.getElementById("combo-pace-select"),
    voiceSelect: document.getElementById("voice-select"),
    testVoiceBtn: document.getElementById("test-voice-btn"),
    voiceRateInput: document.getElementById("voice-rate-input"),
    voicePitchInput: document.getElementById("voice-pitch-input"),
    voiceRateVal: document.getElementById("voice-rate-val"),
    voicePitchVal: document.getElementById("voice-pitch-val"),
    customComboInput: document.getElementById("custom-combo-input"),
    addComboBtn: document.getElementById("add-combo-btn"),
    customComboList: document.getElementById("custom-combo-list")
  };

  // ---------------------------------------------------------------------------
  // 3. POLAR BLE HEART RATE & KEYTEL CALORIE ENGINE
  // ---------------------------------------------------------------------------
  function calculateBurnRateKcalPerMin() {
    const weightKg = (state.weightLbs || 180) * 0.45359237;

    if (state.currentBpm >= 75) {
      const age = 30;
      const kcalMin = (-55.0969 + 0.6309 * state.currentBpm + 0.1988 * weightKg + 0.2017 * age) / 4.184;
      return Math.max(1.2, kcalMin);
    }

    if (!state.isRunning) return 0;
    let met = 0;
    if (state.phase === "work") met = 9.5;
    else if (state.phase === "warning") met = 11.8;
    else if (state.phase === "rest") met = 2.5;
    else if (state.phase === "prep") met = 2.0;

    return (met * 3.5 * weightKg) / 200;
  }

  function parseHeartRateMeasurement(dataView) {
    const flags = dataView.getUint8(0);
    const rate16Bits = (flags & 0x01) !== 0;
    let offset = 1;
    return rate16Bits ? dataView.getUint16(offset, true) : dataView.getUint8(offset);
  }

  function computeHrZone(bpm, maxHr) {
    const pct = Math.round((bpm / maxHr) * 100);
    if (pct < 60) return { zone: 1, name: "Z1 • RECOVERY", pct, color: "#38bdf8" };
    if (pct < 70) return { zone: 2, name: "Z2 • AEROBIC", pct, color: "#10b981" };
    if (pct < 80) return { zone: 3, name: "Z3 • TEMPO", pct, color: "#f59e0b" };
    if (pct < 90) return { zone: 4, name: "Z4 • THRESHOLD", pct, color: "#f97316" };
    return { zone: 5, name: "Z5 • REDLINE", pct, color: "#e11d48" };
  }

  function drawHrSparkline() {
    if (!el.hrSparkline) return;
    const ctx = el.hrSparkline.getContext("2d");
    const w = el.hrSparkline.width;
    const h = el.hrSparkline.height;
    ctx.clearRect(0, 0, w, h);

    const pts = state.bpmHistory;
    if (pts.length < 2) return;

    const minBpm = 70;
    const maxBpm = Math.max(state.maxHr, 195);

    ctx.beginPath();
    pts.forEach((val, idx) => {
      const x = (idx / (pts.length - 1)) * (w - 8) + 4;
      const norm = Math.max(0, Math.min(1, (val - minBpm) / (maxBpm - minBpm)));
      const y = h - 4 - norm * (h - 8);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "#fb7185";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function ingestHeartRateSample(bpm, sourceLabel) {
    if (!bpm || bpm <= 0) return;
    state.currentBpm = bpm;
    if (bpm > state.peakBpm) state.peakBpm = bpm;

    if (state.phase === "rest" && state.roundEndBpm > 0) {
      const drop = Math.max(0, state.roundEndBpm - bpm);
      state.lastRecoveryDrop = drop;
      if (el.statHrr) el.statHrr.textContent = `-${drop} BPM`;
    }

    state.bpmHistory.push(bpm);
    if (state.bpmHistory.length > 45) state.bpmHistory.shift();

    const zInfo = computeHrZone(bpm, state.maxHr);
    if (el.bpmValue) el.bpmValue.textContent = String(bpm);
    if (el.hrPctMax) el.hrPctMax.textContent = `${zInfo.pct}%`;
    if (el.statPeakHr) el.statPeakHr.textContent = String(state.peakBpm);
    if (el.polarZonePill) {
      el.polarZonePill.textContent = zInfo.name;
      el.polarZonePill.style.borderColor = zInfo.color;
      el.polarZonePill.style.color = zInfo.color;
    }

    if (sourceLabel && el.polarStatusText) {
      el.polarStatusText.textContent = sourceLabel;
    }

    const beatSec = Math.max(0.3, Math.min(1.4, 60 / bpm));
    if (el.bpmHeartAnim) {
      el.bpmHeartAnim.style.setProperty("--beat-dur", `${beatSec.toFixed(2)}s`);
    }

    const markerPct = Math.max(2, Math.min(98, ((zInfo.pct - 50) / 50) * 100));
    if (el.hrZoneMarker) {
      el.hrZoneMarker.style.left = `${markerPct}%`;
    }

    state.currentKcalPerMin = calculateBurnRateKcalPerMin();
    if (el.statKcalRate) {
      el.statKcalRate.textContent = `${state.currentKcalPerMin.toFixed(1)} kcal/m`;
    }

    drawHrSparkline();
  }

  async function connectPolarGatt(device) {
    stopPolarSimulation();
    state.polarDevice = device;

    if (!device.__strikeDisconnectBound) {
      device.__strikeDisconnectBound = true;
      device.addEventListener("gattserverdisconnected", () => {
        state.polarConnected = false;
        if (el.polarConnectBtn) el.polarConnectBtn.classList.remove("connected");
        if (el.polarBtnLabel) el.polarBtnLabel.textContent = "RECONNECT POLAR";
        if (el.polarStatusText) {
          el.polarStatusText.textContent = `${device.name || "POLAR"} DISCONNECTED • TAP POLAR HR TO RECONNECT`;
        }
      });
    }

    if (el.polarStatusText) {
      el.polarStatusText.textContent = `CONNECTING TO ${device.name || "POLAR BLE"}...`;
    }

    // Connect with retry in case the strap is waking from sleep or releasing a prior handle
    let server = null;
    let lastErr = null;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        server = device.gatt.connected ? device.gatt : await device.gatt.connect();
        break;
      } catch (e) {
        lastErr = e;
        await new Promise((r) => setTimeout(r, 350));
      }
    }
    if (!server) throw lastErr || new Error("GATT connect failed");

    let service = null;
    try {
      service = await server.getPrimaryService("heart_rate");
    } catch (_) {
      service = await server.getPrimaryService(0x180d);
    }

    let char = null;
    try {
      char = await service.getCharacteristic("heart_rate_measurement");
    } catch (_) {
      char = await service.getCharacteristic(0x2a37);
    }

    await char.startNotifications();
    char.addEventListener("characteristicvaluechanged", (ev) => {
      const bpm = parseHeartRateMeasurement(ev.target.value);
      ingestHeartRateSample(bpm, `${device.name || "POLAR H10"} • LIVE BLE`);
    });

    state.polarConnected = true;
    if (el.polarConnectBtn) el.polarConnectBtn.classList.add("connected");
    if (el.polarBtnLabel) el.polarBtnLabel.textContent = `${device.name || "POLAR"} LIVE`;
    if (el.polarStatusText) el.polarStatusText.textContent = `${device.name || "POLAR BLE"} • CONNECTED`;
  }

  async function connectPolarBluetooth(forceAcceptAll = false) {
    const useAcceptAll = forceAcceptAll === true;

    if (!navigator.bluetooth) {
      if (el.polarStatusText) {
        el.polarStatusText.textContent = "WEB BLUETOOTH REQUIRES CHROME/EDGE (OR BLUEFY ON IPHONE)";
      }
      alert(
        "Web Bluetooth is not enabled in this browser.\n\n• On Windows / Android: Use Chrome, Edge, or StrikeOS-Desktop.exe\n• On iPhone / iPad: Apple disables Web Bluetooth in Safari — open this page in the free 'Bluefy' WebBLE browser app\n• Or tap 'Sim HR' to test live BPM & Calorie tracking right now."
      );
      return;
    }

    try {
      // If we already have a selected Polar device that dropped connection, try reconnecting first unless user clicked Scan All
      if (!useAcceptAll && state.polarDevice && !state.polarConnected) {
        try {
          await connectPolarGatt(state.polarDevice);
          return;
        } catch (_) {
          // Fall through to device chooser if direct reconnect failed
        }
      }

      // If currently connected, disconnect cleanly before opening a new scan
      if (state.polarDevice && state.polarDevice.gatt && state.polarDevice.gatt.connected) {
        try {
          state.polarDevice.gatt.disconnect();
        } catch (_) {}
      }

      if (el.polarStatusText) {
        el.polarStatusText.textContent = useAcceptAll
          ? "SCANNING ALL NEARBY BLUETOOTH DEVICES..."
          : "SCANNING FOR POLAR / HEART RATE BLE...";
      }

      const requestOptions = useAcceptAll
        ? {
            acceptAllDevices: true,
            optionalServices: ["heart_rate", 0x180d, "battery_service", 0x180f]
          }
        : {
            filters: [
              { services: ["heart_rate"] },
              { services: [0x180d] },
              { namePrefix: "Polar" },
              { namePrefix: "H10" },
              { namePrefix: "H9" },
              { namePrefix: "H7" },
              { namePrefix: "Verity" },
              { namePrefix: "OH1" }
            ],
            optionalServices: ["heart_rate", 0x180d, "battery_service", 0x180f]
          };

      const device = await navigator.bluetooth.requestDevice(requestOptions);
      await connectPolarGatt(device);
    } catch (err) {
      const msg = (err && err.message) ? err.message : String(err || "");
      if (msg.toLowerCase().includes("cancel") || (err && err.name === "NotFoundError")) {
        if (el.polarStatusText) {
          el.polarStatusText.textContent = "SCAN CANCELLED • TRY 'SCAN ALL BLE' IF STRAP IS HIDDEN";
        }
      } else {
        if (el.polarStatusText) {
          el.polarStatusText.textContent = `BLE ERROR: ${msg.slice(0, 48).toUpperCase()}`;
        }
      }
    }
  }

  // Ensure BLE GATT handle is cleanly released if page refreshes or closes so the Polar strap keeps advertising
  window.addEventListener("pagehide", () => {
    try {
      if (state.polarDevice && state.polarDevice.gatt && state.polarDevice.gatt.connected) {
        state.polarDevice.gatt.disconnect();
      }
    } catch (_) {}
  });

  function stopPolarSimulation() {
    state.polarSimulated = false;
    if (state.polarSimTimer) {
      clearInterval(state.polarSimTimer);
      state.polarSimTimer = null;
    }
    el.polarSimBtn.classList.remove("accent-chip");
    el.polarSimBtn.textContent = "Sim HR";
  }

  function togglePolarSimulation() {
    if (state.polarSimulated) {
      stopPolarSimulation();
      state.currentBpm = 0;
      el.polarStatusText.textContent = "POLAR BLE: STANDBY";
      return;
    }

    state.polarSimulated = true;
    el.polarSimBtn.classList.add("accent-chip");
    el.polarSimBtn.textContent = "Sim Active";
    let simBpm = 132;

    const stepSim = () => {
      let target = 134;
      if (state.phase === "work") target = 166;
      else if (state.phase === "warning") target = 182;
      else if (state.phase === "rest") target = 136;
      else if (state.phase === "prep") target = 124;

      const drift = (target - simBpm) * 0.18 + (Math.random() * 4 - 2);
      simBpm = Math.round(Math.max(85, Math.min(state.maxHr, simBpm + drift)));
      ingestHeartRateSample(simBpm, "POLAR H10 (SIM STREAM)");

      if (!state.isRunning) {
        state.totalCaloriesKcal += state.currentKcalPerMin / 60;
        if (el.statCalories) {
          el.statCalories.textContent = String(Math.round(state.totalCaloriesKcal));
        }
      }
    };

    stepSim();
    state.polarSimTimer = setInterval(stepSim, 1000);
  }

  // ---------------------------------------------------------------------------
  // 4. SYNTHESIZED WEB AUDIO + MOBILE / iOS SAFARI VOICE ENGINE
  // ---------------------------------------------------------------------------
  let audioCtx = null;

  function configureMobileAudioSession() {
    try {
      if ("audioSession" in navigator && navigator.audioSession) {
        navigator.audioSession.type = "playback";
      }
    } catch (_) {}
  }

  function ensureAudioCtx() {
    configureMobileAudioSession();
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function unlockMobileSpeechAndAudio() {
    ensureAudioCtx();
    if (!("speechSynthesis" in window)) return;
    populateVoices();
    if (!state.speechUnlocked) {
      state.speechUnlocked = true;
      try {
        window.speechSynthesis.resume();
        const warm = new SpeechSynthesisUtterance("");
        warm.volume = 0;
        window.speechSynthesis.speak(warm);
      } catch (_) {}
    }
  }

  function playBoxingBell(strikes = 1) {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    for (let s = 0; s < strikes; s++) {
      const startTime = ctx.currentTime + s * 0.28;
      const partials = [587.33, 1174.66, 1567.98, 2217.46, 2959.96];
      partials.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, startTime);

        const peak = 0.28 / (idx + 1);
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(peak, startTime + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.85 / (idx * 0.5 + 1));

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 1.9);
      });
    }
  }

  function playStrikePadCue(side) {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(side === "L" ? 520 : 390, t);
    osc.frequency.exponentialRampToValueAtTime(140, t + 0.045);
    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.055);
  }

  function playClapperWarning() {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    [0, 0.16, 0.32].forEach((offset) => {
      const t = ctx.currentTime + offset;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(920, t);
      osc.frequency.exponentialRampToValueAtTime(240, t + 0.065);

      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.075);
    });
  }

  function playCountdownPip() {
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, t);
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.1);
  }

  function populateVoices() {
    if (!("speechSynthesis" in window)) {
      el.voiceSelect.innerHTML = `<option value="">Speech Synthesis Unsupported</option>`;
      return;
    }
    const rawVoices = window.speechSynthesis.getVoices() || [];
    if (rawVoices.length === 0) return;
    state.voices = rawVoices;

    const currentSelection = state.selectedVoiceURI;
    el.voiceSelect.innerHTML = `<option value="">Default Device Voice (Recommended on Mobile)</option>`;

    const sorted = [...rawVoices].sort((a, b) => {
      const aEn = (a.lang || "").toLowerCase().startsWith("en") ? 0 : 1;
      const bEn = (b.lang || "").toLowerCase().startsWith("en") ? 0 : 1;
      if (aEn !== bEn) return aEn - bEn;
      return a.name.localeCompare(b.name);
    });

    sorted.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v.voiceURI;
      opt.textContent = `${v.name} (${v.lang})${v.default ? " • Default" : ""}`;
      el.voiceSelect.appendChild(opt);
    });

    if (currentSelection && sorted.some((v) => v.voiceURI === currentSelection)) {
      el.voiceSelect.value = currentSelection;
    }
  }

  if ("speechSynthesis" in window) {
    populateVoices();
    window.speechSynthesis.onvoiceschanged = populateVoices;
  }

  function speakText(text) {
    if (!("speechSynthesis" in window) || !text) return;
    configureMobileAudioSession();

    try {
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
      }
      window.speechSynthesis.resume();

      const speakNow = () => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = "en-US";
        const selectedURI = el.voiceSelect.value;
        if (selectedURI && state.voices.length > 0) {
          const chosen = state.voices.find((v) => v.voiceURI === selectedURI || v.name === selectedURI);
          if (chosen) {
            utter.voice = chosen;
            if (chosen.lang) utter.lang = chosen.lang;
          }
        }

        utter.rate = Math.max(0.7, Math.min(1.8, parseFloat(el.voiceRateInput.value) || 1.1));
        utter.pitch = Math.max(0.5, Math.min(1.5, parseFloat(el.voicePitchInput.value) || 0.95));
        utter.volume = 1.0;

        window.speechSynthesis.speak(utter);
      };

      setTimeout(speakNow, 35);
    } catch (_) {}
  }

  // ---------------------------------------------------------------------------
  // 5. DUTCH ALTERNATING COMBINATION ENGINE (WITH CONFIGURABLE COMBO LENGTH)
  // ---------------------------------------------------------------------------
  function resolveTargetLength() {
    const mode = state.comboLengthMode || "mix";
    if (mode === "mix") {
      const choices = [3, 4, 4, 5, 5, 6];
      return choices[Math.floor(Math.random() * choices.length)];
    }
    return parseInt(mode, 10) || 4;
  }

  function generateProceduralAlternatingCombo(forcedLength, styleKey) {
    const length = forcedLength || resolveTargetLength();
    const isBoxing = styleKey === "boxing";
    const pools = isBoxing ? BOXING_POOLS : PROCEDURAL_POOLS;

    let currentSide = Math.random() > 0.25 ? "L" : "R";
    const chain = [];

    for (let i = 0; i < length; i++) {
      const pool = pools[currentSide];
      let candidates = pool;
      if (!isBoxing && i === length - 1) {
        const finishers = pool.filter((s) => s.name.includes("Kick") || s.name.includes("Knee"));
        if (finishers.length > 0) candidates = finishers;
      } else if (!isBoxing) {
        const setups = pool.filter((s) => !s.name.includes("High Kick"));
        if (setups.length > 0) candidates = setups;
      }
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      chain.push(pick);
      currentSide = currentSide === "L" ? "R" : "L";
    }
    return chain;
  }

  function parseCustomComboToChain(text) {
    const parts = text
      .split(/[,–\-]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    let expectedSide = "L";
    return parts.map((part) => {
      const lower = part.toLowerCase();
      let side = expectedSide;
      if (lower.includes("jab") || lower.includes("lead") || lower.includes("switch") || lower === "1" || lower === "3" || lower === "5") {
        side = "L";
      } else if (lower.includes("cross") || lower.includes("rear") || lower.includes("overhand") || lower === "2" || lower === "4" || lower === "6") {
        side = "R";
      }
      expectedSide = side === "L" ? "R" : "L";

      let zone = side === "L" ? "head-L" : "head-R";
      let tag = side === "L" ? "HEAD L" : "HEAD R";
      if (lower.includes("low") || lower.includes("calf") || lower.includes("thigh")) {
        zone = side === "L" ? "low-L" : "low-R";
        tag = side === "L" ? "LOW L" : "LOW R";
      } else if (lower.includes("body") || lower.includes("liver") || lower.includes("knee") || lower.includes("teep") || lower.includes("sprawl")) {
        zone = side === "L" ? "body-L" : "body-R";
        tag = side === "L" ? "BODY L" : "BODY R";
      }
      return { name: part, num: part, side, zone, tag };
    });
  }

  function pickNextCombo() {
    const style = el.comboStyleSelect.value;
    if (style === "custom-only" && state.customCombos.length > 0) {
      const raw = state.customCombos[Math.floor(Math.random() * state.customCombos.length)];
      return parseCustomComboToChain(raw);
    }

    const targetLen = resolveTargetLength();
    if (style === "procedural") {
      return generateProceduralAlternatingCombo(targetLen, "dutch-mma");
    }

    const pool = COMBO_LIBRARY[style] || COMBO_LIBRARY["dutch-mma"];
    const matchingLen = state.comboLengthMode === "mix"
      ? pool
      : pool.filter((c) => c.length === targetLen);

    if (matchingLen.length > 0) {
      let candidate = matchingLen[Math.floor(Math.random() * matchingLen.length)];
      if (matchingLen.length > 1 && candidate === state.currentCombo) {
        candidate = matchingLen[(matchingLen.indexOf(candidate) + 1) % matchingLen.length];
      }
      // 35% of the time in fixed-length mode, also blend in a procedural alternating combo of that exact length for infinite variety!
      if (state.comboLengthMode !== "mix" && Math.random() < 0.35) {
        return generateProceduralAlternatingCombo(targetLen, style);
      }
      return candidate;
    }

    return generateProceduralAlternatingCombo(targetLen, style);
  }

  function formatComboText(chain) {
    const mode = el.calloutModeSelect.value;
    return chain.map((s) => (mode === "numbered" ? s.num : s.name)).join(" – ");
  }

  function formatSpokenComboText(chain) {
    const mode = el.calloutModeSelect.value;
    return chain.map((s) => (mode === "numbered" ? s.num : s.name)).join(", ");
  }

  function verifyAlternatingChain(chain) {
    for (let i = 1; i < chain.length; i++) {
      if (chain[i].side === chain[i - 1].side) return false;
    }
    return true;
  }

  function clearZoneHighlights() {
    state.zoneAnimTimers.forEach((id) => clearTimeout(id));
    state.zoneAnimTimers = [];
    document.querySelectorAll(".bag-zone").forEach((z) => {
      z.classList.remove("active-zone-L", "active-zone-R");
    });
    document.querySelectorAll(".strike-card").forEach((c) => {
      c.classList.remove("strike-active");
    });
    if (el.bagSwingWrapper) {
      el.bagSwingWrapper.classList.remove("swing-L", "swing-R");
    }
  }

  function renderAndAnimateCombo(chain, shouldSpeak = true) {
    state.currentCombo = chain;
    clearZoneHighlights();

    const headline = formatComboText(chain);
    el.comboDisplay.textContent = headline;

    const isStrictAlternating = verifyAlternatingChain(chain);
    const sidePattern = chain.map((s) => s.side).join("→");
    el.altProofBadge.textContent = isStrictAlternating
      ? `✔ ${chain.length}-COUNT L↔R (${sidePattern})`
      : `${chain.length}-COUNT (${sidePattern})`;

    // For 6 strikes use 3 columns (3x2), for 8 strikes use 4 columns (4x2)
    let gridCols = chain.length;
    if (chain.length === 6) gridCols = 3;
    else if (chain.length >= 7) gridCols = 4;
    el.comboBreakdown.style.setProperty("--strike-count", String(gridCols));
    el.comboBreakdown.innerHTML = "";
    const mode = el.calloutModeSelect.value;

    chain.forEach((strike, idx) => {
      const card = document.createElement("div");
      card.className = `strike-card side-${strike.side}`;
      card.id = `strike-card-${idx}`;
      const limbLabel = strike.side === "L" ? "LEAD • L" : "REAR • R";
      const displayName = mode === "numbered" ? `${strike.num}` : strike.name;

      card.innerHTML = `
        <div class="strike-card-top">
          <span class="strike-seq">0${idx + 1}</span>
          <span class="limb-pill limb-${strike.side}">${limbLabel}</span>
        </div>
        <div class="strike-title" title="${displayName}">${displayName}</div>
        <div class="strike-zone-tag">${strike.tag}</div>
      `;
      el.comboBreakdown.appendChild(card);
    });

    chain.forEach((strike, idx) => {
      const timerId = setTimeout(() => {
        document.querySelectorAll(".bag-zone").forEach((z) => {
          z.classList.remove("active-zone-L", "active-zone-R");
        });
        document.querySelectorAll(".strike-card").forEach((c) => {
          c.classList.remove("strike-active");
        });

        const zoneEl = document.getElementById(`zone-${strike.zone}`);
        if (zoneEl) {
          zoneEl.classList.add(strike.side === "L" ? "active-zone-L" : "active-zone-R");
        }
        const cardEl = document.getElementById(`strike-card-${idx}`);
        if (cardEl) {
          cardEl.classList.add("strike-active");
        }
        if (el.bagSwingWrapper) {
          el.bagSwingWrapper.classList.remove("swing-L", "swing-R");
          void el.bagSwingWrapper.offsetWidth;
          el.bagSwingWrapper.classList.add(strike.side === "L" ? "swing-L" : "swing-R");
        }
        if (shouldSpeak && el.comboEnabledToggle.checked) {
          playStrikePadCue(strike.side);
        }
        el.bagActiveCallout.textContent = `${idx + 1}/${chain.length}: ${strike.name} (${strike.side})`;
      }, idx * 380);
      state.zoneAnimTimers.push(timerId);
    });

    const resetSwingId = setTimeout(() => {
      if (el.bagSwingWrapper) {
        el.bagSwingWrapper.classList.remove("swing-L", "swing-R");
      }
    }, chain.length * 380 + 350);
    state.zoneAnimTimers.push(resetSwingId);

    if (shouldSpeak && el.comboEnabledToggle.checked) {
      speakText(formatSpokenComboText(chain));
    }
  }

  function scheduleNextComboWindow() {
    const pace = el.comboPaceSelect.value;
    let minMs = 6000;
    let maxMs = 8500;
    if (pace === "slow") {
      minMs = 9000;
      maxMs = 12000;
    } else if (pace === "fast") {
      minMs = 3600;
      maxMs = 5200;
    }
    const delta = minMs + Math.random() * (maxMs - minMs);
    state.nextComboAtMs = performance.now() + delta;
  }

  // ---------------------------------------------------------------------------
  // 6. HIGH-PRECISION CHRONO & CALORIE STATE MACHINE
  // ---------------------------------------------------------------------------
  const CIRCUMFERENCE = 2 * Math.PI * 132; // r=132 -> 829.38

  function formatMMSS(totalSeconds) {
    const sec = Math.max(0, Math.ceil(totalSeconds));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function renderRoundPips() {
    el.roundPips.innerHTML = "";
    const count = Math.min(state.totalRounds, 10);
    for (let i = 1; i <= count; i++) {
      const pip = document.createElement("span");
      pip.className = "round-pip";
      if (i < state.currentRound) pip.classList.add("completed");
      else if (i === state.currentRound && state.phase !== "idle") pip.classList.add("current");
      el.roundPips.appendChild(pip);
    }
  }

  function updateDisplay() {
    const secLeft = state.remainingMs / 1000;
    if (el.timeDisplay) el.timeDisplay.textContent = formatMMSS(secLeft);
    if (el.roundCounter) {
      el.roundCounter.innerHTML = `${String(state.currentRound).padStart(2, "0")} <small>/ ${String(state.totalRounds).padStart(2, "0")}</small>`;
    }
    if (el.statCombos) el.statCombos.textContent = String(state.combosCalled);
    if (el.statCalories) el.statCalories.textContent = String(Math.round(state.totalCaloriesKcal));
    if (el.statPeakHr && state.peakBpm > 0) el.statPeakHr.textContent = String(state.peakBpm);
    if (el.statWorkTime) el.statWorkTime.textContent = formatMMSS(state.totalWorkElapsedMs / 1000);

    if (el.statKcalRate) {
      el.statKcalRate.textContent = `${state.currentKcalPerMin.toFixed(1)} kcal/m`;
    }

    const fraction = state.phaseDurationMs > 0
      ? Math.max(0, Math.min(1, state.remainingMs / state.phaseDurationMs))
      : 1;
    const offset = CIRCUMFERENCE * (1 - fraction);
    if (el.dialProgress) el.dialProgress.style.strokeDashoffset = String(offset);
  }

  function enterPhase(newPhase) {
    state.phase = newPhase;
    el.body.setAttribute("data-phase", newPhase === "warning" ? "warning" : newPhase);

    if (newPhase === "prep") {
      state.phaseDurationMs = state.prepSec * 1000;
      state.remainingMs = state.phaseDurationMs;
      el.phaseLabel.textContent = "GET READY • GLOVES UP";
      speakText("Get ready");
    } else if (newPhase === "work") {
      state.phaseDurationMs = state.workSec * 1000;
      state.remainingMs = state.phaseDurationMs;
      el.phaseLabel.textContent = `ROUND ${state.currentRound} • FIGHT PACE`;
      playBoxingBell(1);
      scheduleNextComboWindow();
      setTimeout(() => {
        if (state.isRunning && (state.phase === "work" || state.phase === "warning")) {
          const next = pickNextCombo();
          state.combosCalled++;
          renderAndAnimateCombo(next, true);
        }
      }, 1300);
    } else if (newPhase === "rest") {
      state.roundEndBpm = state.currentBpm;
      state.phaseDurationMs = state.restSec * 1000;
      state.remainingMs = state.phaseDurationMs;
      el.phaseLabel.textContent = `REST & RECOVER • NEXT RD ${state.currentRound + 1}`;
      playBoxingBell(2);
      setTimeout(() => speakText("Time. Rest and breathe."), 700);
    } else if (newPhase === "done") {
      state.isRunning = false;
      state.remainingMs = 0;
      el.phaseLabel.textContent = "WORKOUT COMPLETE • GREAT ROUNDS";
      el.startPauseBtn.classList.remove("running");
      el.startPauseIcon.innerHTML = "&#x25B6;";
      el.startPauseLabel.textContent = "START WORKOUT";
      el.skipPhaseBtn.disabled = true;
      playBoxingBell(3);
      setTimeout(() => speakText("Workout complete. Great work on the bag."), 900);
    }

    renderRoundPips();
    updateDisplay();
  }

  function advanceToNextPhase() {
    if (state.phase === "prep") {
      enterPhase("work");
    } else if (state.phase === "work" || state.phase === "warning") {
      if (state.currentRound < state.totalRounds) {
        enterPhase("rest");
      } else {
        enterPhase("done");
      }
    } else if (state.phase === "rest") {
      state.currentRound++;
      enterPhase("work");
    }
  }

  let lastWholeSec = -1;
  function tick(now) {
    if (!state.isRunning) return;
    const dt = now - state.lastTickTs;
    state.lastTickTs = now;

    state.remainingMs -= dt;
    if (state.phase === "work" || state.phase === "warning") {
      state.totalWorkElapsedMs += dt;
    }

    state.currentKcalPerMin = calculateBurnRateKcalPerMin();
    state.totalCaloriesKcal += state.currentKcalPerMin * (dt / 60000);

    const secCeil = Math.ceil(state.remainingMs / 1000);

    if (
      state.phase === "work" &&
      state.warnSec > 0 &&
      state.remainingMs <= state.warnSec * 1000 &&
      state.remainingMs > 0
    ) {
      state.phase = "warning";
      el.body.setAttribute("data-phase", "warning");
      el.phaseLabel.textContent = `FINAL ${state.warnSec}s • BURNOUT FLURRY!`;
      playClapperWarning();
    }

    if (secCeil !== lastWholeSec) {
      lastWholeSec = secCeil;
      if (secCeil >= 1 && secCeil <= 3 && state.remainingMs > 100) {
        playCountdownPip();
      }
    }

    if (
      (state.phase === "work" || state.phase === "warning") &&
      el.comboEnabledToggle.checked &&
      now >= state.nextComboAtMs &&
      state.remainingMs > 2800
    ) {
      const combo = pickNextCombo();
      state.combosCalled++;
      renderAndAnimateCombo(combo, true);
      scheduleNextComboWindow();
    }

    if (state.remainingMs <= 0) {
      advanceToNextPhase();
      if (state.isRunning) {
        state.lastTickTs = performance.now();
        state.rafId = requestAnimationFrame(tick);
      }
      return;
    }

    updateDisplay();
    state.rafId = requestAnimationFrame(tick);
  }

  async function requestScreenWakeLock() {
    if ("wakeLock" in navigator) {
      try {
        state.wakeLock = await navigator.wakeLock.request("screen");
      } catch (_) {}
    }
  }

  function toggleStartPause() {
    unlockMobileSpeechAndAudio();
    requestScreenWakeLock();
    if (!state.isRunning) {
      if (state.phase === "idle" || state.phase === "done") {
        syncSettingsFromInputs();
        state.currentRound = 1;
        state.combosCalled = 0;
        state.totalWorkElapsedMs = 0;
        state.totalCaloriesKcal = 0;
        if (state.prepSec > 0) {
          enterPhase("prep");
        } else {
          enterPhase("work");
        }
      }
      state.isRunning = true;
      state.lastTickTs = performance.now();
      scheduleNextComboWindow();
      el.startPauseBtn.classList.add("running");
      el.startPauseIcon.innerHTML = "&#x23F8;";
      el.startPauseLabel.textContent = "PAUSE ROUND";
      el.skipPhaseBtn.disabled = false;
      state.rafId = requestAnimationFrame(tick);
    } else {
      state.isRunning = false;
      if (state.rafId) cancelAnimationFrame(state.rafId);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      el.startPauseBtn.classList.remove("running");
      el.startPauseIcon.innerHTML = "&#x25B6;";
      el.startPauseLabel.textContent = "RESUME ROUND";
      el.phaseLabel.textContent += " (PAUSED)";
    }
  }

  function resetWorkout() {
    state.isRunning = false;
    if (state.rafId) cancelAnimationFrame(state.rafId);
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    syncSettingsFromInputs();
    state.phase = "idle";
    state.currentRound = 1;
    state.totalCaloriesKcal = 0;
    state.currentKcalPerMin = state.currentBpm >= 75 ? calculateBurnRateKcalPerMin() : 0;
    state.remainingMs = state.workSec * 1000;
    state.phaseDurationMs = state.workSec * 1000;
    el.body.setAttribute("data-phase", "idle");
    el.phaseLabel.textContent = "STANDBY • GLOVES ON";
    el.startPauseBtn.classList.remove("running");
    el.startPauseIcon.innerHTML = "&#x25B6;";
    el.startPauseLabel.textContent = "START WORKOUT";
    el.skipPhaseBtn.disabled = true;
    renderRoundPips();
    updateDisplay();
  }

  // ---------------------------------------------------------------------------
  // 7. UI CONTROLS, MOBILE TABS, COMBO LENGTH & CUSTOM COMBO MANAGEMENT
  // ---------------------------------------------------------------------------
  function syncSettingsFromInputs() {
    state.totalRounds = Math.max(1, parseInt(el.roundsInput.value, 10) || 5);
    state.workSec = Math.max(10, parseInt(el.workSecInput.value, 10) || 180);
    state.restSec = Math.max(5, parseInt(el.restSecInput.value, 10) || 60);
    state.prepSec = Math.max(0, parseInt(el.prepSecInput.value, 10) || 0);
    state.warnSec = Math.max(0, parseInt(el.warnSecInput.value, 10) || 0);
    state.maxHr = Math.max(120, parseInt(el.maxHrInput.value, 10) || 190);
    state.weightLbs = Math.max(80, parseInt(el.weightLbsInput?.value, 10) || 180);

    el.roundsFormatted.textContent = `${state.totalRounds} RDS`;
    el.workFormatted.textContent = formatMMSS(state.workSec);
    el.restFormatted.textContent = formatMMSS(state.restSec);
    el.prepFormatted.textContent = formatMMSS(state.prepSec);
    el.warnFormatted.textContent = formatMMSS(state.warnSec);
    el.maxHrFormatted.textContent = `${state.maxHr} BPM`;
    if (el.weightFormatted) el.weightFormatted.textContent = `${state.weightLbs} LB`;

    if (state.phase === "idle") {
      state.remainingMs = state.workSec * 1000;
      state.phaseDurationMs = state.workSec * 1000;
      renderRoundPips();
      updateDisplay();
    }
  }

  function setComboLengthMode(lenKey) {
    state.comboLengthMode = lenKey;
    if (el.comboLengthSelect) {
      el.comboLengthSelect.value = lenKey;
    }
    document.querySelectorAll(".len-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.len === lenKey);
    });
    const next = pickNextCombo();
    renderAndAnimateCombo(next, false);
  }

  function setDisciplineMode(modeKey) {
    el.comboStyleSelect.value = modeKey;
    el.body.setAttribute("data-discipline", modeKey);

    document.querySelectorAll(".mode-pill").forEach((btn) => {
      const active = btn.dataset.mode === modeKey;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    const labels = {
      "dutch-mma": "DUTCH MMA • L↔R",
      "dutch-kickboxing": "DUTCH KICK • L↔R",
      "boxing": "PURE BOXING • L↔R",
      "procedural": "PROCEDURAL L↔R",
      "custom-only": "CUSTOM ARSENAL"
    };
    el.disciplineBadge.textContent = labels[modeKey] || "DUTCH MMA • L↔R";

    const preview = pickNextCombo();
    renderAndAnimateCombo(preview, false);
  }

  function renderCustomCombos() {
    el.customComboList.innerHTML = "";
    state.customCombos.forEach((comboStr, idx) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${comboStr}</span>
        <button type="button" class="action-chip" data-del="${idx}">✕</button>
      `;
      el.customComboList.appendChild(li);
    });
  }

  // Mobile Bottom Navigation Tab Switching
  document.querySelectorAll(".mob-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.mobTab;
      document.querySelectorAll(".mob-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      el.body.setAttribute("data-mobile-tab", tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Quick Combo Length Pills & Dropdown
  document.querySelectorAll(".len-pill").forEach((pill) => {
    pill.addEventListener("click", () => setComboLengthMode(pill.dataset.len));
  });

  if (el.comboLengthSelect) {
    el.comboLengthSelect.addEventListener("change", () => {
      setComboLengthMode(el.comboLengthSelect.value);
    });
  }

  // Event Listeners
  el.startPauseBtn.addEventListener("click", toggleStartPause);
  el.resetBtn.addEventListener("click", resetWorkout);
  el.skipPhaseBtn.addEventListener("click", () => {
    if (state.isRunning) advanceToNextPhase();
  });

  if (el.polarConnectBtn) {
    el.polarConnectBtn.addEventListener("click", () => connectPolarBluetooth(false));
  }
  if (el.polarScanAllBtn) {
    el.polarScanAllBtn.addEventListener("click", () => connectPolarBluetooth(true));
  }
  if (el.polarSimBtn) {
    el.polarSimBtn.addEventListener("click", togglePolarSimulation);
  }

  el.triggerComboBtn.addEventListener("click", () => {
    unlockMobileSpeechAndAudio();
    const combo = pickNextCombo();
    state.combosCalled++;
    renderAndAnimateCombo(combo, true);
    updateDisplay();
  });

  el.prevComboBtn.addEventListener("click", () => {
    unlockMobileSpeechAndAudio();
    renderAndAnimateCombo(state.currentCombo, true);
  });

  el.soundBellTestBtn.addEventListener("click", () => {
    unlockMobileSpeechAndAudio();
    playBoxingBell(1);
  });

  el.testVoiceBtn.addEventListener("click", () => {
    unlockMobileSpeechAndAudio();
    speakText(formatSpokenComboText(state.currentCombo));
  });

  if (el.fullscreenBtn) {
    el.fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    });
  }

  document.querySelectorAll(".mode-pill").forEach((btn) => {
    btn.addEventListener("click", () => setDisciplineMode(btn.dataset.mode));
  });

  el.comboStyleSelect.addEventListener("change", () => {
    setDisciplineMode(el.comboStyleSelect.value);
  });

  el.calloutModeSelect.addEventListener("change", () => {
    renderAndAnimateCombo(state.currentCombo, false);
  });

  document.querySelectorAll(".preset-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const p = PRESETS[chip.dataset.preset];
      if (!p) return;
      document.querySelectorAll(".preset-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");

      el.roundsInput.value = p.rounds;
      el.workSecInput.value = p.work;
      el.restSecInput.value = p.rest;
      el.prepSecInput.value = p.prep;
      el.warnSecInput.value = p.warn;
      setDisciplineMode(p.mode);
      resetWorkout();
    });
  });

  document.querySelectorAll(".step-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      const step = parseInt(btn.dataset.step, 10) || 0;
      const min = parseInt(input.min, 10) || 0;
      const max = parseInt(input.max, 10) || 9999;
      const nextVal = Math.max(min, Math.min(max, (parseInt(input.value, 10) || 0) + step));
      input.value = nextVal;
      syncSettingsFromInputs();
    });
  });

  [
    el.roundsInput,
    el.workSecInput,
    el.restSecInput,
    el.prepSecInput,
    el.warnSecInput,
    el.maxHrInput,
    el.weightLbsInput
  ].forEach((inp) => {
    if (inp) inp.addEventListener("change", syncSettingsFromInputs);
  });

  document.querySelectorAll(".persona-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      unlockMobileSpeechAndAudio();
      const p = VOICE_PERSONAS[pill.dataset.persona];
      if (!p) return;
      document.querySelectorAll(".persona-pill").forEach((b) => b.classList.remove("active"));
      pill.classList.add("active");
      el.voiceRateInput.value = p.rate;
      el.voicePitchInput.value = p.pitch;
      el.voiceRateVal.textContent = `${p.rate.toFixed(2)}x`;
      el.voicePitchVal.textContent = p.pitch.toFixed(2);
      speakText(formatSpokenComboText(state.currentCombo));
    });
  });

  el.voiceRateInput.addEventListener("input", () => {
    el.voiceRateVal.textContent = `${parseFloat(el.voiceRateInput.value).toFixed(2)}x`;
  });

  el.voicePitchInput.addEventListener("input", () => {
    el.voicePitchVal.textContent = parseFloat(el.voicePitchInput.value).toFixed(2);
  });

  el.voiceSelect.addEventListener("change", () => {
    unlockMobileSpeechAndAudio();
    state.selectedVoiceURI = el.voiceSelect.value;
    speakText(formatSpokenComboText(state.currentCombo));
  });

  el.addComboBtn.addEventListener("click", () => {
    unlockMobileSpeechAndAudio();
    const val = el.customComboInput.value.trim();
    if (!val) return;
    state.customCombos.unshift(val);
    el.customComboInput.value = "";
    renderCustomCombos();
    const chain = parseCustomComboToChain(val);
    renderAndAnimateCombo(chain, true);
  });

  el.customComboList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-del]");
    if (!btn) return;
    const idx = parseInt(btn.dataset.del, 10);
    state.customCombos.splice(idx, 1);
    renderCustomCombos();
  });

  // Initialize
  renderCustomCombos();
  syncSettingsFromInputs();
  renderAndAnimateCombo(state.currentCombo, false);
})();
