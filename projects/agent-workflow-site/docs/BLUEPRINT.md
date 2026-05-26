# BLUEPRINT.md — Frontend Build Specification
> **For Codex:** Build exactly what is specified here. Every section includes exact values — colors, timing, selectors, API endpoints, breakpoints. Do not invent alternatives; if something is ambiguous, use the value given here.

---

## 0. Overview

**Output files:** `docs/index.html`, `docs/style.css`, `docs/script.js`
**Deployment:** GitHub Pages served from `docs/` folder in `adiind/mercury-vault` repo
**Live URL:** `https://adiind.github.io/mercury-vault/`
**Design language:** Dark sci-fi / developer terminal — polished, not gimmicky

---

## 1. Color Palette (exact hex values)

```
/* Backgrounds */
--bg-base:       #0a0a0f   /* page background — near-black with blue undertone */
--bg-surface:    #0f0f1a   /* card / panel backgrounds */
--bg-elevated:   #141428   /* hover states, active nodes */
--bg-grid:       #0d0d18   /* grid overlay base */

/* Borders */
--border-subtle: #1a1a2e   /* default card borders */
--border-bright: #2d2d52   /* focused/hover borders */

/* Accent — Cyan (Mercury, data flow, primary CTA) */
--cyan:          #00f0ff
--cyan-dim:      #00b8cc
--cyan-glow:     rgba(0, 240, 255, 0.15)
--cyan-glow-lg:  rgba(0, 240, 255, 0.08)

/* Accent — Purple (Claude Code, architect layer) */
--purple:        #7c3aed
--purple-bright: #9f5ff0
--purple-glow:   rgba(124, 58, 237, 0.18)

/* Accent — Emerald (Git, success, Codex execution) */
--emerald:       #10b981
--emerald-dim:   #059669
--emerald-glow:  rgba(16, 185, 129, 0.15)

/* Accent — Amber (Adi / human input) */
--amber:         #f59e0b
--amber-dim:     #d97706
--amber-glow:    rgba(245, 158, 11, 0.15)

/* Text */
--text-primary:  #e2e8f0   /* headings, primary content */
--text-secondary:#94a3b8   /* body text, descriptions */
--text-muted:    #475569   /* labels, metadata */
--text-code:     #7dd3fc   /* inline code, terminal output */

/* Utility */
--white:         #ffffff
--transparent:   transparent
```

All CSS variables go in `:root {}` in `style.css`.

---

## 2. Typography

```css
/* Import in style.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

font-family (body):    'Inter', -apple-system, BlinkMacSystemFont, sans-serif
font-family (code):    'JetBrains Mono', 'Fira Code', 'Courier New', monospace

/* Scale */
--text-xs:   0.75rem   /* 12px — labels, badges */
--text-sm:   0.875rem  /* 14px — secondary body */
--text-base: 1rem      /* 16px — body */
--text-lg:   1.125rem  /* 18px */
--text-xl:   1.25rem   /* 20px */
--text-2xl:  1.5rem    /* 24px */
--text-3xl:  1.875rem  /* 30px */
--text-4xl:  2.25rem   /* 36px */
--text-5xl:  3rem      /* 48px — hero heading */
```

---

## 3. Full HTML Structure (`docs/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Live demonstration of Adi's multi-agent AI orchestration pipeline — Mercury, Claude Code, Codex, Git, all fully automated.">
  <title>Mercury Vault — AI Agent Workflow</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
