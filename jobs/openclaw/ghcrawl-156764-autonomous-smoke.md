---
repo: openclaw/openclaw
cluster_id: ghcrawl-156764-autonomous-smoke
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
  - "#38075"
candidates:
  - "#38075"
  - "#40716"
  - "#58300"
cluster_refs:
  - "#38075"
  - "#40716"
  - "#58300"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #38075 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156764 on 2026-04-26."
---

# GHCrawl Cluster 156764

Generated from local ghcrawl run cluster 156764 for `openclaw/openclaw`.

Display title:

> fix(gateway): filter delivery-mirror entries from chat.history

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #38075, currently open in local store
- latest member update: 2026-04-25T07:30:10.040Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38075 fix(gateway): filter delivery-mirror entries from chat.history
- #40716 fix: filter delivery-mirror from all consumer paths (LLM context, webchat, API)
- #58300 fix: filter heartbeat user prompts from chat.history
