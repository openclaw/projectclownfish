---
repo: openclaw/openclaw
cluster_id: ghcrawl-156727-autonomous-smoke
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
  - "#57298"
candidates:
  - "#50102"
  - "#54962"
  - "#57298"
  - "#66912"
cluster_refs:
  - "#50102"
  - "#54962"
  - "#57298"
  - "#66912"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57298 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156727 on 2026-04-26."
---

# GHCrawl Cluster 156727

Generated from local ghcrawl run cluster 156727 for `openclaw/openclaw`.

Display title:

> fix(telegram): skip bot-authored media in reply resolution

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #57298, currently open in local store
- latest member update: 2026-04-24T18:56:29.095Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #50102 fix: prevent ghost media attachments from debounce buffer flatMap
- #54962 fix(telegram): add 'callback_data:' prefix to inline button callbacks
- #57298 fix(telegram): skip bot-authored media in reply resolution
- #66912 fix(telegram): restore self-authored reply-media guard
