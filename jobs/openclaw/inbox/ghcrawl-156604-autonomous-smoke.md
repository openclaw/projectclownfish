---
repo: openclaw/openclaw
cluster_id: ghcrawl-156604-autonomous-smoke
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
  - "#61273"
candidates:
  - "#55727"
  - "#58064"
  - "#58230"
  - "#60088"
  - "#60400"
  - "#60646"
  - "#61195"
  - "#61273"
  - "#61712"
cluster_refs:
  - "#55727"
  - "#58064"
  - "#58230"
  - "#60088"
  - "#60400"
  - "#60646"
  - "#61195"
  - "#61273"
  - "#61712"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "ghcrawl representative #61273 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156604 on 2026-04-26."
---

# GHCrawl Cluster 156604

Generated from local ghcrawl run cluster 156604 for `openclaw/openclaw`.

Display title:

> [Bug]: Telegram channel not initializing on 2026.4.2 (valid bot token, no telegram runtime logs)

Cluster shape from ghcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 9
- representative: #61273, currently open in local store
- latest member update: 2026-04-24T18:56:27.078Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55727 [Bug]:
- #58064 Discord/Telegram channels silently fail to initialize under LaunchAgent after restart
- #58230 Bug: gateway enters restart loop on Telegram provider startup in 2026.3.28
- #60088 [Bug]: Telegram Channel Stops Responding After First Message
- #60400 [Bug]: All channels silently fail to initialize on 2026.4.2 (Telegram confirmed)
- #60646 [Bug]: Channels (Telegram/WhatsApp) not loading in v2026.4.2 - empty table in status
- #61195 [Bug]: Telegram provider silently fails to start on fresh gateway boots in v2026.4.2
- #61273 [Bug]: Telegram channel not initializing on 2026.4.2 (valid bot token, no telegram runtime logs)
- #61712 Telegram polling fails to start after gateway restart (LaunchAgent)
