---
repo: openclaw/openclaw
cluster_id: ghcrawl-143815-autonomous-smoke
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
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#45835"
candidates:
  - "#49180"
  - "#49758"
  - "#50541"
  - "#50606"
  - "#50691"
  - "#51016"
  - "#51495"
cluster_refs:
  - "#45835"
  - "#45908"
  - "#46072"
  - "#46100"
  - "#46358"
  - "#46422"
  - "#46897"
  - "#47307"
  - "#47987"
  - "#48002"
  - "#48113"
  - "#48414"
  - "#48538"
  - "#49066"
  - "#49180"
  - "#49758"
  - "#50541"
  - "#50606"
  - "#50691"
  - "#51016"
  - "#51495"
  - "#52488"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #45835 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143815 on 2026-04-25."
---

# GHCrawl Cluster 143815

Generated from local ghcrawl run cluster 143815 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw status/probe shows missing scope: operator.read on local gateway after update to 2026.3.13

Cluster shape from ghcrawl:

- total members: 22
- issues: 22
- pull requests: 0
- open candidates in local store: 7
- representative: #45835, currently closed in local store
- latest member update: 2026-04-25T08:47:52.563Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #45835 [Bug]: openclaw status/probe shows missing scope: operator.read on local gateway after update to 2026.3.13
- #45908 [Bug]: "openclaw status" reports gateway as "unreachable" when probe lacks operator.read scope (cosmetic, gateway fully functional)
- #46072 Gateway/status probe warns missing operator.read after successful local update
- #46100 Bug: local loopback gateway diagnostics show contradictory unreachable/missing-scope results in 2026.3.13
- #46358 [Bug] Gateway returns "missing scope: operator.read" error in Control UI after upgrade to 2026.3.13
- #46422 [Bug]: still reproducing missing scope: operator.read on 2026.3.13 after full re-auth + token/device resets
- #46897 `openclaw status` shows "missing scope: operator.read" on macOS local loopback after 2026.3.13 update
- #47307 `openclaw status` shows "unreachable (missing scope: operator.read)" for working local gateway
- #47987 security audit --deep fails with missing scope: operator.read when probing gateway
- #48002 [Bug]: Regression in 2026.3.13: ACP bridge and CLI device flows fail after upgrade
- #48113 [Bug]: [Bug]: Gateway probe limited despite paired device + operator token (macOS, 2026.3.13)
- #48414 status / gateway probe report gateway unreachable while gateway status --json shows RPC ok
- #48538 [Bug]: openclaw status / openclaw gateway probe stay scope-limited on local paired CLI despite device token having operator.read
- #49066 gateway probe falsely reports missing operator.read while gateway call succeeds
- #52488 [Bug]: openclaw status --all and security audit --deep show "missing scope: operator.read" even after full operator pairing

Open candidates:

- #49180 CLI status/gateway probe shows false 'unreachable (missing scope: operator.read)' in v2026.3.13
- #49758 Bug: `status` / `gateway probe` / `health --json` misreport local gateway + Telegram state on 2026.3.13
- #50541 [Bug]: CLI cannot connect to Gateway (missing scope: operator.read) - Downgrade to 2026.3.11 works
- #50606 [Bug]: openclaw tui requests operator scopes without operator.read, causing scope-limited RPCs
- #50691 openclaw status reports missing operator.read while gateway is healthy; gateway probe times out on same loopback endpoint
- #51016 [Bug]: openclaw status reports healthy local gateway as unreachable
- #51495 [Bug]: CLI/operator RPC stays scope-empty on local auto-approved pairing (2026.3.13)
