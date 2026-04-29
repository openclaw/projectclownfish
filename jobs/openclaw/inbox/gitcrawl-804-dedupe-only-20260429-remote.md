---
repo: openclaw/openclaw
cluster_id: gitcrawl-804-dedupe-only-20260429-remote
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
  - "#66614"
candidates:
  - "#42106"
  - "#66344"
  - "#66605"
  - "#66614"
cluster_refs:
  - "#42106"
  - "#61916"
  - "#66344"
  - "#66605"
  - "#66614"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #66614 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 804 on 2026-04-29."
---

# Gitcrawl Cluster 804

Generated from local gitcrawl run cluster 804 for `openclaw/openclaw`.

Display title:

> [Bug]: Block streaming splits markdown tables across messages on all streaming channels

Cluster shape from gitcrawl:

- total members: 5
- issues: 4
- pull requests: 1
- open candidates in local store: 4
- representative: #66614, currently open in local store
- latest member update: 2026-04-28T21:55:43.780948176Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #61916 [Bug]: Streaming text diverges from JSONL transcript — table separator rows truncated

Open candidates:

- #42106 [Bug]: Block streaming can drop paragraph separators across streamed updates
- #66344 feat(chunker): add table protection to streaming block chunker
- #66605 test: add integration test for table-aware block streaming chunking
- #66614 [Bug]: Block streaming splits markdown tables across messages on all streaming channels