<body>

  <!-- 1. Background grid overlay (purely decorative) -->
  <div class="bg-grid" aria-hidden="true"></div>

  <!-- 2. Navigation -->
  <header class="site-header">
    <nav class="nav-inner">
      <div class="nav-logo">
        <span class="logo-icon">⚡</span>
        <span class="logo-text">Mercury<span class="logo-accent">Vault</span></span>
      </div>
      <ul class="nav-links">
        <li><a href="#pipeline">Pipeline</a></li>
        <li><a href="#activity">Activity</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li>
          <a href="https://github.com/adiind/mercury-vault"
             target="_blank"
             rel="noopener noreferrer"
             class="nav-cta">
            View on GitHub →
          </a>
        </li>
      </ul>
      <button class="nav-mobile-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <main>

    <!-- ══════════════════════════════════
         SECTION 1: HERO
         ══════════════════════════════════ -->
    <section class="hero" id="hero">
      <div class="hero-inner">

        <!-- Left column: text content -->
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot pulse-green"></span>
            <span>Live System — Running Now</span>
          </div>

          <h1 class="hero-title">
            One human.<br>
            <span class="gradient-text">Four agents.</span><br>
            Zero manual commits.
          </h1>

          <p class="hero-subtitle">
            Adi sends a Telegram message. Mercury decomposes the task,
            orchestrates Claude Code and Codex, and pushes to Git —
            fully automated, end to end.
          </p>

          <div class="hero-actions">
            <a href="#pipeline" class="btn-primary">See the Pipeline</a>
            <a href="#activity" class="btn-ghost">Recent Commits ↓</a>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-value" id="stat-commits">—</span>
              <span class="stat-label">Auto-commits</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">4</span>
              <span class="stat-label">AI Agents</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">30m</span>
              <span class="stat-label">Sync Interval</span>
            </div>
          </div>
        </div>

        <!-- Right column: terminal window -->
        <div class="hero-terminal">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="terminal-title">mercury — orchestrator</span>
            </div>
            <div class="terminal-body">
              <div class="terminal-output" id="terminal-output">
                <!-- Lines injected by script.js typewriter -->
              </div>
              <div class="terminal-cursor" id="terminal-cursor"></div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ══════════════════════════════════
         SECTION 2: PIPELINE VISUALIZATION
         ══════════════════════════════════ -->
    <section class="pipeline" id="pipeline">
      <div class="section-inner">

        <div class="section-header">
          <span class="section-label">Orchestration Layer</span>
          <h2 class="section-title">The Agent Pipeline</h2>
          <p class="section-subtitle">
            Every task flows through this exact sequence — from human intent
            to deployed code, fully automated.
          </p>
        </div>

        <!-- Pipeline flow diagram -->
        <div class="pipeline-container">

          <!-- Node track (horizontal on desktop, scrollable on mobile) -->
          <div class="pipeline-track" id="pipeline-track">

            <!-- Node 1: Adi -->
            <div class="agent-node" data-node="adi" data-index="0">
              <div class="node-ring"></div>
              <div class="node-icon-wrap">
                <span class="node-icon">👤</span>
              </div>
              <div class="node-label">Adi</div>
              <div class="node-role">Human Principal</div>
            </div>

            <!-- Connector 1→2 -->
            <div class="pipe-connector" data-from="adi" data-to="mercury">
              <div class="pipe-line">
                <div class="pipe-pulse"></div>
              </div>
              <span class="pipe-label">Telegram</span>
            </div>

            <!-- Node 2: Mercury -->
            <div class="agent-node" data-node="mercury" data-index="1">
              <div class="node-ring"></div>
              <div class="node-icon-wrap">
                <span class="node-icon">⚡</span>
              </div>
              <div class="node-label">Mercury</div>
              <div class="node-role">Orchestrator</div>
            </div>

            <!-- Connector 2→3 -->
            <div class="pipe-connector" data-from="mercury" data-to="claude">
              <div class="pipe-line">
                <div class="pipe-pulse"></div>
              </div>
              <span class="pipe-label">Delegates</span>
            </div>

            <!-- Node 3: Claude Code -->
            <div class="agent-node" data-node="claude" data-index="2">
              <div class="node-ring"></div>
              <div class="node-icon-wrap">
                <span class="node-icon">🏗</span>
              </div>
              <div class="node-label">Claude Code</div>
              <div class="node-role">Architect</div>
            </div>

            <!-- Connector 3→4 -->
            <div class="pipe-connector" data-from="claude" data-to="codex">
              <div class="pipe-line">
                <div class="pipe-pulse"></div>
              </div>
              <span class="pipe-label">Blueprint</span>
            </div>

            <!-- Node 4: Codex -->
            <div class="agent-node" data-node="codex" data-index="3">
              <div class="node-ring"></div>
              <div class="node-icon-wrap">
                <span class="node-icon">⚙️</span>
              </div>
              <div class="node-label">Codex</div>
              <div class="node-role">Builder</div>
            </div>

            <!-- Connector 4→5 -->
            <div class="pipe-connector" data-from="codex" data-to="git">
              <div class="pipe-line">
                <div class="pipe-pulse"></div>
              </div>
              <span class="pipe-label">git push</span>
            </div>

            <!-- Node 5: Git -->
            <div class="agent-node" data-node="git" data-index="4">
              <div class="node-ring"></div>
              <div class="node-icon-wrap">
                <span class="node-icon">🐙</span>
              </div>
              <div class="node-label">GitHub</div>
              <div class="node-role">Deployed</div>
            </div>

          </div><!-- /pipeline-track -->

          <!-- Detail panel: shows on node click -->
          <div class="pipeline-detail" id="pipeline-detail">
            <div class="detail-placeholder">
              <span class="detail-hint">↑ Click any agent to see its role</span>
            </div>
            <div class="detail-content hidden" id="detail-content">
              <div class="detail-header">
                <span class="detail-icon" id="detail-icon"></span>
                <div>
                  <h3 class="detail-name" id="detail-name"></h3>
                  <span class="detail-type" id="detail-type"></span>
                </div>
              </div>
              <p class="detail-description" id="detail-description"></p>
              <ul class="detail-capabilities" id="detail-capabilities"></ul>
            </div>
          </div>

        </div><!-- /pipeline-container -->

      </div>
    </section>

    <!-- ══════════════════════════════════
         SECTION 3: RECENT ACTIVITY
         ══════════════════════════════════ -->
    <section class="activity" id="activity">
      <div class="section-inner">

        <div class="section-header">
          <span class="section-label">Live from GitHub API</span>
          <h2 class="section-title">Recent Activity</h2>
          <p class="section-subtitle">
            Every commit below was created autonomously by the pipeline —
            no manual git operations.
          </p>
        </div>

        <div class="activity-layout">

          <!-- Commit feed -->
          <div class="commit-feed" id="commit-feed">
            <!-- Skeleton placeholders while loading -->
            <div class="commit-skeleton" aria-hidden="true"></div>
            <div class="commit-skeleton" aria-hidden="true"></div>
            <div class="commit-skeleton" aria-hidden="true"></div>
            <div class="commit-skeleton" aria-hidden="true"></div>
            <div class="commit-skeleton" aria-hidden="true"></div>
            <div class="commit-skeleton" aria-hidden="true"></div>
          </div>

          <!-- Stats sidebar -->
          <div class="activity-stats">
            <div class="stats-card">
              <div class="stats-header">
                <span class="stats-icon">📊</span>
                <span class="stats-title">Pipeline Stats</span>
              </div>
              <div class="stats-rows">
                <div class="stats-row">
                  <span class="stats-key">Repo</span>
                  <span class="stats-val">adiind/mercury-vault</span>
                </div>
                <div class="stats-row">
                  <span class="stats-key">Branch</span>
                  <span class="stats-val">main</span>
                </div>
                <div class="stats-row">
                  <span class="stats-key">Latest commit</span>
                  <span class="stats-val" id="stats-latest">Loading…</span>
                </div>
                <div class="stats-row">
                  <span class="stats-key">Total shown</span>
                  <span class="stats-val" id="stats-count">—</span>
                </div>
                <div class="stats-row">
                  <span class="stats-key">Auto-synced</span>
                  <span class="stats-val emerald-text">Yes ✓</span>
                </div>
              </div>
              <a href="https://github.com/adiind/mercury-vault/commits/main"
                 target="_blank" rel="noopener noreferrer"
                 class="stats-link">
                View full history →
              </a>
            </div>

            <div class="cron-card">
              <div class="cron-header">
                <span class="cron-dot pulse-green"></span>
                <span class="cron-title">Scheduled Jobs</span>
              </div>
              <ul class="cron-list">
                <li>
                  <span class="cron-time">07:00</span>
                  <span class="cron-desc">Morning briefing</span>
                </li>
                <li>
                  <span class="cron-time">*/30m</span>
                  <span class="cron-desc">Obsidian vault sync</span>
                </li>
                <li>
                  <span class="cron-time">on push</span>
                  <span class="cron-desc">GitHub Pages deploy</span>
                </li>
              </ul>
            </div>
          </div>

        </div><!-- /activity-layout -->

      </div>
    </section>

    <!-- ══════════════════════════════════
         SECTION 4: CAPABILITIES
         ══════════════════════════════════ -->
    <section class="capabilities" id="capabilities">
      <div class="section-inner">

        <div class="section-header">
          <span class="section-label">What Gets Automated</span>
          <h2 class="section-title">Pipeline Capabilities</h2>
        </div>

        <div class="capabilities-grid">

          <div class="cap-card" data-color="cyan">
            <span class="cap-icon">🧠</span>
            <h3 class="cap-title">Task Decomposition</h3>
            <p class="cap-desc">Mercury receives natural language tasks and breaks them into structured subtasks with dependencies, priorities, and agent assignments.</p>
          </div>

          <div class="cap-card" data-color="purple">
            <span class="cap-icon">📐</span>
            <h3 class="cap-title">Architecture Design</h3>
            <p class="cap-desc">Claude Code designs system architecture, writes markdown specs, creates file structures, and produces blueprints for execution agents.</p>
          </div>

          <div class="cap-card" data-color="emerald">
            <span class="cap-icon">⚙️</span>
            <h3 class="cap-title">Code Generation</h3>
            <p class="cap-desc">Codex implements features from specs, iterates on output, handles edge cases, and produces production-ready files with proper structure.</p>
          </div>

          <div class="cap-card" data-color="amber">
            <span class="cap-icon">🔄</span>
            <h3 class="cap-title">Auto-Sync</h3>
            <p class="cap-desc">Git hooks and cron jobs ensure the Obsidian vault, code repos, and deployed sites stay synchronized every 30 minutes without manual intervention.</p>
          </div>

          <div class="cap-card" data-color="cyan">
            <span class="cap-icon">📅</span>
            <h3 class="cap-title">Morning Briefings</h3>
            <p class="cap-desc">Every morning at 07:00, Mercury compiles overnight activity, pending tasks, and calendar items into a structured briefing delivered via Telegram.</p>
          </div>

          <div class="cap-card" data-color="purple">
            <span class="cap-icon">🚀</span>
            <h3 class="cap-title">Zero-Touch Deploy</h3>
            <p class="cap-desc">From Telegram message to live GitHub Pages site — no terminal, no manual commits, no deployment steps. The pipeline is the developer.</p>
          </div>

        </div>

      </div>
    </section>

  </main>

  <!-- ══════════════════════════════════
       FOOTER
       ══════════════════════════════════ -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-left">
        <span class="footer-logo">⚡ MercuryVault</span>
        <p class="footer-tagline">Built by agents. Deployed by agents.</p>
      </div>
      <div class="footer-right">
        <a href="https://github.com/adiind/mercury-vault"
           target="_blank" rel="noopener noreferrer">GitHub</a>
        <span class="footer-sep">·</span>
        <span class="footer-meta">
          Last updated: <span id="footer-date">—</span>
        </span>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## 4. CSS Specification (`docs/style.css`)

