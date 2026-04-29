---
repo: openclaw/openclaw
cluster_id: gitcrawl-14088-dedupe-only-20260429-remote
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
  - "#42331"
candidates:
  - "#42361"
cluster_refs:
  - "#39331"
  - "#42331"
  - "#42361"
  - "#51267"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42331 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14088 on 2026-04-29."
---

# Gitcrawl Cluster 14088

Generated from local gitcrawl run cluster 14088 for `openclaw/openclaw`.

Display title:

> fix(tool-results): add text field validation to isTextBlock type guard

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #42331, currently closed in local store
- latest member update: 2026-04-28T19:37:22.065796532Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #39331 fix: guard against malformed text blocks in context truncation
- #42331 fix(tool-results): add text field validation to isTextBlock type guard
- #51267 fix: guard against malformed text blocks in context truncation

Open candidates:

- #42361 fix(web-fetch): include URL and error reason in network failure messages
