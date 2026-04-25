---
repo: openclaw/openclaw
cluster_id: ghcrawl-143799-unhandled-promise-rejection-agent-listener-invoked-outside-activ
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#61917"
candidates:
  - "#61741"
  - "#62754"
  - "#63220"
  - "#65285"
  - "#65983"
  - "#69920"
cluster_refs:
  - "#61733"
  - "#61741"
  - "#61812"
  - "#61912"
  - "#61917"
  - "#61931"
  - "#61944"
  - "#61947"
  - "#62137"
  - "#62190"
  - "#62253"
  - "#62256"
  - "#62301"
  - "#62342"
  - "#62362"
  - "#62378"
  - "#62435"
  - "#62477"
  - "#62563"
  - "#62670"
  - "#62746"
  - "#62754"
  - "#62782"
  - "#62786"
  - "#62793"
  - "#62800"
  - "#62840"
  - "#62945"
  - "#63151"
  - "#63220"
  - "#63390"
  - "#63699"
  - "#65285"
  - "#65983"
  - "#69920"
canonical_hint: "ghcrawl representative #61917 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143799 on 2026-04-25."
---

# GHCrawl Cluster 143799

Generated from local ghcrawl run cluster 143799 for `openclaw/openclaw`.

Display title:

> Unhandled promise rejection: Agent listener invoked outside active run

Cluster shape from ghcrawl:

- total members: 35
- issues: 35
- pull requests: 0
- open candidates in local store: 6
- representative: #61917, currently closed in local store
- latest member update: 2026-04-25T17:12:54.250Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #61733 [Bug]: openclaw gateway shut down suddenly without prompt
- #61812 [2026.4.5 regression] Agent crash when bash tool calls 'openclaw message send' — 'Agent listener invoked outside active run'
- #61912 2026.4.5: gateway can crash in exec/PTY flows with 'Agent listener invoked outside active run'
- #61917 Unhandled promise rejection: Agent listener invoked outside active run
- #61931 [2026.4.5 regression] Gateway crash when acpx calls openclaw message send via exec/PTY — Agent listener invoked outside active run
- #61944 [2026.4.5 regression] Telegram replies lost: Agent listener invoked outside active run (graphiti autoCapture + exec stdout)
- #61947 Bug: agent.wait timeout causes unhandled promise rejection and crashes gateway
- #62137 Unhandled promise rejection: Agent listener invoked outside active run (exec/PTY)
- #62190 [Bug]: Gateway restarts due to Unhandled promise rejection
- #62253 Gateway crashes from unhandled promise: 'Agent listener invoked outside active run'
- #62256 [Bug]: Unhandled promise rejection: Error: Agent listener invoked outside active run
- #62301 [Bug]: Unhandled promise rejection "Agent listener invoked outside active run" with openai-codex/gpt-5.4 provider
- #62342 [Bug]: Agent listener invoked outside active run causes Gateway crash
- #62362 Gateway crashes with 'Agent listener invoked outside active run' unhandled promise rejection
- #62378 Gateway crashes when background PTY output arrives after run is no longer active
- #62435 Gateway crash: Agent listener invoked outside active run
- #62477 Unhandled promise rejection: Agent listener invoked outside active run when subprocess stdout arrives after agent run ends
- #62563 Gateway: unhandled promise rejection from pi-agent-core Agent.processEvents after run abort/timeout
- #62670 [Bug]: Agent listener invoked outside active run — concurrent WhatsApp + Telegram sessions
- #62746 Gateway crash: Unhandled promise rejection - Agent listener invoked outside active run
- #62782 [pi-agent-core] Agent listener invoked outside active run — unhandled promise rejection
- #62786 Bug: Unhandled promise rejection - Agent listener invoked outside active run
- #62793 [Bug]: Subagent residual output causes "Agent listener invoked outside active run" → Gateway crash
- #62800 [Bug] Gateway 2026.4.5 crashes: Agent listener invoked outside active run
- #62840 [Bug]:  Agent listener invoked outside active run - Gateway crashes on WhatsApp message
- #62945 [BUG] Gateway crashes every few minutes with unhandled promise rejection
- #63151 [Bug]: pi-agent-core Unhandled Promise Rejection in async callback timing
- #63390 [Bug]: Agent listener invoked outside active run crashes Gateway (exec stdout race condition)
- #63699 [Bug]: Gateway crashes with unhandled promise rejection when exec'd process writes to stderr after agent run ends

Open candidates:

- #61741 [Bug]: Race condition in subagent/session cleanup causes late child stdout to hit cleared active run, leading to announce timeout, missing-session-entry, and orphaned child processes
- #62754 Gateway: unhandled promise rejection from pi-agent-core Agent.processEvents after run abort/timeout
- #63220 Gateway: unhandled rejection from pi-agent-core Agent.processEvents after run abort corrupts in-memory run state
- #65285 Gateway crashes with "Agent listener invoked outside active run"
- #65983 Background PTY exec runs can survive restart/session loss and become untracked orphan process trees
- #69920 Unhandled promise rejection: Agent listener invoked outside active run