### 4.1 Reset & Base

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
```

### 4.2 Background Grid

```css
.bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

/* Radial fade so grid doesn't dominate near edges */
.bg-grid::after {
  content: '';
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--bg-base) 100%);
}
```

### 4.3 Navigation

```css
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  transition: border-color 0.3s ease;
}

.site-header.scrolled {
  border-bottom-color: var(--border-bright);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: var(--text-lg);
  flex-shrink: 0;
}

.logo-icon { font-size: 1.25rem; }
.logo-accent { color: var(--cyan); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}

.nav-links a {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  transition: color 0.2s, background 0.2s;
}

.nav-links a:hover {
  color: var(--text-primary);
  background: var(--bg-elevated);
}

.nav-cta {
  color: var(--cyan) !important;
  border: 1px solid rgba(0, 240, 255, 0.3) !important;
  background: var(--cyan-glow) !important;
}

.nav-cta:hover {
  background: rgba(0, 240, 255, 0.2) !important;
}

.nav-mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.nav-mobile-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.2s;
}
```

### 4.4 Shared Layout Utilities

```css
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1.5rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cyan);
  background: var(--cyan-glow);
  border: 1px solid rgba(0, 240, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.25;
}

.section-subtitle {
  font-size: var(--text-base);
  color: var(--text-secondary);
  max-width: 560px;
  margin: 0 auto;
}
```

### 4.5 Hero Section

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
}

/* Pulse animations */
.pulse-green {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--emerald);
  position: relative;
  flex-shrink: 0;
}

.pulse-green::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: var(--emerald);
  opacity: 0.4;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50%       { transform: scale(1.8); opacity: 0; }
}

.hero-title {
  font-size: var(--text-5xl);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple-bright) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--cyan-dim) 100%);
  color: #0a0a0f;
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: 8px;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 0 24px var(--cyan-glow);
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 0 40px rgba(0, 240, 255, 0.3);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.btn-ghost:hover {
  color: var(--text-primary);
  border-color: var(--border-bright);
  background: var(--bg-surface);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 0;
  border-top: 1px solid var(--border-subtle);
}

.stat-item { display: flex; flex-direction: column; gap: 0.25rem; }

.stat-value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--cyan);
  font-family: 'JetBrains Mono', monospace;
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border-subtle);
}
```

