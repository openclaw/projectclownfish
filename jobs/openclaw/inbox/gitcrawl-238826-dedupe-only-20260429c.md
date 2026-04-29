---
repo: openclaw/openclaw
cluster_id: gitcrawl-238826-dedupe-only-20260429c
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
  - "#59561"
candidates:
  - "#59274"
  - "#59561"
  - "#60585"
  - "#61895"
  - "#68916"
cluster_refs:
  - "#59274"
  - "#59561"
  - "#60585"
  - "#61895"
  - "#68916"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #59561 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238826 on 2026-04-29."
---

# Gitcrawl Cluster 238826

Generated from local gitcrawl run cluster 238826 for `openclaw/openclaw`.

Display title:

> [Bug]: ACP sessions created via sessions_spawn can enter stale running state with no close/kill mechanism

Cluster shape from gitcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #59561, currently open in local store
- latest member update: 2026-04-28T10:53:11.915Z

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
