---
repo: openclaw/openclaw
cluster_id: gitcrawl-2719-dedupe-only-20260429-remote
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
  - "#40464"
candidates:
  - "#40464"
  - "#43244"
  - "#44997"
cluster_refs:
  - "#40464"
  - "#43244"
  - "#44997"
  - "#55706"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #40464 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2719 on 2026-04-29."
---

# Gitcrawl Cluster 2719

Generated from local gitcrawl run cluster 2719 for `openclaw/openclaw`.

Display title:

> fix(config): serialize async config writes to prevent data loss on startup

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 3
- representative: #40464, currently open in local store
- latest member update: 2026-04-28T18:04:42.851299508Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #55706 fix(config): skip no-op config writes to prevent phantom restart loop

Open candidates:

- #40464 fix(config): serialize async config writes to prevent data loss on startup
- #43244 fix: serialize gateway config mutations
- #44997 fix(config): serialize concurrent writeConfigFile calls with a file lock