### 4.6 Terminal Window

```css
.hero-terminal { position: relative; }

.hero-terminal::before {
  content: '';
  position: absolute;
  inset: -40px;
  background: radial-gradient(ellipse 60% 60% at 50% 50%, var(--cyan-glow-lg), transparent);
  pointer-events: none;
}

.terminal-window {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px var(--border-subtle),
    0 32px 64px rgba(0, 0, 0, 0.6),
    0 0 80px var(--cyan-glow-lg);
  position: relative;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border-subtle);
}

.terminal-dots { display: flex; gap: 6px; }

.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot-red    { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green  { background: #28c840; }

.terminal-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  color: var(--text-muted);
  flex: 1;
  text-align: center;
  padding-right: 54px;
}

.terminal-body {
  padding: 1.5rem;
  min-height: 280px;
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-sm);
  line-height: 1.8;
}

.terminal-line {
  display: block;
  animation: termFadeIn 0.15s ease-out forwards;
}

@keyframes termFadeIn {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 1; transform: translateX(0); }
}

.term-prompt  { color: var(--cyan); }
.term-cmd     { color: var(--text-primary); }
.term-out     { color: var(--text-muted); }
.term-success { color: var(--emerald); }
.term-info    { color: var(--purple-bright); }
.term-warn    { color: var(--amber); }

.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 1.1em;
  background: var(--cyan);
  margin-left: 2px;
  vertical-align: middle;
  animation: blink 1.1s step-end infinite;
}

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
```

### 4.7 Pipeline Section

```css
.pipeline { border-top: 1px solid var(--border-subtle); position: relative; }

.pipeline-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Horizontal node track */
.pipeline-track {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  overflow-x: auto;
  padding: 2rem 1rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-bright) transparent;
}

/* Individual agent node */
.agent-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: background 0.3s ease;
  min-width: 100px;
}

.agent-node::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Node color assignments via CSS custom properties */
.agent-node[data-node="adi"]    { --node-color: #f59e0b; --node-glow: rgba(245, 158, 11, 0.2); }
.agent-node[data-node="mercury"]{ --node-color: #00f0ff; --node-glow: rgba(0, 240, 255, 0.2); }
.agent-node[data-node="claude"] { --node-color: #7c3aed; --node-glow: rgba(124, 58, 237, 0.2); }
.agent-node[data-node="codex"]  { --node-color: #10b981; --node-glow: rgba(16, 185, 129, 0.2); }
.agent-node[data-node="git"]    { --node-color: #94a3b8; --node-glow: rgba(148, 163, 184, 0.2); }

/* Active / highlighted node */
.agent-node.active::before,
.agent-node:hover::before {
  border-color: var(--node-color);
  box-shadow: 0 0 24px var(--node-glow), inset 0 0 24px rgba(0,0,0,0.2);
}

.agent-node.active { background: rgba(255,255,255,0.03); }

.node-ring {
  position: absolute;
  inset: -4px;
  border-radius: 16px;
  border: 2px solid var(--node-color);
  opacity: 0;
  transform: scale(1.05);
  pointer-events: none;
}

.agent-node.active .node-ring,
.agent-node.animating .node-ring {
  opacity: 0.4;
  animation: nodeRingPulse 2s ease-in-out infinite;
}

@keyframes nodeRingPulse {
  0%, 100% { opacity: 0.4; transform: scale(1.05); }
  50%       { opacity: 0.1; transform: scale(1.12); }
}

.node-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--node-glow);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.3s;
}

.agent-node:hover .node-icon-wrap,
.agent-node.active .node-icon-wrap {
  transform: scale(1.1);
}

.node-label {
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--text-primary);
  white-space: nowrap;
}

.node-role {
  font-size: var(--text-xs);
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  white-space: nowrap;
}

/* Connector between nodes */
.pipe-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  width: 80px;
}

.pipe-line {
  width: 100%;
  height: 2px;
  background: var(--border-subtle);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.pipe-pulse {
  position: absolute;
  top: 0; left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--cyan), transparent);
  animation: pipePulse 2.5s ease-in-out infinite;
}

@keyframes pipePulse {
  0%   { left: -100%; }
  100% { left: 100%; }
}

/* Stagger pipe pulse animations */
.pipe-connector:nth-of-type(1) .pipe-pulse { animation-delay: 0.0s; }
.pipe-connector:nth-of-type(2) .pipe-pulse { animation-delay: 0.6s; }
.pipe-connector:nth-of-type(3) .pipe-pulse { animation-delay: 1.2s; }
.pipe-connector:nth-of-type(4) .pipe-pulse { animation-delay: 1.8s; }

.pipe-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-muted);
  white-space: nowrap;
}

/* Detail panel */
.pipeline-detail {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 2rem;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.detail-hint {
  color: var(--text-muted);
  font-size: var(--text-sm);
  font-family: 'JetBrains Mono', monospace;
}

.detail-content.hidden { display: none; }

.detail-content { width: 100%; }

.detail-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.detail-icon { font-size: 2rem; }

.detail-name {
  font-size: var(--text-xl);
  font-weight: 700;
}

.detail-type {
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  color: var(--text-muted);
  display: block;
  margin-top: 0.25rem;
}

.detail-description {
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.detail-capabilities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.detail-capabilities li {
  font-size: var(--text-xs);
  font-family: 'JetBrains Mono', monospace;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
}
```

