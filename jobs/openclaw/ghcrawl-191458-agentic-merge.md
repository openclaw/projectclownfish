---
repo: openclaw/openclaw
cluster_id: ghcrawl-191458-agentic-merge
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
  - "#57291"
candidates:
  - "#38853"
  - "#57111"
  - "#57195"
  - "#57291"
  - "#57666"
  - "#57731"
  - "#58173"
  - "#59927"
  - "#61124"
  - "#64201"
cluster_refs:
  - "#38853"
  - "#57111"
  - "#57195"
  - "#57291"
  - "#57666"
  - "#57731"
  - "#58173"
  - "#59927"
  - "#61124"
  - "#64201"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #57291 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 191458 on 2026-04-26."
---

# GHCrawl Cluster 191458

Generated from local ghcrawl run cluster 191458 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway crashes with uncaught exception on Discord WebSocket stale-socket reconnect (code 1005)

Cluster shape from ghcrawl:

- total members: 10
- issues: 10
- pull requests: 0
- open candidates in local store: 10
- representative: #57291, currently open in local store
- latest member update: 2026-04-26T21:32:45.643Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38853 [Bug]: Discord channel reconnect loop triggers Cloudflare rate-limit ban (Error 1015)
- #57111 [Bug]: health-monitor stale-socket restart causes uncaught exception crash (Discord provider)
- #57195 Discord gateway crashes on WS close code 1005 due to race condition in abort/reconnect path
- #57291 [Bug]: Gateway crashes with uncaught exception on Discord WebSocket stale-socket reconnect (code 1005)
- #57666 Discord SafeGatewayPlugin: uncaught error during health monitor teardown causes gateway crash-loop
- #57731 [Bug]: Discord plugin aggressively drops connections (stale-socket) causing delayed and duplicated messages
- #58173 [Bug]: Discord bot tokens auto-reset due to excessive reconnects without backoff
- #59927 Gateway crash: race condition causes maxAttempts=0 exception on disconnect
- #61124 Discord reconnect-exhausted error crashes gateway during health-monitor restart
- #64201 [Bug]: OpenClaw: Crash loop on plugin config reload (ECONNREFUSED on loopback port 18789)
