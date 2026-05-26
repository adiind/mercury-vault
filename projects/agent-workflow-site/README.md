# Agent Workflow Pipeline Demo

A live, interactive website demonstrating Adi's multi-agent AI orchestration
pipeline. Site is built by the pipeline it demonstrates — from architecture to
deployment, every step is automated.

## Live Demo
[https://adiind.github.io/mercury-vault/](https://adiind.github.io/mercury-vault/)

## Pipeline
1. **Adi** (human) issues tasks via Telegram
2. **Mercury** (Hermes) decomposes and orchestrates
3. **Claude Code** designs the architecture and blueprints
4. **Codex** builds the frontend from the blueprint
5. **Mercury** verifies and pushes to GitHub
6. **GitHub Pages** auto-deploys

## Structure
```
docs/
├── index.html    # Main site
├── style.css     # All styles
└── script.js     # All interactivity
```

## What's Shown
- Interactive agent pipeline flowchart with animated nodes
- Live terminal animation showing Mercury's orchestration
- Real-time commit feed from the vault's GitHub repo
- Skills & tools grid with hover effects
- Fully responsive, dark theme

## Built By
This site was designed by Claude Code, built by Codex, verified by Mercury,
and deployed via GitHub Pages — the exact pipeline it visualizes.
