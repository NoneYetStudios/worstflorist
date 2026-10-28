// ==========================================================================
// THE WORLD'S WORST FLORIST - Procedural Web Audio Sound & Music Synthesizer
// Lightweight zero-dependency sound effects & quirky shop background music
// ==========================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.musicEnabled = false;
    this.musicTimer = null;
    this.musicStep = 0;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSfx() {
    this.sfxEnabled = !this.sfxEnabled;
    if (this.sfxEnabled) this.playPop(520);
    return this.sfxEnabled;
  }

  toggleMusic() {
    this.initContext();
    this.musicEnabled = !this.musicEnabled;
    if (this.musicEnabled) {
      this.startMusicLoop();
    } else {
      this.stopMusicLoop();
    }
    return this.musicEnabled;
  }

  playTone(freq, type = 'sine', duration = 0.12, gainVal = 0.12, slideTo = null) {
    if (!this.sfxEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideTo) {
      osc.frequency.exponentialRampToValueAtTime(slideTo, now + duration);
    }

    gain.gain.setValueAtTime(gainVal, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Soft plop when adding a flower
  playPop(baseFreq = 420) {
    this.playTone(baseFreq, 'sine', 0.11, 0.14, baseFreq * 1.45);
  }

  // Heavy comical thud / clang when adding a questionable object
  playObjectClang(itemId) {
    if (!this.sfxEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    if (itemId === 'rubber_duck' || itemId === 'rubber_chicken') {
      // Squeak / Honk!
      this.playTone(itemId === 'rubber_chicken' ? 520 : 780, 'sawtooth', 0.14, 0.14, 980);
      setTimeout(() => this.playTone(680, 'triangle', 0.18, 0.12, 420), 90);
    } else if (itemId === 'chainsaw' || itemId === 'leaf_blower') {
      // Two-stroke rev!
      this.playTone(110, 'sawtooth', 0.28, 0.12, 220);
    } else if (itemId === 'bowling_ball' || itemId === 'toolbox' || itemId === 'cinderblock' || itemId === 'parking_boot' || itemId === 'cheese_wheel') {
      // Heavy thud!
      this.playTone(140, 'triangle', 0.22, 0.22, 48);
    } else if (itemId === 'saxophone' || itemId === 'megaphone') {
      // Brass horn riff!
      this.playTone(349.23, 'sawtooth', 0.12, 0.12, 440);
      setTimeout(() => this.playTone(523.25, 'sawtooth', 0.18, 0.12, 587.33), 100);
    } else if (itemId === 'toaster' || itemId === 'extinguisher') {
      // Metallic ding!
      this.playTone(980, 'sine', 0.24, 0.14, 1020);
    } else {
      // Cartoon boing/clunk
      this.playTone(240, 'square', 0.14, 0.10, 390);
    }
  }

  playRemove() {
    this.playTone(360, 'sine', 0.1, 0.1, 190);
  }

  // Shop door bell when a new customer walks in
  playShopBell() {
    if (!this.sfxEnabled) return;
    this.playTone(659.25, 'sine', 0.22, 0.12); // E5
    setTimeout(() => this.playTone(523.25, 'sine', 0.35, 0.12), 130); // C5
  }

  // Fanfare on bouquet evaluation
  playResultFanfare(score) {
    if (!this.sfxEnabled) return;
    if (score >= 86) {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((n, i) => {
        setTimeout(() => this.playTone(n, 'triangle', 0.22, 0.15), i * 95);
      });
    } else if (score >= 50) {
      const notes = [440, 554.37, 659.25];
      notes.forEach((n, i) => {
        setTimeout(() => this.playTone(n, 'sine', 0.18, 0.13), i * 100);
      });
    } else {
      // Sad trombone slide
      const notes = [392, 370, 349.23, 311.13];
      notes.forEach((n, i) => {
        setTimeout(() => this.playTone(n, 'sawtooth', 0.24, 0.09, n * 0.94), i * 160);
      });
    }
  }

  // Quirky bossa-nova / elevator pizzicato loop
  startMusicLoop() {
    this.stopMusicLoop();
    const melody = [
      261.63, 329.63, 392.00, 329.63,
      293.66, 349.23, 440.00, 349.23,
      261.63, 329.63, 493.88, 392.00,
      246.94, 293.66, 392.00, 329.63
    ];

    this.musicTimer = setInterval(() => {
      if (!this.musicEnabled || !this.ctx) return;
      const freq = melody[this.musicStep % melody.length];
      this.musicStep++;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.27);
    }, 310);
  }

  stopMusicLoop() {
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
  }
}

export const sound = new SoundEngine();
