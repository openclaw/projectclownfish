---
repo: openclaw/openclaw
cluster_id: ghcrawl-156781-autonomous-smoke
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
  - "#67098"
candidates:
  - "#40808"
  - "#63864"
  - "#67098"
cluster_refs:
  - "#40808"
  - "#63864"
  - "#67098"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #67098 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156781 on 2026-04-26."
---

# GHCrawl Cluster 156781

Generated from local ghcrawl run cluster 156781 for `openclaw/openclaw`.

Display title:

> feat: add configurable concurrency for CommandLane.Nested

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #67098, currently open in local store
- latest member update: 2026-04-25T07:30:09.943Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #40808 feat: add concurrent execution support for sessions_send_concurrent tool
- #63864 feat: configurable session lane concurrency
- #67098 feat: add configurable concurrency for CommandLane.Nested
