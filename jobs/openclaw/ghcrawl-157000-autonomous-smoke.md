---
repo: openclaw/openclaw
cluster_id: ghcrawl-157000-autonomous-smoke
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
  - "#39879"
candidates:
  - "#39879"
  - "#50944"
cluster_refs:
  - "#39879"
  - "#50944"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #39879 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 157000 on 2026-04-26."
---

# GHCrawl Cluster 157000

Generated from local ghcrawl run cluster 157000 for `openclaw/openclaw`.

Display title:

> [Feature] WhatsApp outbound mentions (mentionedJids) support

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #39879, currently open in local store
- latest member update: 2026-04-24T18:56:31.663Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39879 [Feature] WhatsApp outbound mentions (mentionedJids) support
- #50944 WhatsApp outbound: missing quote-reply and @mention support
