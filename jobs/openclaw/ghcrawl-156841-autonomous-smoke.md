---
repo: openclaw/openclaw
cluster_id: ghcrawl-156841-autonomous-smoke
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
  - "#49569"
candidates:
  - "#49569"
  - "#67782"
  - "#69165"
cluster_refs:
  - "#49569"
  - "#67782"
  - "#69165"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #49569 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156841 on 2026-04-26."
---

# GHCrawl Cluster 156841

Generated from local ghcrawl run cluster 156841 for `openclaw/openclaw`.

Display title:

> fix(telegram): retry setMyCommands on 429 rate-limit with retry_after backoff

Cluster shape from ghcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #49569, currently open in local store
- latest member update: 2026-04-24T18:56:22.371Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49569 fix(telegram): retry setMyCommands on 429 rate-limit with retry_after backoff
- #67782 fix(telegram): skip delete before non-empty command sync
- #69165 [Feature]: Outbound Telegram send queue with per-chat rate limiting and retry_after-aware backoff
