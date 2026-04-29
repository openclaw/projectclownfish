---
repo: openclaw/openclaw
cluster_id: gitcrawl-238881-dedupe-only-20260429c
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#54380"
candidates:
  - "#44068"
  - "#54380"
  - "#73799"
cluster_refs:
  - "#44068"
  - "#54380"
  - "#73799"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54380 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238881 on 2026-04-29."
---

# Gitcrawl Cluster 238881

Generated from local gitcrawl run cluster 238881 for `openclaw/openclaw`.

Display title:

> fix(media): treat legacy .doc containers as binary

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #54380, currently open in local store
- latest member update: 2026-04-29T08:43:38.787Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #44068 fix(media-understanding): skip legacy Word docs from text extraction
- #54380 fix(media): treat legacy .doc containers as binary
- #73799 fix(media): treat legacy Word docs as binary attachments