### 4.8 Activity / Commit Feed

```css
.activity { border-top: 1px solid var(--border-subtle); }

.activity-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2rem;
  align-items: start;
}

.commit-feed {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Skeleton loader */
.commit-skeleton {
  height: 80px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.commit-skeleton::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%);
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Real commit cards */
.commit-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  transition: border-color 0.2s, background 0.2s;
  text-decoration: none;
  color: inherit;
}

.commit-card:hover {
  border-color: var(--border-bright);
  background: var(--bg-elevated);
}

.commit-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  flex-shrink: 0;
  object-fit: cover;
}

.commit-avatar-placeholder {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.commit-body { flex: 1; min-width: 0; }

.commit-message {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.25rem;
}

.commit-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: var(--text-xs);
  color: var(--text-muted);
  flex-wrap: wrap;
}

.commit-sha {
  color: var(--cyan);
  background: var(--cyan-glow);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

/* Stats sidebar */
.stats-card, .cron-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.stats-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.stats-icon { font-size: 1rem; }
.stats-title { font-weight: 600; font-size: var(--text-sm); color: var(--text-primary); }

.stats-rows { display: flex; flex-direction: column; gap: 0; }

.stats-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--text-xs);
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--border-subtle);
}

.stats-row:last-child { border-bottom: none; }

.stats-key { color: var(--text-muted); font-family: 'JetBrains Mono', monospace; }
.stats-val { color: var(--text-secondary); font-weight: 500; text-align: right; }
.emerald-text { color: var(--emerald); }

.stats-link {
  display: block;
  margin-top: 1rem;
  font-size: var(--text-xs);
  color: var(--cyan);
  font-family: 'JetBrains Mono', monospace;
  transition: opacity 0.2s;
}

.stats-link:hover { opacity: 0.8; }

.cron-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.cron-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--emerald);
  flex-shrink: 0;
}

.cron-title { font-weight: 600; font-size: var(--text-sm); }

.cron-list { display: flex; flex-direction: column; gap: 0.625rem; }

.cron-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--text-xs);
}

.cron-time {
  font-family: 'JetBrains Mono', monospace;
  color: var(--amber);
  background: var(--amber-glow);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.cron-desc { color: var(--text-secondary); }
```

### 4.9 Capabilities Grid

```css
.capabilities { border-top: 1px solid var(--border-subtle); }

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.cap-card {
  padding: 1.75rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.cap-card:hover {
  transform: translateY(-4px);
}

.cap-card[data-color="cyan"]:hover {
  border-color: rgba(0, 240, 255, 0.3);
  box-shadow: 0 12px 40px rgba(0, 240, 255, 0.08);
}

.cap-card[data-color="purple"]:hover {
  border-color: rgba(124, 58, 237, 0.3);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.08);
}

.cap-card[data-color="emerald"]:hover {
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 12px 40px rgba(16, 185, 129, 0.08);
}

.cap-card[data-color="amber"]:hover {
  border-color: rgba(245, 158, 11, 0.3);
  box-shadow: 0 12px 40px rgba(245, 158, 11, 0.08);
}

.cap-icon { font-size: 1.75rem; display: block; margin-bottom: 1rem; }

.cap-title {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.cap-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
}
```

### 4.10 Footer

```css
.site-footer {
  border-top: 1px solid var(--border-subtle);
  position: relative;
  z-index: 1;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-logo { font-weight: 700; color: var(--text-primary); }

.footer-tagline {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-top: 0.25rem;
  font-family: 'JetBrains Mono', monospace;
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.footer-right a { color: var(--cyan); }
.footer-right a:hover { opacity: 0.8; }
.footer-sep { color: var(--border-bright); }
```

### 4.11 Scroll-triggered Fade-ins

```css
/* Applied by IntersectionObserver in script.js */
.fade-in-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: var(--delay, 0ms);
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 4.12 Responsive Breakpoints

```css
/* ── Tablet: 640px–1023px ── */
@media (max-width: 1023px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 1.5rem;
  }

  .hero-terminal { order: -1; }
  .hero-title { font-size: var(--text-4xl); }
  .hero-subtitle { max-width: 100%; }

  .capabilities-grid { grid-template-columns: repeat(2, 1fr); }

  .activity-layout { grid-template-columns: 1fr; }
  .activity-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .stats-card, .cron-card { margin-bottom: 0; }
}

