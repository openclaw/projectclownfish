---
repo: openclaw/openclaw
cluster_id: gitcrawl-7910-dedupe-only-20260429-remote
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
  - "#51946"
candidates:
  - "#51946"
  - "#58550"
cluster_refs:
  - "#38297"
  - "#51946"
  - "#58550"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51946 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 7910 on 2026-04-29."
---

# Gitcrawl Cluster 7910

Generated from local gitcrawl run cluster 7910 for `openclaw/openclaw`.

Display title:

> feat(sessions): add directory-backed session store

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #51946, currently open in local store
- latest member update: 2026-04-27T22:51:34.867391952Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38297 feat: write-behind session store with optional filesystem lock bypass

Open candidates:

- #51946 feat(sessions): add directory-backed session store
- #58550 feat(sessions): SQLite-backed two-tier session store — fixes 140%+ CPU at scale
