---
repo: openclaw/openclaw
cluster_id: gitcrawl-2543-dedupe-only-20260429-remote
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
  - "#58942"
candidates:
  - "#55480"
  - "#58942"
  - "#58995"
  - "#59068"
cluster_refs:
  - "#55480"
  - "#58942"
  - "#58995"
  - "#59068"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58942 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2543 on 2026-04-29."
---

# Gitcrawl Cluster 2543

Generated from local gitcrawl run cluster 2543 for `openclaw/openclaw`.

Display title:

> fix: preserve non-Latin characters in normalizeHyphenSlug

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 4
- representative: #58942, currently open in local store
- latest member update: 2026-04-28T22:51:07.308777484Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55480 fix(discord): preserve non-ASCII channel names in session display names
- #58942 fix: preserve non-Latin characters in normalizeHyphenSlug
- #58995 fix: preserve non-Latin characters in normalizeHyphenSlug and normalizeAtHashSlug
- #59068 fix(shared): preserve unicode group labels in slug normalization
