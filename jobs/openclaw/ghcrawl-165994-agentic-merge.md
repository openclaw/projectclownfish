---
repo: openclaw/openclaw
cluster_id: ghcrawl-165994-agentic-merge
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#43589"
candidates:
  - "#41655"
  - "#41858"
  - "#43056"
  - "#43589"
  - "#48500"
  - "#49125"
  - "#51733"
  - "#54927"
  - "#55495"
  - "#66617"
  - "#69663"
  - "#71497"
cluster_refs:
  - "#41655"
  - "#41858"
  - "#43056"
  - "#43589"
  - "#48500"
  - "#49125"
  - "#51733"
  - "#54927"
  - "#55495"
  - "#66617"
  - "#69663"
  - "#71497"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #43589 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 165994 on 2026-04-26."
---

# GHCrawl Cluster 165994

Generated from local ghcrawl run cluster 165994 for `openclaw/openclaw`.

Display title:

> fix: file watchers miss directories created after startup (chokidar glob)

Cluster shape from ghcrawl:

- total members: 12
- issues: 0
- pull requests: 12
- open candidates in local store: 12
- representative: #43589, currently open in local store
- latest member update: 2026-04-25T10:24:47.940Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41655 fix(gateway): limit chokidar watch depth to avoid fd exhaustion
- #41858 fix: add depth limits to chokidar watchers to prevent FD exhaustion
- #43056 fix(memory,skills): add depth limit to chokidar watchers to prevent FD exhaustion
- #43589 fix: file watchers miss directories created after startup (chokidar glob)
- #48500 Infra: fix stale skills snapshot after gateway restart
- #49125 Skills: refresh stale session snapshots after restart
- #51733 fix: watch nested repo-style skill roots
- #54927 Skills: stop using chokidar globs for refresh
- #55495 fix: initialize globalVersion to 1 so skills snapshot refreshes after gateway restart
- #66617 Skills: fix watcher so deleting a skill folder refreshes on macOS
- #69663 fix(skills): recurse into subdirectories when scanning skill root (#56915)
- #71497 fix(skills): refresh persisted snapshots after restart
