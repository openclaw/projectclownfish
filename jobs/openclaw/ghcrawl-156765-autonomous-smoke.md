---
repo: openclaw/openclaw
cluster_id: ghcrawl-156765-autonomous-smoke
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
  - "#38609"
candidates:
  - "#38609"
  - "#42908"
  - "#43953"
cluster_refs:
  - "#38609"
  - "#42908"
  - "#43953"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #38609 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156765 on 2026-04-26."
---

# GHCrawl Cluster 156765

Generated from local ghcrawl run cluster 156765 for `openclaw/openclaw`.

Display title:

> fix(feishu): fix card action context fields and chat_type detection

Cluster shape from ghcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #38609, currently open in local store
- latest member update: 2026-04-24T18:56:28.434Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38609 fix(feishu): fix card action context fields and chat_type detection
- #42908 feat(feishu): extract option, options, form_value from card action callbacks
- #43953 feat(feishu): pass through form_value, input_value, option(s) from card actions
