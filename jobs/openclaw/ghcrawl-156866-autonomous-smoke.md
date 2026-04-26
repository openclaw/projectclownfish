---
repo: openclaw/openclaw
cluster_id: ghcrawl-156866-autonomous-smoke
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
  - "#59981"
candidates:
  - "#53186"
  - "#59758"
  - "#59981"
cluster_refs:
  - "#53186"
  - "#59758"
  - "#59981"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59981 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156866 on 2026-04-26."
---

# GHCrawl Cluster 156866

Generated from local ghcrawl run cluster 156866 for `openclaw/openclaw`.

Display title:

> [Bug]:Mattermost: DM replies thread despite replyToMode "off" (docs say DMs stay non-threaded)

Cluster shape from ghcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #59981, currently open in local store
- latest member update: 2026-04-24T18:56:24.418Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #53186 replyToMode: "off" and replyToMode: "first" have no effect on Mattermost DM replies — replies are always threaded
- #59758 Mattermost DM replies go to new Thread instead of main channel
- #59981 [Bug]:Mattermost: DM replies thread despite replyToMode "off" (docs say DMs stay non-threaded)
