---
repo: openclaw/openclaw
cluster_id: ghcrawl-156631-autonomous-smoke
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
  - "#63854"
candidates:
  - "#53698"
  - "#55138"
  - "#63854"
  - "#63925"
  - "#65215"
  - "#66965"
  - "#70608"
cluster_refs:
  - "#53698"
  - "#55138"
  - "#63854"
  - "#63925"
  - "#65215"
  - "#66965"
  - "#70608"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #63854 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156631 on 2026-04-26."
---

# GHCrawl Cluster 156631

Generated from local ghcrawl run cluster 156631 for `openclaw/openclaw`.

Display title:

> WhatsApp watchdog messageTimeoutMs should be configurable (30min hardcoded timeout causes cascading 499/408 errors)

Cluster shape from ghcrawl:

- total members: 7
- issues: 7
- pull requests: 0
- open candidates in local store: 7
- representative: #63854, currently open in local store
- latest member update: 2026-04-24T18:56:29.609Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #53698 [Bug]: WhatsApp watchdog MESSAGE_TIMEOUT_MS (30min) not configurable — causes reconnect loops on low-traffic setups
- #55138 feat: Expose WhatsApp message watchdog timeout as config option
- #63854 WhatsApp watchdog messageTimeoutMs should be configurable (30min hardcoded timeout causes cascading 499/408 errors)
- #63925 [Feature]: Expose WhatsApp web message watchdog timeout as config
- #65215 WhatsApp web channel restarts every 30m because hidden messageTimeoutMs watchdog is not exposed in config
- #66965 WhatsApp: expose messageTimeoutMs as config option to control idle reconnect cycle
- #70608 [Feature]: WhatsApp web idle watchdog should be configurable (30m no-message reconnect)
