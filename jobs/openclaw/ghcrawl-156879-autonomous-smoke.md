---
repo: openclaw/openclaw
cluster_id: ghcrawl-156879-autonomous-smoke
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
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#56720"
candidates:
  - "#56720"
  - "#56726"
  - "#56736"
cluster_refs:
  - "#56720"
  - "#56726"
  - "#56736"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #56720 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156879 on 2026-04-26."
---

# GHCrawl Cluster 156879

Generated from local ghcrawl run cluster 156879 for `openclaw/openclaw`.

Display title:

> fix(hooks): restore --exclude-labels in Gmail watcher args

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #56720, currently open in local store
- latest member update: 2026-04-24T18:56:26.496Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56720 fix(hooks): restore --exclude-labels in Gmail watcher args
- #56726 fix: restore --exclude-labels SPAM,TRASH,DRAFT,SENT in Gmail watcher
- #56736 fix(gmail): restore --exclude-labels SPAM,TRASH,DRAFT,SENT in buildGogWatchServeArgs
