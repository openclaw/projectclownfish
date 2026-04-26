---
repo: openclaw/openclaw
cluster_id: ghcrawl-156665-autonomous-smoke
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
  - "#42482"
candidates:
  - "#42482"
  - "#43816"
  - "#51024"
  - "#52365"
  - "#68645"
cluster_refs:
  - "#42482"
  - "#43816"
  - "#51024"
  - "#52365"
  - "#68645"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #42482 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156665 on 2026-04-26."
---

# GHCrawl Cluster 156665

Generated from local ghcrawl run cluster 156665 for `openclaw/openclaw`.

Display title:

> fix(cron): per-attempt AbortControllers and deferred execution timeout

Cluster shape from ghcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 5
- representative: #42482, currently open in local store
- latest member update: 2026-04-25T17:12:43.522Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42482 fix(cron): per-attempt AbortControllers and deferred execution timeout
- #43816 fix(cron): use per-job timeout for stuck lock threshold
- #51024 fix(cron): clear stale running markers using per-job timeouts
- #52365 fix(cron): stop fallback attempts when cron budget is exhausted
- #68645 fix(cron): close task ledger on timeout + add runTimeoutSeconds wall-clock kill
