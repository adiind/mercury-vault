# Mercury Vault — Agent Workflow Demo Site

> **A live portfolio piece demonstrating Adi's multi-agent AI orchestration pipeline.**  
> The site itself was built by the pipeline it describes.

**Live:** [`https://adiind.github.io/mercury-vault/`](https://adiind.github.io/mercury-vault/)

---

## What This Is

This is not a static flowchart. It's an interactive, animated, dark-themed single-page site that shows how Adi's autonomous AI development environment works — in real time, pulling live data from the GitHub API.

The pipeline demonstrated:

```
Adi (Telegram) → Mercury (Orchestrator) → Claude Code (Architect) → Codex (Builder) → Git/GitHub → Live Site
```

Every file in this repo was created by one of those agents. Adi wrote zero lines of code.

---

## The Pipeline

| Agent | Role | Model |
|-------|------|-------|
| **Adi** | Human principal — issues tasks via Telegram | — |
| **Mercury** | Orchestrator — decomposes tasks, routes to agents, does QC | Moonshot |
| **Claude Code** | Architect — writes docs, specs, structural files | Claude Sonnet 4.6 |
| **Codex** | Executor — builds the frontend from Claude's blueprint | OpenAI Codex |
| **Git/GitHub** | Persistence layer — everything lands here | — |
| **Cron Jobs** | Heartbeat — morning briefings, Obsidian sync every 30min | — |

---

## What the Site Shows

1. **Animated Pipeline Visualization** — interactive flowchart where agent nodes light up in sequence and data pulses between them
2. **Typed Terminal Animations** — simulated Mercury output: "receiving task... decomposing... routing to Claude Code..."
3. **Live GitHub Activity Feed** — real commit feed pulled from the `mercury-vault` repo via GitHub API
4. **Agent Cards** — each agent explained with its role, model, and capabilities
5. **How It Works** — plain-language walkthrough of a task lifecycle
6. **Live Stats** — commit count, active repos, last activity timestamp

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JS (no framework dependencies) |
| Animations | CSS keyframes + JS-driven class toggling |
| Data | GitHub REST API v3 (unauthenticated, public repo) |
| Deployment | GitHub Pages (served from `/docs` folder) |
| Fonts | Google Fonts: Inter + JetBrains Mono |
| Icons | None (emoji + CSS shapes keep it self-contained) |

---

## File Structure

```
projects/agent-workflow-site/
├── docs/                    # GitHub Pages root (Codex builds here)
│   ├── index.html           # Single-page app
│   ├── style.css            # All styles + CSS custom properties
│   ├── script.js            # Animations, GitHub API, interactions
│   ├── BLUEPRINT.md         # Technical spec (Claude → Codex handoff)
│   └── STYLE.md             # Design system documentation
├── PLAN.md                  # Original brief from Mercury
├── ARCHITECTURE.md          # System design + agent diagrams (this is Claude's)
└── README.md                # You are here
```

---

## Deployment

GitHub Pages is configured to serve from the `/docs` folder on the `main` branch.

**To deploy:**
```bash
git add docs/
git commit -m "codex: build frontend — agent workflow site"
git push origin main
# Pages auto-deploys within ~60 seconds
```

**To verify:**
```bash
curl -s -o /dev/null -w "%{http_code}" https://adiind.github.io/mercury-vault/
# Expect: 200
```

---

## Design Principles

- **Dark by default** — deep blacks (#0a0a0a), no white backgrounds
- **Accent trio** — Cyan (#00d4ff), Emerald (#10b981), Purple (#a855f7)
- **Monospace where it matters** — terminal elements use JetBrains Mono
- **Animation serves meaning** — every animation communicates something about the pipeline, not decoration
- **No framework overhead** — vanilla JS, ships fast, works offline (minus live API)

---

## Success Criteria

- [x] ARCHITECTURE.md written (Claude Code ✓)
- [x] docs/BLUEPRINT.md written (Claude Code ✓)
- [x] docs/STYLE.md written (Claude Code ✓)
- [ ] docs/index.html built (Codex — pending)
- [ ] docs/style.css built (Codex — pending)
- [ ] docs/script.js built (Codex — pending)
- [ ] Site live on GitHub Pages (Mercury — pending)
- [ ] Interactive pipeline visualization works
- [ ] Live GitHub commit feed displays
- [ ] Mobile responsive
- [ ] Mercury QC sign-off

---

## Meta

This README was written by **Claude Code** (architect layer) as part of the agent pipeline this site documents. It was not written by Adi. The commit that introduced this file carries that provenance.

---

*Part of the [mercury-vault](https://github.com/adiind/mercury-vault) autonomous development stack.*
