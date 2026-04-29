---
repo: openclaw/openclaw
cluster_id: gitcrawl-8195-dedupe-only-20260429-remote
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
  - "#63696"
candidates:
  - "#63696"
cluster_refs:
  - "#52903"
  - "#61228"
  - "#63696"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63696 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 8195 on 2026-04-29."
---

# Gitcrawl Cluster 8195

Generated from local gitcrawl run cluster 8195 for `openclaw/openclaw`.

Display title:

> fix(agents): suppress duplicate user persistence on fallback retries

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 1
- representative: #63696, currently open in local store
- latest member update: 2026-04-27T22:51:37.113137396Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #52903 fix(agents): deduplicate user messages from model-fallback retries
- #61228 fix(agents): suppress duplicate user persistence on fallback retries

Open candidates:

- #63696 fix(agents): suppress duplicate user persistence on fallback retries
