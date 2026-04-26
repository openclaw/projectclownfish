---
repo: openclaw/openclaw
cluster_id: ghcrawl-156670-autonomous-smoke
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
  - "#45222"
candidates:
  - "#45222"
  - "#51679"
  - "#52336"
  - "#61554"
  - "#64201"
cluster_refs:
  - "#45222"
  - "#51679"
  - "#52336"
  - "#61554"
  - "#64201"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45222 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156670 on 2026-04-26."
---

# GHCrawl Cluster 156670

Generated from local ghcrawl run cluster 156670 for `openclaw/openclaw`.

Display title:

> [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789)

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #45222, currently open in local store
- latest member update: 2026-04-26T00:46:52.121Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45222 [Bug]: Intermittent local gateway websocket handshake failures on loopback (ws://127.0.0.1:18789)
- #51679 OpenClaw 2026.3.13: local loopback gateway WS handshake times out / closes before connect for some CLI RPCs
- #52336 Bug: browser automation intermittently fails with gateway closed (1000 normal closure)
- #61554 [Bug]: WebSocket handshake timeout when executing `openclaw cron list`
- #64201 [Bug]: OpenClaw: Crash loop on plugin config reload (ECONNREFUSED on loopback port 18789)
