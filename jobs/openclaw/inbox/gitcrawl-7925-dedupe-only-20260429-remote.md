---
repo: openclaw/openclaw
cluster_id: gitcrawl-7925-dedupe-only-20260429-remote
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
  - "#51994"
candidates:
  - "#53478"
  - "#59364"
  - "#60999"
cluster_refs:
  - "#49881"
  - "#51994"
  - "#52101"
  - "#53478"
  - "#59364"
  - "#60999"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51994 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 7925 on 2026-04-29."
---

# Gitcrawl Cluster 7925

Generated from local gitcrawl run cluster 7925 for `openclaw/openclaw`.

Display title:

> fix(plugin-sdk): add compat to exported subpaths

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 3
- representative: #51994, currently closed in local store
- latest member update: 2026-04-27T22:51:36.360015418Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #49881 fix(feishu): export missing plugin-sdk/feishu subpath symbols
- #51994 fix(plugin-sdk): add compat to exported subpaths
- #52101 fix(plugin-sdk): export missing compat symbols for external plugins

Open candidates:

- #53478 fix(plugin-sdk): re-export normalizeAccountId and resolvePreferredOpenClawTmpDir
- #59364 fix(plugin-sdk): verify subpath dist exports match source re-exports
- #60999 Plugin SDK: export secret-input-runtime
