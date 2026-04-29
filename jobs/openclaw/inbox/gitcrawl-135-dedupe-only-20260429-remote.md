---
repo: openclaw/openclaw
cluster_id: gitcrawl-135-dedupe-only-20260429-remote
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
  - "#50615"
candidates:
  - "#56768"
cluster_refs:
  - "#50614"
  - "#50615"
  - "#56768"
  - "#70029"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #50615 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 135 on 2026-04-29."
---

# Gitcrawl Cluster 135

Generated from local gitcrawl run cluster 135 for `openclaw/openclaw`.

Display title:

> fix: Dashboard command logs full gateway bearer URLs into...

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- representative: #50615, currently closed in local store
- latest member update: 2026-04-25T08:47:51.860Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50614 [Bug]: Dashboard command logs full gateway bearer URLs into read-scoped logs
- #50615 fix: Dashboard command logs full gateway bearer URLs into...
- #70029 fix(dashboard): never log gateway bearer token in console-captured output

Open candidates:

- #56768 fix(cli): include dashboard token URL in gateway status
