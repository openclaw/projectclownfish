---
repo: openclaw/openclaw
cluster_id: gitcrawl-14102-dedupe-only-20260429-remote
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
  - "#62110"
candidates:
  - "#62110"
cluster_refs:
  - "#62104"
  - "#62110"
  - "#62527"
  - "#65006"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62110 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14102 on 2026-04-29."
---

# Gitcrawl Cluster 14102

Generated from local gitcrawl run cluster 14102 for `openclaw/openclaw`.

Display title:

> feat(workspace): add skipOptionalBootstrapFiles config option

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 1
- representative: #62110, currently open in local store
- latest member update: 2026-04-25T08:47:52.467Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #62104 feat(workspace): add skipOptionalBootstrapFiles config option
- #62527 fix(cron): add jobId to payload.model warning log emission
- #65006 feat(agents): add contextInjection 'never' to disable bootstrap file injection

Open candidates:

- #62110 feat(workspace): add skipOptionalBootstrapFiles config option