/* ── Mobile: <640px ── */
@media (max-width: 639px) {
  .nav-links { display: none; }

  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--bg-surface);
    border-bottom: 1px solid var(--border-subtle);
    padding: 1rem;
    gap: 0.5rem;
    z-index: 99;
  }

  .nav-mobile-toggle { display: flex; }

  .section-inner { padding: 4rem 1rem; }

  .hero-inner { padding: 3rem 1rem; }
  .hero-title { font-size: var(--text-3xl); }
  .hero-stats { gap: 1.25rem; }
  .stat-value { font-size: var(--text-xl); }

  .capabilities-grid { grid-template-columns: 1fr; }

  .activity-stats { grid-template-columns: 1fr; }

  .footer-inner { flex-direction: column; align-items: flex-start; gap: 0.75rem; }

  .pipe-connector { width: 48px; }

  .pipeline-track { justify-content: flex-start; }
}
```

---

## 5. JavaScript Specification (`docs/script.js`)

### 5.1 Typewriter Terminal Effect

The terminal cycles through these exact lines (in order, then repeats from the top after a 3000ms pause):

```javascript
const TERMINAL_LINES = [
  { text: '$ mercury --status', cls: 'term-prompt' },
  { text: '  [OK] Orchestrator online. Model: moonshot-v1', cls: 'term-success' },
  { text: '  [OK] Telegram gateway connected', cls: 'term-success' },
  { text: '', cls: '' },
  { text: '$ mercury --listen', cls: 'term-prompt' },
  { text: '  Waiting for task from Adi...', cls: 'term-out' },
  { text: '  ✓ Task received: "build agent workflow site"', cls: 'term-success' },
  { text: '', cls: '' },
  { text: '$ mercury --decompose', cls: 'term-prompt' },
  { text: '  → claude-code: architect structure, write docs', cls: 'term-info' },
  { text: '  → codex: build index.html, style.css, script.js', cls: 'term-info' },
  { text: '  → git: commit + push to adiind/mercury-vault', cls: 'term-info' },
  { text: '', cls: '' },
  { text: '$ codex --execute blueprint.md', cls: 'term-prompt' },
  { text: '  Building...', cls: 'term-out' },
  { text: '  ✓ index.html written (342 lines)', cls: 'term-success' },
  { text: '  ✓ style.css written (618 lines)', cls: 'term-success' },
  { text: '  ✓ script.js written (401 lines)', cls: 'term-success' },
  { text: '', cls: '' },
  { text: '$ git commit -m "add: agent workflow demo page"', cls: 'term-prompt' },
  { text: '  [main 6874528] add: agent workflow demo page', cls: 'term-out' },
  { text: '$ git push origin main', cls: 'term-prompt' },
  { text: '  ✓ Deployed → adiind.github.io/mercury-vault/', cls: 'term-success' },
  { text: '', cls: '' },
  { text: '  Pipeline complete. Awaiting next task...', cls: 'term-warn' },
  { text: '', cls: '' },
];
```

**Typewriter implementation — use this exact class:**

```javascript
class Typewriter {
  constructor(container, lines) {
    this.container = container;
    this.lines = lines;
    this.lineIndex = 0;
    this.charIndex = 0;
    this.currentLineEl = null;
    this.tick();
  }

