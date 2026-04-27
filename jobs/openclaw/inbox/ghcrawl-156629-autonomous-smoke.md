---
repo: openclaw/openclaw
cluster_id: ghcrawl-156629-autonomous-smoke
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
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#63491"
candidates:
  - "#48766"
  - "#48771"
  - "#49865"
  - "#63491"
  - "#64476"
  - "#67416"
  - "#69056"
  - "#69057"
  - "#72660"
cluster_refs:
  - "#48766"
  - "#48771"
  - "#49865"
  - "#63491"
  - "#64476"
  - "#67416"
  - "#69056"
  - "#69057"
  - "#72660"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #63491 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156629 on 2026-04-26."
maintainer_calibration:
  - "2026-04-27 vincentkoc approved finalization for https://github.com/openclaw/openclaw/pull/72660."
  - "Windows restart health should inspect current main and src/daemon/schtasks* coverage before blocking on schtasks Last Result uncertainty."
  - "If main already covers Last Result, cite proof and continue; otherwise patch narrowly, rebase, review, run pnpm check:changed, and merge if clean."
  - "#69056 is related Windows signal handling evidence; keep it related unless live proof shows the same root cause."
---

# GHCrawl Cluster 156629

Generated from local ghcrawl run cluster 156629 for `openclaw/openclaw`.

Display title:

> [Bug]: Windows Scheduled Task gateway restart/health becomes inconsistent after ready

Cluster shape from ghcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- representative: #63491, currently open in local store
- latest member update: 2026-04-24T18:56:25.762Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48766 [Bug]: OpenClaw gateway restart
- #48771 bug(windows): gateway restart false-times out because schtasks parser misses 'Last Result' and health probe rejects 1008 policy closes
- #49865 Gateway stability issues on Windows: SecretRef resolution, RPC timeouts, cron failures
- #63491 [Bug]: Windows Scheduled Task gateway restart/health becomes inconsistent after ready
- #64476 [Bug]: Windows local gateway has partial RPC failures/timeouts on v2026.4.9 even when gateway process is running
- #67416 Gateway restart crashes instead of restarting on Windows
- #69056 fix(gateway): handle SIGUSR1 gracefully on Windows
- #69057 gateway restart fails on Windows with ERR_UNKNOWN_SIGNAL (SIGUSR1)
- #72660 fix(cli): tighten Windows restart policy-close health checks
