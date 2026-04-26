---
repo: openclaw/openclaw
cluster_id: ghcrawl-156591-autonomous-smoke
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
  - "#57111"
candidates:
  - "#38596"
  - "#57111"
  - "#57195"
  - "#57291"
  - "#57666"
  - "#57731"
  - "#59927"
  - "#61124"
  - "#70420"
cluster_refs:
  - "#38596"
  - "#57111"
  - "#57195"
  - "#57291"
  - "#57666"
  - "#57731"
  - "#59927"
  - "#61124"
  - "#70420"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57111 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156591 on 2026-04-26."
---

# GHCrawl Cluster 156591

Generated from local ghcrawl run cluster 156591 for `openclaw/openclaw`.

Display title:

> [Bug]: health-monitor stale-socket restart causes uncaught exception crash (Discord provider)

Cluster shape from ghcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #57111, currently open in local store
- latest member update: 2026-04-25T11:56:44.837Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38596 Discord: health monitor restart loop — post-connection zombie sessions evade circuit breakers
- #57111 [Bug]: health-monitor stale-socket restart causes uncaught exception crash (Discord provider)
- #57195 Discord gateway crashes on WS close code 1005 due to race condition in abort/reconnect path
- #57291 [Bug]: Gateway crashes with uncaught exception on Discord WebSocket stale-socket reconnect (code 1005)
- #57666 Discord SafeGatewayPlugin: uncaught error during health monitor teardown causes gateway crash-loop
- #57731 [Bug]: Discord plugin aggressively drops connections (stale-socket) causing delayed and duplicated messages
- #59927 Gateway crash: race condition causes maxAttempts=0 exception on disconnect
- #61124 Discord reconnect-exhausted error crashes gateway during health-monitor restart
- #70420 Discord health monitor reports restart but active sessions are not recreated, making session-based checks look disconnected
