# BLUEPRINT.md — Technical Specification

## File Structure
```
docs/
├── index.html    # Single-page app, all structure
├── style.css     # All styles, CSS custom properties
└── script.js     # All interactivity, animations, API calls
```

## Color Palette (CSS Custom Properties)
```css
:root {
  --bg-primary:    #0a0a0f;
  --bg-secondary:  #12121a;
  --bg-card:       #1a1a2e;
  --bg-card-hover: #222240;
  --accent-cyan:   #00f0ff;
  --accent-purple: #7c3aed;
  --accent-emerald:#10b981;
  --accent-orange: #f59e0b;
  --accent-red:    #ef4444;
  --text-primary:  #e2e8f0;
  --text-secondary:#94a3b8;
  --text-muted:    #475569;
  --border:        #2a2a3e;
  --glow-cyan:     0 0 20px rgba(0, 240, 255, 0.3);
  --glow-purple:   0 0 20px rgba(124, 58, 237, 0.3);
}
```

## Typography
```css
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
--font-sans: 'Inter', system-ui, sans-serif;
--text-xs:   0.75rem;
--text-sm:   0.875rem;
--text-base: 1rem;
--text-lg:   1.125rem;
--text-xl:   1.25rem;
--text-2xl:  1.5rem;
--text-3xl:  2rem;
--text-4xl:  2.5rem;
```

## Layout Sections (in order)

### 1. HERO
- Full viewport height, centered content
- Animated gradient background (subtle grid pattern overlay)
- H1: "Mercury Pipeline" with typed-text animation
- Subtitle: "Multi-Agent AI Orchestration in Action"
- Three stats cards below: "Agents: 4", "Pipeline: Automated", "Commits: [live count]"
- Scroll indicator at bottom (bouncing arrow)

### 2. AGENT PIPELINE (Interactive Flowchart)
- Horizontal flow diagram: ADI → MERCURY → CLAUDE CODE → CODEX → GITHUB
- Each agent is a **node** (rounded rectangle with icon + label + status)
- Nodes connected by animated lines (dashed, glowing particles flowing)
- **On scroll-triggered animation**: nodes light up sequentially left-to-right
- Each node shows on hover: role description tooltip
- Node colors:
  - Adi: --accent-orange (human)
  - Mercury: --accent-cyan (orchestrator)
  - Claude Code: --accent-purple (architect)
  - Codex: --accent-emerald (executor)
  - GitHub: --accent-red (infrastructure)

### 3. HOW IT WORKS (Terminal Animation)
- Simulated terminal window (dark, with title bar dots)
- Typed text animation showing:
  ```
  > Mercury received: "Build me a pipeline demo"
  > Decomposing task...
  > Delegating architecture to Claude Code...
  > Claude created BLUEPRINT.md ✓
  > Delegating build to Codex...
  > Codex iterating... (3 commits)
  > Verifying build...
  > ✅ Pipeline complete. Pushing to main.
  ```
- Blinking cursor after terminal output

### 4. LIVE ACTIVITY (GitHub API)
- Section title: "Live Vault Activity"
- Fetches from: `https://api.github.com/repos/adiind/mercury-vault/commits?per_page=6`
- Display as a vertical timeline: commit message, author, time ago, SHA (truncated)
- Each commit shows with a pulse animation on load
- Error state: "Unable to fetch — showing cached data"

### 5. SKILLS & TOOLS (Grid Cards)
- 6 cards in a responsive grid showing key tools:
  - Claude Code (Architect)
  - Codex (Executor)
  - Mercury (Orchestrator)
  - Obsidian (Knowledge Base)
  - GitHub (Version Control)
  - Cron (Automation)
- Each card: icon, name, one-line description, glow effect on hover

### 6. FOOTER
- "Built by the pipeline it demonstrates"
- Link to GitHub repo
- Current year

## Animation Specifications

### Typed Text (Terminal Section)
```javascript
// Type each character with 30-50ms delay
// Newlines trigger 200ms pause
// Cursor blinks at end (500ms interval)
```

### Pipeline Node Activation
```javascript
// Intersection Observer triggers when section enters viewport
// Each node activates 400ms after the previous
// Activation: scale 0.9 → 1.0, opacity 0 → 1, add glow
// Connection line draws between nodes (SVG stroke-dashoffset animation, 800ms)
```

### Scroll Fade-ins
```javascript
// Elements with class .fade-in start at opacity 0, translateY(20px)
// Intersection Observer triggers at 15% visibility
// Animate to opacity 1, translateY(0) over 600ms, ease-out
```

## Responsive Breakpoints
```css
/* Mobile first */
@media (min-width: 640px)  { /* sm: 2-col grid */ }
@media (min-width: 768px)  { /* md: horizontal pipeline */ }
@media (min-width: 1024px) { /* lg: full layout */ }
@media (min-width: 1280px) { /* xl: max-width 1200px container */ }
```

- Pipeline goes vertical on mobile, horizontal on md+
- Hero text scales down on mobile
- Grid cards: 1 col mobile → 2 col sm → 3 col lg

## GitHub API Integration
```javascript
async function fetchCommits() {
  const res = await fetch('https://api.github.com/repos/adiind/mercury-vault/commits?per_page=6');
  const data = await res.json();
  // Render each commit: commit.message.split('\n')[0], commit.author.login, commit.commit.author.date, commit.sha.slice(0,7)
}
// Call on DOMContentLoaded
// Cache in sessionStorage for 5 min to avoid rate limits
```

## HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta, title, Google Fonts (Inter + JetBrains Mono), inline critical CSS or link style.css -->
</head>
<body>
  <nav>...</nav>
  <main>
    <section id="hero">...</section>
    <section id="pipeline">...</section>
    <section id="terminal">...</section>
    <section id="activity">...</section>
    <section id="tools">...</section>
  </main>
  <footer>...</footer>
  <script src="script.js"></script>
</body>
</html>
```

## Implementation Notes for Codex
1. Write valid HTML5, CSS3, vanilla JS (no frameworks)
2. All JS must be in one `script.js` file
3. All CSS in one `style.css` (use CSS custom properties)
4. HTML is one `index.html` file
5. No external dependencies except Google Fonts
6. Must pass W3C validation
7. Mobile-first responsive
8. Accessibility: proper ARIA labels, semantic HTML, focus states
