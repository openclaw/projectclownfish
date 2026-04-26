---
repo: openclaw/openclaw
cluster_id: ghcrawl-156671-autonomous-smoke
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
  - "#46869"
candidates:
  - "#46869"
  - "#52487"
  - "#63651"
  - "#68853"
  - "#69056"
cluster_refs:
  - "#46869"
  - "#52487"
  - "#63651"
  - "#68853"
  - "#69056"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #46869 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156671 on 2026-04-26."
---

# GHCrawl Cluster 156671

Generated from local ghcrawl run cluster 156671 for `openclaw/openclaw`.

Display title:

> fix(windows): use detached restart script for scheduled task restart

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #46869, currently open in local store
- latest member update: 2026-04-25T09:37:49.859Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46869 fix(windows): use detached restart script for scheduled task restart
- #52487 fix(windows): prevent restart race from duplicate schtasks /Run
- #63651 fix: remove duplicate restart message on Windows (schtasks)
- #68853 fix(gateway): SIGUSR1 restart fast path that doesn't break Windows schtasks
- #69056 fix(gateway): handle SIGUSR1 gracefully on Windows
