---
repo: openclaw/openclaw
cluster_id: ghcrawl-156715-autonomous-smoke
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
  - "#59752"
candidates:
  - "#44391"
  - "#59752"
  - "#59787"
  - "#59795"
cluster_refs:
  - "#44391"
  - "#59752"
  - "#59787"
  - "#59795"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #59752 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156715 on 2026-04-26."
---

# GHCrawl Cluster 156715

Generated from local ghcrawl run cluster 156715 for `openclaw/openclaw`.

Display title:

> fix: use text-level dedup instead of blanket suppression for same-target messaging tool replies

Cluster shape from ghcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #59752, currently open in local store
- latest member update: 2026-04-24T18:56:28.539Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44391 fix: guard followup-runner dedup behind cross-target check
- #59752 fix: use text-level dedup instead of blanket suppression for same-target messaging tool replies
- #59787 fix: only suppress text reply when messaging tool sent text (not media-only)
- #59795 fix(messaging): skip reply suppression for media-only messaging tool sends
