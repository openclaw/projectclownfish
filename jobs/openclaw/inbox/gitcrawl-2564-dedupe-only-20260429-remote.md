---
repo: openclaw/openclaw
cluster_id: gitcrawl-2564-dedupe-only-20260429-remote
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
  - "#62929"
candidates:
  - "#63195"
cluster_refs:
  - "#45905"
  - "#48723"
  - "#62928"
  - "#62929"
  - "#63195"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62929 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2564 on 2026-04-29."
---

# Gitcrawl Cluster 2564

Generated from local gitcrawl run cluster 2564 for `openclaw/openclaw`.

Display title:

> [Bug] Session content disappears from UI during Heartbeat execution

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 1
- representative: #62929, currently closed in local store
- latest member update: 2026-04-28T05:49:57.647634861Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45905 [Bug]: Heartbeat session shows as gray blank in Control UI
- #48723 [Bug]: Heartbeat 在主会话中执行工具调用后陷入无限循环（~30秒触发一次）
- #62928 Heartbeat执行时会话内容从UI消失
- #62929 [Bug] Session content disappears from UI during Heartbeat execution

Open candidates:

- #63195 Bug: Control UI and TUI sessions intermittently disappear during normal use
