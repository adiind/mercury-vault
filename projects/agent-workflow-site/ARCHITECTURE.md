# ARCHITECTURE.md — Adi's Multi-Agent Pipeline

## Overview

This site is built by the pipeline it demonstrates. Every commit, every file,
every deployment is the output of Adi's multi-agent orchestration system.

## The Agents

```
┌─────────┐     ┌───────────┐     ┌──────────────┐     ┌────────┐     ┌─────────┐
│   ADI   │────▶│  MERCURY  │────▶│ CLAUDE CODE  │────▶│ CODEX  │────▶│ GITHUB  │
│ (Human) │◀────│ (Hermes)  │◀────│ (Architect)  │◀────│ (Build)│◀────│ (Sync)  │
└─────────┘     └───────────┘     └──────────────┘     └────────┘     └─────────┘
```

### Adi (Human)
- Issues tasks via Telegram
- Makes high-level decisions
- Never touches code directly unless reviewing
- Approves/merges via GitHub

### Mercury (Orchestrator)
- Running on Hermes Agent, moonshot model
- Receives tasks from Adi via Telegram
- Decomposes tasks into sub-tasks
- Orchestrates which agent does what
- Quality control and final verification
- Manages cron jobs, vault sync, briefings
- **Does NOT write code** — delegates to Claude/Codex

### Claude Code (Architect)
- Anthropic's autonomous coding CLI
- Designs system architecture
- Creates documentation and blueprints
- Plans file structure and component hierarchy
- **Does NOT execute builds** — hands off to Codex

### Codex (Executor)
- OpenAI's autonomous coding CLI
- Takes Claude's blueprints
- Builds HTML/CSS/JS
- Iterates until verifiable
- Commits and pushes to GitHub

### GitHub (Infrastructure)
- Version control for everything
- Obsidian vault synced via git
- Site deployed via GitHub Pages
- Activity feed is live from the API

## The Pipeline in Action

1. Adi messages Mercury: "Build a pipeline demo site"
2. Mercury decomposes: architecture → blueprint → build → verify
3. Mercury delegates to Claude Code: "Create BLUEPRINT.md"
4. Claude Code designs the full technical spec
5. Mercury verifies the blueprint
6. Mercury delegates to Codex: "Build from BLUEPRINT.md"
7. Codex builds HTML/CSS/JS, commits each iteration
8. Mercury checks the output, pushes to main
9. GitHub Pages auto-deploys
10. Mercury confirms to Adi: "Site is live"

## Infrastructure

| Component      | Tool               | Auto? |
|----------------|--------------------|:-----:|
| Orchestration  | Mercury (Hermes)   | ✅     |
| Architecture   | Claude Code        | ✅     |
| Execution      | Codex              | ✅     |
| Version Control| Git + GitHub       | ✅     |
| Site Hosting   | GitHub Pages       | ✅     |
| Knowledge Base | Obsidian + Git     | ✅     |
| Automation     | Cron jobs          | ✅     |
| Human Oversight| Adi (Telegram)     | 👀    |

## Vault Sync
- Obsidian vault at `~/Documents/Mercury Vault`
- Post-session git hook auto-commits changes
- Cron job syncs every 30 min as fallback
- All notes are markdown, all synced to GitHub

## Cron Jobs
- `mercury-morning-briefing`: Daily 9 AM, reads vault, sends summary
- `obsidian-auto-sync-v3`: Every 30 min, git add/commit/push
