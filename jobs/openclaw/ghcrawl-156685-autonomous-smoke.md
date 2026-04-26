---
repo: openclaw/openclaw
cluster_id: ghcrawl-156685-autonomous-smoke
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
  - "#57491"
candidates:
  - "#57491"
  - "#60845"
  - "#62777"
  - "#67196"
  - "#67602"
cluster_refs:
  - "#57491"
  - "#60845"
  - "#62777"
  - "#67196"
  - "#67602"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57491 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156685 on 2026-04-26."
---

# GHCrawl Cluster 156685

Generated from local ghcrawl run cluster 156685 for `openclaw/openclaw`.

Display title:

> Cron delivery fails with 'Unknown Channel' when multiple channels configured

Cluster shape from ghcrawl:

- total members: 5
- issues: 5
- pull requests: 0
- open candidates in local store: 5
- representative: #57491, currently open in local store
- latest member update: 2026-04-24T18:56:26.185Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57491 Cron delivery fails with 'Unknown Channel' when multiple channels configured
- #60845 cron: failureAlert never fires — all error jobs show deliveryStatus 'not-requested'
- #62777 cron: failureAlert never fires + channel: prefix stripped in delivery path
- #67196 Cron `delivery.announce` posts 3 messages instead of 1 after v2026.4.5 upgrade
- #67602 [Bug]: Cron announce delivery fails with 'Unsupported channel: <channel-id>' for Slack channels
