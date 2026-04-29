---
repo: openclaw/openclaw
cluster_id: gitcrawl-2345-dedupe-only-20260429-remote
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
  - "#52477"
candidates:
  - "#39739"
  - "#46520"
cluster_refs:
  - "#39739"
  - "#43596"
  - "#46520"
  - "#52477"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #52477 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2345 on 2026-04-29."
---

# Gitcrawl Cluster 2345

Generated from local gitcrawl run cluster 2345 for `openclaw/openclaw`.

Display title:

> chrome-extension:// origins in controlUi.allowedOrigins silently fail to match

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 2
- representative: #52477, currently closed in local store
- latest member update: 2026-04-28T22:51:07.555938686Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43596 Chrome Browser Relay extension rejected with 'origin not allowed' despite allowlisted chrome-extension origin
- #52477 chrome-extension:// origins in controlUi.allowedOrigins silently fail to match

Open candidates:

- #39739 gateway.controlUi.allowedOrigins: support scheme-level wildcards (e.g. chrome-extension://*)
- #46520 [Bug]: Origin validation fails for custom URL schemes (tauri://, electron://)