  tick() {
    const line = this.lines[this.lineIndex];

    // All lines done — pause then restart
    if (!line) {
      setTimeout(() => {
        this.container.innerHTML = '';
        this.lineIndex = 0;
        this.charIndex = 0;
        this.tick();
      }, 3000);
      return;
    }

    // Start new line element
    if (this.charIndex === 0) {
      const el = document.createElement('span');
      el.className = `terminal-line ${line.cls}`;
      this.container.appendChild(el);
      this.currentLineEl = el;

      // Blank line — instant
      if (line.text === '') {
        el.innerHTML = '<br>';
        this.lineIndex++;
        this.charIndex = 0;
        setTimeout(() => this.tick(), 80);
        return;
      }
    }

    if (this.charIndex < line.text.length) {
      // Type next character
      this.currentLineEl.textContent = line.text.slice(0, this.charIndex + 1);
      this.charIndex++;
      setTimeout(() => this.tick(), 40);
    } else {
      // Line complete — add newline, move to next
      this.currentLineEl.innerHTML += '<br>';
      this.lineIndex++;
      this.charIndex = 0;
      // Longer pause after prompt lines ($ commands)
      const pause = line.cls === 'term-prompt' ? 280 : 55;
      setTimeout(() => this.tick(), pause);
    }
  }
}
```

### 5.2 Agent Node Data

```javascript
const AGENT_DATA = {
  adi: {
    icon: '👤',
    name: 'Adi',
    type: 'Human Principal',
    description: 'Adi is the human at the top of the pipeline. He issues tasks via Telegram in natural language — no code, no CLI commands. Everything downstream is fully automated from a single message.',
    capabilities: ['Task initiation', 'Telegram interface', 'QA & verification', 'Strategic direction'],
    color: '#f59e0b'
  },
  mercury: {
    icon: '⚡',
    name: 'Mercury',
    type: 'Orchestrator — Hermes Agent (Moonshot Model)',
    description: 'Mercury is the brain. It receives tasks from Adi, decomposes them into structured subtasks, assigns each to the correct specialist agent, and monitors execution. It also runs cron jobs for morning briefings and 30-minute vault syncs.',
    capabilities: ['Task decomposition', 'Agent orchestration', 'Cron scheduling', 'Morning briefings', 'Obsidian sync', 'Telegram gateway'],
    color: '#00f0ff'
  },
  claude: {
    icon: '🏗',
    name: 'Claude Code',
    type: 'Architect Layer — claude-sonnet-4-6',
    description: 'Claude Code acts as the architect. It designs file structures, writes markdown specs and blueprints, creates documentation, and defines exactly what Codex needs to build. It reasons about structure and produces complete, unambiguous specifications.',
    capabilities: ['Architecture design', 'Blueprint writing', 'Markdown docs', 'File structure planning', 'Spec authoring'],
    color: '#7c3aed'
  },
  codex: {
    icon: '⚙️',
    name: 'Codex',
    type: 'Execution Layer — OpenAI Codex',
    description: 'Codex is the builder. It takes Claude\'s blueprints and produces production-ready HTML, CSS, JavaScript, and other implementation files. It follows the spec exactly, iterates until output is correct, then stages files for commit.',
    capabilities: ['HTML/CSS/JS generation', 'Spec implementation', 'Iterative refinement', 'File output', 'Code quality checks'],
    color: '#10b981'
  },
  git: {
    icon: '🐙',
    name: 'GitHub',
    type: 'Version Control + Deployment',
    description: 'Git is the final step and the audit trail. Commits are made automatically with structured messages, pushed to the mercury-vault repo, and GitHub Pages deploys the live site instantly — no manual deployment steps.',
    capabilities: ['Auto-commit', 'git push', 'GitHub Pages deploy', 'Vault sync trigger', 'Commit history audit'],
    color: '#94a3b8'
  }
};
```

### 5.3 Node Highlighting Sequence

Run automatically when the pipeline section enters the viewport (IntersectionObserver, threshold 0.3). Fires once per page load.

```javascript
function animatePipelineSequence() {
  const nodes = Array.from(document.querySelectorAll('.agent-node'));

  // Reset all
  nodes.forEach(n => {
    n.classList.remove('active', 'animating');
  });

  nodes.forEach((node, i) => {
    // Stagger: 800ms between each node
    setTimeout(() => {
      nodes.forEach(n => n.classList.remove('animating'));
      node.classList.add('animating');

      setTimeout(() => {
        node.classList.remove('animating');
        node.classList.add('active');
      }, 400);

    }, i * 800);
  });
}
```

### 5.4 Node Click Handler

```javascript
function bindNodeClicks() {
  const nodes = document.querySelectorAll('.agent-node');
  const detailPlaceholder = document.querySelector('.detail-placeholder');
  const detailContent = document.getElementById('detail-content');
  const detailPanel = document.getElementById('pipeline-detail');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const key = node.dataset.node;
      const data = AGENT_DATA[key];
      if (!data) return;

      // Update active state (preserve after sequence)
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      // Populate detail panel
      document.getElementById('detail-icon').textContent = data.icon;
      document.getElementById('detail-name').textContent = data.name;
      document.getElementById('detail-type').textContent = data.type;
      document.getElementById('detail-description').textContent = data.description;

      const capsList = document.getElementById('detail-capabilities');
      capsList.innerHTML = data.capabilities.map(c => `<li>${c}</li>`).join('');

      // Show content, hide placeholder
      detailPlaceholder.style.display = 'none';
      detailContent.classList.remove('hidden');
      detailPanel.style.alignItems = 'flex-start';

      // Tint panel border to match node color
      detailPanel.style.borderColor = `${data.color}40`;
      detailPanel.style.boxShadow = `0 0 32px ${data.color}10`;
    });
  });
}
```

### 5.5 GitHub API — Commit Feed

**Endpoint:** `https://api.github.com/repos/adiind/mercury-vault/commits?per_page=6`

```javascript
const GITHUB_REPO = 'adiind/mercury-vault';
const GITHUB_API  = `https://api.github.com/repos/${GITHUB_REPO}/commits?per_page=6`;

async function loadCommits() {
  const feed = document.getElementById('commit-feed');

  try {
    const res = await fetch(GITHUB_API, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const commits = await res.json();
    if (!Array.isArray(commits) || commits.length === 0) throw new Error('No commits');

    // Clear skeleton loaders
    feed.innerHTML = '';

    // Update stat counters
    const latestDate = new Date(commits[0].commit.author.date);
    document.getElementById('stats-latest').textContent = timeAgo(latestDate);
    document.getElementById('stats-count').textContent = `${commits.length} commits`;
    document.getElementById('stat-commits').textContent = commits.length + '+';

    const footerDate = document.getElementById('footer-date');
    if (footerDate) {
      footerDate.textContent = latestDate.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      });
    }

    commits.forEach((commit, i) => {
      const sha     = commit.sha.slice(0, 7);
      const message = commit.commit.message.split('\n')[0].slice(0, 72);
      const author  = commit.commit.author.name;
      const date    = new Date(commit.commit.author.date);
      const avatar  = commit.author?.avatar_url ?? null;
      const url     = commit.html_url;

      const card = document.createElement('a');
      card.href = url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.className = 'commit-card fade-in-up';
      card.style.setProperty('--delay', `${i * 80}ms`);
      card.innerHTML = `
        ${avatar
          ? `<img class="commit-avatar" src="${escapeAttr(avatar)}" alt="${escapeHtml(author)}" loading="lazy">`
          : `<div class="commit-avatar-placeholder">⚡</div>`
        }
        <div class="commit-body">
          <div class="commit-message">${escapeHtml(message)}</div>
          <div class="commit-meta">
            <span class="commit-sha">${sha}</span>
            <span>${escapeHtml(author)}</span>
            <span>${timeAgo(date)}</span>
          </div>
        </div>
      `;
      feed.appendChild(card);
    });

    // Trigger staggered fade-in
    requestAnimationFrame(() => {
      document.querySelectorAll('.commit-card.fade-in-up').forEach(el => {
        el.classList.add('visible');
      });
    });

  } catch (err) {
    console.warn('GitHub API failed, showing fallback:', err.message);
    feed.innerHTML = renderFallbackCommits();
  }
}

