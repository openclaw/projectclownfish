---
repo: openclaw/openclaw
cluster_id: gitcrawl-13613-dedupe-only-20260429-remote
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
  - "#42213"
candidates:
  - "#42011"
  - "#42213"
cluster_refs:
  - "#38884"
  - "#42011"
  - "#42213"
  - "#46376"
  - "#49853"
  - "#52324"
  - "#56044"
  - "#60635"
  - "#68190"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42213 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 13613 on 2026-04-29."
---

# Gitcrawl Cluster 13613

Generated from local gitcrawl run cluster 13613 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI chat can stay stuck busy and stop flushing queued messages after a long run

Cluster shape from gitcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 2
- representative: #42213, currently open in local store
- latest member update: 2026-04-28T21:55:43.787330315Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38884 [Bug]: Control UI WebChat: queued user messages not displayed in conversation thread
- #46376 [Bug]: Stop button disappears after gateway restart; Watch process runs uncontrolled with no interrupt mechanism
- #49853 [Bug]: [Control UI] Stop button disappears during active chat/run (2026.3.13)"
- #52324 [Bug]: Message queue / input buffer while agent is processing
- #56044 Recent update broke /stop and interrupt behavior — collect mode swallows user messages
- #60635 🚨 Critical: AI ignores user interrupt signals during long-running tasks
- #68190 [Bug]: Chat messages sent during active tool execution are silently dropped — no interrupt mechanism

Open candidates:

- #42011 [Bug]: Control UI chat can stay stuck on "Stop" after embedded run timeout on Windows
- #42213 [Bug]: Control UI chat can stay stuck busy and stop flushing queued messages after a long run
