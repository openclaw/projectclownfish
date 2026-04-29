---
repo: openclaw/openclaw
cluster_id: gitcrawl-2758-dedupe-only-20260429-remote
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
  - "#41437"
candidates:
  - "#52662"
  - "#64383"
cluster_refs:
  - "#41437"
  - "#43317"
  - "#43863"
  - "#52662"
  - "#64383"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41437 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2758 on 2026-04-29."
---

# Gitcrawl Cluster 2758

Generated from local gitcrawl run cluster 2758 for `openclaw/openclaw`.

Display title:

> feat(sandbox): pluggable ISandboxProvider — 3-tier isolation with browser automation (Docker/gVisor/Firecracker)

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 2
- representative: #41437, currently closed in local store
- latest member update: 2026-04-28T22:51:07.369683487Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41437 feat(sandbox): pluggable ISandboxProvider — 3-tier isolation with browser automation (Docker/gVisor/Firecracker)
- #43317 feat(sandbox): pluggable provider interface + Docker/gVisor backends
- #43863 feat(sandbox): VM runner Go service + gRPC client + Firecracker provider

Open candidates:

- #52662 [Feature]: Browser sandbox should support non-Docker backends (external CDP/noVNC endpoint)
- #64383 [Feature]: Evaluate simplifying the sandbox browser CDP path
