---
repo: openclaw/openclaw
cluster_id: ghcrawl-199256-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#59561"
candidates:
  - "#59274"
  - "#59561"
  - "#60585"
  - "#61895"
  - "#68916"
  - "#72080"
cluster_refs:
  - "#59274"
  - "#59561"
  - "#60585"
  - "#61895"
  - "#68916"
  - "#72080"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #59561 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 199256 on 2026-04-26."
---

# GHCrawl Cluster 199256

Generated from local ghcrawl run cluster 199256 for `openclaw/openclaw`.

Display title:

> [Bug]: ACP sessions created via sessions_spawn can enter stale running state with no close/kill mechanism

Cluster shape from ghcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 6
- representative: #59561, currently open in local store
- latest member update: 2026-04-26T11:49:56.649Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59274 [Bug]: ACP sessions die immediately with "queue owner unavailable" on local loopback gateway (v2026.4.1, macOS arm64)
- #59561 [Bug]: ACP sessions created via sessions_spawn can enter stale running state with no close/kill mechanism
- #60585 ACP runtime sessions fail with 'acpx exited with code 1' — sessions_spawn runtime:"acp" broken in 2026.4.2
- #61895 [Bug]: Persistent ACP sessions accumulate orphan claude-agent-acp processes after ensureSession repair — progressive memory leak
- #68916 [Bug]: ACP oneshot sessions leave orphaned processes — session reset does not clean up child ACP session keys
- #72080 [Bug]: ACP child sessions report stopReason="stop" with usage=0 before harness completes, causing parent agents to abandon mid-flight