function timeAgo(date) {
  const secs = Math.floor((Date.now() - date.getTime()) / 1000);
  if (secs < 60)    return `${secs}s ago`;
  if (secs < 3600)  return `${Math.floor(secs / 60)}m ago`;
  if (secs < 86400) return `${Math.floor(secs / 3600)}h ago`;
  return `${Math.floor(secs / 86400)}d ago`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '%22').replace(/'/g, '%27');
}

function renderFallbackCommits() {
  const fallback = [
    { sha: '6874528', msg: 'add: agent workflow demo page',            author: 'Mercury', time: '2h ago' },
    { sha: '74a9f4a', msg: 'Add README_TEST.md with date 2026-05-26',  author: 'Mercury', time: '1d ago' },
    { sha: 'de3c453', msg: 'Mercury session sync — 2026-05-25 15:51',  author: 'Mercury', time: '1d ago' },
    { sha: '18dc5d0', msg: 'Initial Mercury Vault setup',              author: 'Mercury', time: '2d ago' },
  ];
  return fallback.map(c => `
    <div class="commit-card">
      <div class="commit-avatar-placeholder">⚡</div>
      <div class="commit-body">
        <div class="commit-message">${escapeHtml(c.msg)}</div>
        <div class="commit-meta">
          <span class="commit-sha">${c.sha}</span>
          <span>${escapeHtml(c.author)}</span>
          <span>${c.time}</span>
        </div>
      </div>
    </div>
  `).join('');
}
```

### 5.6 Scroll Animations (IntersectionObserver)

```javascript
function initScrollAnimations() {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Cap cards — staggered
  document.querySelectorAll('.cap-card').forEach((el, i) => {
    el.classList.add('fade-in-up');
    el.style.setProperty('--delay', `${i * 80}ms`);
    fadeObserver.observe(el);
  });

  // Pipeline section — triggers node animation sequence once
  const pipelineSection = document.querySelector('.pipeline');
  let pipelineAnimated = false;

  if (pipelineSection) {
    const pipeObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !pipelineAnimated) {
          pipelineAnimated = true;
          animatePipelineSequence();
          pipeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    pipeObs.observe(pipelineSection);
  }
}
```

### 5.7 Navigation

```javascript
function initNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Scrolled class for border highlight
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile hamburger toggle
  toggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close mobile nav when a link is clicked
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}
```

### 5.8 Entry Point

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  bindNodeClicks();
  loadCommits();

  // Start typewriter terminal
  const termOutput = document.getElementById('terminal-output');
  if (termOutput) {
    new Typewriter(termOutput, TERMINAL_LINES);
  }

  // Footer date fallback (updated by loadCommits if API succeeds)
  const footerDate = document.getElementById('footer-date');
  if (footerDate && footerDate.textContent === '—') {
    footerDate.textContent = new Date().toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  }
});
```

---

## 6. Responsive Breakpoint Summary

| Breakpoint | Width | Key Changes |
|---|---|---|
| Desktop (default) | ≥ 1024px | Two-column hero; 3-col capabilities; horizontal pipeline; side stats |
| Tablet | 640–1023px | Single-column hero (terminal on top); 2-col capabilities; side-by-side stats cards |
| Mobile | < 640px | Hamburger nav; single-col everything; compact stats; pipeline scrolls horizontally |

---

## 7. File Size Targets

| File | Target Lines | Notes |
|---|---|---|
| `index.html` | ~320 | Semantic HTML only; no inline CSS or JS |
| `style.css` | ~620 | All vars in `:root`; no frameworks or resets from CDN |
| `script.js` | ~400 | Vanilla JS ES2020+; zero external dependencies |

**No external JS libraries.** Only the Google Fonts `@import` in `style.css`.

---

## 8. Build Verification Checklist

Codex must verify all items pass before marking task complete:

- [ ] All CSS custom properties defined in `:root` and referenced consistently (no hardcoded hex in rules)
- [ ] Typewriter cycles through all lines, pauses 3000ms, then clears and restarts — no stack overflow, no memory leak
- [ ] Agent nodes animate in sequence: adi → mercury → claude → codex → git, 800ms apart, triggered by scroll into view
- [ ] Clicking each node populates the detail panel with correct icon, name, type, description, and capability tags
- [ ] GitHub API fetch fires on `DOMContentLoaded`; skeleton cards are replaced by real commit cards on success
- [ ] If API returns non-200 or throws, fallback static commits render without console errors
- [ ] `#stat-commits` updates from API response count
- [ ] `#footer-date` shows latest commit date from API (or today's date as fallback)
- [ ] Capability cards fade up with staggered delay on scroll-into-view
- [ ] Mobile hamburger menu opens/closes the nav; clicking a nav link closes it
- [ ] `smooth scroll` works on all `href="#..."` anchor links
- [ ] Pipeline pulse animation runs along connectors continuously (CSS-only, no JS required)
- [ ] Site renders without horizontal overflow at 375px, 768px, 1280px, 1440px
- [ ] No browser console errors or warnings on page load in Chrome and Firefox
- [ ] GitHub Pages deployment: `docs/` folder contains `index.html`, `style.css`, `script.js` — no other required files
