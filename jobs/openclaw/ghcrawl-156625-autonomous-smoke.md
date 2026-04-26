---
repo: openclaw/openclaw
cluster_id: ghcrawl-156625-autonomous-smoke
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
  - "#48360"
candidates:
  - "#42019"
  - "#48360"
  - "#49180"
  - "#49758"
  - "#51016"
  - "#51357"
  - "#64400"
cluster_refs:
  - "#42019"
  - "#48360"
  - "#49180"
  - "#49758"
  - "#51016"
  - "#51357"
  - "#64400"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #48360 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156625 on 2026-04-26."
---

# GHCrawl Cluster 156625

Generated from local ghcrawl run cluster 156625 for `openclaw/openclaw`.

Display title:

> gateway probe false-negative timeout/close on loopback while gateway is healthy

Cluster shape from ghcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- representative: #48360, currently open in local store
- latest member update: 2026-04-24T18:56:32.124Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42019 gateway probe can false-negative on cold start with RPC timeout despite healthy recovery
- #48360 gateway probe false-negative timeout/close on loopback while gateway is healthy
- #49180 CLI status/gateway probe shows false 'unreachable (missing scope: operator.read)' in v2026.3.13
- #49758 Bug: `status` / `gateway probe` / `health --json` misreport local gateway + Telegram state on 2026.3.13
- #51016 [Bug]: openclaw status reports healthy local gateway as unreachable
- #51357 [Bug]: CLI `probe` command consistently times out (code=1006) despite perfectly healthy gateway (False Negative)
- #64400 Fix: CLI `doctor` and `status` trigger false restarts due to hardcoded 3000ms loopback timeouts
