---
repo: openclaw/openclaw
cluster_id: gitcrawl-2059-dedupe-only-20260429-remote
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
  - "#51024"
candidates:
  - "#42482"
  - "#43816"
  - "#51024"
  - "#52365"
  - "#68112"
  - "#68645"
cluster_refs:
  - "#42085"
  - "#42482"
  - "#43816"
  - "#51024"
  - "#52365"
  - "#68112"
  - "#68645"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51024 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2059 on 2026-04-29."
---

# Gitcrawl Cluster 2059

Generated from local gitcrawl run cluster 2059 for `openclaw/openclaw`.

Display title:

> fix(cron): clear stale running markers using per-job timeouts

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 6
- representative: #51024, currently open in local store
- latest member update: 2026-04-28T22:51:07.393933569Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42085 fix(cron): clear stale runningAtMs in run() before already-running check (#41979)

Open candidates:

- #42482 fix(cron): per-attempt AbortControllers and deferred execution timeout
- #43816 fix(cron): use per-job timeout for stuck lock threshold
- #51024 fix(cron): clear stale running markers using per-job timeouts
- #52365 fix(cron): stop fallback attempts when cron budget is exhausted
- #68112 fix(cron): prevent scheduler death when startup catch-up fails
- #68645 fix(cron): close task ledger on timeout + add runTimeoutSeconds wall-clock kill
