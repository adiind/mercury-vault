# Agent Workflow Site — Architecture Brief

## Vision
A live, polished, single-page website deployed via GitHub Pages at `https://adiind.github.io/mercury-vault/` that demonstrates Adi's multi-agent AI orchestration pipeline. This is NOT a static flowchart — it's an interactive, animated, dark-themed developer portfolio piece that makes people go "wait, that's ALL automated?"

## What This Site Demonstrates
Adi's setup:
- **Adi** (human) → issues tasks via Telegram
- **Mercury** (Hermes agent, moonshot model) → receives tasks, decomposes them, orchestrates execution across sub-agents
- **Claude Code** → architect layer: designs writes, creates markdown/docs, plans structure
- **Codex** (OpenAI) → execution layer: builds features, iterates, commits
- **Git/GitHub** → everything auto-syncs; the site itself is proof of the pipeline
- **Cron jobs** → automated morning briefings, Obsidian vault sync every 30 min
- **Obsidian vault** → knowledge base, synced via git hook + cron

## Technical Requirements
- Single `index.html` (or minimal multi-page), self-contained or with minimal external assets
- Dark theme: deep blacks/dark grays, cyan/emerald/purple accent palette
- Interactive animated flowchart showing the agent pipeline — nodes light up in sequence, show data flowing between agents
- Typed-text terminal animations showing Mercury thinking/delegating
- Section: "Recent Activity" pulling from GitHub API (real commit feed from the vault repo)
- Smooth scroll, fade-in animations, responsive design
- Deployed via GitHub Pages (serve from `/docs` folder or root)

## Architecture (Claude Code's Job)
Claude Code must:
1. Create the full project structure
2. Write the HTML/CSS/JS with the interactive pipeline visualization
3. Write a `docs/` folder version for GitHub Pages deployment
4. Write a README.md explaining what the site demonstrates
5. Include a diagram/flow markdown file showing the agent orchestration architecture
6. Make it genuinely impressive — this is a portfolio piece, not a tutorial exercise

## Execution Model
1. **Claude Code** → Architect, writes all markdown/docs, designs the structure
2. **Codex** → Takes Claude's plan and builds the HTML/CSS/JS, iterates until verifiable
3. **Mercury (me)** → Final QC, verification, GitHub push, Pages deployment

## File Structure
```
projects/agent-workflow-site/
├── docs/                  # GitHub Pages root
│   ├── index.html
│   ├── style.css
│   └── script.js
├── PLAN.md               # This file
├── ARCHITECTURE.md       # Agent orchestration docs (Claude writes this)
└── README.md            # Project readme
```

## Success Criteria
- [ ] Site is live on GitHub Pages
- [ ] Interactive agent pipeline visualization works
- [ ] Real GitHub commit feed displays
- [ ] Mobile responsive
- [ ] Dark theme, polished UI
- [ ] All files committed and pushed to `mercury-vault` repo
