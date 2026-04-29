---
repo: openclaw/openclaw
cluster_id: gitcrawl-1393-dedupe-only-20260429-remote
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
  - "#70897"
candidates:
  - "#53775"
  - "#53809"
cluster_refs:
  - "#53775"
  - "#53809"
  - "#70897"
  - "#70917"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #70897 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1393 on 2026-04-29."
---

# Gitcrawl Cluster 1393

Generated from local gitcrawl run cluster 1393 for `openclaw/openclaw`.

Display title:

> fix: agents delete JSON output and shared workspace safety

Cluster shape from gitcrawl:

- total members: 4
- issues: 0
- pull requests: 4
- open candidates in local store: 2
- representative: #70897, currently closed in local store
- latest member update: 2026-04-25T08:47:52.681Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #70897 fix: agents delete JSON output and shared workspace safety
- #70917 fix(agents): suppress Config overwrite log in agents delete --json mode

Open candidates:

- #53775 fix(agents): protect shared workspace from accidental deletion in agents delete --force
- #53809 fix(agents): protect shared workspace from deletion
