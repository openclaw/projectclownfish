---
repo: openclaw/openclaw
cluster_id: gitcrawl-2318-dedupe-only-20260429-remote
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
  - "#48008"
candidates:
  - "#29552"
cluster_refs:
  - "#29552"
  - "#45507"
  - "#48008"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48008 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2318 on 2026-04-29."
---

# Gitcrawl Cluster 2318

Generated from local gitcrawl run cluster 2318 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway Token Mismatch & Port Conflict in OpenClaw 2026.3.13 (Breaking Change)

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- representative: #48008, currently closed in local store
- latest member update: 2026-04-28T04:44:23.846574609Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45507 Bug: 4 compounding issues causing gateway outage after config patch (token mismatch, start/stop lifecycle, log dir, missing api field)
- #48008 [Bug]: Gateway Token Mismatch & Port Conflict in OpenClaw 2026.3.13 (Breaking Change)

Open candidates:

- #29552 [Bug]: Version mismatch
