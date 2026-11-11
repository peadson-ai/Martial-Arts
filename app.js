// STRIKE//OS — Dutch MMA, Kickboxing & Boxing Heavy Bag Timer + Voice Caller + Polar BLE HR
(() => {
  "use strict";

  // ---------------------------------------------------------------------------
  // 1. STRICT ALTERNATING (L <-> R) DUTCH MMA, KICKBOXING & BOXING ARSENAL
  // Every strike in these combinations strictly alternates Lead (L) and Rear (R)
  // to enforce Dutch hip-loading mechanics.
  // ---------------------------------------------------------------------------
  const COMBO_LIBRARY = {
    "dutch-mma": [
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
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Sprawl Lead Frame", num: "Sprawl", side: "L", zone: "body-L", tag: "HIP L" },
        { name: "Rear Knee", num: "Rear Knee", side: "R", zone: "body-R", tag: "BODY R" },
        { name: "Lead Elbow", num: "Lead Elbow", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Lead Teep", num: "Lead Teep", side: "L", zone: "body-L", tag: "CORE L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "3 Body", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear High Kick", num: "Rear High Kick", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
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
      ]
    ],

    "dutch-kickboxing": [
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ],
      [
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Shot", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
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
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross Body", num: "2 Body", side: "R", zone: "body-R", tag: "SOLAR R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Knee", num: "Rear Knee", side: "R", zone: "body-R", tag: "BODY R" },
        { name: "Lead Switch Kick", num: "Switch Kick", side: "L", zone: "head-L", tag: "HEAD L" }
      ],
      [
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Hook", side: "L", zone: "body-L", tag: "LIVER L" },
        { name: "Rear Low Kick", num: "Rear Low Kick", side: "R", zone: "low-R", tag: "THIGH R" }
      ]
    ],

    "boxing": [
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Uppercut", num: "5", side: "L", zone: "head-L", tag: "CHIN L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" }
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
      [
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Roll", num: "Roll Under", side: "L", zone: "body-L", tag: "DEFENSE L" },
        { name: "Rear Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Body Hook", num: "Liver Shot", side: "L", zone: "body-L", tag: "LIVER L" }
      ],
      [
        { name: "Jab", num: "1", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" },
        { name: "Lead Slip", num: "Slip Outside", side: "L", zone: "head-L", tag: "EVADE L" },
        { name: "Rear Uppercut", num: "6", side: "R", zone: "head-R", tag: "CHIN R" },
        { name: "Lead Hook", num: "3", side: "L", zone: "head-L", tag: "HEAD L" },
        { name: "Cross", num: "2", side: "R", zone: "head-R", tag: "HEAD R" }
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
    remainingMs: 180000,
    phaseDurationMs: 180000,
    lastTickTs: 0,
    rafId: null,
    combosCalled: 0,
    totalWorkElapsedMs: 0,
    nextComboAtMs: 0,
    currentCombo: COMBO_LIBRARY["dutch-mma"][0],
    customCombos: [
      "Jab, Cross, Lead Hook, Rear Low Kick",
      "Cross, Lead Body Hook, Cross, Lead Switch Kick"
    ],
    voices: [],
    selectedVoiceURI: "",
    zoneAnimTimers: [],
    wakeLock: null,

    // Polar BLE Heart Rate State
    polarDevice: null,
    polarConnected: false,
    polarSimulated: false,
    polarSimTimer: null,
    currentBpm: 0,
    peakBpm: 0,
    roundEndBpm: 0,
    lastRecoveryDrop: null,
    bpmHistory: []
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
    statWorkTime: document.getElementById("stat-work-time"),
    statPeakHr: document.getElementById("stat-peak-hr"),
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

    // Polar BLE DOM elements
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
    statHrr: document.getElementById("stat-hrr"),
    polarSimBtn: document.getElementById("polar-sim-btn"),

    roundsInput: document.getElementById("rounds-input"),
    workSecInput: document.getElementById("work-sec-input"),
    restSecInput: document.getElementById("rest-sec-input"),
    prepSecInput: document.getElementById("prep-sec-input"),
    warnSecInput: document.getElementById("warn-sec-input"),
    maxHrInput: document.getElementById("max-hr-input"),

    roundsFormatted: document.getElementById("rounds-formatted"),
    workFormatted: document.getElementById("work-formatted"),
    restFormatted: document.getElementById("rest-formatted"),
    prepFormatted: document.getElementById("prep-formatted"),
    warnFormatted: document.getElementById("warn-formatted"),
    maxHrFormatted: document.getElementById("max-hr-formatted"),

    comboEnabledToggle: document.getElementById("combo-enabled-toggle"),
    comboStyleSelect: document.getElementById("combo-style-select"),
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
  // 3. POLAR BLE HEART RATE MONITOR ENGINE (Web Bluetooth GATT 0x180D / 0x2A37)
  // ---------------------------------------------------------------------------
  function parseHeartRateMeasurement(dataView) {
    const flags = dataView.getUint8(0);
    const rate16Bits = (flags & 0x01) !== 0;
    let offset = 1;
    let bpm = 0;
    if (rate16Bits) {
      bpm = dataView.getUint16(offset, true);
      offset += 2;
    } else {
      bpm = dataView.getUint8(offset);
      offset += 1;
    }
    return bpm;
  }

  function computeHrZone(bpm, maxHr) {
    const pct = Math.round((bpm / maxHr) * 100);
    if (pct < 60) return { zone: 1, name: "ZONE 1 • RECOVERY", pct, color: "#38bdf8" };
    if (pct < 70) return { zone: 2, name: "ZONE 2 • AEROBIC", pct, color: "#10b981" };
    if (pct < 80) return { zone: 3, name: "ZONE 3 • FIGHT TEMPO", pct, color: "#f59e0b" };
    if (pct < 90) return { zone: 4, name: "ZONE 4 • THRESHOLD", pct, color: "#f97316" };
    return { zone: 5, name: "ZONE 5 • REDLINE MAX", pct, color: "#e11d48" };
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
      const y = h - 5 - norm * (h - 10);
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
    if (bpm > state.peakBpm) {
      state.peakBpm = bpm;
    }

    // Track between-round recovery drop during Rest
    if (state.phase === "rest" && state.roundEndBpm > 0) {
      const drop = Math.max(0, state.roundEndBpm - bpm);
      state.lastRecoveryDrop = drop;
      el.statHrr.textContent = `-${drop} BPM`;
    }

    state.bpmHistory.push(bpm);
    if (state.bpmHistory.length > 45) state.bpmHistory.shift();

    const zInfo = computeHrZone(bpm, state.maxHr);
    el.bpmValue.textContent = String(bpm);
    el.hrPctMax.textContent = `${zInfo.pct}% MAX`;
    el.statPeakHr.textContent = `${state.peakBpm}`;
    el.polarZonePill.textContent = zInfo.name;
    el.polarZonePill.style.borderColor = zInfo.color;
    el.polarZonePill.style.color = zInfo.color;

    if (sourceLabel) {
      el.polarStatusText.textContent = sourceLabel;
    }

    // Sync heart pulse animation duration to live BPM
    const beatSec = Math.max(0.3, Math.min(1.4, 60 / bpm));
    el.bpmHeartAnim.style.setProperty("--beat-dur", `${beatSec.toFixed(2)}s`);

    // Position marker across 50%..100% Max HR span
    const markerPct = Math.max(2, Math.min(98, ((zInfo.pct - 50) / 50) * 100));
    el.hrZoneMarker.style.left = `${markerPct}%`;

    drawHrSparkline();
  }

  async function connectPolarBluetooth() {
    if (!navigator.bluetooth) {
      alert(
        "Web Bluetooth is not enabled in this browser. Use Chrome or Edge on Desktop/Android (via localhost or HTTPS), or click 'Sim HR' to test live heart rate telemetry."
      );
      return;
    }

    try {
      el.polarStatusText.textContent = "SCANNING FOR POLAR BLE...";
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ["heart_rate"] }, { namePrefix: "Polar" }],
        optionalServices: ["heart_rate", "battery_service"]
      });

      stopPolarSimulation();
      state.polarDevice = device;
      device.addEventListener("gattserverdisconnected", () => {
        state.polarConnected = false;
        el.polarConnectBtn.classList.remove("connected");
        el.polarBtnLabel.textContent = "RECONNECT POLAR HR";
        el.polarStatusText.textContent = `${device.name || "POLAR"} DISCONNECTED`;
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService("heart_rate");
      const char = await service.getCharacteristic("heart_rate_measurement");
      await char.startNotifications();

      char.addEventListener("characteristicvaluechanged", (ev) => {
        const bpm = parseHeartRateMeasurement(ev.target.value);
        ingestHeartRateSample(bpm, `${device.name || "POLAR H10"} • LIVE BLE`);
      });

      state.polarConnected = true;
      el.polarConnectBtn.classList.add("connected");
      el.polarBtnLabel.textContent = `${device.name || "POLAR"} LIVE`;
      el.polarStatusText.textContent = `${device.name || "POLAR BLE"} • CONNECTED`;
    } catch (err) {
      el.polarStatusText.textContent = "POLAR BLE: STANDBY (CLICK SIM HR TO PREVIEW)";
    }
  }

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
      el.polarStatusText.textContent = "POLAR BLE SENSOR: STANDBY";
      return;
    }

    state.polarSimulated = true;
    el.polarSimBtn.classList.add("accent-chip");
    el.polarSimBtn.textContent = "Sim Active";
    let simBpm = 128;

    const stepSim = () => {
      let target = 132;
      if (state.phase === "work") target = 166;
      else if (state.phase === "warning") target = 182;
      else if (state.phase === "rest") target = 136;
      else if (state.phase === "prep") target = 124;

      const drift = (target - simBpm) * 0.18 + (Math.random() * 4 - 2);
      simBpm = Math.round(Math.max(85, Math.min(state.maxHr, simBpm + drift)));
      ingestHeartRateSample(simBpm, "POLAR H10 (SIMULATED STREAM)");
    };

    stepSim();
    state.polarSimTimer = setInterval(stepSim, 1000);
  }

  // ---------------------------------------------------------------------------
  // 4. SYNTHESIZED WEB AUDIO ENGINE (Ring Bell, Wooden Clapper, Countdown Pip)
  // ---------------------------------------------------------------------------
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
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

        const peak = 0.26 / (idx + 1);
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
    gain.gain.setValueAtTime(0.14, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.1);
  }

  // ---------------------------------------------------------------------------
  // 5. VOICE SYNTHESIS & ANNOUNCER ENGINE
  // ---------------------------------------------------------------------------
  function populateVoices() {
    if (!("speechSynthesis" in window)) {
      el.voiceSelect.innerHTML = `<option value="">Speech Synthesis Unsupported</option>`;
      return;
    }
    const rawVoices = window.speechSynthesis.getVoices() || [];
    state.voices = rawVoices;

    if (rawVoices.length === 0) return;

    const currentSelection = state.selectedVoiceURI;
    el.voiceSelect.innerHTML = "";

    const sorted = [...rawVoices].sort((a, b) => {
      const aEn = a.lang.toLowerCase().startsWith("en") ? 0 : 1;
      const bEn = b.lang.toLowerCase().startsWith("en") ? 0 : 1;
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
    } else {
      const preferred = sorted.find(
        (v) =>
          v.lang.toLowerCase().startsWith("en") &&
          (v.name.includes("Natural") || v.name.includes("David") || v.name.includes("Guy") || v.name.includes("Mark"))
      ) || sorted[0];
      if (preferred) {
        state.selectedVoiceURI = preferred.voiceURI;
        el.voiceSelect.value = preferred.voiceURI;
      }
    }
  }

  if ("speechSynthesis" in window) {
    populateVoices();
    window.speechSynthesis.onvoiceschanged = populateVoices;
  }

  function speakText(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    const chosen = state.voices.find((v) => v.voiceURI === el.voiceSelect.value);
    if (chosen) utter.voice = chosen;

    utter.rate = parseFloat(el.voiceRateInput.value) || 1.1;
    utter.pitch = parseFloat(el.voicePitchInput.value) || 0.95;
    utter.volume = 1.0;

    window.speechSynthesis.speak(utter);
  }

  // ---------------------------------------------------------------------------
  // 6. DUTCH ALTERNATING COMBINATION ENGINE & KINETIC BAG VISUALIZER
  // ---------------------------------------------------------------------------
  function generateProceduralAlternatingCombo() {
    const length = Math.random() > 0.35 ? 4 : 5;
    let currentSide = Math.random() > 0.25 ? "L" : "R";
    const chain = [];

    for (let i = 0; i < length; i++) {
      const pool = PROCEDURAL_POOLS[currentSide];
      let candidates = pool;
      if (i === length - 1) {
        const finishers = pool.filter((s) => s.name.includes("Kick") || s.name.includes("Knee"));
        if (finishers.length > 0) candidates = finishers;
      } else {
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
    if (style === "procedural") {
      return generateProceduralAlternatingCombo();
    }
    if (style === "custom-only" && state.customCombos.length > 0) {
      const raw = state.customCombos[Math.floor(Math.random() * state.customCombos.length)];
      return parseCustomComboToChain(raw);
    }

    const pool = COMBO_LIBRARY[style] || COMBO_LIBRARY["dutch-mma"];
    let candidate = pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 1 && candidate === state.currentCombo) {
      candidate = pool[(pool.indexOf(candidate) + 1) % pool.length];
    }
    return candidate;
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
    const sidePattern = chain.map((s) => s.side).join(" → ");
    el.altProofBadge.textContent = isStrictAlternating
      ? `✔ STRICT ALTERNATING (${sidePattern})`
      : `FLOW PATTERN (${sidePattern})`;

    el.comboBreakdown.style.setProperty("--strike-count", String(chain.length));
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
        el.bagActiveCallout.textContent = `${idx + 1}/${chain.length}: ${strike.name} (${strike.side})`;
      }, idx * 410);
      state.zoneAnimTimers.push(timerId);
    });

    const resetSwingId = setTimeout(() => {
      if (el.bagSwingWrapper) {
        el.bagSwingWrapper.classList.remove("swing-L", "swing-R");
      }
    }, chain.length * 410 + 350);
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
  // 7. HIGH-PRECISION CHRONO STATE MACHINE
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
    const count = Math.min(state.totalRounds, 12);
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
    el.timeDisplay.textContent = formatMMSS(secLeft);
    el.roundCounter.innerHTML = `${String(state.currentRound).padStart(2, "0")} <small>/ ${String(state.totalRounds).padStart(2, "0")}</small>`;
    el.statCombos.textContent = String(state.combosCalled);
    el.statWorkTime.textContent = formatMMSS(state.totalWorkElapsedMs / 1000);

    const fraction = state.phaseDurationMs > 0
      ? Math.max(0, Math.min(1, state.remainingMs / state.phaseDurationMs))
      : 1;
    const offset = CIRCUMFERENCE * (1 - fraction);
    el.dialProgress.style.strokeDashoffset = String(offset);
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
      } catch (_) {
        // Ignore if disallowed
      }
    }
  }

  function toggleStartPause() {
    ensureAudioCtx();
    requestScreenWakeLock();
    if (!state.isRunning) {
      if (state.phase === "idle" || state.phase === "done") {
        syncSettingsFromInputs();
        state.currentRound = 1;
        state.combosCalled = 0;
        state.totalWorkElapsedMs = 0;
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
  // 8. UI CONTROLS, DISCIPLINE SWITCHING & CUSTOM COMBO MANAGEMENT
  // ---------------------------------------------------------------------------
  function syncSettingsFromInputs() {
    state.totalRounds = Math.max(1, parseInt(el.roundsInput.value, 10) || 5);
    state.workSec = Math.max(10, parseInt(el.workSecInput.value, 10) || 180);
    state.restSec = Math.max(5, parseInt(el.restSecInput.value, 10) || 60);
    state.prepSec = Math.max(0, parseInt(el.prepSecInput.value, 10) || 0);
    state.warnSec = Math.max(0, parseInt(el.warnSecInput.value, 10) || 0);
    state.maxHr = Math.max(120, parseInt(el.maxHrInput.value, 10) || 190);

    el.roundsFormatted.textContent = `${state.totalRounds} RDS`;
    el.workFormatted.textContent = formatMMSS(state.workSec);
    el.restFormatted.textContent = formatMMSS(state.restSec);
    el.prepFormatted.textContent = formatMMSS(state.prepSec);
    el.warnFormatted.textContent = formatMMSS(state.warnSec);
    el.maxHrFormatted.textContent = `${state.maxHr} BPM`;

    if (state.phase === "idle") {
      state.remainingMs = state.workSec * 1000;
      state.phaseDurationMs = state.workSec * 1000;
      renderRoundPips();
      updateDisplay();
    }
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
      "dutch-mma": "DUTCH MMA • STRICT L↔R",
      "dutch-kickboxing": "DUTCH KICKBOXING • STRICT L↔R",
      "boxing": "PURE BOXING • STRICT L↔R",
      "procedural": "PROCEDURAL L↔R ENGINE",
      "custom-only": "CUSTOM USER ARSENAL"
    };
    el.disciplineBadge.textContent = labels[modeKey] || "DUTCH MMA • STRICT L↔R";

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

  // Event Listeners
  el.startPauseBtn.addEventListener("click", toggleStartPause);
  el.resetBtn.addEventListener("click", resetWorkout);
  el.skipPhaseBtn.addEventListener("click", () => {
    if (state.isRunning) advanceToNextPhase();
  });

  el.polarConnectBtn.addEventListener("click", connectPolarBluetooth);
  el.polarSimBtn.addEventListener("click", togglePolarSimulation);

  el.triggerComboBtn.addEventListener("click", () => {
    ensureAudioCtx();
    const combo = pickNextCombo();
    state.combosCalled++;
    renderAndAnimateCombo(combo, true);
    updateDisplay();
  });

  el.prevComboBtn.addEventListener("click", () => {
    ensureAudioCtx();
    renderAndAnimateCombo(state.currentCombo, true);
  });

  el.soundBellTestBtn.addEventListener("click", () => {
    playBoxingBell(1);
  });

  el.testVoiceBtn.addEventListener("click", () => {
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

  [el.roundsInput, el.workSecInput, el.restSecInput, el.prepSecInput, el.warnSecInput, el.maxHrInput].forEach((inp) => {
    inp.addEventListener("change", syncSettingsFromInputs);
  });

  document.querySelectorAll(".persona-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
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
    state.selectedVoiceURI = el.voiceSelect.value;
    speakText(formatSpokenComboText(state.currentCombo));
  });

  el.addComboBtn.addEventListener("click", () => {
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
