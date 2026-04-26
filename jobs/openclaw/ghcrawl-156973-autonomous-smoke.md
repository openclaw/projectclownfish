---
repo: openclaw/openclaw
cluster_id: ghcrawl-156973-autonomous-smoke
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
  - "#38597"
candidates:
  - "#38597"
  - "#38607"
cluster_refs:
  - "#38597"
  - "#38607"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #38597 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156973 on 2026-04-26."
---

# GHCrawl Cluster 156973

Generated from local ghcrawl run cluster 156973 for `openclaw/openclaw`.

Display title:

> CJK text splitting breaks mid-character at Discord 2000-char boundary

Cluster shape from ghcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #38597, currently open in local store
- latest member update: 2026-04-25T07:30:10.713Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38597 CJK text splitting breaks mid-character at Discord 2000-char boundary
- #38607 Discord: CJK text splits at wrong character boundaries when message exceeds 2000 chars
