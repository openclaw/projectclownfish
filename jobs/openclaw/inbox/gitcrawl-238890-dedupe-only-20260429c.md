---
repo: openclaw/openclaw
cluster_id: gitcrawl-238890-dedupe-only-20260429c
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
  - "#45912"
candidates:
  - "#45912"
  - "#59688"
  - "#63312"
cluster_refs:
  - "#45912"
  - "#59688"
  - "#63312"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45912 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238890 on 2026-04-29."
---

# Gitcrawl Cluster 238890

Generated from local gitcrawl run cluster 238890 for `openclaw/openclaw`.

Display title:

> fix(skills): allow symlinked skills in configured roots

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #45912, currently open in local store
- latest member update: 2026-04-29T08:43:37.098Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45912 fix(skills): allow symlinked skills in configured roots
- #59688 fix(skills): allow managed-skill symlinks pointing to other known skill roots
- #63312 Skills: allow symlinked skill dirs in user-managed .agents/skills/
