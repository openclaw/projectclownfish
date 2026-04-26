---
repo: openclaw/openclaw
cluster_id: ghcrawl-156630-autonomous-smoke
mode: autonomous
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
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#70472"
candidates:
  - "#50065"
  - "#60213"
  - "#67619"
  - "#68494"
  - "#70330"
  - "#70472"
  - "#70744"
cluster_refs:
  - "#50065"
  - "#60213"
  - "#67619"
  - "#68494"
  - "#70330"
  - "#70472"
  - "#70744"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #70472 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156630 on 2026-04-26."
---

# GHCrawl Cluster 156630

Generated from local ghcrawl run cluster 156630 for `openclaw/openclaw`.

Display title:

> [Bug]: Context overflow / compaction can orphan agent:main:main and silently rotate WebChat to a new session

Cluster shape from ghcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- representative: #70472, currently open in local store
- latest member update: 2026-04-24T19:47:39.733Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50065 [Bug]: direct session can exceed configured contextWindow without timely compaction
- #60213 🐛 Bug: OpenClaw compaction after context_window_exceeded silently kills session — all conversation memory lost
- #67619 [Bug]: Agent response context lost after switching between chat sessions without explicit save
- #68494 Telegram channel stalls after long-running use: main session context overflow and repeated send/getUpdates network failures
- #70330 WebChat can silently rotate agent:main:main after gateway restart, hiding prior session/checkpoints
- #70472 [Bug]: Context overflow / compaction can orphan agent:main:main and silently rotate WebChat to a new session
- #70744 Telegram direct session can become unrecoverable after context overflow and auto-compaction hangs
