---
repo: openclaw/openclaw
cluster_id: gitcrawl-14097-dedupe-only-20260429-remote
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
  - "#56582"
candidates:
  - "#56394"
cluster_refs:
  - "#56394"
  - "#56466"
  - "#56579"
  - "#56582"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #56582 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 14097 on 2026-04-29."
---

# Gitcrawl Cluster 14097

Generated from local gitcrawl run cluster 14097 for `openclaw/openclaw`.

Display title:

> fix(clawhub): reject malformed trailing-at plugin specs

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- representative: #56582, currently closed in local store
- latest member update: 2026-04-28T21:29:55.451103929Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #56466 fix: handle wildcard (*) in plugin API version range checks
- #56579 [Bug]: ClawHub parser accepts malformed specs with trailing @ and returns package_not_found
- #56582 fix(clawhub): reject malformed trailing-at plugin specs

Open candidates:

- #56394 fix(clawhub): append login hint to 429 rate-limit errors when unauthenticated (#56368)
