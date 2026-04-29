---
repo: openclaw/openclaw
cluster_id: gitcrawl-1468-dedupe-only-20260429-remote
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#67619"
candidates:
  - "#68494"
  - "#70330"
  - "#70472"
cluster_refs:
  - "#45641"
  - "#50065"
  - "#51014"
  - "#55343"
  - "#56682"
  - "#60213"
  - "#61470"
  - "#67619"
  - "#68494"
  - "#69300"
  - "#70330"
  - "#70472"
  - "#70744"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67619 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1468 on 2026-04-29."
---

# Gitcrawl Cluster 1468

Generated from local gitcrawl run cluster 1468 for `openclaw/openclaw`.

Display title:

> [Bug]: Agent response context lost after switching between chat sessions without explicit save

Cluster shape from gitcrawl:

- total members: 13
- issues: 13
- pull requests: 0
- open candidates in local store: 3
- representative: #67619, currently closed in local store
- latest member update: 2026-04-28T07:04:52.625750709Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45641 [Bug]: webchat channel does not receive gateway restart notification (sentinel delivery fails)
- #50065 [Bug]: direct session can exceed configured contextWindow without timely compaction
- #51014 Telegram main session can wedge after long-running context and stop replying
- #55343 [Bug]: Agent loses conversation history between sessions
- #56682 [Bug]: webchat session context lost after Gateway restart (SIGUSR1)
- #60213 🐛 Bug: OpenClaw compaction after context_window_exceeded silently kills session — all conversation memory lost
- #61470 Telegram main session stops responding every 3-7 days (requires gateway restart)
- #67619 [Bug]: Agent response context lost after switching between chat sessions without explicit save
- #69300 [Bug]: Agent harness compaction short-circuits OpenClaw memory flush and session bookkeeping, leaving session state unbounded
- #70744 Telegram direct session can become unrecoverable after context overflow and auto-compaction hangs

Open candidates:

- #68494 Telegram channel stalls after long-running use: main session context overflow and repeated send/getUpdates network failures
- #70330 WebChat can silently rotate agent:main:main after gateway restart, hiding prior session/checkpoints
- #70472 [Bug]: Context overflow / compaction can orphan agent:main:main and silently rotate WebChat to a new session
