# Design System — Mercury Vault Agent Workflow Site

> **Audience:** Codex (execution layer) and any future maintainers  
> **Authority:** This document extends `BLUEPRINT.md`. Where they conflict, BLUEPRINT wins.  
> **Produced by:** Claude Code (architect layer)

This is the living design token reference. All values here must be implemented as CSS custom properties in `style.css`. Never hardcode hex values or pixel sizes outside of their `:root` definition.

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing System](#4-spacing-system)
5. [Border & Radius System](#5-border--radius-system)
6. [Shadow & Glow System](#6-shadow--glow-system)
7. [Motion System](#7-motion-system)
8. [Component Specifications](#8-component-specifications)
9. [State System](#9-state-system)
10. [Icon & Symbol Usage](#10-icon--symbol-usage)
11. [Grid & Layout](#11-grid--layout)
12. [Dark Mode Notes](#12-dark-mode-notes)

---

## 1. Design Principles

### 1.1 Core Aesthetic

**Dark tech, not gamer dark.** The palette evokes a terminal environment: professional, focused, intentional. Think VS Code Dark+ meets Linear, not RGB keyboards.

- **Black is earned** — backgrounds get progressively lighter with semantic meaning (deeper = more background; lighter = more foreground)
- **Color signals meaning** — each agent has one color; that color appears only on that agent's elements
- **Motion communicates** — animations show *data flowing* between nodes, not decorative flourishes
- **Monospace where it matters** — terminal text, hashes, identifiers; Inter for everything else

### 1.2 Hierarchy Rules

1. Agent colors → always their own; never mixed with another agent's color on one element
2. Cyan → primary interactions (links, CTAs, active states)
3. Emerald → success, completion, "live" indicators
4. Purple → architect/design layer elements
5. Amber → warnings, orchestration layer
6. Rose → human layer (Adi)
7. Gray spectrum → neutral content, metadata, disabled

### 1.3 Density

- **Desktop:** generous whitespace; sections breathe with 96px padding
- **Mobile:** reduce padding significantly but never cramped; minimum 16px horizontal margins

---

## 2. Color System

### 2.1 Semantic Token Map

```
TOKEN                    HEX         USAGE
─────────────────────────────────────────────────────────────────────
BACKGROUNDS
--bg-void               #030609     body background; deepest layer
--bg-base               #0a0e17     primary page surface
--bg-surface            #0f1623     cards, panels, containers
--bg-raised             #161e2e     elevated items (hover, selected)
--bg-overlay            #1c2638     tooltips, dropdowns, modals

BORDERS
--border-subtle         #1e2d42     hairline dividers, section edges
--border-default        #253348     standard borders
--border-strong         #2e4060     prominent borders, focus rings

CYAN — Primary / GitHub agent
--cyan-bright           #00d4ff     CTAs, links, active states, GitHub node
--cyan-mid              #06b6d4     secondary cyan actions
--cyan-dim              #0891b2     muted cyan (hover backgrounds)
--cyan-glow             rgba(0,212,255,0.15)    glow backgrounds
--cyan-glow-strong      rgba(0,212,255,0.3)     strong glows, focus

EMERALD — Success / Codex agent
--emerald-bright        #10b981     success states, Codex node, live indicators
--emerald-mid           #059669     secondary emerald
--emerald-glow          rgba(16,185,129,0.15)   Codex glow

PURPLE — Architect / Claude Code agent
--purple-bright         #a855f7     Claude Code node, architect highlights
--purple-mid            #7c3aed     secondary purple
--purple-glow           rgba(168,85,247,0.15)   Claude glow

AMBER — Orchestration / Mercury agent
--amber-bright          #f59e0b     Mercury node, warnings, briefings
--amber-glow            rgba(245,158,11,0.15)   Mercury glow

ROSE — Human / Adi
--rose-bright           #f43f5e     Adi node, human-layer elements
--rose-glow             rgba(244,63,94,0.15)    Adi glow

TEXT
--text-primary          #e8edf5     main body text, headings
--text-secondary        #8899b0     supporting text, descriptions
--text-muted            #4a5568     metadata, placeholders, disabled
--text-inverse          #0a0e17     text on light/colored backgrounds

TERMINAL
--term-green            #00ff88     terminal output, success lines
--term-yellow           #ffd700     terminal prompt character $
--term-red              #ff4466     terminal errors
--term-dim              #3a5a4a     inactive terminal text
```

### 2.2 Gradient Tokens

```css
--grad-hero:    linear-gradient(135deg, #030609 0%, #0a0e17 50%, #0d1525 100%);
--grad-cyan:    linear-gradient(135deg, #00d4ff, #06b6d4);
--grad-aurora:  linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #10b981 100%);
--grad-card:    linear-gradient(135deg, #0f1623, #161e2e);
--grad-subtle:  linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.03) 100%);
```

### 2.3 Color Usage — Do/Don't

| ✅ DO | ❌ DON'T |
|-------|---------|
| Use `--cyan-bright` for primary CTAs | Use `--rose-bright` for CTAs (reserved for Adi) |
| Use `--term-green` only in terminal contexts | Use `--term-green` as a generic success color |
| Apply agent colors to agent-specific UI only | Mix two agent colors on one card/node |
| Use CSS variables everywhere | Hardcode hex values in component styles |
| Ensure 4.5:1 contrast for body text | Use `--text-muted` for important text |

---

## 3. Typography System

### 3.1 Font Families

```css
--font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
```

### 3.2 Type Scale

```css
/* Sizes */
--text-xs:    11px;   /* agent labels, mono tags */
--text-sm:    13px;   /* terminal text, small UI */
--text-base:  15px;   /* body text */
--text-md:    16px;   /* slightly larger body */
--text-lg:    18px;   /* card titles */
--text-xl:    20px;   /* subheadings */
--text-2xl:   24px;   /* stat values, medium headings */
--text-3xl:   30px;   /* section headings (mobile) */
--text-4xl:   36px;   /* section headings (desktop) */
--text-5xl:   48px;   /* hero subtitle */
--text-6xl:   64px;   /* hero headline */
```

### 3.3 Type Styles (Reusable Classes)

```css
/* Hero headline */
.type-hero {
  font-family: var(--font-sans);
  font-size: var(--text-6xl);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  /* Apply .gradient-text for aurora effect */
}

/* Section heading */
.type-section-heading {
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* Overline (above headings) */
.type-overline {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cyan-bright);
}

/* Card title */
.type-card-title {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
}

/* Body */
.type-body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.625;
  color: var(--text-secondary);
}

/* Agent label */
.type-agent-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* Terminal */
.type-terminal {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--term-green);
}

/* Commit hash */
.type-hash {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 400;
  color: var(--cyan-mid);
}

/* Meta / caption */
.type-meta {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 400;
  color: var(--text-muted);
}
```

### 3.4 Responsive Type

```css
/* Scale down on mobile */
@media (max-width: 767px) {
  .type-hero          { font-size: var(--text-4xl); }
  .type-section-heading { font-size: var(--text-3xl); }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .type-hero          { font-size: var(--text-5xl); }
  .type-section-heading { font-size: 32px; }
}
```

---

## 4. Spacing System

### 4.1 Base Scale

4px base unit. All spacing values are multiples of 4.

```css
--space-0:  0px;
--space-1:  4px;    /* tight internal padding */
--space-2:  8px;    /* compact elements */
--space-3:  12px;   /* tag padding, small gaps */
--space-4:  16px;   /* standard component padding */
--space-5:  20px;   /* slightly roomy */
--space-6:  24px;   /* section horizontal padding */
--space-8:  32px;   /* card padding */
--space-10: 40px;   /* between components */
--space-12: 48px;   /* between sections (mobile) */
--space-16: 64px;   /* between sections (tablet) */
--space-20: 80px;   /* section padding top/bottom (tablet) */
--space-24: 96px;   /* section padding top/bottom (desktop) */
--space-32: 128px;  /* hero top padding */
```

### 4.2 Component Spacing Rules

| Context | Value |
|---------|-------|
| Tag internal padding | `3px 8px` (space-1 space-2) |
| Card padding | `28px 24px` (7*4 by space-6) |
| Nav height | `64px` |
| Section horizontal padding | `var(--space-6)` → `var(--space-4)` mobile |
| Gap between cards | `20px` |
| Gap in nav links | `var(--space-8)` |
| Commit row padding | `var(--space-4) 20px` |
| Stats bar gap | `var(--space-4)` |

---

## 5. Border & Radius System

### 5.1 Border Widths

```css
--border-width-thin:    1px;    /* default */
--border-width-medium:  1.5px;  /* node borders */
--border-width-thick:   2px;    /* accent lines, focus rings */
```

### 5.2 Border Radius

```css
--radius-none: 0;
--radius-sm:   4px;    /* tags, badges, code */
--radius-md:   8px;    /* buttons, inputs */
--radius-lg:   12px;   /* terminal window, pipeline vis */
--radius-xl:   16px;   /* agent cards, commit feed */
--radius-2xl:  20px;   /* large containers */
--radius-full: 9999px; /* pills, dots */
```

### 5.3 Border Color Contexts

- **Container borders:** `var(--border-subtle)` default → `var(--border-default)` on hover
- **Agent node borders:** agent-color at 30% opacity default → 100% when active
- **Focus rings:** `var(--cyan-bright)` at 2px
- **Top accent lines on cards:** agent-color at 100%, 2px height

---

## 6. Shadow & Glow System

### 6.1 Elevation Shadows

```css
--shadow-none: none;
--shadow-sm:   0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3);
--shadow-md:   0 4px 6px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3);
--shadow-lg:   0 10px 15px rgba(0,0,0,0.5), 0 4px 6px rgba(0,0,0,0.3);
--shadow-xl:   0 20px 25px rgba(0,0,0,0.6), 0 10px 10px rgba(0,0,0,0.3);
```

### 6.2 Glow Shadows (colored)

```css
--shadow-cyan:    0 0 20px rgba(0,212,255,0.25), 0 0 60px rgba(0,212,255,0.08);
--shadow-emerald: 0 0 20px rgba(16,185,129,0.25), 0 0 60px rgba(16,185,129,0.08);
--shadow-purple:  0 0 20px rgba(168,85,247,0.25), 0 0 60px rgba(168,85,247,0.08);
--shadow-amber:   0 0 20px rgba(245,158,11,0.25), 0 0 60px rgba(245,158,11,0.08);
--shadow-rose:    0 0 20px rgba(244,63,94,0.25), 0 0 60px rgba(244,63,94,0.08);
```

### 6.3 Glow Usage

- **Active pipeline nodes:** use corresponding agent shadow
- **CTA button hover:** `var(--shadow-cyan)` + `var(--shadow-md)`
- **Card hover:** `var(--shadow-md)` + 0 0 20px agent-glow-color
- **Terminal cursor:** `text-shadow: 0 0 8px var(--term-green)`
- **Hero headline:** subtle `text-shadow` from aurora gradient (optional)

### 6.4 SVG Glow Filter

Define once in SVG `<defs>`:

```xml
<defs>
  <filter id="glow-cyan">
    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
    <feMerge>
      <feMergeNode in="blur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
  <!-- Repeat for each agent color -->
</defs>
```

Apply to data packets: `filter="url(#glow-cyan)"`.

---

## 7. Motion System

### 7.1 Duration Scale

```css
--duration-instant: 0ms;
--duration-fast:    150ms;   /* hover transitions */
--duration-base:    250ms;   /* standard transitions */
--duration-slow:    400ms;   /* page-level transitions */
--duration-slower:  600ms;   /* scroll fade-ins */
--duration-slowest: 800ms;   /* pipeline animations */
```

### 7.2 Easing Functions

```css
--ease-linear:  linear;
--ease-in:      cubic-bezier(0.4, 0, 1, 1);
--ease-out:     cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);   /* slight overshoot */
--ease-smooth:  cubic-bezier(0.16, 1, 0.3, 1);        /* smooth decel */
```

### 7.3 Transition Presets

```css
--transition-hover:   all var(--duration-fast) var(--ease-out);
--transition-base:    all var(--duration-base) var(--ease-in-out);
--transition-slow:    all var(--duration-slow) var(--ease-smooth);
--transition-spring:  transform var(--duration-base) var(--ease-spring),
                      box-shadow var(--duration-base) var(--ease-out);
```

### 7.4 Animation Keyframes

```css
/* Fade up (scroll reveal) */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Pulse glow ring */
@keyframes pulseRing {
  0%   { box-shadow: 0 0 0 0 currentColor; }
  70%  { box-shadow: 0 0 0 12px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

/* Dot pulse (status badge) */
@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.85); }
}

/* Cursor blink */
@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* Shimmer (skeleton loading) */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Float (scroll indicator) */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

/* Spin (replay button hover) */
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

### 7.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Exception: instant state changes still needed */
  .pipeline-node { transition: none; }
}
```

### 7.6 Stagger Delays

For cards and list items, apply inline style for stagger:

```css
/* Applied via JS or inline style attributes */
[data-stagger="0"] { animation-delay: 0ms; }
[data-stagger="1"] { animation-delay: 80ms; }
[data-stagger="2"] { animation-delay: 160ms; }
[data-stagger="3"] { animation-delay: 240ms; }
[data-stagger="4"] { animation-delay: 320ms; }
```

---

## 8. Component Specifications

### 8.1 Button Variants

```css
/* Primary button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 12px 28px;
  background: var(--cyan-bright);
  color: var(--text-inverse);
  font: 600 15px var(--font-sans);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition-hover);
}

.btn-primary:hover {
  background: #00bcee;
  box-shadow: var(--shadow-cyan), var(--shadow-md);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Secondary button (ghost) */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 11px 24px;
  background: transparent;
  color: var(--text-secondary);
  font: 500 15px var(--font-sans);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition-hover);
}

.btn-secondary:hover {
  border-color: var(--border-strong);
  color: var(--text-primary);
  background: var(--bg-raised);
}

/* Small icon button (replay, external link) */
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3);
  background: transparent;
  color: var(--text-secondary);
  font: 500 13px var(--font-sans);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: color var(--transition-fast);
}

.btn-icon:hover { color: var(--cyan-bright); }
```

### 8.2 Badge / Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px 14px;
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-full);
  font: 400 11px var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--term-green);
}

/* Dot inside badge */
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation: dotPulse 2s ease infinite;
}

/* Capability tag */
.tag {
  padding: 3px 8px;
  background: var(--bg-overlay);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  font: 500 11px var(--font-sans);
  letter-spacing: 0.04em;
  color: var(--text-muted);
  text-transform: lowercase;
}
```

### 8.3 Card Base

```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  transition: 
    transform var(--duration-base) var(--ease-out),
    border-color var(--duration-base) var(--ease-out),
    background var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

.card:hover {
  transform: translateY(-2px);
  background: var(--bg-raised);
  /* border-color and box-shadow set per agent variant */
}

/* Accent bar */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  /* background set per agent variant */
}
```

**Per-agent card variants:**

```css
.card-mercury::before    { background: var(--amber-bright); }
.card-mercury:hover      { border-color: rgba(245,158,11,0.4); box-shadow: var(--shadow-md), var(--shadow-amber); }

.card-claude::before     { background: var(--purple-bright); }
.card-claude:hover       { border-color: rgba(168,85,247,0.4); box-shadow: var(--shadow-md), var(--shadow-purple); }

.card-codex::before      { background: var(--emerald-bright); }
.card-codex:hover        { border-color: rgba(16,185,129,0.4); box-shadow: var(--shadow-md), var(--shadow-emerald); }

.card-github::before     { background: var(--cyan-bright); }
.card-github:hover       { border-color: rgba(0,212,255,0.4); box-shadow: var(--shadow-md), var(--shadow-cyan); }

.card-adi::before        { background: var(--rose-bright); }
.card-adi:hover          { border-color: rgba(244,63,94,0.4); box-shadow: var(--shadow-md), var(--shadow-rose); }
```

### 8.4 Agent Icon Container

```css
.agent-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-lg);
  font-size: 24px;
  margin-bottom: var(--space-4);
  /* background set per agent */
}

.agent-icon-mercury  { background: var(--amber-glow); }
.agent-icon-claude   { background: var(--purple-glow); }
.agent-icon-codex    { background: var(--emerald-glow); }
.agent-icon-github   { background: var(--cyan-glow); }
.agent-icon-adi      { background: var(--rose-glow); }
```

### 8.5 Section Header Block

```css
.section-header {
  margin-bottom: var(--space-12);
  /* center-aligned for most sections */
  text-align: center;
}

.section-overline {
  /* .type-overline */
  display: block;
  margin-bottom: var(--space-3);
}

.section-title {
  /* .type-section-heading */
  margin-bottom: var(--space-4);
}

.section-subtitle {
  /* .type-body */
  max-width: 560px;
  margin: 0 auto;
  color: var(--text-secondary);
}
```

### 8.6 Divider

```css
.divider {
  width: 48px;
  height: 2px;
  background: var(--grad-cyan);
  border-radius: var(--radius-full);
  margin: var(--space-4) auto;
}
```

### 8.7 Skeleton Loader Rows

```css
.skeleton-row {
  height: 68px;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: linear-gradient(
    90deg,
    var(--bg-surface) 25%,
    var(--bg-overlay) 50%,
    var(--bg-surface) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease infinite;
}
```

---

## 9. State System

### 9.1 Interactive States

Every interactive element must have defined styles for all four states:

| State | Description | Implementation |
|-------|-------------|---------------|
| **Default** | Resting state | Base styles |
| **Hover** | Mouse over | `:hover` pseudo-class |
| **Active** | Being pressed | `:active` pseudo-class |
| **Focus** | Keyboard focused | `:focus-visible` pseudo-class |

**Focus ring (global):**
```css
:focus-visible {
  outline: 2px solid var(--cyan-bright);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

**Never** use `outline: none` without providing a replacement.

### 9.2 Pipeline Node States

| State | Border | Background | Shadow | Transform |
|-------|--------|-----------|--------|-----------|
| idle | agent-color 30% | `--bg-raised` | none | scale(1) |
| active | agent-color 100% | agent-glow | agent glow shadow | scale(1.05) |
| complete | agent-color 60% | agent-glow 50% | faint glow | scale(1) |

### 9.3 Loading / Error States

**Loading:**
- Show skeleton rows (`.skeleton-row`)
- Skeleton rows: same height as commit rows, shimmer animation

**Error:**
- Replace content with error message
- Style: amber/warning color, warning icon, 1-line message
- Never crash the entire page; always catch fetch errors

**Empty:**
- Show "No commits found" with neutral styling

**Success:**
- Render content immediately; no success toast needed

---

## 10. Icon & Symbol Usage

### 10.1 Agent Symbols (in pipeline SVG and cards)

| Agent | Emoji | Don't use |
|-------|-------|-----------|
| Adi | 👤 | any other human emoji |
| Mercury | 🪐 | 🌍, 🪐 variants |
| Claude Code | 🏗️ | 🤖, 💻 |
| Codex | ⚙️ | 🔧, 🛠️ |
| GitHub | 🗂️ | any other folder emoji |

Use real emoji in HTML — no custom SVG icons for agents. Emoji are consistent, load-free, and universally understood.

### 10.2 UI Symbols (CSS-drawn or Unicode)

| Purpose | Symbol | Source |
|---------|--------|--------|
| Logo mark | `◆` | U+25C6 |
| External link | `↗` | U+2197 |
| Scroll indicator | `↓` | U+2193 |
| Replay | `↻` | U+21BB |
| Success | `✓` | U+2713 |
| Terminal prompt | `$` | U+0024 |
| Arrow right | `→` | U+2192 |
| Bullet | `▸` | U+25B8 |

### 10.3 No Icon Libraries

Do not import Font Awesome, Heroicons, Lucide, or any icon library. All symbols are Unicode or CSS-drawn. This keeps the page self-contained and fast.

---

## 11. Grid & Layout

### 11.1 Page Grid

```css
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

@media (max-width: 767px) {
  .container {
    padding: 0 var(--space-4);
  }
}
```

### 11.2 Card Grids

**3+2 Grid (agent cards — desktop):**
```css
.agent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Row 2: 2 cards, centered */
.agent-grid-row2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: calc((100% - 20px) * 2/3 + 20px);  /* match 2 of 3 cols */
  margin: 0 auto;
}

@media (max-width: 1023px) {
  .agent-grid,
  .agent-grid-row2 {
    grid-template-columns: repeat(2, 1fr);
    max-width: none;
  }
}

@media (max-width: 767px) {
  .agent-grid,
  .agent-grid-row2 {
    grid-template-columns: 1fr;
  }
}
```

**Stats bar:**
```css
.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

@media (max-width: 767px) {
  .stats-bar {
    grid-template-columns: 1fr;
  }
}
```

### 11.3 Pipeline Layout

```css
.pipeline-container {
  position: relative;
  width: 100%;
  height: 520px;
  overflow: visible;  /* allow glow to overflow */
}

/* SVG fills container */
.pipeline-svg {
  width: 100%;
  height: 100%;
}

/* Mobile: vertical stack */
@media (max-width: 767px) {
  .pipeline-container {
    height: auto;
    min-height: 600px;
  }
}
```

### 11.4 Z-Index Scale

```css
--z-below:   -1;
--z-base:     0;
--z-raised:  10;
--z-nav:     100;
--z-overlay: 200;
--z-modal:   300;
```

---

## 12. Dark Mode Notes

This site is **dark-only**. There is no light mode. `prefers-color-scheme: light` media queries are not needed. If a system forces light mode, the dark CSS custom properties still apply because they're on `:root`, not inside a media query.

**Do not add `color-scheme: light dark`** — keep it `color-scheme: dark` only.

```css
html {
  color-scheme: dark;
}

body {
  background-color: var(--bg-void);
  color: var(--text-primary);
}
```

**System font fallback:** `system-ui` in the font stack will fall back to the system's default font gracefully in offline scenarios (though Inter should always load via Google Fonts CDN).

---

*Design system authored by Claude Code (claude-sonnet-4-6)*  
*Implement every token in `style.css :root`. Never hardcode values.*
