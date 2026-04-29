---
repo: openclaw/openclaw
cluster_id: gitcrawl-14025-dedupe-only-20260429-remote
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
  - "#56381"
candidates:
  - "#42690"
  - "#48067"
  - "#61019"
  - "#66468"
cluster_refs:
  - "#41877"
  - "#42690"
  - "#45067"
  - "#45955"
  - "#47605"
  - "#48067"
  - "#50524"
  - "#52189"
  - "#52603"
  - "#54883"
  - "#56093"
  - "#56381"
  - "#60663"
  - "#61019"
  - "#65967"
  - "#66468"
  - "#70405"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56381 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14025 on 2026-04-29."
---

# Gitcrawl Cluster 14025

Generated from local gitcrawl run cluster 14025 for `openclaw/openclaw`.

Display title:

> session_status / /status shows requested model, not active model when fallback is active

Cluster shape from gitcrawl:

- total members: 17
- issues: 17
- pull requests: 0
- open candidates in local store: 4
- representative: #56381, currently closed in local store
- latest member update: 2026-04-28T21:55:43.756387638Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41877 TUI Model Display Not Updating After session_status Switch in 2026.3.8
- #45067 Bug: "Configured models" list doesn't sync with primary model after manual UI switch
- #45955 UI Model Switching Not Taking Effect Until Full Restart
- #47605 /status should show configured fallback models even when not actively falling back
- #50524 Telegram /model switch confirms but doesn't take effect on active session
- #52189 [Bug]: session_status reports default model instead of channels.modelByChannel effective model
- #52603 [Bug]: Telegram direct sessions return 400 "The requested model is not supported" for github-copilot models, while CLI sessions on the same host succeed
- #54883 Telegram routed agent sessions do not honor agents.list[].model per-agent override
- #56093 Model switch confirmation shows misleading warning when override is applied
- #56381 session_status / /status shows requested model, not active model when fallback is active
- #60663 Transcript reports system default model instead of active session model
- #65967 TUI model name not updated after fallback - still shows old model instead of actual running model
- #70405 Status card does not show currently active model after fallback

Open candidates:

- #42690 Bug: session_status reports session default model instead of routed active model
- #48067 TUI status bar shows agents.defaults.model instead of resolved agent model
- #61019 UX Bug: Active sessions do not inherit global model default changes
- #66468 TUI status bar shows stale model during provider fallback
